import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image - Shaykosh Boarding School aerial view */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/aerial-campus-gate.jpeg')",
        }}
      />
      {/* Deep blue gradient overlay */}
      <div className="hero-gradient absolute inset-0" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-[#F2A900]/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 rounded-full bg-[#003087]/30 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#F2A900]/20 border border-[#F2A900]/40 text-[#F2A900] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#F2A900] animate-pulse" />
          Somali Region, Ethiopia · Diaspora-Led · Community-Driven
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
          Building Hope,{" "}
          <span className="gradient-text-gold">One Child</span>
          <br className="hidden sm:block" /> at a Time
        </h1>

        {/* Sub heading */}
        <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10 animate-fade-in-up delay-200">
          To advance sustainable community development in the Somali Region of Ethiopia,
           Shaykosh Boarding School, in partnership with key stakeholders for  Promoting quality education,
            Empowering girls and young women, Protecting the environment, Advancing green housing solutions,
             improving access to clean water, sanitation, and hygiene (WASH) , 
             Responding effectively to emergencies and Strengthening 
             community development 
          <strong className="text-white">Shaykosh Boarding School</strong> and
          beyond.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <Link href="/get-involved#donate" className="btn-primary text-base">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            Donate Now
          </Link>
          <Link href="/projects" className="btn-secondary text-base">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            Our Projects
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-14 animate-fade-in-up delay-400">
          {[
            { icon: "🏫", label: "Shaykosh Boarding School" },
            { icon: "👧", label: "62+ Girls Enrolled" },
            { icon: "🌳", label: "1,000+ Trees Planted" },
            { icon: "🚰", label: "WASH Facilities Built" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2.5 rounded-full"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-white text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-600">
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
