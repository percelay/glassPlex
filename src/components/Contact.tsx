"use client";

import { useState } from "react";
import { Phone, Mail, Printer, MapPin, Send, CheckCircle } from "lucide-react";

const contactDetails = [
  { icon: Phone, label: "Primary", value: "(973) 362-0219" },
  { icon: Phone, label: "Alternate", value: "(973) 670-8956" },
  { icon: Printer, label: "Fax", value: "1-(973)-789-8353" },
  { icon: Mail, label: "Email", value: "glasplex@hotmail.com" },
];

const locations = [
  {
    name: "Main HQ",
    address: "8 Estate Drive, Sussex, NJ 07461",
    note: "By Appointment",
  },
  {
    name: "Warehouses",
    address: "Multiple locations across NJ, NY & PA",
    note: "Call for closest pickup",
  },
  {
    name: "Shipping",
    address: "Nationwide shipping available",
    note: "All 50 states",
  },
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const inputClass =
  "w-full bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#38BDF8] focus:ring-1 focus:ring-[#38BDF8] rounded-lg px-4 py-2.5 text-sm transition-all duration-200";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#38BDF8]/5 blur-[100px]"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px flex-1 max-w-[3rem] bg-[#38BDF8]/40" />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#38BDF8]">
            Get In Touch
          </span>
        </div>

        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
          style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
        >
          Let&apos;s Talk About Your{" "}
          <span className="text-[#38BDF8]">Project</span>
        </h2>

        {/* Split Pane */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: Info */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-8 flex flex-col gap-8">
            {/* Contact Details */}
            <div>
              <h3
                className="text-lg font-semibold text-white mb-5"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
              >
                Contact Details
              </h3>
              <div className="flex flex-col gap-3">
                {contactDetails.map(({ icon: Icon, label, value }) => (
                  <div key={`${label}-${value}`} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[#38BDF8]" />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#94A3B8] uppercase tracking-widest">
                        {label}
                      </p>
                      <p className="text-sm text-white font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/8" />

            {/* Locations */}
            <div>
              <h3
                className="text-lg font-semibold text-white mb-5"
                style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
              >
                Locations &amp; Shipping
              </h3>
              <div className="flex flex-col gap-4">
                {locations.map(({ name, address, note }) => (
                  <div key={name} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/10 border border-[#38BDF8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold text-white"
                        style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                      >
                        {name}
                      </p>
                      <p className="text-xs text-[#94A3B8]">{address}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8]">
                        {note}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-[#38BDF8]" />
                </div>
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                >
                  Message Received!
                </h3>
                <p className="text-sm text-[#94A3B8] max-w-xs">
                  Thanks for reaching out. We&apos;ll get back to you within 1 business day.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", message: "" }); }}
                  className="mt-4 px-5 py-2 rounded-xl text-sm font-semibold bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] hover:bg-[#38BDF8]/20 transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3
                  className="text-lg font-semibold text-white mb-1"
                  style={{ fontFamily: "var(--font-space-grotesk, sans-serif)" }}
                >
                  Send a Message
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#94A3B8]">First Name *</label>
                    <input
                      required
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[#94A3B8]">Last Name *</label>
                    <input
                      required
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#94A3B8]">Email *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#94A3B8]">Mobile Phone *</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#94A3B8]">Company (Optional)</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[#94A3B8]">Questions / Message *</label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project, dimensions, materials, quantities..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#38BDF8]/20 border border-[#38BDF8]/40 hover:bg-[#38BDF8]/30 hover:border-[#38BDF8]/60 shadow-[0_0_20px_rgba(56,189,248,0.12)] hover:shadow-[0_0_35px_rgba(56,189,248,0.22)] transition-all duration-300 mt-2"
                >
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
