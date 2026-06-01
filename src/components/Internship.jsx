export default function Internship() {
  const domains = [
    { title: "AI / ML", desc: "Explore AI concepts and build intelligent solutions." },
    { title: "Cloud Computing", desc: "AWS & Azure. Work with leading cloud platforms and services." },
    { title: "Data Science", desc: "Analyze data and extract meaningful insights." },
    { title: "Full Stack Web Development", desc: "Build dynamic web apps from front-end to back-end." },
    { title: "Python Programming", desc: "Build strong coding fundamentals and problem-solving skills." },
    { title: "Mobile App Development", desc: "Create user-friendly Android applications." },
    { title: "DevOps", desc: "Learn CI/CD, automate workflows and deploy like a pro." },
    { title: "Vibe Coding", desc: "Use AI-powered tools to build apps faster with modern workflows." }
  ];

  const benefits = [
    { title: "Real-World Projects", desc: "Work on live projects and solve real industry problems." },
    { title: "Industry Exposure", desc: "Learn tools, technologies & best practices used in top companies." },
    { title: "Resume Building", desc: "Strengthen your resume with hands-on experience." },
    { title: "Interview Preparation", desc: "Get expert guidance for technical & HR interviews." },
    { title: "Internship Certificate", desc: "Earn a recognized certificate upon successful completion." },
    { title: "Expert Mentorship", desc: "Learn from experienced industry professionals and grow." }
  ];

  return (
    <section id="internship" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-bold uppercase tracking-wider text-sm border-b-2 border-accent pb-1">Kickstart Your IT Career</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-darkbg mt-6">Internship Program 2026</h2>
          <p className="text-slate-600 mt-4 text-lg">Gain real-world experience, build skills, and get industry exposure. Learn today, intern tomorrow, lead your future.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-darkbg mb-6">Internship Domains</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {domains.map((domain, index) => (
                <div key={index} className="p-5 border border-slate-200 rounded-2xl hover:border-primary hover:shadow-md transition bg-slate-50">
                  <h4 className="font-bold text-primary text-lg mb-1">{domain.title}</h4>
                  <p className="text-sm text-slate-600">{domain.desc}</p>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-darkbg mt-10 mb-6">Why Join Our Internship?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="bg-blue-100 p-2 rounded-lg text-primary font-black mt-1">✓</div>
                  <div>
                    <h4 className="font-bold text-slate-800">{benefit.title}</h4>
                    <p className="text-sm text-slate-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-darkbg mb-4">Who Can Join?</h3>
              <ul className="space-y-4 text-slate-700 font-medium">
                {['Students pursuing BE 2nd, 3rd and Final Year', 'BCA / BSc 2nd & Final Year', 'MCA 1st & 2nd Year', 'Diploma Students'].map((item, index) => (
                  <li key={index} className="flex gap-3 items-center">
                    <span className="bg-primary text-white p-1 rounded-full text-xs">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-darkbg text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden border border-slate-700">
              <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-4 py-1 rounded-bl-2xl">SPECIAL PRICE</div>
              
              <div className="mt-4 mb-6">
                <span className="text-5xl font-black text-white">₹1999</span>
                <span className="text-lg text-accent font-bold ml-1">ONLY</span>
              </div>

              <ul className="space-y-3 text-sm text-blue-100 mb-8 border-t border-white/20 pt-6">
                <li className="flex gap-2 items-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  Flexible Timings
                </li>
                <li className="flex gap-2 items-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  Live Online Sessions
                </li>
                <li className="flex gap-2 items-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  Dedicated Mentor Support
                </li>
              </ul>
              <a href="https://www.arinfotek.co.in/internship.html" className="block w-full text-center py-4 rounded-xl bg-gradient-to-r from-accent to-orange-600 text-white font-bold hover:shadow-[0_0_20px_rgba(255,137,28,0.4)] hover:-translate-y-1 transition">Register Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}