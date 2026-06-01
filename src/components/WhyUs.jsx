export default function WhyUs() {
  const reasons = [
    { title: "Live & Interactive", desc: "No boring recordings. Ask doubts live and collaborate in real time with mentors." },
    { title: "Project-First", desc: "Ship real apps, dashboards, and deployments you can actually show in interviews." },
    { title: "Industry Experts", desc: "Learn directly from senior professionals with deep real-world expertise." },
    { title: "Small Cohorts", desc: "Stay accountable with peer learning and dedicated mentor attention." },
    { title: "Flexible Schedules", desc: "Weekend and weekday batches designed to fit your busy routine." },
    { title: "Certificates", desc: "Get recognized for every skill you master with our course completion certificates." }
  ];

  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-darkbg">Why AR INFOTEK?</h2>
          <p className="text-slate-600 mt-4">We designed every course to maximize learning speed and career impact.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <h4 className="text-lg font-bold text-primary mb-2">{reason.title}</h4>
              <p className="text-sm text-slate-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}