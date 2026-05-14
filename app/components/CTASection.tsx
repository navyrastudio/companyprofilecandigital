import { FaWhatsapp, FaEnvelope, FaBolt, FaBullseye, FaLock, FaThumbsUp } from "react-icons/fa";

export default function CTASection() {
  const trustItems = [
    { Icon: FaBolt, label: "Respon < 1 Jam", color: "#f59e0b" },
    { Icon: FaBullseye, label: "Konsultasi Gratis", color: "#10b981" },
    { Icon: FaLock, label: "Transaksi Aman", color: "#3b82f6" },
    { Icon: FaThumbsUp, label: "Garansi Puas", color: "#8b5cf6" },
  ];

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(135deg, #004258 0%, #005a75 100%)",
        padding: "88px 0",
      }}
    >
      <div className="container">
        <div style={{ textAlign: "center" }} className="reveal">
          <div
            style={{
              color: "#ff7a59",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "16px",
            }}
          >
            Mulai Sekarang
          </div>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 800,
              color: "#fff",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Siap Wujudkan Website<br />Impian Anda?
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.75)",
              maxWidth: "560px",
              margin: "0 auto 40px",
              lineHeight: 1.7,
            }}
          >
            Konsultasikan kebutuhan Anda sekarang — gratis, tanpa komitmen.
            Tim kami siap membantu mendapatkan website yang tepat sesuai budget.
          </p>

          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginBottom: "56px" }}>
            <a
              href="https://wa.me/6281234567890?text=Halo%20CanDigital%2C%20saya%20ingin%20konsultasi%20gratis"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent"
              id="cta-wa"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <FaWhatsapp size={18} />
              Chat via WhatsApp
            </a>
            <a
              href="mailto:hello@candigital.id"
              className="btn btn-white"
              id="cta-email"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <FaEnvelope size={16} />
              Kirim Email
            </a>
          </div>

          {/* Trust indicators */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              flexWrap: "wrap",
              paddingTop: "40px",
              borderTop: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {trustItems.map(({ Icon, label, color }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 10px",
                  }}
                >
                  <Icon size={22} color={color} />
                </div>
                <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", fontWeight: 600 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
