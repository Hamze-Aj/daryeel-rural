"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

const slides = [
  {
    src: "/images/aerial-campus-gate.jpeg",
    cap: "Shaykosh Boarding School Campus",
    desc: "Aerial view of the school showing the landmark entrance gate, boundary wall, and growing green campus.",
    tag: "Infrastructure",
  },
  {
    src: "/images/aerial-campus-watertower.jpeg",
    cap: "Campus from Above",
    desc: "Drone view revealing the water tower, gardens, and renovated classroom blocks across the school grounds.",
    tag: "Infrastructure",
  },
  {
    src: "/images/students-reading-classroom.jpeg",
    cap: "Students in Renovated Classrooms",
    desc: "Students engaged in active learning inside the newly renovated, brightly lit classrooms.",
    tag: "Education",
  },
  {
    src: "/images/students-yellow-uniforms.jpeg",
    cap: "Students Studying Together",
    desc: "Boarding students in uniform reading and studying — 454 students now benefit from improved facilities.",
    tag: "Education",
  },
  {
    src: "/images/girls-studying.jpeg",
    cap: "Girls in School",
    desc: "Over 62 girls now enrolled, breaking barriers for pastoralist communities across 7 zones.",
    tag: "Girls' Education",
  },
  {
    src: "/images/teacher-with-students.jpeg",
    cap: "University Volunteers Teaching",
    desc: "University volunteers and teacher incentive programs have dramatically improved academic performance.",
    tag: "Academics",
  },
  {
    src: "/images/library-bookshelf.jpeg",
    cap: "Library Fully Stocked",
    desc: "Hundreds of donated books now fill the renovated library shelves — a first for Shaykosh Boarding School.",
    tag: "Library",
  },
  {
    src: "/images/library-textbooks.jpeg",
    cap: "Textbooks for Every Student",
    desc: "New textbooks across all subjects are now available to every student through the renovated library.",
    tag: "Library",
  },
  {
    src: "/images/compound-wall-trees.jpeg",
    cap: "Green Campus – Trees Planted",
    desc: "1,000+ mango, papaya, and shade trees now line the newly built boundary wall, transforming the campus.",
    tag: "Environment",
  },
  {
    src: "/images/solar-lighting-night.jpeg",
    cap: "Solar Lighting Installed",
    desc: "Solar-powered street lights illuminate the campus at night, enabling students to study after dark safely.",
    tag: "Solar Energy",
  },
  {
    src: "/images/school-gate-teachers.jpeg",
    cap: "Shaykosh Boarding School Gate",
    desc: "The landmark entrance gate now stands proudly at the school — a symbol of community pride and progress.",
    tag: "Infrastructure",
  },
  {
    src: "/images/officials-vegetable-garden.jpeg",
    cap: "Vegetable Garden on Campus",
    desc: "Officials visiting the school's new vegetable garden — growing food for students and teaching agriculture.",
    tag: "Sustainability",
  },
  {
    src: "/images/project-launch-community.jpeg",
    cap: "Community Groundbreaking",
    desc: "Community leaders and Daryeel volunteers unite to lay the foundation for the next phase of construction.",
    tag: "Community",
  },
  {
    src: "/images/honorary-certificate-men.jpeg",
    cap: "Honorary Certificates Awarded",
    desc: "Shaykosh Boarding School presents honorary certificates recognising Daryeel's transformative partnership.",
    tag: "Recognition",
  },
  {
    src: "/images/girls-water-tap.jpeg",
    cap: "Girls Accessing Clean Water",
    desc: "12+ handwashing stations and new water taps now serve students — a major sanitation milestone.",
    tag: "WASH",
  },
  {
    src: "/images/classroom-full-view.jpeg",
    cap: "Full Classroom in Session",
    desc: "A full cohort of students learning together in a renovated classroom block with proper lighting and seating.",
    tag: "Education",
  },
];

export default function VisualCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setActive(idx);
      setTimeout(() => setAnimating(false), 600);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((active + 1) % slides.length);
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + slides.length) % slides.length);
  }, [active, goTo]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, [paused, next]);

  const current = slides[active];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-tag">Visual Evidence</span>
          <h2 className="text-3xl font-bold text-[#003087] mt-2">
            Seeing Is <span className="gradient-text-gold">Believing</span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm leading-relaxed">
            Real photos from Shaykosh Boarding School — every image tells the story of change made possible by your support.
          </p>
        </div>

        {/* Main Carousel */}
        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: "#001f5c" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main Image */}
          <div className="relative h-[420px] sm:h-[540px]">
            {slides.map((slide, i) => (
              <div
                key={slide.cap}
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: i === active ? 1 : 0, zIndex: i === active ? 1 : 0 }}
              >
                <Image
                  src={slide.src}
                  alt={slide.cap}
                  fill
                  className="object-cover"
                  priority={i === 0}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c]/90 via-[#001f5c]/20 to-transparent" />
              </div>
            ))}

            {/* Tag pill */}
            <div className="absolute top-6 left-6 z-10">
              <span className="bg-[#F2A900] text-[#003087] text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                {current.tag}
              </span>
            </div>

            {/* Slide counter */}
            <div className="absolute top-6 right-6 z-10 bg-black/30 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-semibold">
              {paused ? "⏸" : "▶"} {active + 1} / {slides.length}
            </div>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-10">
              <h3 className="text-white text-xl sm:text-3xl font-bold mb-2 drop-shadow-lg">
                {current.cap}
              </h3>
              <p className="text-blue-200 text-sm sm:text-base max-w-2xl leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center hover:bg-white/40 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 p-3 bg-[#001233] overflow-x-auto">
            {slides.map((slide, i) => (
              <button
                key={slide.cap}
                onClick={() => goTo(i)}
                aria-label={`View ${slide.cap}`}
                className={`relative flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  i === active
                    ? "border-[#F2A900] scale-105 shadow-lg shadow-[#F2A900]/30"
                    : "border-white/10 opacity-50 hover:opacity-90 hover:border-white/40"
                }`}
              >
                <Image src={slide.src} alt={slide.cap} fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-1.5 py-4 bg-[#001233]">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "w-8 h-2 bg-[#F2A900]"
                    : "w-2 h-2 bg-white/25 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 border-2 border-[#003087] text-[#003087] font-bold px-8 py-3.5 rounded-full hover:bg-[#003087] hover:text-white transition-all duration-300"
          >
            View Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
