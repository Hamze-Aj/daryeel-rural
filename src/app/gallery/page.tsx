import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Shaykosh Boarding School — library renovation, girls' education, tree planting, WASH facilities, and community life in the Somali Region.",
};

const images = [
  { src: "/images/aerial-campus-gate.jpeg", caption: "Shaykosh Boarding School — Main Entrance", category: "School" },
  { src: "/images/aerial-campus-watertower.jpeg", caption: "Campus Aerial View — Water Tower & Classrooms", category: "School" },
  { src: "/images/girls-studying.jpeg", caption: "Girls Studying Together", category: "Girls" },
  { src: "/images/library-bookshelf.jpeg", caption: "Renovated Library Shelves", category: "Library" },
  { src: "/images/library-textbooks.jpeg", caption: "Textbooks for Every Student", category: "Library" },
  { src: "/images/students-reading-classroom.jpeg", caption: "Students Reading in Class", category: "Education" },
  { src: "/images/students-yellow-uniforms.jpeg", caption: "Students in Yellow Uniforms Studying", category: "Education" },
  { src: "/images/students-studying-desks.jpeg", caption: "Students at Study Desks", category: "Education" },
  { src: "/images/teacher-with-students.jpeg", caption: "Teacher with Students", category: "Education" },
  { src: "/images/students-group-discussion.jpeg", caption: "Group Discussion in Class", category: "Education" },
  { src: "/images/classroom-full-view.jpeg", caption: "Full Classroom in Session", category: "Education" },
  { src: "/images/compound-wall-trees.jpeg", caption: "Boundary Wall & Trees Planted", category: "Environment" },
  { src: "/images/compound-wall-trees-2.jpeg", caption: "Green Campus — 1,000+ Trees", category: "Environment" },
  { src: "/images/officials-vegetable-garden.jpeg", caption: "School Vegetable Garden", category: "Environment" },
  { src: "/images/girls-water-tap.jpeg", caption: "Girls Using Clean Water Facilities", category: "WASH" },
  { src: "/images/girls-handwashing.jpeg", caption: "Handwashing Station in Use", category: "WASH" },
  { src: "/images/solar-lighting-night.jpeg", caption: "Solar Lighting at Night", category: "School" },
  { src: "/images/school-gate-teachers.jpeg", caption: "Teaching Staff at School Gate", category: "School" },
  { src: "/images/project-launch-community.jpeg", caption: "Community Groundbreaking Ceremony", category: "Community" },
  { src: "/images/groundbreaking-ceremony.jpeg", caption: "Foundation Stone Laying", category: "Community" },
  { src: "/images/honorary-certificate-men.jpeg", caption: "Honorary Certificate Ceremony", category: "Community" },
  { src: "/images/officials-campus-visit.jpeg", caption: "Officials Visiting the Campus", category: "Community" },
];

const categories = ["All", "School", "Girls", "Library", "Education", "Environment", "WASH", "Community"];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-[#003087] overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/images/aerial-campus-watertower.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block bg-[#F2A900]/20 border border-[#F2A900]/40 text-[#F2A900] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            Photo Gallery
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            A Picture Tells a <span className="gradient-text-gold">Thousand Words</span>
          </h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            See the transformation at Shaykosh Boarding School and the communities we serve.
          </p>
        </div>
      </section>

      {/* Category filter — static display */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-semibold cursor-default transition-colors ${
                  cat === "All"
                    ? "bg-[#003087] text-white"
                    : "bg-[#f5f5f5] text-gray-600 hover:bg-[#003087]/10"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {images.map((img, i) => (
              <div
                key={i}
                className="gallery-item break-inside-avoid rounded-2xl overflow-hidden shadow-md block w-full"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
                {/* Caption overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#003087]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <span className="inline-block bg-[#F2A900] text-[#003087] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-1">
                    {img.category}
                  </span>
                  <p className="text-white text-xs font-medium">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Video placeholder */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <span className="section-tag">Video</span>
              <h2 className="text-2xl font-bold text-[#003087] mt-2">Watch Our Story</h2>
            </div>
            <div className="bg-[#003087] rounded-2xl aspect-video flex items-center justify-center max-w-4xl mx-auto shadow-2xl overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundImage: "url('/images/students-reading-classroom.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
              />
              <div className="relative text-center">
                <div className="w-20 h-20 rounded-full bg-[#F2A900] flex items-center justify-center mx-auto mb-4 shadow-2xl animate-pulse">
                  <svg className="w-8 h-8 text-[#003087] ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-white font-bold text-lg">Documentary Coming Soon</p>
                <p className="text-blue-300 text-sm mt-1">The story of Shaykosh Boarding School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#003087]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Be Part of the Next Chapter</h2>
          <p className="text-blue-200 mb-7">
            These photos represent real children, real families, and real transformation. Help us write the next chapter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/get-involved#donate" className="btn-primary">Donate Now</a>
            <a href="/contact" className="btn-secondary">Contact Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
