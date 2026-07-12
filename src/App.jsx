import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import HowItWorks from "./components/sections/HowItWorks";
import ComplaintForm from "./components/sections/ComplaintForm";
import FAQ from "./components/sections/FAQ";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";

import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />

      <section id="complaint-form">
        <ComplaintForm />
      </section>

      <WhyChooseUs />
      <HowItWorks />
      <FAQ />
      <CTA />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;