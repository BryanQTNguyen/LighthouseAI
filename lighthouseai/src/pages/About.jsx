
import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 py-12 relative overflow-hidden">
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
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <div className="w-24 h-24 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6 lighthouse-glow">
              <div className="w-12 h-12 bg-yellow-400 rounded-sm transform rotate-45"></div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 lighthouse-text-glow mb-6">
            About Lighthouse
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Clearing the Fog on Your STEM Pathway
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-yellow-400 lighthouse-text-glow mb-6 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed text-center mb-6">
            Lighthouse exists to make STEM careers accessible through AI-driven guidance. 
            We believe every student deserves a clear path to their dreams, regardless of their background.
          </p>
          <p className="text-slate-300 leading-relaxed text-center">
            Instead of overwhelming students with uncertainty, we ask thoughtful questions about 
            their background, goals, and interests, then generate personalized roadmaps showing 
            exactly how to get there — step by step, milestone by milestone.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-yellow-400 lighthouse-text-glow mb-8 text-center">
            How Lighthouse Works
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center font-bold flex-shrink-0 lighthouse-glow">
                1
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-100 mb-2">Share Your Story</h4>
                <p className="text-slate-300">
                  Tell us about your current situation, interests, goals, and any constraints you're facing. 
                  Our questionnaire is designed to understand your unique circumstances.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center font-bold flex-shrink-0 lighthouse-glow">
                2
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-100 mb-2">AI Analysis</h4>
                <p className="text-slate-300">
                  Our AI processes your information and draws from a vast knowledge base of STEM pathways, 
                  opportunities, and best practices to create your personalized roadmap.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center font-bold flex-shrink-0 lighthouse-glow">
                3
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-100 mb-2">Your Roadmap</h4>
                <p className="text-slate-300">
                  Receive a detailed, step-by-step plan including courses to take, internships to pursue, 
                  scholarships to apply for, and activities to join — all tailored to your goals.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center font-bold flex-shrink-0 lighthouse-glow">
                4
              </div>
              <div>
                <h4 className="text-lg font-semibold text-slate-100 mb-2">Track Progress</h4>
                <p className="text-slate-300">
                  Mark milestones as complete, adjust your plan as needed, and celebrate your progress 
                  as you navigate toward your STEM future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
