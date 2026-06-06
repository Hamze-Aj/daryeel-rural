"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const pillars = [
  {
    icon: "🚻",
    title: "Safe, Separate Sanitation",
    desc: "Dedicated toilets, shower facilities, and handwashing stations exclusively for girls — critical for keeping them in school.",
  },
  {
    icon: "👗",
    title: "Uniforms & School Supplies",
    desc: "Providing full school uniforms, exercise books, pens, and bags to girls from the most vulnerable families.",
  },
  {
    icon: "🛏️",
    title: "Safe Dormitories",
    desc: "Renovated, secure dormitory spaces where girls sleep safely with proper lighting and separate access.",
  },
  {
    icon: "📖",
    title: "Academic Support",
    desc: "Extra tutoring, mentorship from university volunteers, and library access specifically encouraged for girls.",
  },
];

const girlImages = [
  {
    src: "/girl-images/WhatsApp Image 2026-06-06 at 9.23.42 PM.jpeg",
    alt: "Girls at Shaykosh Boarding School",
  },
  {
    src: "/girl-images/WhatsApp Image 2026-06-06 at 9.23.43 PM.jpeg",
    alt: "Girls studying together",
  },
  {
    src: "/girl-images/WhatsApp Image 2026-06-06 at 9.23.43 PM (1).jpeg",
    alt: "Girl empowerment activities",
  },
  {
    src: "/girl-images/WhatsApp Image 2026-06-06 at 9.23.43 PM (2).jpeg",
    alt: "Girls in classroom",
  },
  {
    src: "/girl-images/WhatsApp Image 2026-06-06 at 9.23.43 PM (3).jpeg",
    alt: "Female students at school",
  },
  {
    src: "/girl-images/WhatsApp Image 2026-06-06 at 9.23.44 PM.jpeg",
    alt: "Girls education program",
  },
  {
    src: "/girl-images/WhatsApp Image 2026-06-06 at 9.23.44 PM (1).jpeg",
    alt: "Young girls learning",
  },
  {
    src: "/girl-images/WhatsApp Image 2026-06-06 at 9.23.44 PM (2).jpeg",
    alt: "Girls empowerment at Shaykosh",
  },
];

export default function GirlsEducationSection() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "linear-gradient(160deg, #001f5c 0%, #003087 55%, #0a3fa0 100%)" }}>
      {/* Decorative background blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#F2A900", transform: "translate(40%, -40%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#F2A900", transform: "translate(-40%, 40%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-5"
            style={{
              background: "rgba(242, 169, 0, 0.18)",
              border: "1px solid rgba(242, 169, 0, 0.4)",
              color: "#F2A900",
            }}
          >
            👧 Empowerment
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight">
            Girls&apos; Education &amp;{" "}
            <span className="gradient-text-gold">Empowerment</span>
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
            In pastoralist communities, girls face unique barriers to education — early marriage,
            distance from schools, lack of safe sanitation, and cultural expectations. Daryeel
            directly addresses each of these barriers.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left: Photo gallery / mosaic */}
          <div className="space-y-4">
            {/* Large featured image */}
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ height: "340px" }}
            >
              <Image
                src={girlImages[activeImage].src}
                alt={girlImages[activeImage].alt}
                fill
                className="object-cover transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,31,92,0.6) 0%, transparent 60%)",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">
                  {girlImages[activeImage].alt}
                </p>
              </div>
              {/* Image counter badge */}
              <div
                className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: "rgba(242,169,0,0.9)", color: "#003087" }}
              >
                {activeImage + 1} / {girlImages.length}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="grid grid-cols-4 gap-2">
              {girlImages.slice(0, 4).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className="relative rounded-xl overflow-hidden focus:outline-none transition-all duration-200"
                  style={{
                    height: "80px",
                    border:
                      activeImage === idx
                        ? "3px solid #F2A900"
                        : "3px solid transparent",
                    opacity: activeImage === idx ? 1 : 0.65,
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
            <div className="grid grid-cols-4 gap-2">
              {girlImages.slice(4).map((img, idx) => (
                <button
                  key={idx + 4}
                  onClick={() => setActiveImage(idx + 4)}
                  className="relative rounded-xl overflow-hidden focus:outline-none transition-all duration-200"
                  style={{
                    height: "80px",
                    border:
                      activeImage === idx + 4
                        ? "3px solid #F2A900"
                        : "3px solid transparent",
                    opacity: activeImage === idx + 4 ? 1 : 0.65,
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="120px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div>
            {/* Goal highlight card */}
            <div
              className="rounded-2xl p-6 mb-7"
              style={{
                background: "rgba(242, 169, 0, 0.12)",
                border: "1px solid rgba(242, 169, 0, 0.3)",
              }}
            >
              <div className="flex items-end gap-4 mb-3">
                <div
                  className="text-5xl font-black leading-none"
                  style={{ color: "#F2A900" }}
                >
                  62
                </div>
                <div className="text-blue-200 text-sm leading-snug pb-1">
                  Girls currently enrolled<br />at Shaykosh Boarding School
                </div>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed mb-4">
                Our goal is to reach at least{" "}
                <strong className="text-white">70% female enrollment</strong>{" "}
                through targeted support and infrastructure improvements.
              </p>
              {/* Progress bar toward 30% goal */}
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span style={{ color: "#F2A900" }} className="font-semibold">Current: ~14%</span>
                  <span className="text-blue-300">Goal: 70%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "77%" }} />
                </div>
              </div>
            </div>

            {/* Pillar cards */}
            <div className="space-y-3 mb-8">
              {pillars.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl p-4 transition-all duration-300"
                  style={{
                    background: "rgba(255, 255, 255, 0.07)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "rgba(242, 169, 0, 0.12)";
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(242, 169, 0, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background =
                      "rgba(255, 255, 255, 0.07)";
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(255, 255, 255, 0.1)";
                  }}
                >
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-blue-200 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/projects#girls"
              className="inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                background: "#F2A900",
                color: "#003087",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = "#ffc333")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = "#F2A900")
              }
            >
              Learn More About This Program
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom: 4-column photo strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {girlImages.slice(0, 4).map((img, idx) => (
            <div
              key={idx}
              className="gallery-item rounded-2xl overflow-hidden"
              style={{ height: "180px" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
