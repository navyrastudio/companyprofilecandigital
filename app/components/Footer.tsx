"use client";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube, FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      title: "Layanan",
      links: [
        { label: "Landing Page", href: "#pricing" },
        { label: "Company Profile", href: "#pricing" },
        { label: "Toko Online", href: "#pricing" },
        { label: "Custom Web App", href: "#pricing" },
        { label: "Redesain Website", href: "#pricing" },
      ],
    },
    {
      title: "Perusahaan",
      links: [
        { label: "Tentang Kami", href: "#" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Cara Kerja", href: "#process" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Kontak Kami",
      links: [
        { label: "hello@candigit.id", href: "mailto:hello@candigit.id", Icon: FaEnvelope },
        { label: "+62 812-3456-7890", href: "tel:+6281234567890", Icon: FaPhone },
        { label: "WhatsApp Kami", href: "https://wa.me/6281234567890", Icon: FaWhatsapp },
      ],
    },
  ];

  const socialLinks = [
    { Icon: FaInstagram, href: "#", label: "Instagram" },
    { Icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { Icon: FaTwitter, href: "#", label: "Twitter" },
    { Icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #1a6e54 0%, #2FA084 60%, #34c898 100%)", // Matched with custom website banner background
        color: "rgba(255,255,255,0.7)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      {/* Background Dot Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.12) 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Decorative Glow Orbs */}
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "5%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.22) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-50px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.18) 0%, transparent 70%)",
          filter: "blur(50px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Elegant Floating Geometry & Rings */}
      {/* Dashed Ring 1 */}
      <div
        className="footer-shape-rotate"
        style={{
          position: "absolute",
          top: "70px",
          left: "8%",
          width: "110px",
          height: "110px",
          borderRadius: "50%",
          border: "2px dashed rgba(255,255,255,0.15)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Glassy Ring 2 */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          right: "12%",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Dashed Ring 3 */}
      <div
        className="footer-shape-rotate-reverse"
        style={{
          position: "absolute",
          bottom: "15%",
          right: "32%",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          border: "1.5px dashed rgba(255,255,255,0.2)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Small floating sphere */}
      <div
        className="footer-float-sphere"
        style={{
          position: "absolute",
          bottom: "35%",
          left: "40%",
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.25)",
          boxShadow: "0 0 10px rgba(255,255,255,0.3)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ padding: "80px 24px 40px", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2.2fr 1fr 1fr 1.2fr",
            gap: "48px",
            marginBottom: "64px",
          }}
          className="footer-grid-wrap"
        >
          {/* Brand Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <a href="#hero" className="nav-logo" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
              <img 
                src="/images/logo-candigit-nav-2.svg" 
                alt="CanDigit Logo" 
                style={{ height: "36px", display: "block" }}
              />
            </a>
            
            <p style={{ fontSize: "14px", lineHeight: 1.75, maxWidth: "300px", color: "rgba(255,255,255,0.85)", margin: 0 }}>
              Jasa pembuatan website profesional yang membantu bisnis Anda tampil kredibel, memukau, dan bersaing di era digital.
            </p>
            
            {/* Social Links */}
            <div style={{ display: "flex", gap: "10px", marginTop: "8px" }}>
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="footer-social-btn"
                  style={{
                    width: 36, height: 36, borderRadius: "10px",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none", transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <Icon size={16} color="#ffffff" className="social-icon" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#fff", marginBottom: "20px", letterSpacing: "0.02em" }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", padding: 0, margin: 0 }}>
                {col.links.map((link) => {
                  const LinkIcon = (link as any).Icon;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="footer-nav-link"
                        style={{
                          color: "rgba(255,255,255,0.8)",
                          textDecoration: "none",
                          fontSize: "14px",
                          transition: "all 0.25s ease",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px"
                        }}
                      >
                        {LinkIcon && <LinkIcon size={13} style={{ opacity: 0.9 }} />}
                        <span>{link.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Separator line */}
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.2) 80%, transparent 100%)", marginBottom: "32px" }} />

        {/* Copyright and Watermark */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", margin: 0 }}>
            © {year} CanDigit. All rights reserved.
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", margin: 0 }}>
            Dibuat dengan ❤️ untuk bisnis Indonesia
          </p>
        </div>
      </div>

      <style>{`
        @keyframes footerRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes footerFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .footer-shape-rotate {
          animation: footerRotate 28s linear infinite;
        }
        .footer-shape-rotate-reverse {
          animation: footerRotate 18s linear infinite reverse;
        }
        .footer-float-sphere {
          animation: footerFloat 5s ease-in-out infinite;
        }

        .footer-social-btn:hover {
          background: #ffffff !important;
          border-color: transparent !important;
          transform: translateY(-3px) scale(1.08);
          box-shadow: 0 8px 20px rgba(0, 66, 88, 0.15);
        }
        .footer-social-btn:hover .social-icon {
          color: #2FA084 !important;
        }
        .footer-nav-link:hover {
          color: #ffffff !important;
          transform: translateX(4px);
        }
        @media (max-width: 900px) {
          .footer-grid-wrap {
            grid-template-columns: 1.5fr 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 768px) {
          .footer-grid-wrap {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
          .footer-grid-wrap > div:first-child {
            grid-column: 1 / -1;
            margin-bottom: 12px;
          }
        }
        @media (max-width: 480px) {
          .footer-grid-wrap {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}
