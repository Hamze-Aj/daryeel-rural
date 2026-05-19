import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import VisualCarousel from "@/components/home/VisualCarousel";

export const metadata: Metadata = {
  title: "Impact & Achievements",
  description:
    "See the real-world impact of Daryeel — statistics, before & after transformations, and funding progress.",
};

const stats = [
  {
    n: "454",
    label: "Boarding Students",
    icon: "🧑‍🎒",
    img: "/images/students-reading-classroom.jpeg",
  },
  {
    n: "62+",
    label: "Girls Enrolled",
    icon: "👧",
    img: "/images/girls-studying.jpeg",
  },
  {
    n: "7,102",
    label: "Total Students",
    icon: "📚",
    img: "/images/classroom-full-view.jpeg",
  },
  {
    n: "7",
    label: "Zones Reached",
    icon: "🗺️",
    img: "/images/aerial-campus-gate.jpeg",
  },
  {
    n: "1,000+",
    label: "Trees Planted",
    icon: "🌳",
    img: "/images/compound-wall-trees.jpeg",
  },
  {
    n: "8+",
    label: "WASH Facilities",
    icon: "🚿",
    img: "/images/girls-water-tap.jpeg",
  },
  {
    n: "3+",
    label: "Km Road Built",
    icon: "🛣️",
    img: "/images/aerial-campus-watertower.jpeg",
  },
  {
    n: "100%",
    label: "Transparency",
    icon: "🔍",
    img: "/images/honorary-certificate-men.jpeg",
  },
];

const beforeAfter = [
  {
    area: "Library",
    icon: "📚",
    before: "Collapsed ceiling, no furniture, unusable space",
    after:
      "Fully renovated with shelving, reading tables, chairs, and hundreds of donated books",
    img: "/images/library-bookshelf.jpeg",
  },
  {
    area: "Sanitation",
    icon: "🚿",
    before: "No functioning toilets for girls, no handwashing facilities",
    after:
      "8+ toilet units, 6 shower stalls, 12+ handwashing stations — separate for boys and girls",
    img: "/images/girls-handwashing.jpeg",
  },
  {
    area: "Compound",
    icon: "🌳",
    before: "Bare, dusty, no shade, no security perimeter",
    after:
      "1,000+ trees, vegetable gardens, boundary wall, landmark gate, solar lighting",
    img: "/images/compound-wall-trees-2.jpeg",
  },
  {
    area: "Water",
    icon: "💧",
    before: "Intermittent access, students walking far for water",
    after:
      "2 large water tanks, piped water to dormitories, WASH areas, and classrooms",
    img: "/images/girls-water-tap-2.jpeg",
  },
  {
    area: "Infrastructure",
    icon: "🏗️",
    before: "No perimeter wall, no proper entrance, difficult road access",
    after:
      "Full boundary wall, landmark entrance gate, 3km access road constructed",
    img: "/images/school-gate-teachers.jpeg",
  },
  {
    area: "Academics",
    icon: "🎓",
    before: "Understaffed, no teacher incentives, poor exam results",
    after:
      "University volunteers, teacher incentive program, improved exam performance",
    img: "/images/teacher-with-students.jpeg",
  },
];

const fundingItems = [
  { item: "New Kitchen Block", cost: "2,500,000 ETB", priority: "Critical" },
  { item: "ICT Computer Lab", cost: "1,800,000 ETB", priority: "High" },
  { item: "Girls Dormitory Extension", cost: "2,200,000 ETB", priority: "Critical" },
  { item: "New Classroom Blocks", cost: "1,440,000 ETB", priority: "High" },
  { item: "Community Hall", cost: "600,000 ETB", priority: "Medium" },
  { item: "Phase 2 Tree Planting", cost: "400,000 ETB", priority: "Medium" },
];

