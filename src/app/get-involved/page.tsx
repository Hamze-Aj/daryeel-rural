import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Donate, volunteer, or partner with Daryeel to transform education in the Somali Region of Ethiopia. Every contribution matters.",
};

const donationTiers = [
  { amount: "$25", label: "School Supplies", desc: "Provides a full set of books, pens, and notebooks for one student for a full year.", icon: "📚" },
  { amount: "$50", label: "Girl's Kit", desc: "School uniform, supplies, and hygiene items for one girl student for a year.", icon: "👧" },
  { amount: "$100", label: "Tree Grove", desc: "Plants 10 fruit trees — mango, papaya, or avocado — on the school compound.", icon: "🌳" },
  { amount: "$250", label: "Student Sponsor", desc: "Covers dormitory, meals, and supplies for one boarding student for a full year.", icon: "🧑‍🎓" },
  { amount: "$500", label: "WASH Unit", desc: "Funds construction of one handwashing station with soap for an entire school block.", icon: "🚿" },
  { amount: "$1,000", label: "Classroom Fund", desc: "Contributes significantly toward furnishing a classroom with desks, chairs, and a blackboard.", icon: "🏫" },
];

const ways = [
  {
    icon: "💳",
    title: "One-Time Donation",
    desc: "Make a single gift of any amount. 100% goes directly to programs on the ground in Kebri Dahar.",
    cta: "Donate Once",
    href: "#donate",
  },
  {
    icon: "📅",
    title: "Monthly Giving",
    desc: "Become a sustaining donor. Monthly gifts allow us to plan ahead and deliver consistent impact.",
    cta: "Give Monthly",
    href: "#donate",
  },
  {
    icon: "👩‍💻",
    title: "Skills Volunteering",
    desc: "Doctors, teachers, engineers, IT professionals — your expertise can transform lives. Join our diaspora volunteer pool.",
    cta: "Volunteer Skills",
    href: "/contact",
  },
  {
    icon: "🏢",
    title: "Corporate & Org Partnership",
    desc: "Foundations, mosques, community organizations, and businesses can sponsor entire projects with full recognition.",
    cta: "Become a Partner",
    href: "/contact",
  },
  {
    icon: "📣",
    title: "Spread the Word",
    desc: "Share our story on social media, at your mosque or church, and in your community. Awareness saves lives.",
    cta: "Share Now",
    href: "#share",
  },
  {
    icon: "🎁",
    title: "Sponsor a Project",
    desc: "Sponsor a classroom, dormitory, kitchen, ICT lab, or tree-planting phase with naming recognition.",
    cta: "Sponsor a Project",
    href: "/contact",
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#003087] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1920&q=80')", backgroundSize: "cover" }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#F2A900]/20 border border-[#F2A900]/40 text-[#F2A900] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">Take Action</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Get <span className="gradient-text-gold">Involved</span></h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">Whether you give $25 or $25,000 — you are building a child&apos;s future. Every action counts.</p>
        </div>
      </section>

      {/* Ways to help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">How You Can Help</span>
            <h2 className="text-3xl font-bold text-[#003087] mt-2">Ways to Make a Difference</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ways.map((w) => (
              <div key={w.title} className="bg-[#f5f5f5] rounded-2xl p-7 card-hover flex flex-col">
                <span className="text-4xl mb-4 block">{w.icon}</span>
                <h3 className="text-[#003087] font-bold text-lg mb-2">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{w.desc}</p>
                <Link href={w.href} className="mt-5 inline-flex items-center gap-1 text-[#003087] font-bold text-sm hover:text-[#F2A900] transition-colors">
                  {w.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation tiers */}
      <section id="donate" className="py-20 bg-[#f5f5f5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Donation Impact</span>
            <h2 className="text-3xl font-bold text-[#003087] mt-2">Your Gift in Action</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">See exactly what your donation achieves. Every dollar is tracked and reported.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {donationTiers.map((tier) => (
              <div key={tier.amount} className="bg-white rounded-2xl p-7 card-hover border border-gray-100 flex flex-col">
                <span className="text-3xl block mb-3">{tier.icon}</span>
                <div className="text-3xl font-black text-[#F2A900] mb-1">{tier.amount}</div>
                <h3 className="text-[#003087] font-bold text-base mb-2">{tier.label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{tier.desc}</p>
                <button className="mt-5 w-full bg-[#003087] text-white font-bold py-2.5 rounded-xl hover:bg-[#001f5c] transition-colors text-sm">
                  Give {tier.amount}
                </button>
              </div>
            ))}
          </div>

          {/* Custom donation box */}
          <div className="bg-[#003087] rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Give a Custom Amount</h3>
            <p className="text-blue-200 mb-8">Every birr and every dollar makes a real difference in the lives of pastoralist children.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex items-center bg-white/10 border border-white/20 rounded-xl overflow-hidden flex-1">
                <span className="px-4 text-[#F2A900] font-bold text-lg">$</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="bg-transparent text-white placeholder-blue-300 flex-1 py-3 pr-4 outline-none text-base"
                  min="5"
                />
              </div>
              <button className="btn-primary whitespace-nowrap">
                Donate Now
              </button>
            </div>
            <p className="text-blue-300 text-xs mt-4">Secure payment processing · 100% goes to programs · Tax receipt provided</p>
          </div>
        </div>
      </section>

      {/* Sponsor a project */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Major Giving</span>
            <h2 className="text-3xl font-bold text-[#003087] mt-2">Sponsor a Project</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Name a classroom, fund a kitchen, or sponsor a dormitory — with full recognition and a detailed impact report.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Kitchen Block", cost: "$45,000", icon: "🍳", desc: "Feed 454 boarding students daily with nutritious meals" },
              { name: "ICT Computer Lab", cost: "$32,000", icon: "💻", desc: "Equip 30+ computers for digital education" },
              { name: "Girls Dormitory", cost: "$40,000", icon: "🏠", desc: "Safe sleeping quarters for 80+ girl students" },
              { name: "Classroom Block", cost: "$26,000", icon: "📐", desc: "Three new classrooms for 150+ students" },
            ].map((p) => (
              <div key={p.name} className="bg-[#003087] rounded-2xl p-6 text-white text-center card-hover">
                <span className="text-4xl block mb-3">{p.icon}</span>
                <h3 className="font-bold text-base mb-1">{p.name}</h3>
                <div className="text-[#F2A900] font-black text-2xl my-2">{p.cost}</div>
                <p className="text-blue-200 text-xs leading-relaxed mb-4">{p.desc}</p>
                <Link href="/contact" className="block bg-[#F2A900] text-[#003087] font-bold py-2.5 rounded-xl hover:bg-[#ffc333] transition-colors text-sm">
                  Sponsor This
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-16 bg-[#F2A900]">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-[#003087] mb-3">Why Trust Daryeel?</h2>
          <p className="text-[#003087]/80 mb-8 max-w-2xl mx-auto">
            We are a community-driven, diaspora-led organization with full transparency, quarterly reports, and on-the-ground verification of every project.
          </p>
          <div className="grid sm:grid-cols-4 gap-6">
            {[
              { icon: "🔍", label: "100% Transparent", sub: "Full financial reporting" },
              { icon: "🤝", label: "Community-Owned", sub: "Local leadership & oversight" },
              { icon: "🏛️", label: "Gov. Partnered", sub: "Kebri Dahar Education Bureau" },
              { icon: "📊", label: "Impact Verified", sub: "Quarterly field reports" },
            ].map((t) => (
              <div key={t.label} className="bg-white/30 rounded-xl p-5 text-center">
                <span className="text-3xl block mb-2">{t.icon}</span>
                <p className="text-[#003087] font-bold text-sm">{t.label}</p>
                <p className="text-[#003087]/70 text-xs mt-0.5">{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
