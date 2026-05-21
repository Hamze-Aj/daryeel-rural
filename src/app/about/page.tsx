import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Daryeel Rural Development For Action — our mission, vision, story, and the Minnesota diaspora partnership driving change in the Somali Region of Ethiopia.",
};

const values = [
  {
    icon: "🎓",
    title: "Quality Education",
    desc: "Every child deserves a quality education in a safe, well-equipped environment regardless of how remote their community is.",
  },
  {
    icon: "👧",
    title: "Girls' Empowerment",
    desc: "We prioritize girls' enrollment, safety, and wellbeing because educated women transform entire communities.",
  },
  {
    icon: "🌱",
    title: "Environmental Sustainability",
    desc: "Greening school compounds, planting food trees, and teaching eco-stewardship for the next generation.",
  },
  {
    icon: "🤲",
    title: "Community Ownership",
    desc: "Projects are co-designed with local leaders, implemented transparently, and maintained by the community.",
  },
  {
    icon: "🔍",
    title: "Transparency & Accountability",
    desc: "Every Ethiopian Birr and US Dollar is tracked, reported, and shared with donors and community stakeholders.",
  },
  {
    icon: "🤝",
    title: "Diaspora Partnership",
    desc: "Bridging Minnesota and the Somali Region with skills, resources, and a commitment to lasting change.",
  },
];

