import { createFileRoute } from "@tanstack/react-router";
import PlacementPortalApp from "@/placementPortal/App";
import "@/placementPortal/index.css";

const title = "Placements at MSAJCE — 95% Track Record";
const description =
  "Placement statistics, recruiter network and training support at M.S.A.J. College of Engineering, Chennai.";

export const Route = createFileRoute("/placements")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Placements,
});

function Placements() {
  return <PlacementPortalApp />;
}
