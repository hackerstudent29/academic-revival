import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/research_/patents")({
  beforeLoad: () => {
    throw redirect({ to: "/research", search: { tab: "patents" } });
  },
});
