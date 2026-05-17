const testimonials = [
  {
    quote:
      "Daryeel has changed the future for our daughters. For the first time, girls from our community have a safe school with proper facilities. This is a dream come true.",
    name: "Community Elder",
    role: "Kebri Dahar, Somali Region",
    emoji: "👴",
  },
  {
    quote:
      "I used to walk 3 hours to reach school. Now, with the dormitory renovations, I have a safe bed, clean showers, and a library. I want to become a doctor.",
    name: "Fatima, Age 15",
    role: "Boarding Student, Shaykosh School",
    emoji: "👩‍🎓",
  },
  {
    quote:
      "As Somalis in Minnesota, we knew we had to act. Daryeel proved that diaspora communities can transform rural education when we organize and give together.",
    name: "Diaspora Member",
    role: "Minneapolis, Minnesota",
    emoji: "🇺🇸",
  },
  {
    quote:
      "The new handwashing stations and separate girls' toilets have increased our female enrollment by 30%. Hygiene and dignity matter for keeping girls in school.",
    name: "Head Teacher",
    role: "Shaykosh Boarding School",
    emoji: "👨‍🏫",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">Voices of Change</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#003087] mt-2 mb-4">
            Stories That Inspire
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            From students to community elders to diaspora members — hear what
            Daryeel means to those it touches.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#f5f5f5] rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Quote mark */}
              <div className="text-5xl text-[#F2A900] font-serif leading-none mb-3">
                &ldquo;
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
                {t.quote}
              </p>
              <div className="mt-5 pt-4 border-t border-gray-200 flex items-center gap-3">
                <span className="text-3xl">{t.emoji}</span>
                <div>
                  <p className="text-[#003087] font-bold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
