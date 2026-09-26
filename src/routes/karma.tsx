import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/karma")({
  beforeLoad: () => {
    throw redirect({ to: "/social-and-community", search: { tab: "karma" } });
  },
});
