import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/naac")({
  component: NaacLayout,
});

function NaacLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative z-10">
      <Outlet />
    </div>
  );
}
