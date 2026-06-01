export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-[90vh] flex items-center bg-[#0f172a]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e5aa8] via-[#103466] to-[#0f172a]"></div>
      
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px]"></div>
      
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
        
        <div className="lg:col-span-8 flex flex-col justify-center items-center text-center">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-[10px] lg:text-xs font-bold backdrop-blur-md border border-white/20 shadow-lg tracking-wide uppercase">Live • Online</span>
            <span className="px-4 py-1.5 bg-white/10 text-white rounded-full text-[10px] lg:text-xs font-bold backdrop-blur-md border border-white/20 shadow-lg tracking-wide uppercase">Small Cohorts</span>
          </div>

          <h1 className="text-3xl lg:text-6xl font-black text-white leading-loose mb-6 drop-shadow-lg">
            Level-Up Your Tech Career with <br className="hidden lg:block" /> 
            <span className="relative inline-block mt-3 lg:mt-0">
              <span className="absolute -inset-1 bg-accent/50 blur opacity-50 rounded-lg"></span>
              <span className="relative bg-white text-accent px-4 py-1 rounded-xl inline-block shadow-2xl align-middle">AR INFOTEK</span>
            </span>
          </h1>

          <p className="text-blue-100 text-sm lg:text-lg mb-8 max-w-2xl leading-relaxed font-medium mx-auto text-shadow-sm">
            Live instructor-led training in AI/ML, Data Science, DevOps, Cloud (AWS, Azure), Python, and Power BI. Learn by doing.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full">
            <div className="flex gap-4">
              <a href="#courses" className="px-8 py-3.5 bg-gradient-to-r from-accent to-orange-600 text-white rounded-xl font-bold hover:shadow-[0_0_20px_rgba(255,137,28,0.4)] hover:-translate-y-1 transition text-sm whitespace-nowrap border border-white/10">Browse Courses</a>
              <a href="#contact" className="px-8 py-3.5 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl font-bold hover:bg-white hover:text-primary hover:shadow-lg hover:-translate-y-1 transition text-sm whitespace-nowrap">Get Counselling</a>
            </div>

            <div className="flex gap-8 border-l-0 sm:border-l border-white/20 pl-0 sm:pl-8 mt-4 sm:mt-0">
              <div className="text-center group cursor-default">
                <div className="text-xl lg:text-3xl font-black text-white group-hover:text-accent transition duration-300">3k+</div>
                <div className="text-[10px] text-blue-200 uppercase mt-1 font-bold tracking-wider">Learners</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-xl lg:text-3xl font-black text-white group-hover:text-accent transition duration-300">4.8/5</div>
                <div className="text-[10px] text-blue-200 uppercase mt-1 font-bold tracking-wider">Rating</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-xl lg:text-3xl font-black text-white group-hover:text-accent transition duration-300">100%</div>
                <div className="text-[10px] text-blue-200 uppercase mt-1 font-bold tracking-wider">Practical</div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 shadow-2xl relative border border-white/40 ring-4 ring-white/10">
            <div className="flex justify-between items-center mb-5 border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-800">Upcoming Batches</h3>
              <div className="bg-blue-50 p-1.5 rounded-lg">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
              </div>
            </div>
            
            <ul className="space-y-3">
              <li className="bg-white p-3 rounded-2xl border border-slate-100 hover:border-accent/50 hover:shadow-md transition group shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-slate-800 text-sm group-hover:text-primary transition">AWS Architect</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 25 Nov • Weekdays
                    </div>
                  </div>
                  <a href="#contact" className="text-[10px] font-bold text-white bg-accent px-3 py-1.5 rounded-lg shadow-sm hover:bg-orange-600 transition">Enroll</a>
                </div>
              </li>
              <li className="bg-white p-3 rounded-2xl border border-slate-100 hover:border-accent/50 hover:shadow-md transition group shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-slate-800 text-sm group-hover:text-primary transition">Data Science</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 02 Dec • Weekends
                    </div>
                  </div>
                  <a href="#contact" className="text-[10px] font-bold text-white bg-accent px-3 py-1.5 rounded-lg shadow-sm hover:bg-orange-600 transition">Enroll</a>
                </div>
              </li>
              <li className="bg-white p-3 rounded-2xl border border-slate-100 hover:border-accent/50 hover:shadow-md transition group shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-bold text-slate-800 text-sm group-hover:text-primary transition">DevOps Master</div>
                    <div className="text-[11px] text-slate-500 font-medium mt-0.5 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> 09 Dec • Weekdays
                    </div>
                  </div>
                  <a href="#contact" className="text-[10px] font-bold text-white bg-accent px-3 py-1.5 rounded-lg shadow-sm hover:bg-orange-600 transition">Enroll</a>
                </div>
              </li>
            </ul>

            <div className="mt-5">
              <a href="#contact" className="block w-full text-center py-3 rounded-xl border-2 border-primary/10 text-primary font-bold text-xs hover:bg-primary hover:text-white hover:border-primary transition uppercase tracking-wide">
                Request Syllabus
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}