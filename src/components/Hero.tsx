import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

const trustPoints = [
  "Commercial + public fulfillment",
  "Fabrication, machining, and assembly in one facility",
  "Nationwide delivery and local pickup coordination",
];

const metricCards = [
  { label: "Response Window", value: "< 1 Business Day", icon: Clock3 },
  { label: "Coverage", value: "All 50 States", icon: Truck },
  { label: "Quality Standard", value: "Inspection-Driven", icon: ShieldCheck },
];

export default function Hero() {
  return (
    <section className="relative px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(179,233,255,0.48) 0%, rgba(179,233,255,0) 70%)",
            }}
            aria-hidden="true"
          />

          <div className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#d8f2ff]">
            <Sparkles className="h-3.5 w-3.5" />
            End-to-End Plastic Manufacturing
          </div>

          <h1 className="section-title mt-6 text-4xl sm:text-5xl lg:text-6xl">
            High-Performance Plastic Fabrication for Serious Projects.
          </h1>

          <p className="section-copy mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
            GlasPlex Plastics delivers precision-cut sheets, fabrication, and engineered
            components for commercial, industrial, healthcare, and public-sector teams.
            Built in Sussex, New Jersey. Delivered nationwide.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="ice-btn-primary inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all"
            >
              Start Your Quote
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#capabilities"
              className="ice-btn-secondary inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-[#def2ff] transition-all"
            >
              Explore Capabilities
            </a>
          </div>

          <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-[#d6e9f7]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#9fdcff]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <p className="section-kicker">Operational Snapshot</p>
            <div className="mt-5 space-y-3">
              {metricCards.map(({ label, value, icon: Icon }) => (
                <div key={label} className="glass-soft flex items-center gap-3 rounded-2xl p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#9ddcff]/18 text-[#bcecff]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#9dc5df]">{label}</p>
                    <p className="font-[var(--font-heading)] text-sm font-semibold text-[#edf8ff]">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-soft rounded-3xl p-6">
            <p className="section-kicker">Trusted Clients</p>
            <p className="mt-3 text-sm leading-relaxed text-[#d6e9f7]">
              Featured by regional media and selected by repeat B2B buyers who need
              dependable tolerances, clean finishing, and accountable delivery.
            </p>
            <div className="mt-4 frost-divider" />
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#9dc5df]">
              QVC | News 12 NJ | Regional Fabrication Partners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
