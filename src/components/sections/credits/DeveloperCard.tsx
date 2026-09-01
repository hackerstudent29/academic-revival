import { Github, Linkedin, Mail, Globe } from "lucide-react";
import React from "react";

export interface Developer {
  id: string;
  name: string;
  role: string;
  department: string;
  batch: string;
  avatarUrl: string;
  bio: string;
  skills: string[];
  contributions: string[];
  socials: {
    linkedin?: string;
    github?: string;
    portfolio?: string;
    email?: string;
  };
}

interface DeveloperCardProps {
  developer: Developer;
}

export function DeveloperCard({ developer }: DeveloperCardProps) {
  return (
    <div className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10">
      {/* Header: Avatar and Role */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 blur transition duration-300 group-hover:opacity-100"></div>
          <img
            src={developer.avatarUrl}
            alt={`${developer.name}'s avatar`}
            className="relative h-16 w-16 rounded-full object-cover border-2 border-background ring-2 ring-indigo-500/20"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-foreground">{developer.name}</h3>
          <p className="text-sm font-medium text-indigo-500 dark:text-indigo-400">
            {developer.role}
          </p>
          <p className="text-xs text-muted-foreground">
            {developer.department} • {developer.batch}
          </p>
        </div>
      </div>

      {/* Bio */}
      <p className="text-sm text-muted-foreground mb-4 flex-grow">{developer.bio}</p>

      {/* Contributions */}
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">
          Key Contributions
        </h4>
        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
          {developer.contributions.map((contribution, index) => (
            <li key={index} className="line-clamp-2" title={contribution}>
              {contribution}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills */}
      <div className="mb-6 flex flex-wrap gap-2">
        {developer.skills.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-secondary-foreground/10"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Footer: Socials */}
      <div className="mt-auto flex items-center gap-3 pt-4 border-t border-border/50">
        {developer.socials.github && (
          <a
            href={developer.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${developer.name}'s GitHub`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        )}
        {developer.socials.linkedin && (
          <a
            href={developer.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${developer.name}'s LinkedIn`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        )}
        {developer.socials.portfolio && (
          <a
            href={developer.socials.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${developer.name}'s Portfolio`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Globe className="h-5 w-5" />
          </a>
        )}
        {developer.socials.email && (
          <a
            href={`mailto:${developer.socials.email}`}
            aria-label={`Email ${developer.name}`}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  );
}
