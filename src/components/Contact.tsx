"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Printer, Send } from "lucide-react";

const contactDetails = [
  { icon: Phone, label: "Main Line", value: "(973) 362-0219", href: "tel:+19733620219" },
  { icon: Phone, label: "Direct", value: "(973) 670-8956", href: "tel:+19736708956" },
  { icon: Printer, label: "Fax", value: "1-(973)-789-8353", href: "#" },
  {
    icon: Mail,
    label: "Email",
    value: "glasplex@hotmail.com",
    href: "mailto:glasplex@hotmail.com",
  },
];

const locationPoints = [
  {
    title: "Headquarters",
    detail: "8 Estate Drive, Sussex, NJ 07461",
    note: "Visits by appointment",
  },
  {
    title: "Warehousing",
    detail: "Regional coverage across NJ, NY, and PA",
    note: "Pickup coordination available",
  },
  {
    title: "Shipping",
    detail: "Nationwide freight and parcel distribution",
    note: "All 50 states",
  },
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  projectSummary: string;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  projectSummary: "",
};

const inputClass =
  "w-full rounded-xl border border-[#a2dcff]/22 bg-[#a2dcff]/8 px-4 py-2.5 text-sm text-[#e8f6ff] placeholder:text-[#a8c7dd] focus:border-[#b8e9ff] focus:outline-none";

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  function resetForm() {
    setForm(initialForm);
    setSubmitted(false);
  }

  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title mt-3 text-3xl sm:text-4xl">
            Quote Support for Production, Procurement, and Project Teams.
          </h2>
          <p className="section-copy mt-4 text-base leading-relaxed">
            Share your dimensions, material requirements, and timeline. We will reply
            with a clear next step, lead-time guidance, and a practical fabrication plan.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[#f1f9ff]">
              Contact Information
            </h3>

            <div className="mt-5 space-y-3">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={`${label}-${value}`}
                  href={href}
                  className="glass-soft flex items-center gap-3 rounded-2xl p-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#9edcff]/16">
                    <Icon className="h-4 w-4 text-[#bfeaff]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-[#9ec5df]">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-[#e4f3ff]">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="frost-divider my-6" />

            <div className="space-y-4">
              {locationPoints.map(({ title, detail, note }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="glass-soft mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg">
                    <MapPin className="h-4 w-4 text-[#bce9ff]" />
                  </div>
                  <div>
                    <p className="font-[var(--font-heading)] text-sm font-semibold text-[#ecf8ff]">
                      {title}
                    </p>
                    <p className="text-sm text-[#d2e7f6]">{detail}</p>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#9cc4de]">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="glass-soft flex h-14 w-14 items-center justify-center rounded-full">
                  <CheckCircle2 className="h-7 w-7 text-[#bce9ff]" />
                </div>
                <h3 className="mt-4 font-[var(--font-heading)] text-2xl font-semibold text-[#eff8ff]">
                  Request Received
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#d4e8f7]">
                  Thank you for reaching out. Our team will follow up within one business
                  day to confirm scope and next actions.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  className="ice-btn-primary mt-6 rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-[var(--font-heading)] text-xl font-semibold text-[#f1f9ff]">
                  Project Quote Form
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-[0.12em] text-[#a0c7e1]">
                      First Name
                    </label>
                    <input
                      required
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Jordan"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-[0.12em] text-[#a0c7e1]">
                      Last Name
                    </label>
                    <input
                      required
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Miller"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-[0.12em] text-[#a0c7e1]">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jordan@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-[0.12em] text-[#a0c7e1]">
                      Phone
                    </label>
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
                </div>

                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-[0.12em] text-[#a0c7e1]">
                    Company (Optional)
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Manufacturing"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-[0.12em] text-[#a0c7e1]">
                    Project Summary
                  </label>
                  <textarea
                    required
                    rows={5}
                    name="projectSummary"
                    value={form.projectSummary}
                    onChange={handleChange}
                    placeholder="Include materials, dimensions, quantities, and target delivery date."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="ice-btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white"
                >
                  Submit Quote Request
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
