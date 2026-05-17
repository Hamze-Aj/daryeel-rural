"use client";

import { useState } from "react";

const contactInfo = [
  { icon: "📞", label: "Field Coordinator", value: "+251 912 090 972", sub: "Eng. Khalifa — Kebri Dahar", href: "tel:+251912090972" },
  { icon: "📧", label: "Email", value: "info@daryeel.org", sub: "We respond within 48 hours", href: "mailto:info@daryeel.org" },
  { icon: "📍", label: "Field Office", value: "Kebri Dahar", sub: "Somali Region, Ethiopia", href: null },
  { icon: "🌐", label: "Diaspora Office", value: "Minneapolis, MN", sub: "Minnesota, USA", href: null },
];

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", type: "general" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#003087] overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#F2A900]/10 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#F2A900]/20 border border-[#F2A900]/40 text-[#F2A900] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            Reach Out
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Contact <span className="gradient-text-gold">Daryeel</span>
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Questions, partnerships, donations, or volunteering — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map((c) => (
              <div key={c.label} className="bg-[#f5f5f5] rounded-2xl p-6 text-center card-hover">
                <span className="text-4xl block mb-3">{c.icon}</span>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-1">{c.label}</p>
                {c.href ? (
                  <a href={c.href} className="text-[#003087] font-bold text-base hover:text-[#F2A900] transition-colors block">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-[#003087] font-bold text-base">{c.value}</p>
                )}
                <p className="text-gray-400 text-xs mt-1">{c.sub}</p>
              </div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-[#003087] mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <span className="text-5xl block mb-4">✅</span>
                  <h3 className="text-[#003087] font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-500">
                    Thank you for reaching out. We&apos;ll get back to you within 48 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "", type: "general" }); }}
                    className="mt-6 bg-[#003087] text-white font-bold px-6 py-2.5 rounded-full hover:bg-[#001f5c] transition-colors text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Inquiry type */}
                  <div>
                    <label className="block text-sm font-semibold text-[#003087] mb-2">I want to…</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        { v: "donate", l: "💛 Donate" },
                        { v: "volunteer", l: "🤝 Volunteer" },
                        { v: "partner", l: "🏢 Partner" },
                        { v: "media", l: "📰 Media" },
                        { v: "general", l: "💬 General" },
                        { v: "other", l: "📌 Other" },
                      ].map((opt) => (
                        <button
                          key={opt.v}
                          type="button"
                          onClick={() => setForm(f => ({ ...f, type: opt.v }))}
                          className={`py-2.5 px-3 rounded-xl text-sm font-semibold border-2 transition-all duration-200 ${
                            form.type === opt.v
                              ? "border-[#003087] bg-[#003087] text-white"
                              : "border-gray-200 text-gray-500 hover:border-[#003087]/30"
                          }`}
                        >
                          {opt.l}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold text-[#003087] mb-1.5">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-semibold text-[#003087] mb-1.5">Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-semibold text-[#003087] mb-1.5">Subject</label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="What is this about?"
                      value={form.subject}
                      onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-[#003087] mb-1.5">Message *</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Tell us how you'd like to get involved or what you'd like to know…"
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="form-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#003087] text-white font-bold py-3.5 rounded-xl hover:bg-[#001f5c] transition-all duration-300 hover:shadow-lg text-base"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>

            {/* Info panel */}
            <div className="space-y-6">
              <div className="bg-[#003087] rounded-2xl p-8 text-white">
                <h3 className="font-bold text-xl text-[#F2A900] mb-4">Quick Contact</h3>
                <p className="text-blue-200 text-sm leading-relaxed mb-6">
                  For urgent matters or project inquiries, contact our field coordinator directly:
                </p>
                <a href="tel:+251912090972" className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors mb-4">
                  <span className="text-3xl">📞</span>
                  <div>
                    <p className="text-white font-bold">Eng. Khalifa</p>
                    <p className="text-[#F2A900] font-bold">+251 912 090 972</p>
                    <p className="text-blue-300 text-xs">Field Coordinator, Kebri Dahar</p>
                  </div>
                </a>
                <a href="mailto:info@daryeel.org" className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition-colors">
                  <span className="text-3xl">📧</span>
                  <div>
                    <p className="text-white font-bold">Email Us</p>
                    <p className="text-[#F2A900] font-bold">info@daryeel.org</p>
                    <p className="text-blue-300 text-xs">48-hour response time</p>
                  </div>
                </a>
              </div>

              {/* Social */}
              <div className="bg-[#f5f5f5] rounded-2xl p-8">
                <h3 className="font-bold text-[#003087] text-lg mb-4">Follow Our Journey</h3>
                <p className="text-gray-500 text-sm mb-5">Stay updated with project progress, photos, and community stories on our social channels.</p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Facebook", icon: "👍", color: "#1877F2" },
                    { label: "Instagram", icon: "📸", color: "#E1306C" },
                    { label: "Twitter / X", icon: "🐦", color: "#1DA1F2" },
                    { label: "YouTube", icon: "▶️", color: "#FF0000" },
                  ].map((s) => (
                    <a key={s.label} href="#" className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                      <span className="text-xl">{s.icon}</span>
                      <span className="text-[#003087] font-semibold text-sm">{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Proverb */}
              <div className="bg-[#F2A900] rounded-2xl p-6 text-center">
                <p className="text-[#003087] font-bold text-lg italic mb-2">
                  &quot;Gacmo Wadajir bay Wax ku Gooyaan&quot;
                </p>
                <p className="text-[#003087]/80 text-sm">Together, hands can cut through anything.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
