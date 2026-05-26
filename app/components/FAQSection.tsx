"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import faqs from "../../data/faq.json";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
        padding: "88px 0",
      }}
    >
      {/* Background dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(47,160,132,0.06) 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Ambient glow */}
      <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "380px", height: "380px", borderRadius: "50%", background: "radial-gradient(circle, rgba(47,160,132,0.08) 0%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "340px", height: "340px", borderRadius: "50%", background: "radial-gradient(circle, rgba(67,240,205,0.07) 0%, transparent 70%)", filter: "blur(50px)", pointerEvents: "none", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        {/* Section Header */}
        <div className="section-header faq-section-header">
          <div
            className="section-label"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "rgba(47,160,132,0.08)",
              border: "1px solid rgba(47,160,132,0.2)",
              padding: "6px 18px",
              borderRadius: "50px",
              color: "#2FA084",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              marginBottom: "18px",
            }}
          >
            FAQ
          </div>
          <h2 className="section-title" style={{ color: "var(--text-dark)", marginBottom: "14px" }}>
            Pertanyaan yang <span style={{ color: "#2FA084" }}>Sering Ditanyakan</span>
          </h2>
          <p className="section-desc">
            Temukan jawaban atas pertanyaan umum seputar proses pembuatan website bersama CanDigital.
          </p>
        </div>

        {/* FAQ Grid */}
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gap: "16px",
          alignItems: "start",
        }}
          className="faq-grid"
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  border: `1px solid ${isOpen ? "rgba(47,160,132,0.30)" : "rgba(47,160,132,0.10)"}`,
                  borderRadius: "16px",
                  overflow: "hidden",
                  marginBottom: "12px",
                  background: "#fff",
                  boxShadow: isOpen
                    ? "0 8px 28px rgba(47,160,132,0.10)"
                    : "0 2px 8px rgba(0,66,88,0.04)",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                  position: "relative",
                }}
              >
                {/* Top accent line when open */}
                {isOpen && (
                  <div style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    height: "3px",
                    background: "linear-gradient(to right, #2FA084, #43F0CD)",
                  }} />
                )}

                {/* Question button */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  id={`faq-btn-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "18px 24px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "12px",
                    color: isOpen ? "#2FA084" : "var(--text-dark)",
                    fontSize: "15.5px",
                    fontWeight: 700,
                    fontFamily: "inherit",
                    transition: "color 0.25s",
                  }}
                >
                  <span>{faq.q}</span>

                  {/* Icon */}
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: isOpen
                        ? "linear-gradient(135deg, #2FA084, #43F0CD)"
                        : "rgba(47,160,132,0.06)",
                      border: `1px solid ${isOpen ? "transparent" : "rgba(47,160,132,0.15)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.25s ease",
                      boxShadow: isOpen ? "0 4px 12px rgba(47,160,132,0.28)" : "none",
                    }}
                  >
                    {isOpen
                      ? <FaMinus size={10} color="#fff" />
                      : <FaPlus size={10} color="#2FA084" />
                    }
                  </div>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0 24px 20px",
                      paddingTop: "14px",
                      color: "var(--text-body)",
                      fontSize: "14.5px",
                      lineHeight: 1.75,
                      borderTop: "1px dashed rgba(47,160,132,0.15)",
                    }}
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-section-header {
          animation: portfolioSlideDown 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .faq-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
