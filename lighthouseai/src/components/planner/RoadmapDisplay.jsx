
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Circle, 
  BookOpen, 
  Briefcase, 
  DollarSign, 
  Users, 
  FlaskConical, 
  Network,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const typeIcons = {
  course: BookOpen,
  internship: Briefcase,
  scholarship: DollarSign,
  activity: Users,
  research: FlaskConical,
  networking: Network
};

const typeColors = {
  course: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  internship: "bg-green-500/20 text-green-300 border-green-500/30",
  scholarship: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  activity: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  research: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  networking: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
};

const priorityColors = {
  high: "text-red-400",
  medium: "text-yellow-400",
  low: "text-green-400"
};

const effortColors = {
  high: "text-red-400",
  medium: "text-yellow-400", 
  low: "text-green-400"
};

export default function RoadmapDisplay({ roadmap }) {
  const [completedTasks, setCompletedTasks] = useState(new Set());

  const toggleTask = (periodIndex, milestoneIndex) => {
    const taskId = `${periodIndex}-${milestoneIndex}`;
    setCompletedTasks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      return newSet;
    });
  };

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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link to={createPageUrl("Planner")}>
              <Button variant="outline" size="icon" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-yellow-400 lighthouse-text-glow">
                Your STEM Roadmap
              </h1>
              <p className="text-slate-400 mt-2">
                Your personalized pathway to success — click milestones to mark as complete
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {roadmap.timeline.map((period, periodIndex) => (
            <Card key={periodIndex} className="bg-slate-800 border-slate-700 overflow-hidden">
              <CardHeader className="bg-slate-700/50 border-b border-slate-600">
                <CardTitle className="text-2xl text-yellow-400 lighthouse-text-glow">
                  {period.period}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {period.milestones.map((milestone, milestoneIndex) => {
                    const taskId = `${periodIndex}-${milestoneIndex}`;
                    const isCompleted = completedTasks.has(taskId);
                    const IconComponent = typeIcons[milestone.type] || Circle;

                    return (
                      <div
                        key={milestoneIndex}
                        className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                          isCompleted 
                            ? "bg-green-500/10 border-green-500/30" 
                            : "bg-slate-700/50 border-slate-600 hover:border-slate-500"
                        }`}
                        onClick={() => toggleTask(periodIndex, milestoneIndex)}
                      >
                        <div className="flex items-start gap-4">
                          <div className="mt-1 flex-shrink-0">
                            {isCompleted ? (
                              <CheckCircle2 className="w-6 h-6 text-green-400 lighthouse-glow" />
                            ) : (
                              <Circle className="w-6 h-6 text-slate-400" />
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <h3 className={`text-lg font-semibold ${
                                isCompleted ? "text-green-300 line-through" : "text-slate-100"
                              }`}>
                                {milestone.title}
                              </h3>
                              <Badge className={typeColors[milestone.type]}>
                                <IconComponent className="w-3 h-3 mr-1" />
                                {milestone.type}
                              </Badge>
                            </div>
                            
                            <p className={`text-slate-300 mb-3 ${
                              isCompleted ? "line-through opacity-60" : ""
                            }`}>
                              {milestone.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-4 text-sm">
                              <div className="flex items-center gap-1">
                                <span className="text-slate-400">Priority:</span>
                                <span className={`font-medium ${priorityColors[milestone.priority]}`}>
                                  {milestone.priority}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-slate-400">Effort:</span>
                                <span className={`font-medium ${effortColors[milestone.effort_level]}`}>
                                  {milestone.effort_level}
                                </span>
                              </div>
                            </div>
                            
                            {milestone.resources && milestone.resources.length > 0 && (
                              <div className="mt-3">
                                <span className="text-slate-400 text-sm">Resources:</span>
                                <div className="mt-1 space-y-1">
                                  {milestone.resources.map((resource, idx) => (
                                    <div key={idx} className="text-sm text-blue-300">
                                      • {resource}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-slate-400">
            Need to adjust your plan? Generate a new roadmap anytime.
          </p>
          <Link to={createPageUrl("Planner")}>
            <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 lighthouse-glow">
              Create New Roadmap
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
