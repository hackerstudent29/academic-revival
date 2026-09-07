import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/research_/iic")({
  beforeLoad: () => {
    throw redirect({ to: "/research", search: { tab: "iic" } });
  },
});
