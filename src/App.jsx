import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import WhyUs from './components/WhyUs';
import InnovationLabs from './components/InnovationLabs';
import Internship from './components/Internship';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white text-slate-800 antialiased font-sans">
      <Header />
      <main>
        <Hero />
        <Courses />
        <WhyUs />
        <InnovationLabs />
        <Internship />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;