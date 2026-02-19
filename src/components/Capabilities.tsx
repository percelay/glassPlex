import {
  Settings2,
  Flame,
  Drill,
  Shapes,
  Cog,
  Waves,
  Sparkles,
  Cpu,
  FlaskConical,
  Route,
  Wind,
  Wrench,
} from "lucide-react";

const capabilities = [
  { icon: Shapes, label: "Assemblies" },
  { icon: Flame, label: "Bending" },
  { icon: Drill, label: "Drilling" },
  { icon: Settings2, label: "Forming" },
  { icon: Cog, label: "Milling" },
  { icon: Waves, label: "Plastic Welding" },
  { icon: Sparkles, label: "Polishing" },
  { icon: Cpu, label: "Precision Machining" },
  { icon: FlaskConical, label: "Prototyping" },
  { icon: Route, label: "Routing" },
  { icon: Wind, label: "Sandblasting" },
  { icon: Wrench, label: "Custom Fab" },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px flex-1 max-w-[3rem] bg-[#38BDF8]/40" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]">
            What We Do
          </span>
        </div>

        <div className="mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            Manufacturing{" "}
            <span className="text-[#38BDF8]">Capabilities</span>
          </h2>
          <p className="text-[#94A3B8] max-w-xl">
            From rapid prototypes to full production runs — our facility handles every
            stage of plastic fabrication with precision.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {capabilities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-5 flex flex-col items-start gap-3 hover:bg-white/10 hover:border-[#38BDF8]/30 hover:shadow-[0_4px_30px_rgba(56,189,248,0.08)] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center group-hover:bg-[#38BDF8]/20 group-hover:border-[#38BDF8]/40 transition-all duration-300">
                <Icon className="w-5 h-5 text-[#38BDF8]" />
              </div>
              <span
                className="text-sm font-semibold text-white leading-tight"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
