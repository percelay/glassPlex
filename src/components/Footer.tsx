import { Layers3, Mail, MapPin, Phone } from "lucide-react";

const links = [
  { label: "Company", href: "#about" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Materials", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="glass-panel rounded-3xl p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="glass-soft flex h-10 w-10 items-center justify-center rounded-xl">
                  <Layers3 className="h-5 w-5 text-[#bde9ff]" />
                </div>
                <div>
                  <p className="font-[var(--font-heading)] text-lg font-semibold text-[#edf8ff]">
                    GlasPlex Plastics LLC
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#9bc4de]">
                    Sussex, New Jersey
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#d6e9f8]">
                Precision plastic fabrication and sheet supply for teams that need a
                dependable partner, clear communication, and on-spec outcomes.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#9bc4de]">Site Links</p>
              <div className="mt-3 space-y-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-[#dcefff] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#9bc4de]">Direct Contact</p>
              <div className="mt-3 space-y-3 text-sm text-[#dcefff]">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#bde9ff]" />
                  (973) 362-0219
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#bde9ff]" />
                  glasplex@hotmail.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#bde9ff]" />
                  8 Estate Drive, Sussex NJ 07461
                </p>
              </div>
            </div>
          </div>

          <div className="frost-divider my-6" />

          <div className="flex flex-col gap-2 text-xs text-[#adcde4] sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {year} GlasPlex Plastics LLC. All rights reserved.</p>
            <p>Commercial support, custom fabrication, and nationwide fulfillment.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
