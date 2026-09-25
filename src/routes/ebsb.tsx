import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ebsb")({
  beforeLoad: () => {
    throw redirect({ to: "/social-and-community/ebsb" });
  },
});
