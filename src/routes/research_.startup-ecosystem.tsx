import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/research_/startup-ecosystem")({
  beforeLoad: () => {
    throw redirect({ to: "/research", search: { tab: "startup-ecosystem" } });
  },
});
