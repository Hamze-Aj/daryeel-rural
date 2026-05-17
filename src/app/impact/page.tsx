import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impact & Achievements",
  description: "See the real-world impact of Daryeel — statistics, before & after transformations, and funding progress.",
};

const stats = [
  { n: "454", label: "Boarding Students", icon: "🧑‍🎒" },
  { n: "62+", label: "Girls Enrolled", icon: "👧" },
  { n: "7,102", label: "Total Students", icon: "📚" },
  { n: "7", label: "Zones Reached", icon: "🗺️" },
  { n: "1,000+", label: "Trees Planted", icon: "🌳" },
  { n: "8+", label: "WASH Facilities", icon: "🚿" },
  { n: "3+", label: "Km Road Built", icon: "🛣️" },
  { n: "100%", label: "Transparency", icon: "🔍" },
];

const beforeAfter = [
  { area: "Library", icon: "📚", before: "Collapsed ceiling, no furniture, unusable space", after: "Fully renovated with shelving, reading tables, chairs, and hundreds of donated books" },
  { area: "Sanitation", icon: "🚿", before: "No functioning toilets for girls, no handwashing facilities", after: "8+ toilet units, 6 shower stalls, 12+ handwashing stations — separate for boys and girls" },
  { area: "Compound", icon: "🌳", before: "Bare, dusty, no shade, no security perimeter", after: "1,000+ trees, vegetable gardens, boundary wall, landmark gate, solar lighting" },
  { area: "Water", icon: "💧", before: "Intermittent access, students walking far for water", after: "2 large water tanks, piped water to dormitories, WASH areas, and classrooms" },
  { area: "Infrastructure", icon: "🏗️", before: "No perimeter wall, no proper entrance, difficult road access", after: "Full boundary wall, landmark entrance gate, 3km access road constructed" },
  { area: "Academics", icon: "🎓", before: "Understaffed, no teacher incentives, poor exam results", after: "University volunteers, teacher incentive program, improved exam performance" },
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
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#003087] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80')", backgroundSize: "cover" }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#F2A900]/20 border border-[#F2A900]/40 text-[#F2A900] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">Real Results</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Impact &amp; <span className="gradient-text-gold">Achievements</span></h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">Every donation made a measurable difference. Here&apos;s what we&apos;ve accomplished together.</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">By The Numbers</span>
            <h2 className="text-3xl font-bold text-[#003087] mt-2">The Numbers Speak</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="stat-card group">
                <span className="text-4xl block mb-3">{s.icon}</span>
                <div className="text-3xl sm:text-4xl font-black text-[#003087] mb-1">{s.n}</div>
                <div className="text-gray-500 text-sm font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Transformation</span>
            <h2 className="text-3xl font-bold text-[#003087] mt-2">Before &amp; After Daryeel</h2>
          </div>
          <div className="space-y-4">
            {beforeAfter.map((item) => (
              <div key={item.area} className="bg-white rounded-2xl overflow-hidden shadow-md">
                <div className="grid md:grid-cols-[120px_1fr_1fr]">
                  <div className="bg-[#003087] text-white flex flex-col items-center justify-center px-5 py-5">
                    <span className="text-3xl mb-1">{item.icon}</span>
                    <span className="font-bold text-xs text-center">{item.area}</span>
                  </div>
                  <div className="p-5 border-r border-gray-100">
                    <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2">✗ Before</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.before}</p>
                  </div>
                  <div className="p-5 bg-green-50">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-wider mb-2">✓ After Daryeel</p>
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Visual Evidence</span>
            <h2 className="text-3xl font-bold text-[#003087] mt-2">Seeing Is Believing</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "https://images.unsplash.com/photo-1613963933729-ab1a10f30f67?w=700&q=80", cap: "Renovated Library" },
              { src: "https://images.unsplash.com/photo-1608342499268-aa5dcf1c6b59?w=700&q=80", cap: "Girls in School Uniforms" },
              { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=700&q=80", cap: "Trees Planted on Campus" },
              { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=700&q=80", cap: "Students in Quality Learning" },
              { src: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=700&q=80", cap: "New WASH Facilities" },
              { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80", cap: "Renovated Study Areas" },
            ].map((img) => (
              <div key={img.cap} className="gallery-item rounded-2xl h-52 shadow-md">
                <Image src={img.src} alt={img.cap} width={700} height={400} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/gallery" className="inline-flex items-center gap-2 border-2 border-[#003087] text-[#003087] font-bold px-8 py-3.5 rounded-full hover:bg-[#003087] hover:text-white transition-all duration-300">
              View Full Gallery →
            </Link>
          </div>
        </div>
      </section>

      {/* Funding Gap */}
      <section className="py-20 bg-[#003087]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block bg-[#F2A900]/20 border border-[#F2A900]/40 text-[#F2A900] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-5">Funding Status</span>
              <h2 className="text-3xl font-bold text-white mb-5">The Work Continues</h2>
              <p className="text-blue-200 leading-relaxed mb-6">
                A <strong className="text-[#F2A900]">funding gap of 8,940,000 ETB (~$160,000 USD)</strong> remains to complete critical infrastructure. Your donation today directly closes this gap.
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
              <Link href="/get-involved#donate" className="btn-primary">Help Close the Gap</Link>
            </div>
            <div>
              <h3 className="text-[#F2A900] font-bold text-lg mb-5">Remaining Priority Projects</h3>
              <div className="space-y-3">
                {fundingItems.map((f) => (
                  <div key={f.item} className="bg-white/10 border border-white/10 rounded-xl p-4 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-white font-semibold text-sm">{f.item}</p>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full mt-1 inline-block ${f.priority === "Critical" ? "bg-red-500/30 text-red-300" : f.priority === "High" ? "bg-orange-500/30 text-orange-300" : "bg-blue-500/30 text-blue-300"}`}>
                        {f.priority}
                      </span>
                    </div>
                    <div className="text-[#F2A900] font-black text-sm whitespace-nowrap">{f.cost}</div>
                  </div>
                ))}
                <div className="bg-[#F2A900] rounded-xl p-4 flex items-center justify-between">
                  <span className="text-[#003087] font-black">Total Funding Gap</span>
                  <span className="text-[#003087] font-black text-lg">8,940,000 ETB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
