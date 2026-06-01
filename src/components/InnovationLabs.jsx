export default function InnovationLabs() {
  const labs = [
    {
      id: 1,
      image: "/GAI (1).png",
      title: "Generative AI Bot",
      category: "AI & Machine Learning",
      desc: "Build a custom RAG chatbot that reads company PDFs and answers queries using OpenAI GPT-4 & Vector DBs.",
      tags: ["Python", "LangChain"],
      svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
    },
    {
      id: 2,
      image: "/serverless.png",
      title: "Serverless Neo-Bank",
      category: "Cloud Computing",
      desc: "Design an event-driven banking backend handling millions of transactions using AWS Lambda & DynamoDB streams.",
      tags: ["AWS Lambda", "DynamoDB"],
      svgPath: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
    },
    {
      id: 3,
      image: "/gitops.png",
      title: "GitOps K8s Cluster",
      category: "DevOps & CI/CD",
      desc: "Construct a fully automated pipeline. Code pushed to GitHub is deployed to a live K8s cluster with zero downtime.",
      tags: ["Jenkins", "Kubernetes"],
      svgPath: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
    },
    {
      id: 4,
      image: "/Cybersecurity.png",
      title: "SOC Threat Hunter",
      category: "Cybersecurity",
      desc: "Build a live SOC dashboard. Analyze real-time traffic to detect SQL Injections, DDoS, and unauthorized access.",
      tags: ["Splunk", "Wireshark"],
      svgPath: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100 rounded-full blur-[100px] opacity-60"></div>

      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold uppercase tracking-wider text-sm border-b-2 border-accent pb-1">Innovation Labs</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-darkbg mt-6">Build the Future. Live.</h2>
          <p className="text-slate-600 mt-4 text-lg">
            Theory doesn't build careers; code does. You will master these 4 cutting-edge industrial projects from scratch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {labs.map((lab) => (
            <div key={lab.id} className="group bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-2xl hover:border-primary/40 transition-all duration-300 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition">
                <svg className="w-32 h-32 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d={lab.svgPath}></path>
                </svg>
              </div>
              
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 shadow-inner p-2">
                <img src={lab.image} alt={lab.title} className="w-full h-full object-contain group-hover:scale-110 transition duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-2">{lab.title}</h3>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-3">{lab.category}</p>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed flex-grow">{lab.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {lab.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded border border-slate-200">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block px-8 py-3.5 bg-darkbg text-white font-bold rounded-xl hover:bg-primary transition shadow-xl hover:-translate-y-1">
            Download Project Syllabus
          </a>
        </div>
      </div>
    </section>
  );
}