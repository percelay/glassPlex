import {
  Blocks,
  Box,
  Factory,
  FlaskConical,
  HeartPulse,
  Layers,
  Lock,
  Monitor,
  Shield,
  Ship,
} from "lucide-react";

const materials = [
  {
    icon: Layers,
    name: "Acrylic / Plastic Glass",
    desc: "Optically clear and durable for partitions, displays, fabricated enclosures, and branded installations.",
  },
  {
    icon: Shield,
    name: "Polycarbonate / Lexan",
    desc: "High-impact material used for guards, safety barriers, and environments requiring superior toughness.",
  },
  {
    icon: Blocks,
    name: "HDPE",
    desc: "Chemical-resistant stock for marine, industrial, and utility components where durability is mandatory.",
  },
  {
    icon: FlaskConical,
    name: "PETG + ABS",
    desc: "Versatile, fabrication-friendly materials ideal for machine covers, housings, and rapid development.",
  },
  {
    icon: Box,
    name: "Expanded PVC Foam Board",
    desc: "Lightweight rigid board for signage, wayfinding systems, and display architecture.",
  },
  {
    icon: Factory,
    name: "Custom Requests",
    desc: "Thicknesses from 1/16 in to 1.25 in and above with tailored color, finish, and cut specifications.",
  },
];

const applications = [
  { icon: Lock, label: "Machine guards and protective barriers" },
  { icon: Monitor, label: "Retail displays and presentation fixtures" },
  { icon: HeartPulse, label: "Healthcare and laboratory support components" },
  { icon: Ship, label: "Marine windshields and durable vessel parts" },
];

export default function Products() {
  return (
    <section id="products" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Materials</p>
          <h2 className="section-title mt-3 text-3xl sm:text-4xl">
            Product-Ready Plastic Inventory with Custom Fabrication Support.
          </h2>
          <p className="section-copy mt-4 text-base leading-relaxed">
            We stock high-demand plastic materials and process each order to your exact
            dimensions. From one-off prototypes to repeat production schedules, every job
            is configured around performance, appearance, and delivery requirements.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {materials.map(({ icon: Icon, name, desc }) => (
            <article key={name} className="glass-panel rounded-3xl p-6">
              <div className="glass-soft inline-flex h-11 w-11 items-center justify-center rounded-xl">
                <Icon className="h-5 w-5 text-[#bde9ff]" />
              </div>
              <h3 className="mt-4 font-[var(--font-heading)] text-lg font-semibold text-[#f0f8ff]">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#d4e8f7]">{desc}</p>
            </article>
          ))}
        </div>

        <div className="glass-soft mt-6 rounded-3xl p-6 sm:p-7">
          <p className="text-xs uppercase tracking-[0.18em] text-[#9cc7e1]">
            Primary Application Segments
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {applications.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-[#a6deff]/24 bg-[#99d8ff]/10 px-4 py-3 text-sm text-[#dcf0ff]"
              >
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-[#bce8ff]" />
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
