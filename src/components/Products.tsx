import {
  Layers,
  Shield,
  Box,
  Beaker,
  CircleDot,
  Blocks,
  ShieldCheck,
  Anchor,
  Monitor,
  Heart,
  Table2,
  Lock,
  FlaskConical,
  Wind,
} from "lucide-react";

const materials = [
  {
    icon: Layers,
    name: "Acrylic / Plastic Glass",
    desc: "Crystal-clear, lightweight, and UV-resistant for displays and barriers.",
    badge: "Most Popular",
  },
  {
    icon: Shield,
    name: "Polycarbonate / Lexan",
    desc: "Impact-resistant, virtually unbreakable. Ideal for safety applications.",
    badge: "High Impact",
  },
  {
    icon: Box,
    name: "Expanded PVC Foam Board",
    desc: "Lightweight rigid foam sheets for signage, displays, and construction.",
    badge: null,
  },
  {
    icon: Blocks,
    name: "HDPE",
    desc: "High-density polyethylene for chemical tanks, cutting boards & marine use.",
    badge: null,
  },
  {
    icon: CircleDot,
    name: "PETG",
    desc: "Food-safe, impact-resistant, and easy to fabricate. Excellent clarity.",
    badge: null,
  },
  {
    icon: Beaker,
    name: "ABS",
    desc: "Durable thermoplastic for prototyping, machine guards & housings.",
    badge: null,
  },
];

const applications = [
  { icon: ShieldCheck, label: "COVID-19 Safety Barriers & Sneeze Guards" },
  { icon: Anchor, label: "Boat Windshields" },
  { icon: Monitor, label: "Display Cases" },
  { icon: Heart, label: "Medical Devices" },
  { icon: Table2, label: "Tabletops" },
  { icon: Lock, label: "Machine Guards" },
  { icon: FlaskConical, label: "Chemical Tanks" },
  { icon: Wind, label: "Fume Hoods" },
];

export default function Products() {
  return (
    <section id="products" className="relative py-24 px-4 sm:px-6">
      {/* Subtle divider glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#38BDF8]/30 to-transparent"
      />

      <div className="max-w-7xl mx-auto">
        {/* ── Materials ── */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px flex-1 max-w-[3rem] bg-[#38BDF8]/40" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]">
            Materials
          </span>
        </div>

        <div className="mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            Products &amp;{" "}
            <span className="text-[#38BDF8]">Materials</span>
          </h2>
          <p className="text-[#94A3B8] max-w-xl">
            Thicknesses from 1/16&quot; to 1.25&quot;+. Custom colors and finishes available.
            Call for current stock and lead times.
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {materials.map(({ icon: Icon, name, desc, badge }) => (
            <div
              key={name}
              className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 hover:bg-white/10 hover:border-[#38BDF8]/30 hover:shadow-[0_4px_30px_rgba(56,189,248,0.1)] transition-all duration-300"
            >
              {badge && (
                <span className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#38BDF8]/15 border border-[#38BDF8]/30 text-[#38BDF8]">
                  {badge}
                </span>
              )}
              <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center mb-4 group-hover:bg-[#38BDF8]/20 transition-all duration-300">
                <Icon className="w-5 h-5 text-[#38BDF8]" />
              </div>
              <h3
                className="text-base font-semibold text-white mb-2"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
              >
                {name}
              </h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* ── Applications ── */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px flex-1 max-w-[3rem] bg-[#38BDF8]/40" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]">
            Applications
          </span>
        </div>

        <h3
          className="text-2xl sm:text-3xl font-bold text-white mb-8"
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
        >
          Where Our Products <span className="text-[#38BDF8]">Go to Work</span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {applications.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 hover:border-[#38BDF8]/25 transition-all duration-200"
            >
              <Icon className="w-4 h-4 text-[#38BDF8] flex-shrink-0" />
              <span className="text-xs font-medium text-[#94A3B8] group-hover:text-white transition-colors leading-snug">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
