export default function Testimonials() {
  const reviews = [
    {
      quote: "The AWS Cloud Architect course's labs on VPC and IAM helped me design and deploy a production-ready architecture.",
      name: "Harish Kumar",
      role: "Cloud Engineer @ StartupX"
    },
    {
      quote: "Data Science & ML with Python, Pandas, and model building gave me true end-to-end skills for my new job.",
      name: "Vikram Rao",
      role: "Data Analyst @ RetailCorp"
    },
    {
      quote: "The Cloud & DevOps track's Docker/Kubernetes pipelines and CI/CD practice made real deployments feel easy.",
      name: "Neha Sharma",
      role: "DevOps Engineer @ FinTechCo"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-darkbg mb-12">What our learners say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm">
              <p className="text-slate-600 italic">"{review.quote}"</p>
              <div className="mt-6 font-bold text-darkbg">{review.name}</div>
              <div className="text-xs text-primary">{review.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}