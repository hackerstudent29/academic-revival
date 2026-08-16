import { createFileRoute } from "@tanstack/react-router";
import { AcademicProgrammesSection } from "@/components/AcademicProgrammesSection";
import { WhyJoinSection } from "@/components/WhyJoinSection";

const title = "M.S.A.J. College of Engineering (MSAJCE)";
const description =
  "Explore MSAJCE academic programmes - UG, PG and research - and the reasons to join Chennai's OMR IT corridor engineering campus.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

function Index() {
  return (
    <main className="bg-[var(--bg-color)]">
      <AcademicProgrammesSection />
      <WhyJoinSection />
    </main>
  );
}
