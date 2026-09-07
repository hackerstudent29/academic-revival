import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/curriculum-and-syllabus")({
  beforeLoad: () => {
    throw redirect({ to: "/academics" });
  },
});
