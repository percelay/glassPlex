import { Layers, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Layers className="w-4 h-4 text-[#38BDF8]" />
              </div>
              <span
                className="text-lg font-bold text-white"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
              >
                Glasplex<span className="text-[#38BDF8]"> Plastics LLC</span>
              </span>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-xs">
              Full-service plastic fabrication facility serving NJ, NY, PA, and
              nationwide. Custom cuts, precision machining, and fast turnaround.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.15em] uppercase text-[#38BDF8] mb-4"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {["#about", "#capabilities", "#products", "#contact"].map(
                (href) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-sm text-[#94A3B8] hover:text-white transition-colors capitalize"
                    >
                      {href.replace("#", "")}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Quick Info */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.15em] uppercase text-[#38BDF8] mb-4"
              style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#38BDF8] flex-shrink-0" />
                <span className="text-xs text-[#94A3B8]">(973) 362-0219</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#38BDF8] flex-shrink-0" />
                <span className="text-xs text-[#94A3B8]">glasplex@hotmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#38BDF8] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-[#94A3B8]">Sussex, NJ 07461</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#94A3B8]">
            &copy; {year} Glasplex Plastics LLC. All rights reserved.
          </p>
          <p className="text-xs text-[#94A3B8]/50">
            Sussex, NJ &bull; By Appointment
          </p>
        </div>
      </div>
    </footer>
  );
}
