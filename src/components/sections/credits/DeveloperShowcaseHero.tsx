import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import React from "react";

export function DeveloperShowcaseHero() {
  const techStack = ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Figma"]; // Example stack

  return (
    <section className="relative pt-24 pb-12 overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-background to-background dark:from-indigo-900/20 dark:via-background dark:to-background"></div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        {/* Top Navigation / Status */}
        <div className="flex items-center justify-between mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Campus
          </Link>
          <div className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300 ring-1 ring-inset ring-indigo-500/20">
            v2.4 - Student Web Engineering Team
          </div>
        </div>

        {/* Hero Content */}
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl mb-6">
            Built by Students.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
              Powered by Innovation.
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            The student portal was proudly engineered from the ground up by a dedicated team of
            student developers and designers, serving our campus community with cutting-edge
            technology.
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-foreground mr-2">Powered by:</span>
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md border border-border shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
