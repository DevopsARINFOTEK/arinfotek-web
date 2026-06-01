export default function Contact() {
  return (
    <>
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto rounded-3xl p-12 bg-gradient-to-r from-primary to-blue-600 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-black">Ready to start your journey?</h3>
            <p className="mt-2 text-blue-100">Get a free counselling call and course roadmap tailored to you.</p>
          </div>
          <div className="flex gap-4">
            <a href="#contact" className="px-6 py-3 bg-accent text-white rounded-xl font-bold hover:shadow-lg transition">Book a Call</a>
            <a href="#courses" className="px-6 py-3 bg-white text-primary rounded-xl font-bold hover:shadow-lg transition">Explore Programs</a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-darkbg mb-6">Talk to an advisor</h3>
            <form action="https://formspree.io/f/your_form_id" method="POST" className="grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-darkbg">Full Name</label>
                  <input type="text" name="name" className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary focus:outline-none" placeholder="Your Name" required />
                </div>
                <div>
                  <label className="text-sm font-semibold text-darkbg">Email</label>
                  <input type="email" name="email" className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary focus:outline-none" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-darkbg">Phone</label>
                  <input type="tel" name="phone" className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary focus:outline-none" placeholder="+91-XXXX-XXXXXX" />
                </div>
                <div>
                  <label className="text-sm font-semibold text-darkbg">Course Interest</label>
                  <select name="course" className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-primary focus:outline-none">
                    <option>AWS Cloud Architect</option>
                    <option>Data Science & ML</option>
                    <option>Cloud & DevOps</option>
                    <option>Cybersecurity</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold text-darkbg">Message</label>
                <textarea name="message" rows="4" className="mt-1 w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-primary focus:outline-none" placeholder="Tell us about your goals..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 rounded-xl bg-primary text-white font-bold hover:shadow-xl transition">Send Message</button>
              <p className="text-xs text-center text-slate-500 mt-2">We typically reply within 24 hours.</p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="text-xl font-bold text-darkbg mb-2">Batches & Timings</h4>
              <p className="text-slate-600 mb-4">Weekday: Mon-Fri, 7–9 PM IST <br /> Weekend: Sat-Sun, 10 AM–1 PM IST</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border">Live Online</span>
                <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border">Recordings Access</span>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <h4 className="text-xl font-bold text-darkbg mb-4">Reach Us</h4>
              <ul className="space-y-3 text-slate-700">
                <li><span className="font-bold text-primary">Email:</span> admissions@arinfotek.co.in</li>
                <li><span className="font-bold text-primary">Phone:</span> +91-9487107253</li>
                <li><span className="font-bold text-primary">WhatsApp:</span> +91-9487107253</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}