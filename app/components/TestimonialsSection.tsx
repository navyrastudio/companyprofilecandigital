import { FaQuoteLeft, FaStar } from "react-icons/fa";
import testimonials from "../../data/testimonials.json";

const avatarGradients = [
  "linear-gradient(135deg, #2FA084, #43F0CD)",
  "linear-gradient(135deg, #3b82f6, #60a5fa)",
  "linear-gradient(135deg, #8b5cf6, #a78bfa)",
  "linear-gradient(135deg, #f59e0b, #fbbf24)",
  "linear-gradient(135deg, #10b981, #34d399)",
  "linear-gradient(135deg, #ef4444, #f87171)",
];

const avatarShadows = [
  "rgba(47,160,132,0.28)",
  "rgba(59,130,246,0.25)",
  "rgba(139,92,246,0.25)",
  "rgba(245,158,11,0.25)",
  "rgba(16,185,129,0.25)",
  "rgba(239,68,68,0.25)",
];

function renderCard(t: typeof testimonials[0], i: number) {
  return (
    <div key={i} className="testi-card">
      <div className="testi-quote-icon">
        <FaQuoteLeft size={16} />
      </div>
      <div className="testi-stars">
        {[...Array(t.rating)].map((_, j) => (
          <FaStar key={j} size={12} color="#f59e0b" />
        ))}
      </div>
      <p className="testi-text">"{t.text}"</p>
      <div className="testi-author">
        <div
          className="testi-avatar"
          style={{
            background: avatarGradients[i % avatarGradients.length],
            boxShadow: `0 6px 16px ${avatarShadows[i % avatarShadows.length]}`,
          }}
        >
          {t.name[0]}
        </div>
        <div>
          <div className="testi-name">{t.name}</div>
          <div className="testi-role">
            {t.role} · <span className="testi-company">{t.company}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="testi-section">
      {/* Subtle dot-grid background */}
      <div className="testi-bg-dots" />
      <div className="testi-bg-glow testi-bg-glow--left" />
      <div className="testi-bg-glow testi-bg-glow--right" />

      {/* ── Section Header ── */}
      <div className="container testi-header-wrap">
        <div className="section-header testi-section-header">
          <div className="testi-label">Testimoni</div>
          <h2 className="section-title">
            Kata Mereka tentang <span className="testi-brand">CanDigit</span>
          </h2>
          <p className="section-desc">
            Biarkan klien kami yang berbicara. Kepuasan mereka adalah prioritas
            utama kami.
          </p>
        </div>
      </div>

      {/* ── Marquee Row 1 (→) ── */}
      <div className="testi-marquee-outer" style={{ marginBottom: "20px" }}>
        <div className="testi-marquee-inner">
          {[...testimonials, ...testimonials].map((t, i) =>
            renderCard(t, i)
          )}
        </div>
      </div>

      {/* ── Marquee Row 2 (←) ── */}
      <div className="testi-marquee-outer">
        <div
          className="testi-marquee-inner"
          style={{ animationDirection: "reverse" }}
        >
          {[
            ...testimonials.slice().reverse(),
            ...testimonials.slice().reverse(),
          ].map((t, i) => renderCard(t, i + 1))}
        </div>
      </div>

    
    </section>
  );
}