export default function ImpactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative py-28 bg-[#003087] overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/aerial-campus-gate.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#F2A900]/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#F2A900]/20 border border-[#F2A900]/40 text-[#F2A900] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            Real Results
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight">
            Impact &amp; <span className="gradient-text-gold">Achievements</span>
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto leading-relaxed">
            Every donation made a measurable difference. Here&apos;s what we&apos;ve accomplished
            together at Shaykosh Boarding School.
          </p>
        </div>
      </section>

      {/* ── Stats with image backgrounds ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">By The Numbers</span>
            <h2 className="text-3xl font-bold text-[#003087] mt-2">The Numbers Speak</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="relative rounded-2xl overflow-hidden group shadow-md border border-gray-100 h-48 cursor-default"
              >
                <Image
                  src={s.img}
                  alt={s.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003087]/92 via-[#003087]/55 to-[#003087]/10 group-hover:from-[#003087]/95 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <span className="text-3xl block mb-2 drop-shadow">{s.icon}</span>
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1 drop-shadow">
                    {s.n}
                  </div>
                  <div className="text-[#F2A900] text-xs font-bold uppercase tracking-wide">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before & After ── */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-tag">Transformation</span>
            <h2 className="text-3xl font-bold text-[#003087] mt-2">Before &amp; After Daryeel</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {beforeAfter.map((item) => (
              <div
                key={item.area}
                className="bg-white rounded-3xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300"
              >
                {/* Photo header */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.area}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003087]/85 to-[#003087]/10" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-2xl drop-shadow">{item.icon}</span>
                    <span className="text-white font-bold text-lg drop-shadow">{item.area}</span>
                  </div>
                </div>

                {/* Before / After columns */}
                <div className="grid grid-cols-2 divide-x divide-gray-100">
                  <div className="p-4">
                    <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                      <span>✗</span> Before
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.before}</p>
                  </div>
                  <div className="p-4 bg-green-50">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2 flex items-center gap-1">
                      <span>✓</span> After
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visual Evidence Auto Carousel ── */}
      <VisualCarousel />

      {/* ── Funding Gap ── */}
      <section className="py-20 bg-[#003087]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left: progress */}
            <div>
              <span className="inline-block bg-[#F2A900]/20 border border-[#F2A900]/40 text-[#F2A900] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-5">
                Funding Status
              </span>
              <h2 className="text-3xl font-bold text-white mb-5">The Work Continues</h2>
              <p className="text-blue-200 leading-relaxed mb-6">
                A{" "}
                <strong className="text-[#F2A900]">
                  funding gap of 8,940,000 ETB (~$160,000 USD)
                </strong>{" "}
                remains to complete critical infrastructure. Your donation today directly closes this
                gap.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { label: "Overall Completion", pct: 62 },
                  { label: "Girls Enrollment Target (30%)", pct: 41 },
                  { label: "Green Campus (5,000 trees)", pct: 20 },
                ].map((p) => (
                  <div key={p.label}>
                    <div className="flex justify-between text-sm text-blue-200 mb-1.5">
                      <span>{p.label}</span>
                      <span className="text-[#F2A900] font-bold">{p.pct}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${p.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/get-involved#donate" className="btn-primary">
                Help Close the Gap
              </Link>
            </div>

            {/* Right: photo collage */}
            <div className="grid grid-cols-2 gap-3">
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/students-group-discussion.jpeg"
                  alt="Students discussing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#003087]/25" />
              </div>
              <div className="relative h-44 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/girls-studying.jpeg"
                  alt="Girls studying"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#003087]/25" />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden col-span-2 shadow-lg">
                <Image
                  src="/images/project-launch-community.jpeg"
                  alt="Community project launch"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003087]/80 to-[#003087]/10" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-white text-sm font-medium italic">
                    &quot;Every stone laid is a step toward a brighter future for our children.&quot;
                  </p>
                  <p className="text-[#F2A900] text-xs font-bold mt-1">— Community Leader, Shaykosh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Funding table */}
          <div className="mt-14">
            <h3 className="text-[#F2A900] font-bold text-lg mb-5">Remaining Priority Projects</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {fundingItems.map((f) => (
                <div
                  key={f.item}
                  className="bg-white/10 border border-white/10 rounded-xl p-4 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-white font-semibold text-sm">{f.item}</p>
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full mt-1 inline-block ${
                        f.priority === "Critical"
                          ? "bg-red-500/30 text-red-300"
                          : f.priority === "High"
                          ? "bg-orange-500/30 text-orange-300"
                          : "bg-blue-500/30 text-blue-300"
                      }`}
                    >
                      {f.priority}
                    </span>
                  </div>
                  <div className="text-[#F2A900] font-black text-sm whitespace-nowrap">{f.cost}</div>
                </div>
              ))}
            </div>
            <div className="bg-[#F2A900] rounded-xl p-4 flex items-center justify-between mt-3">
              <span className="text-[#003087] font-black">Total Funding Gap</span>
              <span className="text-[#003087] font-black text-lg">8,940,000 ETB</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
