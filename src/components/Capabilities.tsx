import {
  Brush,
  Cog,
  Drill,
  Gauge,
  Layers,
  Route,
  Sparkles,
  Waves,
  Wrench,
} from "lucide-react";

const capabilityGroups = [
  {
    title: "Fabrication + Forming",
    description:
      "Thermal bending, precision forming, routed profiles, and structural assemblies for production-ready parts.",
    icon: Wrench,
  },
  {
    title: "Machining + Finishing",
    description:
      "Drilling, milling, polishing, and edge refinement that keeps dimensional intent and visual quality aligned.",
    icon: Gauge,
  },
  {
    title: "Specialty Processes",
    description:
      "Plastic welding, sanding, and tailored custom operations for unique functional environments.",
    icon: Sparkles,
  },
];

const serviceList = [
  { icon: Layers, label: "Assemblies" },
  { icon: Drill, label: "Drilling" },
  { icon: Cog, label: "Milling" },
  { icon: Waves, label: "Plastic Welding" },
  { icon: Brush, label: "Polishing" },
  { icon: Route, label: "Routing" },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-title mt-3 text-3xl sm:text-4xl">
            Multi-Process Execution from Prototype to Production.
          </h2>
          <p className="section-copy mt-4 text-base leading-relaxed">
            Our facility is designed to move projects from concept to finished component
            with predictable quality. Teams rely on us for fast decision cycles,
            fabrication depth, and practical manufacturability guidance.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {capabilityGroups.map(({ title, description, icon: Icon }) => (
            <article key={title} className="glass-panel rounded-3xl p-6 sm:p-7">
              <div className="glass-soft inline-flex h-11 w-11 items-center justify-center rounded-xl">
                <Icon className="h-5 w-5 text-[#c2ecff]" />
              </div>
              <h3 className="mt-4 font-[var(--font-heading)] text-xl font-semibold text-[#f2f9ff]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#d9ebf8]">{description}</p>
            </article>
          ))}
        </div>

        <div className="glass-soft mt-5 rounded-3xl p-6 sm:p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-[#9cc7e1]">
            Core Operations
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {serviceList.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-[#afe3ff]/24 bg-[#a9e0ff]/10 px-3 py-3 text-center"
              >
                <Icon className="mx-auto h-4 w-4 text-[#b7e9ff]" />
                <p className="mt-2 text-xs font-medium text-[#e2f3ff]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
