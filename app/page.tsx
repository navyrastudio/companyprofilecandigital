"use client";
import { useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import { WhyUsSection, StatsSection } from "./components/WhyUsSection";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />

        {/* Ticker marquee */}
        <div
          style={{
            background: "var(--primary)",
            padding: "12px 0",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "max-content",
              animation: "marquee 35s linear infinite",
            }}
          >
            {[
              "150+ Proyek Selesai",
              "98% Klien Puas",
              "Rating 5.0 Google",
              "Desain Custom",
              "Fast Delivery",
              "SEO Friendly",
              "Mobile Responsive",
              "Support Setelah Launch",
              "150+ Proyek Selesai",
              "98% Klien Puas",
              "Rating 5.0 Google",
              "Desain Custom",
              "Fast Delivery",
              "SEO Friendly",
              "Mobile Responsive",
              "Support Setelah Launch",
            ].map((item, i) => (
              <span
                key={i}
                style={{
                  padding: "0 28px",
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "13px",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  borderRight: "1px solid rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ color: "#ff7a59", fontWeight: 800 }}>✦</span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <WhyUsSection />
        <StatsSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />

      {/* WhatsApp float button */}
      <a
        href="https://wa.me/6281234567890?text=Halo%20CanDigital%2C%20saya%20ingin%20konsultasi"
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
