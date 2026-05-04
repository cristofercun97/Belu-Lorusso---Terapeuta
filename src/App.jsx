import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueSection from "./components/ValueSection";
import Services from "./components/Services";
import TrustSection from "./components/TrustSection";
import EmotionalSection from "./components/EmotionalSection";
import FunnelTest from "./components/FunnelTest";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";
import ContactForm from "./components/ContactForm";
import BiodanzaPage from "./pages/BiodanzaPage";
import MovimientoPage from "./pages/MovimientoPage";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueSection />
        <Services />
        <TrustSection />
        <EmotionalSection />
        <FunnelTest />
        <FAQSection />
        <ContactForm />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biodanza" element={<BiodanzaPage />} />
        <Route path="/movimiento" element={<MovimientoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
