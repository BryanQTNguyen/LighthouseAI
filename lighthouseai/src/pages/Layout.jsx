

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Compass, Map, BarChart2, Info } from "lucide-react";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: createPageUrl("Landing"), icon: Compass },
    { name: "Planner", path: createPageUrl("Planner"), icon: Map },
    { name: "The Data", path: createPageUrl("TheData"), icon: BarChart2 },
    { name: "About", path: createPageUrl("About"), icon: Info },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <style jsx>{`
        :root {
          --lighthouse-yellow: #fbbf24;
          --lighthouse-glow: rgba(251, 191, 36, 0.5); /* Changed alpha from 0.3 to 0.5 */
          --ocean-dark: #0f172a;
          --ocean-medium: #1e293b;
          --ocean-light: #334155;
        }
        
        .lighthouse-glow {
          box-shadow: 0 0 30px var(--lighthouse-glow); /* Changed spread from 20px to 30px */
        }
        
        .lighthouse-text-glow {
          text-shadow: 0 0 10px var(--lighthouse-glow);
        }
        
        @media (max-width: 768px) {
          .lighthouse-glow {
            box-shadow: 0 0 15px var(--lighthouse-glow); 
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="bg-slate-800/90 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to={createPageUrl("Landing")} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-400 lighthouse-glow rounded-sm transform rotate-45"></div>
              <span className="text-xl font-bold lighthouse-text-glow text-yellow-400">
                Lighthouse
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? "text-yellow-400 bg-yellow-400/10 lighthouse-glow"
                      : "text-slate-300 hover:text-yellow-400 hover:bg-slate-700/50"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex space-x-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    location.pathname === item.path
                      ? "text-yellow-400 bg-yellow-400/10 lighthouse-glow"
                      : "text-slate-300 hover:text-yellow-400"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-4rem)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-400">
            <p className="mb-2">
              <span className="text-yellow-400 lighthouse-text-glow font-semibold">Lighthouse</span> — 
              Clearing the Fog on Your STEM Pathway
            </p>
            <p className="text-sm">
              Empowering students with AI-guided pathways to STEM success
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

