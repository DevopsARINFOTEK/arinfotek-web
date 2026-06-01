export default function Pricing() {
  const plans = [
    {
      name: "Basic (Group)",
      price: "₹2,999",
      features: ["Live group sessions", "Assignments & quizzes", "Completion certificate"],
      buttonText: "Join Group Batch",
      isRecommended: false
    },
    {
      name: "Standard (1:1)",
      price: "₹14,999",
      features: ["Everything in Basic", "1:1 Mentor Support", "Personalized Project"],
      buttonText: "Start 1:1 Training",
      isRecommended: true
    },
    {
      name: "Advanced",
      price: "₹24,999",
      features: ["Everything in Standard", "Long-term Mentorship", "Dedicated Q&A"],
      buttonText: "Join Advanced",
      isRecommended: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-darkbg mb-4">Simple, Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-3xl p-8 relative transition ${
                plan.isRecommended 
                  ? "border-2 border-accent shadow-xl bg-white transform md:-translate-y-4" 
                  : "border border-slate-200 hover:border-primary"
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                  RECOMMENDED
                </div>
              )}
              
              <h4 className="text-xl font-bold text-darkbg">{plan.name}</h4>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-black text-primary">{plan.price}</span>
                <span className="text-sm text-slate-500">/ course</span>
              </div>
              
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className={`flex gap-2 ${plan.isRecommended ? "text-darkbg font-medium" : ""}`}>
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`block w-full text-center mt-8 py-3 rounded-xl font-bold transition ${
                  plan.isRecommended 
                    ? "bg-accent text-white hover:shadow-lg" 
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}