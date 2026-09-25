import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/syllabus")({
  beforeLoad: () => {
    throw redirect({ to: "/curriculum" });
  },
});
