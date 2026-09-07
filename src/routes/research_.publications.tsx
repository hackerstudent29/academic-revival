import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/research_/publications")({
  beforeLoad: () => {
    throw redirect({ to: "/research", search: { tab: "publications" } });
  },
});
