"use client";

import { useState } from "react";
import { PhoneIcon } from "@/components/Icons";

const services = [
  "Light Duty Towing",
  "Heavy Duty Towing",
  "Jump Start",
  "Lockout",
  "Tire Change",
  "Fuel Delivery",
  "Emergency Recovery",
  "Parking Enforcement",
  "Long Distance Towing",
  "Other",
];

type FormState = "idle" | "submitting" | "success" | "error";
const ContactForm = () => {
  const [status, setStatus] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Replace with your form submission logic / API route
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  const inputClass =
    "w-full bg-site-black border border-gold/20 focus:border-gold focus:outline-none rounded-sm px-4 py-3.5 text-[15px] text-cream placeholder:text-muted font-body transition-colors";

  const labelClass =
    "block font-condensed text-[12px] font-bold tracking-[2px] uppercase text-muted mb-2";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center px-8 md:px-14 py-20 text-center border-b lg:border-b-0 lg:border-r border-gold min-h-[600px]">
        <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-6">
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 text-gold"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h2 className="font-bebas text-[42px] tracking-wide text-cream mb-3">
          Message Received
        </h2>
        <p className="text-base text-muted leading-relaxed max-w-[360px] mb-8">
          We&apos;ll be in touch shortly. For immediate assistance, call us
          directly — our dispatchers answer 24/7.
        </p>
        <a
          href="tel:7021234567"
          className="inline-flex items-center gap-2 font-condensed text-base font-bold tracking-[2px] uppercase text-site-black bg-gold px-8 py-4 rounded-sm no-underline hover:bg-gold-dark transition-colors"
        >
          <PhoneIcon className="w-4 h-4 shrink-0" />
          (702) 123-4567
        </a>
      </div>
    );
  }

  return (
    <div className="px-8 md:px-14 py-16 border-b lg:border-b-0 lg:border-r border-gold">
      <p className="flex items-center gap-2.5 font-condensed text-[11px] font-bold tracking-[4px] uppercase text-gold mb-4">
        Free Quote
        <span className="w-10 h-px bg-gold opacity-40 shrink-0" />
      </p>
      <h2 className="font-bebas text-[42px] leading-[0.95] tracking-wide text-cream mb-2">
        Request a Quote
      </h2>
      <p className="text-[14px] text-muted leading-relaxed mb-10">
        Fill out the form and we&apos;ll get back to you promptly. Need help
        right now?{" "}
        <a
          href="tel:7021234567"
          className="text-gold hover:text-gold-dark transition-colors no-underline font-condensed font-bold"
        >
          Call (702) 123-4567
        </a>
      </p>

      <form
        onSubmit={handleSubmit}
        aria-label="Request a towing quote"
        noValidate
      >
        <div className="flex flex-col gap-5">
          {/* Name + Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className={labelClass}>
                Full Name <span className="text-gold">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="John Smith"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone Number <span className="text-gold">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                placeholder="(702) 000-0000"
                value={form.phone}
                onChange={handleChange}
                className={inputClass}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Service */}
          <div>
            <label htmlFor="service" className={labelClass}>
              Service Needed <span className="text-gold">*</span>
            </label>
            <select
              id="service"
              name="service"
              required
              value={form.service}
              onChange={handleChange}
              className={`${inputClass} cursor-pointer`}
            >
              <option value="" disabled>
                Select a service...
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className={labelClass}>
              Your Current Location <span className="text-gold">*</span>
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              placeholder="Street address or nearest intersection"
              value={form.location}
              onChange={handleChange}
              className={inputClass}
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className={labelClass}>
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us more about your situation — vehicle type, year, make & model..."
              value={form.message}
              onChange={handleChange}
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "submitting"}
            aria-label="Submit quote request"
            className="w-full inline-flex items-center justify-center gap-2 font-condensed text-base font-bold tracking-[2px] uppercase text-site-black bg-gold py-[18px] rounded-sm hover:bg-gold-dark hover:-translate-y-px transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
          >
            {status === "submitting" ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
                Sending...
              </>
            ) : (
              "Get My Free Quote"
            )}
          </button>

          <p className="text-[12px] text-muted text-center leading-relaxed">
            For emergencies, don&apos;t wait — call{" "}
            <a
              href="tel:7021234567"
              className="text-gold font-condensed font-bold no-underline"
            >
              (702) 123-4567
            </a>{" "}
            for immediate dispatch.
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
