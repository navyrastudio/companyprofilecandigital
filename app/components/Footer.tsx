import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

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
      title: "Kontak",
      links: [
        { label: "hello@candigit.id", href: "mailto:hello@candigit.id" },
        { label: "+62 812-3456-7890", href: "tel:+6281234567890" },
        { label: "WhatsApp Kami", href: "https://wa.me/6281234567890" },
        { label: "Instagram", href: "#" },
        { label: "LinkedIn", href: "#" },
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
    <footer style={{ background: "#002d3d", color: "rgba(255,255,255,0.75)" }}>
      <div className="container" style={{ padding: "64px 24px 40px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            marginBottom: "48px",
          }}
          className="two-col"
        >
          {/* Brand */}
          <div>
            <a href="#hero" className="nav-logo" style={{ marginBottom: "16px", display: "inline-flex" }}>
              <div className="nav-logo-icon" style={{ background: "var(--accent)" }}>C</div>
              <span className="nav-logo-text" style={{ color: "#fff" }}>
                Can<span style={{ color: "var(--accent)" }}>Digit</span>
              </span>
            </a>
            <p style={{ fontSize: "14px", lineHeight: 1.7, maxWidth: "270px", marginBottom: "24px", color: "rgba(255,255,255,0.55)" }}>
              Jasa pembuatan website profesional yang membantu bisnis Anda tampil kredibel dan berkompetisi di era digital.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: 34, height: 34, borderRadius: "8px",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none", transition: "all 0.2s",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "var(--accent)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                >
                  <Icon size={15} color="rgba(255,255,255,0.7)" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{ color: "rgba(255,255,255,0.55)", textDecoration: "none", fontSize: "14px", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#fff"}
                      onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "24px" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            © {year} CanDigit. All rights reserved.
          </p>
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            Dibuat dengan ❤️ untuk bisnis Indonesia
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .two-col { grid-template-columns: 1fr 1fr !important; }
          footer .two-col > div:first-child { grid-column: 1 / -1; }
        }
      `}</style>
    </footer>
  );
}
