import { ArrowRight, ChevronDown, Shield, Truck, Users } from "lucide-react";

const stats = [
  { icon: Users, label: "B2B & Public Sales", value: "Both" },
  { icon: Truck, label: "Nationwide Shipping", value: "Available" },
  { icon: Shield, label: "Trusted Clients", value: "QVC & News 12 NJ" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20">
      {/* Decorative blurred blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#38BDF8]/8 blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-[#0EA5E9]/6 blur-[100px]" />
      </div>

      {/* Hero Glass Card */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-[0_4px_60px_rgba(0,0,0,0.3)] p-8 sm:p-12 lg:p-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/25 text-[#38BDF8] text-sm font-medium mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse" />
            Full-Service Plastic Fabrication Facility
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white mb-6"
            style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
          >
            Our Goal is to Serve{" "}
            <span className="text-[#38BDF8]">YOUR PLASTIC NEEDS!</span>
          </h1>

          {/* Sub */}
          <p className="text-lg sm:text-xl text-[#94A3B8] max-w-2xl mx-auto mb-10 leading-relaxed">
            B2B &amp; Public Sales &nbsp;|&nbsp; Custom Fabrication &nbsp;|&nbsp; Nationwide Shipping.
            <br />
            <span className="text-white/70 font-medium">Trusted by QVC &amp; News 12 NJ.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-[#38BDF8]/20 border border-[#38BDF8]/40 hover:bg-[#38BDF8]/30 hover:border-[#38BDF8]/70 shadow-[0_0_25px_rgba(56,189,248,0.15)] hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition-all duration-300"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#capabilities"
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[#94A3B8] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
            >
              Our Capabilities
            </a>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-white/3 border border-white/8 hover:bg-white/6 hover:border-white/15 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-[#38BDF8]" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-[#94A3B8]">{label}</p>
                  <p className="text-sm font-semibold text-white">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-xs text-[#94A3B8] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#94A3B8] animate-bounce" />
      </div>
    </section>
  );
}
