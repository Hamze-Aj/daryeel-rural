import Link from "next/link";
import Image from "next/image";

const achievements = [
  {
    icon: "📚",
    title: "Library Renovated & Furnished",
    desc: "Complete renovation of the school library with new shelving, reading tables, chairs, and hundreds of books donated.",
  },
  {
    icon: "🚿",
    title: "New Restrooms & Showers",
    desc: "Separate modern toilet and shower blocks for boys and girls, with handwashing stations at every entrance.",
  },
  {
    icon: "💧",
    title: "Water Supply Expanded",
    desc: "New water tanks and piping extended to dormitories, classrooms, and WASH facilities across the campus.",
  },
  {
    icon: "🌳",
    title: "1,000+ Trees Planted",
    desc: "Mango, papaya, avocado, and shade trees transforming a bare compound into a lush green campus.",
  },
  {
    icon: "🏗️",
    title: "Boundary Wall & Main Gate",
    desc: "New perimeter boundary wall and landmark entrance gate built, securing and beautifying the school campus.",
  },
  {
    icon: "⚡",
    title: "Solar Lighting Installed",
    desc: "Solar-powered lighting for dormitories enabling students to study safely after dark.",
  },
];

export default function ImpactHighlight() {
  return (
    <section className="py-24 bg-[#003087] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#F2A900]/10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#F2A900]/20 border border-[#F2A900]/40 text-[#F2A900] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-4">
            Real Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Achievements on the Ground
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto text-base leading-relaxed">
            Every donation translates directly into tangible improvements that
            students and teachers see and feel every single day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-3xl block mb-3">{a.icon}</span>
              <h3 className="text-white font-bold text-base mb-2">{a.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        {/* Before/After visual */}
        <div className="bg-white/10 rounded-2xl p-6 md:p-10 border border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-[#F2A900] font-bold text-xl mb-3">
                The Funding Gap
              </h3>
              <p className="text-blue-100 text-base leading-relaxed mb-5">
                Daryeel has raised and deployed significant funds, but a{" "}
                <strong className="text-white">
                  funding gap of 8,940,000 ETB
                </strong>{" "}
                remains to complete essential infrastructure including a new
                kitchen, ICT lab, dormitory extensions, and classroom blocks.
              </p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-blue-200">Raised So Far</span>
                    <span className="text-[#F2A900] font-bold">62%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "62%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-blue-200">Girls Enrollment Goal</span>
                    <span className="text-[#F2A900] font-bold">41%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "41%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-blue-200">Tree Planting Target</span>
                    <span className="text-[#F2A900] font-bold">80%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: "80%" }} />
                  </div>
                </div>
              </div>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 mt-6 bg-[#F2A900] text-[#003087] font-bold px-6 py-3 rounded-full hover:bg-[#ffc333] transition-all duration-300"
              >
                See Full Impact Report
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/aerial-campus-gate.jpeg"
                alt="Shaykosh Boarding School aerial view"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003087]/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium italic">
                  &quot;For the first time, our students have a proper library
                  with real books. The change is remarkable.&quot;
                </p>
                <p className="text-[#F2A900] text-xs font-bold mt-1">
                  — School Principal, Shaykosh
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
