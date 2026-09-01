import { Search } from "lucide-react";
import React from "react";

interface DeveloperFilterBarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function DeveloperFilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: DeveloperFilterBarProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative w-full md:w-72">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-4 h-4 text-muted-foreground" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by name, skill..."
          className="bg-background border border-border text-foreground text-sm rounded-full focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5 transition-colors"
        />
      </div>
    </div>
  );
}
