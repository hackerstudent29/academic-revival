import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/student-community")({
  beforeLoad: () => {
    throw redirect({ to: "/student-community/alumni" });
  },
});
