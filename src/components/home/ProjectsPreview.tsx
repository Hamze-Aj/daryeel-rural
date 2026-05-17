import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "school",
    emoji: "🏫",
    tag: "Flagship Project",
    title: "Shaykosh Boarding School",
    desc: "Renovating and upgrading Ethiopia's premier boarding school for pastoralist children — library, dormitories, boundary walls, main gate, and road construction.",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    color: "#003087",
  },
  {
    id: "girls",
    emoji: "👧",
    tag: "Empowerment",
    title: "Girls' Education",
    desc: "Providing uniforms, school supplies, safe separate sanitation facilities, and a nurturing environment to keep girls in school and thriving.",
    img: "https://images.unsplash.com/photo-1608342499268-aa5dcf1c6b59?w=800&q=80",
    color: "#c98700",
  },
  {
    id: "environment",
    emoji: "🌳",
    tag: "Sustainability",
    title: "Tree Planting & Greening",
    desc: "Over 1,000 fruit and shade trees planted — mango, papaya, avocado — with vegetable gardens, rainwater harvesting, and full compound greening.",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    color: "#16a34a",
  },
  {
    id: "wash",
    emoji: "🚰",
    tag: "WASH",
    title: "Water, Sanitation & Hygiene",
    desc: "New modern restrooms for boys and girls, shower facilities, handwashing stations, and expanded water supply for the whole school campus.",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80",
    color: "#0891b2",
  },
];

export default function ProjectsPreview() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="section-tag">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003087] mt-2 mb-4">
            Our Programs &amp; Projects
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            From renovating a historic boarding school to planting fruit trees
            and building clean restrooms — every project transforms lives in
            Kebri Dahar and the Somali Region.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={`/projects#${p.id}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md card-hover block"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-3 left-3 bg-white/90 text-xs font-bold px-3 py-1 rounded-full text-[#003087]">
                  {p.tag}
                </span>
                <span className="absolute bottom-3 left-3 text-3xl">{p.emoji}</span>
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-[#003087] text-base mb-2 group-hover:text-[#F2A900] transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#003087] text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border-2 border-[#003087] text-[#003087] font-bold px-8 py-3.5 rounded-full hover:bg-[#003087] hover:text-white transition-all duration-300"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
