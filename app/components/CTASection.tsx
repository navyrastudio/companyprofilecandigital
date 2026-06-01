"use client";
import { FaWhatsapp, FaEnvelope, FaBolt, FaBullseye, FaLock, FaThumbsUp } from "react-icons/fa";

export default function CTASection() {
  const trustItems = [
    { Icon: FaBolt, label: "Respon < 1 Jam" },
    { Icon: FaBullseye, label: "Konsultasi Gratis" },
    { Icon: FaLock, label: "Transaksi Aman" },
    { Icon: FaThumbsUp, label: "Garansi Puas" },
  ];

  return (
    <section
      id="contact"
      style={{
        background: "#f4fbf9",
        padding: "96px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Dot Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(47,160,132,0.07) 1.2px, transparent 1.2px)",
          backgroundSize: "24px 24px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Elegant Ambient Glowing Orbs */}
      <div style={{ position: "absolute", top: "-80px", right: "-60px", width: "420px", height: "420px", borderRadius: "50%", background: "radial-gradient(circle, rgba(47,160,132,0.10) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "360px", height: "360px", borderRadius: "50%", background: "radial-gradient(circle, rgba(67,240,205,0.08) 0%, transparent 70%)", filter: "blur(55px)", pointerEvents: "none", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Glassmorphic CTA Card */}
        <div
          className="cta-glass-card reveal-scale"
          style={{
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(47, 160, 132, 0.15)",
            borderRadius: "32px",
            padding: "64px 32px",
            boxShadow: "0 20px 50px rgba(0, 66, 88, 0.06)",
            maxWidth: "960px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Section badge pill */}
          <div
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
              textTransform: "uppercase",
              marginBottom: "22px",
            }}
          >
            Mulai Sekarang
          </div>

          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 48px)",
              fontWeight: 800,
              color: "var(--text-dark)",
              marginBottom: "18px",
              lineHeight: 1.2,
              letterSpacing: "-0.01em",
            }}
          >
            Siap Wujudkan Website<br />
            <span style={{
              background: "linear-gradient(to right, #2FA084 0%, #43F0CD 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
              display: "inline-block"
            }}>Impian Anda?</span>
          </h2>

          <p
            style={{
              fontSize: "16.5px",
              color: "var(--text-body)",
              maxWidth: "600px",
              margin: "0 auto 42px",
              lineHeight: 1.8,
            }}
          >
            Konsultasikan kebutuhan Anda sekarang — gratis, tanpa komitmen.
            Tim kami siap membantu mendapatkan website yang tepat sesuai budget bisnis Anda.
          </p>

          {/* Action buttons */}
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "56px" }}>
            <a
              href="https://wa.me/6281234567890?text=Halo%20CanDigit%2C%20saya%20ingin%20konsultasi%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="btn cta-btn-primary"
              id="cta-wa"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 36px",
                fontSize: "15px",
                fontWeight: 800,
                background: "linear-gradient(to right, #2FA084 0%, #43F0CD 100%)",
                color: "#ffffff",
                boxShadow: "0 10px 24px rgba(47,160,132,0.3)",
                border: "none",
                borderRadius: "50px",
                textDecoration: "none",
              }}
            >
              <FaWhatsapp size={20} />
              Chat via WhatsApp
            </a>
            <a
              href="mailto:hello@candigit.id"
              className="btn cta-btn-secondary"
              id="cta-email"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "16px 36px",
                fontSize: "15px",
                fontWeight: 800,
                background: "#ffffff",
                border: "1px solid rgba(47, 160, 132, 0.2)",
                color: "var(--primary)",
                borderRadius: "50px",
                textDecoration: "none",
                boxShadow: "0 4px 12px rgba(0, 66, 88, 0.03)",
              }}
            >
              <FaEnvelope size={16} />
              Kirim Email
            </a>
          </div>

          {/* Divider line inside card */}
          <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(47,160,132,0.15) 20%, rgba(47,160,132,0.15) 80%, transparent 100%)", marginBottom: "40px" }} />

          {/* Trust indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "48px",
              flexWrap: "wrap",
            }}
          >
            {trustItems.map(({ Icon, label }, idx) => (
              <div key={label} className={`cta-trust-card reveal reveal-d${idx + 1}`}>
                <div
                  className="cta-trust-icon-wrap"
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #2FA084, #43F0CD)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: "0 6px 14px rgba(47,160,132,0.18)",
                  }}
                >
                  <Icon size={20} color="#ffffff" />
                </div>
                <div style={{ fontSize: "13.5px", color: "var(--text-dark)", fontWeight: 700, letterSpacing: "-0.01em" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .cta-btn-primary {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .cta-btn-primary:hover {
          transform: translateY(-3px) scale(1.02) !important;
          box-shadow: 0 16px 36px rgba(47, 160, 132, 0.5) !important;
        }
        .cta-btn-secondary {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .cta-btn-secondary:hover {
          transform: translateY(-3px) scale(1.02) !important;
          background: #f4fbf9 !important;
          border-color: rgba(47, 160, 132, 0.4) !important;
          box-shadow: 0 8px 20px rgba(47, 160, 132, 0.1) !important;
        }
        .cta-trust-card {
          transition: all 0.3s ease;
          cursor: default;
        }
        .cta-trust-card:hover {
          transform: translateY(-2px);
        }
        .cta-trust-card:hover .cta-trust-icon-wrap {
          transform: translateY(-4px) scale(1.08) rotate(4deg);
          box-shadow: 0 12px 24px rgba(47, 160, 132, 0.35) !important;
        }
        @media (max-width: 640px) {
          .cta-glass-card {
            padding: 44px 20px !important;
            border-radius: 24px !important;
          }
          .cta-btn-primary, .cta-btn-secondary {
            width: 100% !important;
            justify-content: center !important;
          }
          .cta-trust-card {
            flex: 1 1 calc(50% - 24px) !important;
            min-width: 120px !important;
          }
        }
      `}</style>
    </section>
  );
}
