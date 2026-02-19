import { Award, Compass, Factory, Layers3, Users2 } from "lucide-react";

const pillars = [
  {
    icon: Factory,
    title: "Single-Site Control",
    desc: "Design support, fabrication, machining, finishing, and packing are managed inside one coordinated workflow.",
  },
  {
    icon: Layers3,
    title: "Material Depth",
    desc: "Acrylic, polycarbonate, Lexan, HDPE, PETG, ABS, and expanded PVC stocked for fast project starts.",
  },
  {
    icon: Users2,
    title: "Commercial Reliability",
    desc: "Repeatable outcomes for contractors, operations teams, display builders, and institutional buyers.",
  },
  {
    icon: Award,
    title: "Built on Reputation",
    desc: "Longstanding relationships across New Jersey, New York, and Pennsylvania with nationwide fulfillment.",
  },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
          <div className="glass-soft rounded-3xl p-7 sm:p-9">
            <p className="section-kicker">Company</p>
            <h2 className="section-title mt-4 text-3xl sm:text-4xl">
              Engineering-Grade Plastics with Service Built for Business.
            </h2>
            <p className="section-copy mt-5 text-base leading-relaxed">
              GlasPlex Plastics LLC is a full-service fabrication facility in Sussex,
              New Jersey. We support both high-volume buyers and one-off custom orders
              with disciplined process control, material expertise, and practical lead times.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="glass-panel rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-[#9ec8e2]">
                  Primary Service Area
                </p>
                <p className="mt-1 font-[var(--font-heading)] text-sm font-semibold text-[#ebf7ff]">
                  NJ, NY, PA + National Shipping
                </p>
              </div>
              <div className="glass-panel rounded-2xl p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-[#9ec8e2]">
                  Facility Model
                </p>
                <p className="mt-1 font-[var(--font-heading)] text-sm font-semibold text-[#ebf7ff]">
                  Build-to-Spec + Stock Supply
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#8fd3ff]/30 bg-[#8fd3ff]/10 px-4 py-3 text-sm text-[#d7ecfa]">
              <Compass className="h-4 w-4 text-[#afe4ff]" />
              Strategic fabrication partner for production teams that cannot miss.
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="glass-panel rounded-3xl p-6">
                <div className="glass-soft inline-flex h-11 w-11 items-center justify-center rounded-xl">
                  <Icon className="h-5 w-5 text-[#bde9ff]" />
                </div>
                <h3 className="mt-4 font-[var(--font-heading)] text-lg font-semibold text-[#eff8ff]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#d7eaf8]">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
