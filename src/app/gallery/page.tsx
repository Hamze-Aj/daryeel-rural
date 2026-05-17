import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos from Shaykosh Boarding School — library renovation, girls' education, tree planting, WASH facilities, and community life in the Somali Region.",
};

const images = [
  { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80", caption: "Shaykosh Boarding School — Main Campus", category: "School" },
  { src: "https://images.unsplash.com/photo-1613963933729-ab1a10f30f67?w=800&q=80", caption: "Renovated School Library", category: "Library" },
  { src: "https://images.unsplash.com/photo-1608342499268-aa5dcf1c6b59?w=800&q=80", caption: "Girls in School Uniforms", category: "Girls" },
  { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80", caption: "Tree Planting Initiative", category: "Environment" },
  { src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80", caption: "Students Engaged in Learning", category: "Education" },
  { src: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80", caption: "New WASH Facilities", category: "WASH" },
  { src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80", caption: "Students Studying Together", category: "Education" },
  { src: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80", caption: "Greening the School Compound", category: "Environment" },
  { src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80", caption: "Community Gathering at School", category: "Community" },
  { src: "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=800&q=80", caption: "Children at the Boarding School", category: "School" },
  { src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80", caption: "Girls in Class — Empowered to Learn", category: "Girls" },
  { src: "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800&q=80", caption: "Fruit Trees Growing on Campus", category: "Environment" },
  { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80", caption: "Young Students at Shaykosh", category: "School" },
  { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80", caption: "Field Coordinator on Site", category: "Community" },
  { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80", caption: "Books for Every Student", category: "Library" },
  { src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80", caption: "Classroom in Session", category: "Education" },
  { src: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80", caption: "Handwashing Station in Use", category: "WASH" },
  { src: "https://images.unsplash.com/photo-1464052759348-a41b21bfbfb4?w=800&q=80", caption: "Community Members at School Event", category: "Community" },
];

const categories = ["All", "School", "Girls", "Library", "Education", "Environment", "WASH", "Community"];

export default function GalleryPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#003087] overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80')", backgroundSize: "cover" }} />
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
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
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
    </div>
  );
}
