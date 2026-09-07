import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/campus-life_/social-media")({
  component: () => <Navigate to="/social-media" replace />,
});
