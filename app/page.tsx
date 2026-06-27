"use client";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import ValuesSection from "./components/ValuesSection";
import Footer from "./components/Footer";
import { WhyUsSection, StatsSection } from "./components/WhyUsSection";
import ProblemSection from "./components/ProblemSection";
import JourneySection from "./components/JourneySection";


export default function Home() {
  useEffect(() => {
    const SELECTOR = ".reveal, .reveal-left, .reveal-right, .reveal-scale";

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
          } else {
            // Remove 'visible' when leaving the viewport so the animation triggers again on next scroll
            e.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all current reveal elements
    const observe = () =>
      document.querySelectorAll(SELECTOR).forEach((el) => io.observe(el));

    const timeout = setTimeout(observe, 100);

    // Re-observe when new elements are added to the DOM (e.g. portfolio filter)
    const mo = new MutationObserver(() => {
      document.querySelectorAll(SELECTOR).forEach((el) => io.observe(el));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timeout);
      io.disconnect();
      mo.disconnect();
    };
  }, []);


  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        {/* Spacer for layout */}
        <div
          style={{
            background: "transparent",
            padding: "12px 0",
            overflow: "hidden",
          }}
        ></div>

        <WhyUsSection />
        <ProblemSection />
        <JourneySection />
        <StatsSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
        <ValuesSection />
      </main>
      <Footer />

      {/* WhatsApp float button */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20CanDigit%2C%20saya%20ingin%20konsultasi"
        target="_blank"
        rel="noopener noreferrer"
        id="wa-float"
        aria-label="Chat WhatsApp"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          width: "54px",
          height: "54px",
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
          textDecoration: "none",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(37,211,102,0.55)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.45)";
        }}
      >
        <FaWhatsapp size={28} color="#fff" />
      </a>
    </>
  );
}