const team = [
  {
    name: "Eng. Khalifa",
    role: "Field Coordinator & Project Manager",
    phone: "+251-704737473",
    location: "Kebri Dahar, Ethiopia",
    emoji: "👷",
  },
  {
    name: "Board of Directors",
    role: "Diaspora Leadership",
    phone: "",
    location: "Minneapolis, Minnesota",
    emoji: "🇺🇸",
  },
  {
    name: "Local Advisory Council",
    role: "Community Partners & Elders",
    phone: "",
    location: "Somali Region, Ethiopia",
    emoji: "🤝",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#003087] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "url('/images/aerial-campus-watertower.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#F2A900]/10 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#F2A900]/20 border border-[#F2A900]/40 text-[#F2A900] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            About{" "}
            <span className="gradient-text-gold">Daryeel Rural Development</span>
          </h1>
          <p className="text-blue-100 text-xl max-w-3xl mx-auto leading-relaxed">
            Empowering Pastoralist Communities Through Education, Sustainability &amp; Dignity
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">Who We Are</span>
              <h2 className="text-3xl font-bold text-[#003087] mt-2 mb-6 leading-tight">
                A Diaspora-Led Organization with Deep Roots in the Somali Region
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                <strong>Daryeel Rural Development For Action (DRDA)</strong> was founded by a group
                of committed local young engineers and scholars in close collaboration with the Somali
                diaspora community in <strong>Minneapolis, Minnesota</strong>, as well as professionals,
                educators, and community leaders in Canada, Europe, and Australia. The organization was
                established by individuals who refused to stand by while children in their homeland were
                deprived of the education, opportunities, and dignity they deserve.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                DRDA&apos;s mission is to strengthen the capacity of poor and vulnerable communities in
                the Somali Region to withstand environmental and man-made shocks. The organization works
                to improve the living conditions of vulnerable groups through interventions in education,
                health, environmental protection, girls&apos; education, women&apos;s empowerment, and
                food security.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                DRDA works in close partnership with local government authorities, community elders, and
                educational institutions including <strong>Shaykosh Boarding School</strong>. Collaboration
                with school leadership, diaspora communities in Minneapolis, Europe, Canada, and Australia,
                as well as local stakeholders, ensures that every project is culturally appropriate,
                community-owned, sustainable, and effectively managed for long-term impact.
              </p>
              <div className="quote-block">
                <p className="text-gray-700 text-base">
                  &quot;Gacmo Wadajir bay Wax ku Gooyaan&quot;
                </p>
                <p className="text-[#003087] font-semibold text-sm mt-2">
                  Somali Proverb: &quot;Together, hands can cut through anything.&quot;
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Mission card */}
              <div className="bg-[#003087] rounded-2xl p-7 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-[#F2A900]/20 flex items-center justify-center text-xl">🎯</span>
                  <h3 className="font-bold text-xl">Our Mission</h3>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  To empower pastoralist communities in the Somali Region of Ethiopia through
                  transformative investments in education infrastructure, girls&apos; empowerment,
                  environmental sustainability, and dignified sanitation — bridging diaspora
                  resources with local needs.
                </p>
              </div>
              {/* Vision card */}
              <div className="bg-[#F2A900] rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-[#003087]/20 flex items-center justify-center text-xl">🔭</span>
                  <h3 className="font-bold text-[#003087] text-xl">Our Vision</h3>
                </div>
                <p className="text-[#003087]/80 leading-relaxed">
                  A Somali Region where every child — especially every girl — has access to
                  quality education in a green, safe, and dignified school environment, and where
                  communities thrive through self-reliance and sustainable development.
                </p>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { n: "2022", l: "Founded" },
                  { n: "MN", l: "USA Chapter" },
                  { n: "7+", l: "Zones Reached" },
                ].map((s) => (
                  <div key={s.l} className="bg-[#f5f5f5] rounded-xl p-4 text-center">
                    <div className="text-2xl font-black text-[#003087]">{s.n}</div>
                    <div className="text-xs text-gray-500 mt-1 font-medium">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="img-card rounded-2xl overflow-hidden h-96 shadow-2xl">
                <Image
                  src="/images/girls-studying.jpeg"
                  alt="Shaykosh Boarding School"
                  width={900}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-xl p-5 max-w-[200px]">
                <div className="text-3xl font-black text-[#003087]">7,102</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Total Students Impacted</div>
              </div>
            </div>
            <div>
              <span className="section-tag">Our Journey</span>
              <h2 className="text-3xl font-bold text-[#003087] mt-2 mb-6">
                From Minneapolis Living Rooms to the Fields of Kebri Dahar
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  It started with a conversation. In 2022, a group of Somali professionals in
                  Minneapolis asked a simple question: <em>&quot;What if we pooled our resources
                    and actually fixed the school back home?&quot;</em>
                </p>
                <p>
                  Within months, Daryeel was incorporated, a field coordinator was appointed,
                  and the first project assessment at <strong className="text-[#003087]">Shaykosh
                    Boarding School</strong> began. What they found was heartbreaking — no functioning
                  toilets for girls, a collapsed library ceiling, no perimeter wall, and 454
                  boarding students sleeping in overcrowded, unsafe dormitories.
                </p>
                <p>
                  Today, just a few years later, the transformation is visible: a renovated
                  library with hundreds of books, new restrooms and showers for boys and girls
                  separately, a strong boundary wall, a landmark main gate, solar lighting,
                  over 1,000 trees planted, and vegetable gardens producing fresh food
                  for students.
                </p>
                <p>
                  But the work is far from done. The funding gap remains — and every dollar
                  raised by the diaspora community brings us closer to the vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">What We Stand For</span>
            <h2 className="text-3xl font-bold text-[#003087] mt-2">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-[#f5f5f5] rounded-2xl p-7 card-hover">
                <span className="text-4xl block mb-4">{v.icon}</span>
                <h3 className="text-[#003087] font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#003087]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#F2A900]/20 border border-[#F2A900]/40 text-[#F2A900] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-4">Our People</span>
            <h2 className="text-3xl font-bold text-white">Leadership &amp; Partners</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((t) => (
              <div key={t.name} className="bg-white/10 border border-white/10 rounded-2xl p-7 text-center hover:bg-white/15 transition-all">
                <span className="text-5xl block mb-4">{t.emoji}</span>
                <h3 className="text-white font-bold text-lg">{t.name}</h3>
                <p className="text-[#F2A900] text-sm font-medium mt-1">{t.role}</p>
                <p className="text-blue-200 text-sm mt-1">{t.location}</p>
                {t.phone && (
                  <a href={`tel:${t.phone.replace(/\s/g, "")}`} className="inline-block mt-3 text-white text-sm font-medium hover:text-[#F2A900] transition-colors">
                    📞 {t.phone}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F2A900]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#003087] mb-4">
            Ready to Be Part of This Story?
          </h2>
          <p className="text-[#003087]/80 mb-8 text-lg">
            Join thousands of diaspora members and supporters making real change in the Somali Region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-involved#donate" className="bg-[#003087] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#001f5c] transition-all duration-300 hover:shadow-xl">
              Donate Now
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-[#003087] text-[#003087] font-bold px-8 py-3.5 rounded-full hover:bg-[#003087] hover:text-white transition-all duration-300">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
