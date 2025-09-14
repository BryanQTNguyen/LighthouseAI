import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Users, Brain, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="bg-slate-900 text-slate-100 overflow-hidden">
      {/* Hero Section */}
      <header
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
        aria-labelledby="hero-heading">

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

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Lighthouse Illustration */}
          <figure className="mb-12 h-64 flex justify-center items-end" aria-hidden="true">
            <div className="relative flex flex-col items-center">
              {/* Light Glow (Tailwind-safe radial) */}
              <div className="absolute top-14 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full animate-pulse lighthouse-glow bg-[radial-gradient(circle,rgba(250,204,21,0.5)_0%,rgba(250,204,21,0.2)_40%,transparent_70%)]" />
              {/* Roof */}
              <div
                className="w-0 h-0 border-l-[2rem] border-l-transparent border-r-[2rem] border-r-transparent border-b-[2.5rem] border-b-slate-800 z-10"
                role="presentation" />

              {/* Lantern Room */}
              <div className="w-12 h-10 bg-yellow-400/90 border-x-4 border-slate-800 flex justify-around items-center z-10">
                <div className="w-1 h-full bg-slate-800/70" />
                <div className="w-1 h-full bg-slate-800/70" />
              </div>
              {/* Gallery/Walkway */}
              <div className="w-20 h-3 bg-slate-700 z-10" />
              <div className="w-16 h-3 bg-slate-600 z-10" />
              {/* Tower */}
              <div className="w-14 h-32 bg-slate-500 flex flex-col justify-around items-center py-4 z-10">
                <div className="w-full h-6 bg-slate-800" />
                <div className="w-full h-6 bg-slate-800" />
              </div>
              {/* Base */}
              <div className="w-20 h-4 bg-slate-700 z-10" />
            </div>
          </figure>

          {/* Hero Content */}
          <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 lighthouse-text-glow">
            <span className="text-yellow-400">Lighthouse</span>
            <br />
            <span className="text-slate-200">AI-Powered STEM Planner</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed lighthouse-text-glow">
            Clearing the Fog on Your STEM Pathway
          </p>

          <p className="text-md md:text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            Answer a few questions, and Lighthouse AI will chart your personalized path into STEM. From courses to internships,
            scholarships to research opportunities — we’ll guide you to shore.
          </p>

          <Link to={createPageUrl("Planner")} aria-label="Build my roadmap with Lighthouse">
            <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 text-lg px-8 py-4 lighthouse-glow font-semibold transition-all duration-300 hover:scale-105">
              Build My Roadmap
              <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </header>

      <main>
        {/* Problem Statement Section */}
        <section className="relative py-20 bg-slate-800/50" aria-labelledby="problem-heading">
          {/* Decorative stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-10 left-16 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-1300" />
            <div className="absolute top-32 right-12 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-2100" />
            <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-600" />
            <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-1800" />
            <div className="absolute bottom-40 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-2700" />
            <div className="absolute top-20 left-1/2 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-1000" />
            <div className="absolute bottom-10 right-2/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-3200" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 id="problem-heading" className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-400 lighthouse-text-glow">The Challenge

              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-slate-300 mb-8 text-xl leading-relaxed">
                  STEM education and careers can feel overwhelming, with unclear guidance, scattered information, and difficulty
                  finding opportunities. These challenges are especially tough for underrepresented students who often lack access
                  to networks and mentorship.
                </p>
                <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed lighthouse-text-glow">
                Most students don’t even start their STEM education!</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-slate-500 rounded-full" />
                </div>
                <h3 className="text-yellow-400 mb-2 text-lg font-semibold">Lack of Clear Path</h3>
                <p className="text-slate-400 text-sm">
                  Students often don’t know where to start or what steps to take next in their STEM journey.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-slate-500 rounded-full" />
                </div>
                <h3 className="text-yellow-400 mb-2 text-lg font-semibold">Information Overload</h3>
                <p className="text-slate-400 text-sm">
                  Too much unorganized information makes it hard to find relevant courses, scholarships, and opportunities.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-slate-500 rounded-full" />
                </div>
                <h3 className="text-yellow-400 mb-2 text-lg font-semibold">Equity Gap</h3>
                <p className="text-slate-400 text-sm">
                  Underrepresented students face additional barriers, lacking access to crucial resources and networks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 bg-slate-800" aria-labelledby="features-heading">
          {/* Decorative stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-16 left-20 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-900" />
            <div className="absolute top-40 right-16 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-1700" />
            <div className="absolute bottom-32 left-12 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-2400" />
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-800" />
            <div className="absolute bottom-16 right-1/2 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-1400" />
            <div className="absolute top-24 left-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-2900" />
            <div className="absolute bottom-48 left-3/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-1500" />
            <div className="absolute top-2/3 right-20 w-1.5 h-1.5 bg-yellow-200 rounded-full animate-pulse delay-3100" />
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-center mb-16 text-yellow-400 lighthouse-text-glow">
              Why Choose Lighthouse?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-xl border border-slate-600 hover:border-yellow-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-6 lighthouse-glow">
                  <Brain className="w-6 h-6 text-yellow-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">AI-Powered Guidance</h3>
                <p className="text-slate-300 leading-relaxed">
                  Our AI analyzes your background, goals, and constraints to create a personalized STEM roadmap tailored to you.
                </p>
              </div>

              <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-xl border border-slate-600 hover:border-yellow-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-6 lighthouse-glow">
                  <Users className="w-6 h-6 text-yellow-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Inclusive Support</h3>
                <p className="text-slate-300 leading-relaxed">
                  Designed to help underrepresented students break down barriers and build confidence in their academic journey.
                </p>
              </div>

              <div className="bg-slate-700/50 backdrop-blur-sm p-8 rounded-xl border border-slate-600 hover:border-yellow-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center mb-6 lighthouse-glow">
                  <Target className="w-6 h-6 text-yellow-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">Actionable Plans</h3>
                <p className="text-slate-300 leading-relaxed">
                  Concrete milestones, course recommendations, internship opportunities, and scholarships—organized on a clear timeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-b from-slate-800 to-slate-900" aria-labelledby="cta-heading">
          {/* Decorative stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-12 left-24 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-1100" />
            <div className="absolute top-28 right-28 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse delay-2000" />
            <div className="absolute bottom-24 left-16 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-700" />
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse delay-1600" />
            <div className="absolute bottom-16 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-2500" />
            <div className="absolute top-20 right-1/2 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-900" />
            <div className="absolute bottom-40 left-2/3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-3000" />
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400 lighthouse-text-glow">
              Ready to Navigate Your STEM Future?
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Join the students who have found their path with Lighthouse. Your personalized roadmap is just a few questions away.
            </p>
            <Link to={createPageUrl("Planner")} aria-label="Start your journey with Lighthouse">
              <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-300 text-lg px-10 py-4 lighthouse-glow font-semibold transition-all duration-300 hover:scale-105">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>);

}