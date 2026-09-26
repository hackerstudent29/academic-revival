import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/social-and-community_/ebsb")({
  beforeLoad: () => {
    throw redirect({ to: "/social-and-community", search: { tab: "ebsb" } });
  },
});
