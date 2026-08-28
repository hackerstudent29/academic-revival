import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Skiper39 } from "../components/CrowdCanvas";

export const Route = createFileRoute("/credits")({
  component: CreditsPage,
});

function CreditsPage() {
  return (
    <div className="w-full h-screen bg-background relative overflow-hidden">
      <div className="absolute top-6 left-6 z-50">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium text-black bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-black hover:text-white transition-colors shadow-sm border border-black/10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
      <Skiper39 />
    </div>
  );
}
