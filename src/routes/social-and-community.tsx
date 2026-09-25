import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/social-and-community")({
  beforeLoad: () => {
    throw redirect({ to: "/social-and-community/nss" });
  },
});
