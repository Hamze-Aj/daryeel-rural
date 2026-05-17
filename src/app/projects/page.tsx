import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Daryeel's flagship projects: Shaykosh Boarding School renovation, girls' education, tree planting, WASH facilities, and community development in the Somali Region of Ethiopia.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#003087] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#F2A900]/20 border border-[#F2A900]/40 text-[#F2A900] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            Programs &amp; Projects
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Our Projects &amp; <span className="gradient-text-gold">Programs</span>
          </h1>
          <p className="text-blue-100 text-xl max-w-3xl mx-auto leading-relaxed">
            From renovating a historic boarding school to planting a thousand trees — every project is a
            step toward a transformed Somali Region.
          </p>
        </div>
      </section>

      {/* ── PROJECT 1: SHAYKOSH BOARDING SCHOOL ── */}
      <section id="school" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-tag">🏫 Flagship Project</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003087] mt-2 mb-5 leading-tight">
                Shaykosh Boarding School
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Shaykosh Boarding School in <strong>Kebri Dahar, Somali Region</strong> is Daryeel&apos;s
                flagship project. Founded decades ago, the school serves students from seven zones across
                the region — many of whom travel great distances from remote pastoralist communities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                When Daryeel first assessed the school, they found dilapidated infrastructure, no proper
                library, collapsed ceilings, unsafe dormitories, non-functional toilets — and yet 454
                resilient boarding students showing up every day. The diaspora community answered.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {[
                  { n: "454", l: "Boarding Students" },
                  { n: "62+", l: "Girls Enrolled" },
                  { n: "7", l: "Zones Represented" },
                  { n: "7,102", l: "Total Students" },
                  { n: "8+", l: "WASH Units Built" },
                  { n: "1,000+", l: "Trees Planted" },
                ].map((s) => (
                  <div key={s.l} className="stat-card p-4">
                    <div className="text-2xl font-black text-[#003087]">{s.n}</div>
                    <div className="text-gray-500 text-xs mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Achievements list */}
              <h3 className="font-bold text-[#003087] mb-3">Major Achievements</h3>
              <ul className="space-y-2">
                {[
                  "Library renovation and complete furnishing with new books",
                  "New separate latrines for boys and girls",
                  "Modern handwashing stations at all key points",
                  "Expanded water supply system and new water tanks",
                  "Landmark main entrance gate constructed",
                  "Perimeter boundary wall built",
                  "Access road to school constructed",
                  "Solar-powered lighting in dormitories",
                  "University support teachers from Kebri Dahar",
                  "Teacher incentive programme to retain quality staff",
                ].map((a) => (
                  <li key={a} className="flex items-start gap-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 text-[#F2A900] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {a}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="img-card rounded-2xl overflow-hidden h-72 shadow-xl">
                <Image src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=900&q=80" alt="Shaykosh school building" width={900} height={500} className="w-full h-full object-cover" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="img-card rounded-xl overflow-hidden h-44 shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1613963933729-ab1a10f30f67?w=600&q=80" alt="Library" width={600} height={350} className="w-full h-full object-cover" />
                </div>
                <div className="img-card rounded-xl overflow-hidden h-44 shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&q=80" alt="Students studying" width={600} height={350} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT 2: GIRLS' EDUCATION ── */}
      <section id="girls" className="py-24 bg-[#f5f5f5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <div className="img-card rounded-2xl overflow-hidden h-80 shadow-xl">
                <Image src="https://images.unsplash.com/photo-1608342499268-aa5dcf1c6b59?w=900&q=80" alt="Girls in school" width={900} height={600} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-tag">👧 Empowerment</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003087] mt-2 mb-5 leading-tight">
                Girls&apos; Education &amp; Women&apos;s Empowerment
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                In pastoralist communities, girls face unique barriers to education — early marriage,
                distance from schools, lack of safe sanitation, and cultural expectations. Daryeel
                directly addresses each of these barriers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Currently <strong className="text-[#003087]">62 girls</strong> are enrolled at Shaykosh
                Boarding School — a number we are working to dramatically increase. Our goal is to reach
                at least <strong className="text-[#003087]">30% female enrollment</strong> through targeted
                support and infrastructure improvements.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "🚻", title: "Safe, Separate Sanitation", desc: "Dedicated toilets, shower facilities, and handwashing stations exclusively for girls — critical for keeping them in school." },
                  { icon: "👗", title: "Uniforms & School Supplies", desc: "Providing full school uniforms, exercise books, pens, and bags to girls from the most vulnerable families." },
                  { icon: "🛏️", title: "Safe Dormitories", desc: "Renovated, secure dormitory spaces where girls sleep safely with proper lighting and separate access." },
                  { icon: "📖", title: "Academic Support", desc: "Extra tutoring, mentorship from university volunteers, and library access specifically encouraged for girls." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 bg-white rounded-xl p-4 shadow-sm">
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="text-[#003087] font-bold text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT 3: TREE PLANTING ── */}
      <section id="environment" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-tag">🌳 Sustainability</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003087] mt-2 mb-5 leading-tight">
                Environmental Sustainability &amp; Tree Planting
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                The Somali Region faces severe environmental degradation from decades of overgrazing,
                drought, and deforestation. Daryeel is proud to lead a school-based greening initiative
                that transforms bare, dusty compounds into lush, productive green spaces.
              </p>

              <div className="bg-[#003087] text-white rounded-2xl p-6 mb-6">
                <div className="text-4xl font-black text-[#F2A900] mb-1">1,000+</div>
                <div className="text-blue-200 text-sm font-medium">Trees Successfully Planted</div>
                <div className="mt-3 text-blue-100 text-sm">
                  Including mango, papaya, avocado, moringa, and indigenous shade trees across the school compound.
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { emoji: "🥭", title: "Fruit Trees", desc: "Mango, papaya, avocado providing nutrition and income" },
                  { emoji: "🌿", title: "Vegetable Gardens", desc: "Fresh produce grown by students for school meals" },
                  { emoji: "💧", title: "Rainwater Harvesting", desc: "Collection systems reducing dependence on external water" },
                  { emoji: "☀️", title: "Solar Energy", desc: "Solar panels reducing carbon footprint and energy costs" },
                ].map((i) => (
                  <div key={i.title} className="bg-[#f5f5f5] rounded-xl p-4">
                    <span className="text-2xl block mb-2">{i.emoji}</span>
                    <h4 className="text-[#003087] font-bold text-sm mb-1">{i.title}</h4>
                    <p className="text-gray-500 text-xs">{i.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="img-card rounded-2xl overflow-hidden h-72 shadow-xl">
                <Image src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=900&q=80" alt="Tree planting" width={900} height={500} className="w-full h-full object-cover" />
              </div>
              <div className="img-card rounded-2xl overflow-hidden h-52 shadow-xl">
                <Image src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=900&q=80" alt="Green campus" width={900} height={400} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT 4: WASH ── */}
      <section id="wash" className="py-24 bg-[#f5f5f5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <div className="img-card rounded-2xl overflow-hidden h-80 shadow-xl">
                <Image src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=900&q=80" alt="Clean water facilities" width={900} height={600} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-tag">🚰 WASH Program</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#003087] mt-2 mb-5 leading-tight">
                Water, Sanitation &amp; Hygiene (WASH)
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Before Daryeel&apos;s intervention, Shaykosh School had no functioning toilets for girls,
                inadequate water supply, and no handwashing infrastructure. This was not just uncomfortable
                — it was a major reason girls dropped out of school.
              </p>
              <div className="space-y-4">
                {[
                  { n: "8+", l: "New Toilet Units Built", sub: "Separate facilities for boys and girls" },
                  { n: "6+", l: "Shower Units", sub: "Private shower blocks for female students" },
                  { n: "12+", l: "Handwashing Stations", sub: "At classroom blocks, dining, and dormitories" },
                  { n: "2", l: "New Water Tanks", sub: "Large-capacity storage for the whole campus" },
                ].map((s) => (
                  <div key={s.l} className="flex items-center gap-5 bg-white rounded-xl p-4 shadow-sm">
                    <div className="w-14 h-14 rounded-full bg-[#003087] flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-lg">{s.n}</span>
                    </div>
                    <div>
                      <p className="text-[#003087] font-bold">{s.l}</p>
                      <p className="text-gray-400 text-xs">{s.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECT 5: COMMUNITY DEVELOPMENT ── */}
      <section id="community" className="py-24 bg-[#003087] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#F2A900]/20 border border-[#F2A900]/40 text-[#F2A900] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-4">
              🏘️ Community
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Community Development</h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Beyond the school, Daryeel is committed to the holistic development of Kebri Dahar and
              surrounding communities. Future projects include:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: "🕌", title: "Community Mosque", desc: "Construction and renovation of community mosques to serve as centers of spiritual and social gathering." },
              { emoji: "🏛️", title: "Community Hall", desc: "A multipurpose hall for community meetings, vocational training, women's circles, and cultural events." },
              { emoji: "💻", title: "ICT Lab", desc: "A computer laboratory at Shaykosh School to equip students with digital skills for the modern economy." },
              { emoji: "🍳", title: "School Kitchen", desc: "A modern, hygienic kitchen to provide nutritious daily meals for all 454 boarding students." },
              { emoji: "🏠", title: "Dormitory Extension", desc: "New dormitory blocks to accommodate growing enrollment, especially as girls' enrollment increases." },
              { emoji: "📐", title: "New Classroom Blocks", desc: "Additional classrooms to reduce overcrowding and support the 7,102 total students at the school." },
            ].map((p) => (
              <div key={p.title} className="bg-white/10 border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <span className="text-3xl block mb-3">{p.emoji}</span>
                <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-blue-200 mb-6">
              Total estimated funding gap:{" "}
              <strong className="text-[#F2A900] text-xl">8,940,000 ETB</strong>
            </p>
            <Link href="/get-involved#donate" className="btn-primary text-base">
              Help Close the Gap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
