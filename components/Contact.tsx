"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";

const services = [
  "Wheat Mill Installation",
  "Maize Mill Installation",
  "Rice Mill Installation",
  "Repair & Maintenance",
  "Metal Fabrication",
  "Generator Works",
  "Compressor Works",
  "Electrical Panel Fabrication",
  "Electrical Installation",
  "Packing Machines",
  "Energy Auditing",
  "Machine Importation",
];

const fieldClass =
  "w-full rounded-xl border border-base-300 bg-base-100 px-4 py-3 text-sm text-base-content placeholder:text-base-content/70 transition-colors focus:border-primary focus:outline-none";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-primary text-primary-content">
        <div className="container-pad flex flex-col items-center justify-between gap-8 py-16 md:flex-row">
          <h2 className="font-heading text-[1.8rem] font-bold leading-tight lg:text-4xl">
            To get in touch with us
          </h2>
          <Link
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary-content px-7 py-3 text-sm font-bold text-primary transition-colors hover:bg-accent hover:text-accent-content"
          >
            Click Here
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section id="contact" className="section-padding bg-base-200">
        <div className="container-pad">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-8 lg:col-span-5">
              <div>
                <span className="pre-heading">Get in Touch</span>
                <h2 className="mb-4 font-heading text-[2rem] font-bold leading-tight text-base-content sm:text-4xl">
                  Start Your Project <span className="text-primary">Today.</span>
                </h2>
                <div className="heading-divider" />
                <p className="mt-4 leading-relaxed text-base-content/70">
                  Whether you need a new mill installation, emergency repairs, or an energy audit
                  — GMK Engineering responds fast. Call us directly or send a message.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="tel:+254727944692"
                  className="group flex items-center gap-4 rounded-2xl border border-base-300 p-4 transition-all duration-200 hover:border-primary"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-content">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-bold uppercase tracking-widest text-base-content/70">
                      Call / WhatsApp
                    </p>
                    <p className="font-heading font-bold text-base-content">+254 727 944 692</p>
                  </div>
                </a>

                <a
                  href="tel:+254722883681"
                  className="group flex items-center gap-4 rounded-2xl border border-base-300 p-4 transition-all duration-200 hover:border-primary"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-200 group-hover:bg-primary group-hover:text-primary-content">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-bold uppercase tracking-widest text-base-content/70">
                      Alternate Line
                    </p>
                    <p className="font-heading font-bold text-base-content">+254 722 883 681</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-base-300 p-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-bold uppercase tracking-widest text-base-content/70">
                      Office Address
                    </p>
                    <p className="font-heading font-bold text-base-content">
                      49 Thika Road, Nairobi, Kenya
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-base-300 p-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-bold uppercase tracking-widest text-base-content/70">
                      Email
                    </p>
                    <p className="font-heading font-bold text-base-content">
                      info@gmkengineering.co.ke
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-green-600">
                  Available Mon–Sat · 7:00 AM – 6:00 PM EAT
                </span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="spotlight-card rounded-2xl border border-base-300 bg-base-100 p-8 md:p-10">
                <h3 className="mb-8 font-heading text-xl font-bold text-base-content">
                  Send Us a Message
                </h3>

                {submitted ? (
                  <div className="flex flex-col items-center gap-4 py-16 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Check className="h-7 w-7" />
                    </div>
                    <p className="font-heading text-xl font-bold text-base-content">
                      Enquiry received
                    </p>
                    <p className="max-w-sm text-sm text-base-content/70">
                      Thank you for contacting GMK Engineering. Our team will respond within 2
                      business hours (Mon–Sat).
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="flex flex-col gap-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-xs font-bold uppercase tracking-widest text-base-content/70"
                        >
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="John Kariuki"
                          className={fieldClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="mb-2 block text-xs font-bold uppercase tracking-widest text-base-content/70"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          type="text"
                          placeholder="Your Company Ltd"
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-xs font-bold uppercase tracking-widest text-base-content/70"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          required
                          placeholder="+254 7XX XXX XXX"
                          className={fieldClass}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="service"
                          className="mb-2 block text-xs font-bold uppercase tracking-widest text-base-content/70"
                        >
                          Service Needed
                        </label>
                        <select
                          id="service"
                          className={fieldClass + " appearance-none cursor-pointer"}
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="details"
                        className="mb-2 block text-xs font-bold uppercase tracking-widest text-base-content/70"
                      >
                        Project Details
                      </label>
                      <textarea
                        id="details"
                        rows={4}
                        required
                        placeholder="Describe your project, location, and timeline..."
                        className={fieldClass + " resize-none"}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-primary py-4 text-sm font-bold uppercase tracking-widest text-primary-content transition-colors hover:bg-primary/90"
                    >
                      Send Enquiry
                    </button>
                    <p className="text-center text-xs text-base-content/70">
                      We respond within 2 business hours · Mon–Sat
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}