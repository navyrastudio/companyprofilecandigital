"use client";
import { ElementType } from "react";
import {
  FaComments,
  FaFileAlt,
  FaTools,
  FaEye,
  FaRocket,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";
import processData from "../../data/process.json";

const iconMap: Record<string, ElementType> = {
  FaComments,
  FaFileAlt,
  FaTools,
  FaEye,
  FaRocket,
  FaHeadset,
};

// Brand color palette aligned with Portfolio section
const stepAccents = [
  { gradient: "linear-gradient(135deg, #2FA084, #43F0CD)", shadow: "rgba(47,160,132,0.30)" },
  { gradient: "linear-gradient(135deg, #3b82f6, #60a5fa)", shadow: "rgba(59,130,246,0.28)" },
  { gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)", shadow: "rgba(139,92,246,0.28)" },
  { gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)", shadow: "rgba(245,158,11,0.28)" },
  { gradient: "linear-gradient(135deg, #10b981, #34d399)", shadow: "rgba(16,185,129,0.28)" },
  { gradient: "linear-gradient(135deg, #ef4444, #f87171)", shadow: "rgba(239,68,68,0.28)" },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        background: "#f4fbf9",
        position: "relative",
        overflow: "hidden",
        padding: "88px 0",
      }}
    >
      {/* Background decorations matching Portfolio */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "radial-gradient(rgba(47, 160, 132, 0.07) 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-80px",
          right: "-80px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(47,160,132,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-60px",
          left: "-60px",
          width: "340px",
          height: "340px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(67,240,205,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header process-section-header">
          <div
            className="section-label"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(47, 160, 132, 0.08)",
              border: "1px solid rgba(47, 160, 132, 0.2)",
              padding: "6px 18px",
              borderRadius: "50px",
              color: "#2FA084",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              marginBottom: "18px",
            }}
          >
            Cara Kerja
          </div>
          <h2
            className="section-title"
            style={{ color: "var(--text-dark)", marginBottom: "14px" }}
          >
            6 Tahap Mewujudkan{" "}
            <span style={{ color: "#2FA084" }}>Website Impian</span> Anda
          </h2>
          <p className="section-desc">
            Proses yang terstruktur dan transparan — Anda tahu persis apa yang
            terjadi di setiap tahapnya.
          </p>
        </div>

        {/* Steps Grid — 2 columns */}
        <div className="process-grid">
          {processData.map((step, i) => {
            const IconComponent = iconMap[step.icon];
            const accent = stepAccents[i] ?? stepAccents[0];
            const isLast = i === processData.length - 1;

            return (
              <div
                key={step.num}
                className="process-card"
                style={{
                  animationDelay: `${i * 0.09}s`,
                  ["--process-shadow" as string]: accent.shadow,
                  ["--process-gradient" as string]: accent.gradient,
                } as React.CSSProperties}
              >
                {/* Step number badge + connector line */}
                <div className="process-left">
                  <div
                    className="process-icon-wrap"
                    style={{ background: accent.gradient, boxShadow: `0 12px 28px ${accent.shadow}` }}
                  >
                    {IconComponent && <IconComponent size={22} color="#fff" />}
                  </div>
                  {/* Vertical connector — hide on last item */}
                  {!isLast && i % 2 === 0 && (
                    <div className="process-connector" />
                  )}
                </div>

                {/* Content */}
                <div className="process-content">
                  {/* Step number chip */}
                  <div
                    className="process-step-chip"
                    style={{ background: accent.gradient }}
                  >
                    STEP {step.num}
                  </div>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-desc">{step.desc}</p>

                  {/* Bottom accent line */}
                  <div
                    className="process-accent-bar"
                    style={{ background: accent.gradient }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="process-cta">
          <p className="process-cta-text">
            Siap memulai perjalanan digital Anda?
          </p>
          <a
            href="#contact"
            className="btn hero-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 30px",
              fontSize: "14px",
              fontWeight: 750,
              background: "linear-gradient(to right, #2FA084 0%, #43F0CD 100%)",
              color: "#ffffff",
              boxShadow: "0 10px 24px rgba(47,160,132,0.28)",
              border: "none",
              borderRadius: "50px",
              textDecoration: "none",
            }}
          >
            Mulai Konsultasi Gratis <FaArrowRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
