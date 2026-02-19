import { Award, Building2, FlaskConical, Package } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Full Fabrication Facility",
    desc: "End-to-end plastic manufacturing under one roof in Sussex, NJ.",
  },
  {
    icon: FlaskConical,
    title: "Materials Expertise",
    desc: "Acrylic, Lexan, Polycarbonate, HDPE, PETG, ABS & expanded PVC foam board.",
  },
  {
    icon: Package,
    title: "Custom Dimensions",
    desc: "Standard, custom-cut, and oversized sheets from 1/16\" to 1.25\"+.",
  },
  {
    icon: Award,
    title: "Trusted Since Day One",
    desc: "Featured by QVC & News 12 NJ. B2B partnerships and public walk-in sales.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px flex-1 max-w-[3rem] bg-[#38BDF8]/40" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]">
            Who We Are
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
            >
              Precision Plastics,{" "}
              <span className="text-[#38BDF8]">Built for Your Needs</span>
            </h2>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-6 sm:p-8">
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Glasplex Plastics LLC operates a full plastic fabrication facility
                specializing in Acrylic, Lexan, Polycarbonate, and various Industrial
                Plastic Sheets. We provide custom fabrication and sales of plastic sheets
                in standard, custom-cut, and oversized dimensions.
              </p>
              <div className="mt-6 pt-6 border-t border-white/8">
                <p className="text-sm text-[#94A3B8]">
                  Serving New Jersey, New York, Pennsylvania, and nationwide with
                  reliable shipping solutions tailored to your project requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-5 hover:bg-white/10 hover:border-[#38BDF8]/25 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center mb-4 group-hover:bg-[#38BDF8]/15 group-hover:border-[#38BDF8]/35 transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <h3
                  className="text-sm font-semibold text-white mb-1.5"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                >
                  {title}
                </h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
