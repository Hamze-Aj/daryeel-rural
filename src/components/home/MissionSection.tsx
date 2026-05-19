import Link from "next/link";
import Image from "next/image";

const values = [
  {
    icon: "🎓",
    title: "Education",
    desc: "Ensuring every child, especially girls, has access to quality education and a safe learning environment.",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    desc: "Tree planting, green spaces, rainwater harvesting, and eco-friendly development for lasting change.",
  },
  {
    icon: "🤝",
    title: "Dignity",
    desc: "Modern WASH facilities, safe dormitories, and nutritious meals preserve the dignity of every student.",
  },
  {
    icon: "🏘️",
    title: "Community",
    desc: "Projects are community-owned, government-partnered, and diaspora-funded for genuine local impact.",
  },
];

export default function MissionSection() {
  return (
    <section className="py-24 bg-white bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="img-card h-64 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/library-bookshelf.jpeg"
                  alt="Children studying in classroom"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="img-card h-64 rounded-2xl overflow-hidden shadow-xl mt-8">
                <Image
                  src="/images/students-reading-classroom.jpeg"
                  alt="Somali children at school"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="img-card h-48 rounded-2xl overflow-hidden shadow-xl -mt-4">
                <Image
                  src="/images/compound-wall-trees-2.jpeg"
                  alt="Tree planting"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="img-card h-48 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/girls-studying.jpeg"
                  alt="Girls in school uniform"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#003087] text-white rounded-2xl p-5 shadow-2xl animate-float">
              <div className="text-3xl font-black text-[#F2A900]">2022</div>
              <div className="text-xs text-blue-200 font-medium">Founded</div>
              <div className="text-xs text-white mt-1">Minnesota Diaspora</div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="section-tag">Our Mission</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#003087] leading-tight mb-5">
              Transforming Lives in the{" "}
              <span className="text-[#F2A900]">Somali Region</span> of Ethiopia
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Daryeel Rural Development For Action is a nonprofit organization
              founded by Somali diaspora members in Minnesota, USA, working in
              close partnership with local communities and the Ethiopian
              government to transform education and living conditions in the
              Somali Region of Ethiopia.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our flagship project — the{" "}
              <strong className="text-[#003087]">
                Shaykosh Boarding School
              </strong>{" "}
              in Kebri Dahar — serves 454 boarding students from 7 zones,
              including 62 girls, and supports a total of 7,102 students. We
              believe that every child deserves dignity, safety, and a quality
              education.
            </p>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="bg-[#f5f5f5] rounded-xl p-4 hover:bg-[#003087]/5 transition-colors"
                >
                  <span className="text-2xl block mb-2">{v.icon}</span>
                  <h3 className="font-bold text-[#003087] text-sm mb-1">
                    {v.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#003087] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#001f5c] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              Learn Our Story
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
      </div>
    </section>
  );
}
