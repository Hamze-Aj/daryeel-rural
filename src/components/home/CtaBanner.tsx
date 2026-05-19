import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/project-launch-community.jpeg')",
        }}
      />
      <div className="absolute inset-0 bg-[#003087]/88" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-[#F2A900]/20 border border-[#F2A900]/40 text-[#F2A900] text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6">
          Take Action Today
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Your Gift Changes a Child&apos;s{" "}
          <span className="gradient-text-gold">Entire Future</span>
        </h2>
        <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          $50 buys school supplies for a girl for a year. $200 plants 20 fruit
          trees. $500 sponsors a student&apos;s dormitory bed and meals.{" "}
          <strong className="text-white">
            100% of donations go directly to programs.
          </strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-involved#donate" className="btn-primary text-base px-10">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
            Donate Now
          </Link>
          <Link href="/contact" className="btn-secondary text-base px-10">
            Partner With Us
          </Link>
        </div>

        {/* Trust row */}
        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {["100% Transparent", "Diaspora-Led", "Community-Owned", "Government-Partnered"].map((t) => (
            <div key={t} className="flex items-center gap-2 text-blue-200 text-sm">
              <svg className="w-4 h-4 text-[#F2A900]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
