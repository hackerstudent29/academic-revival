import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/nss")({
  beforeLoad: () => {
    throw redirect({ to: "/social-and-community/nss" });
  },
});
