import React, { useState } from "react";
import { StudentProfile, Roadmap } from "@/entities/all";
import { InvokeLLM } from "@/integrations/Core";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Loader2 } from "lucide-react";

import QuestionnaireStep from "../components/planner/QuestionnaireStep";
import RoadmapDisplay from "../components/planner/RoadmapDisplay";

export default function Planner() {
  const [currentStep, setCurrentStep] = useState(0);
  const [profileData, setProfileData] = useState({
    education_level: "",
    intended_major: "",
    career_goals: "",
    experience: "",
    motivation: "",
    constraints: {
      financial_needs: "",
      time_availability: ""
    },
  });
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedRoadmap, setGeneratedRoadmap] = useState(null);

  // Asking the users questions to guage what their pathway can be
  const questions = [
    {
      id: "education_level",
      title: "What's your current education level?",
      type: "select",
      options: [
        { value: "high_school", label: "High School Student" },
        { value: "community_college", label: "Community College Student" },
        { value: "undergraduate", label: "Undergraduate Student" },
        { value: "graduate", label: "Graduate Student" },
        { value: "working_professional", label: "Working Professional" }
      ]
    },
    {
      id: "intended_major",
      title: "What STEM field interests you most?",
      type: "text",
      placeholder: "e.g., Computer Science, Biology, Data Science, Engineering"
    },
    {
      id: "career_goals",
      title: `What do you want to accomplish in ${profileData.intended_major}?`,
      type: "textarea",
      placeholder: "Describe what you want to achieve - transfer to university, land an internship, pursue research, enter industry..."
    },
    {
      id: "experience",
      title: "What STEM-related experiences have you already had?",
      type: "textarea",
      placeholder: "e.g., Internships, Research, Portfolio projects"
    },
    {
      id: "motivation",
      title: "Why do you want to pursue STEM, and what excites you most about it?",
      type: "textarea",
      placeholder: "e.g., Bettering the world, Passion, Fun"
    },
    {
      id: "constraints",
      title: "Tell us about your constraints",
      type: "constraints",
      fields: [
        {
          id: "financial_needs",
          label: "Financial assistance needs",
          type: "select",
          options: [
            { value: "high", label: "High - Need significant aid" },
            { value: "medium", label: "Medium - Some aid helpful" },
            { value: "low", label: "Low - Minimal aid needed" }
          ]
        },
        {
          id: "time_availability",
          label: "Time commitment",
          type: "select",
          options: [
            { value: "full_time", label: "Full-time student" },
            { value: "part_time", label: "Part-time/working student" },
            { value: "limited", label: "Very limited time" }
          ]
        }
      ]
    },
  ];

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setProfileData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setProfileData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const generateRoadmap = async () => {
    setIsGenerating(true);
    
    try {
      // Save profile first
      const profile = await StudentProfile.create({
        ...profileData,
        completed: true
      });

      // Create AI prompt focused on big picture guidance
      const prompt = `Create a concise, high-level, strategic STEM roadmap for a student with the following profile:

Education Level: ${profileData.education_level}
Intended Major/Field: ${profileData.intended_major}
Career Goals: ${profileData.career_goals}
Experience: ${profileData.experience || "Not specified"}
Motivation: ${profileData.motivation || "Not specified"}
Financial Needs: ${profileData.constraints.financial_needs}
Time Availability: ${profileData.constraints.time_availability}

CRITICAL: The roadmap MUST END with the student achieving their stated goal: "${profileData.career_goals}"

IMPORTANT GUIDANCE FOR ROADMAP CREATION:
- Focus on BIG PICTURE strategic milestones, NOT specific courses.
- Milestone descriptions should be brief (1-2 sentences maximum).

AVOID:
- Specific course names (like "CS 101").
- Detailed curriculum requirements.

CREATE A CONCISE ROADMAP:
- 3-4 time periods (e.g., semesters, years, or phases).
- 2-3 strategic milestones per period.
- The FINAL PERIOD must include achieving their stated goal as the culminating milestone.

The final milestone should be something like:
- "Secure [specific type] internship position" 
- "Transfer to 4-year university in [major]"
- "Land entry-level position in [field]"
- Whatever matches their specific stated goal: "${profileData.career_goals}"

Respond with valid JSON in this exact format:
{
  "timeline": [
    {
      "period": "Phase 1: Foundation",
      "milestones": [
        {
          "title": "Build Core Foundation",
          "description": "Focus on fundamental concepts in your field and develop strong study habits.",
          "type": "course",
          "effort_level": "medium",
          "priority": "high",
          "resources": ["Academic advisors", "Study groups"]
        }
      ]
    }
  ]
}`;

      const aiResponse = await InvokeLLM({
        prompt: prompt,
        response_json_schema: {
          type: "object",
          properties: {
            timeline: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  period: { type: "string" },
                  milestones: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        title: { type: "string" },
                        description: { type: "string" },
                        type: { 
                          type: "string",
                          enum: ["course", "internship", "scholarship", "activity", "research", "networking"]
                        },
                        effort_level: {
                          type: "string",
                          enum: ["low", "medium", "high"]
                        },
                        priority: {
                          type: "string", 
                          enum: ["low", "medium", "high"]
                        },
                        resources: {
                          type: "array",
                          items: { type: "string" }
                        }
                      },
                      required: ["title", "description", "type", "effort_level", "priority"]
                    }
                  }
                },
                required: ["period", "milestones"]
              }
            }
          },
          required: ["timeline"]
        }
      });

      // Save roadmap with AI-generated timeline
      const roadmap = await Roadmap.create({
        student_profile_id: profile.id,
        timeline: aiResponse.timeline,
        generated_date: new Date().toISOString()
      });

      setGeneratedRoadmap(roadmap);
      setCurrentStep(questions.length); // Move to roadmap view

    } catch (error) {
      console.error("Error generating roadmap:", error);
      
      const errorMessage = error.message || error.toString();
      console.error("Full error details:", errorMessage);
      
      if (errorMessage.includes('500')) {
        alert("Our AI service is temporarily unavailable. Please try again in a few minutes.");
      } else if (errorMessage.includes('API') || errorMessage.includes('integration')) {
        alert("There was an issue with our AI service. Please check your inputs and try again.");
      } else {
        alert(`Failed to generate roadmap. Error: ${errorMessage.substring(0, 100)}... Please try again.`);
      }
    }
    
    setIsGenerating(false);
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRoadmap();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepValid = () => {
    const question = questions[currentStep];
    if (question.type === "constraints") {
      return question.fields.every(field => 
        profileData.constraints[field.id] && profileData.constraints[field.id] !== ""
      );
    }
    
    if (question.id.includes('.')) {
      const [parent, child] = question.id.split('.');
      const value = profileData[parent] && profileData[parent][child];
      return value && value.trim().length > 0;
    }
    
    const value = profileData[question.id];
    return value && value.trim().length > 0;
  };

  if (generatedRoadmap) {
    return <RoadmapDisplay roadmap={generatedRoadmap} />;
  }

  return (
    <div className="min-h-screen bg-slate-900 py-8 relative overflow-hidden">
      {/* Decorative starfield */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-2000" />
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-500" />
        <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-1500" />
        <div className="absolute bottom-60 right-16 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-3000" />
        <div className="absolute top-80 left-1/4 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-32 left-1/2 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-2500" />
        <div className="absolute top-24 left-2/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1200" />
        <div className="absolute bottom-80 right-1/4 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse delay-1800" />
        <div className="absolute top-1/4 left-3/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-1/4 right-3/4 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-900" />
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-2200" />
        <div className="absolute bottom-10 left-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-3500" />
        <div className="absolute top-10 right-1/2 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-400" />
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1100" />
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-2800" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-1600" />
        <div className="absolute bottom-2/3 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1900" />
        <div className="absolute top-[5%] left-[85%] w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-800" />
        <div className="absolute top-[90%] left-[15%] w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse delay-2300" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 lighthouse-text-glow">
              Build Your STEM Roadmap
            </h1>
            <div className="text-slate-400 text-sm">
              Step {currentStep + 1} of {questions.length}
            </div>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-yellow-400 h-2 rounded-full transition-all duration-500 lighthouse-glow"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 mb-8">
          <QuestionnaireStep
            question={questions[currentStep]}
            value={profileData}
            onChange={handleInputChange}
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          <Button
            onClick={nextStep}
            disabled={!isStepValid() || isGenerating}
            className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 lighthouse-glow"
          >
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating Your Roadmap...
              </>
            ) : currentStep === questions.length - 1 ? (
              <>
                Generate Roadmap
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            ) : (
              <>
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}