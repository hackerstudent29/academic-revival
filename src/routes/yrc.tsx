import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/yrc")({
  beforeLoad: () => {
    throw redirect({ to: "/social-and-community", search: { tab: "yrc" } });
  },
});
