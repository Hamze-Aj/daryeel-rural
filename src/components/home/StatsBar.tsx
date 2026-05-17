const stats = [
  { value: "454", label: "Boarding Students", suffix: "+" },
  { value: "62", label: "Girls Enrolled", suffix: "+" },
  { value: "7,102", label: "Total Students Supported", suffix: "" },
  { value: "7", label: "Zones Represented", suffix: "" },
  { value: "1,000", label: "Trees Planted", suffix: "+" },
  { value: "8", label: "New WASH Facilities", suffix: "" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#003087] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center px-2 py-3 border-r border-white/10 last:border-r-0"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#F2A900]">
                {stat.value}
                <span className="text-xl">{stat.suffix}</span>
              </div>
              <div className="text-blue-200 text-xs mt-1 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
