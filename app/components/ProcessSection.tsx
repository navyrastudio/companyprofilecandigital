import { ElementType } from "react";
import {
  FaComments,
  FaFileAlt,
  FaTools,
  FaEye,
  FaRocket,
  FaHeadset,
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

export default function ProcessSection() {
  return (
    <section id="process" className="section-bg-light">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-label">Cara Kerja</div>
          <h2 className="section-title">
            6 Tahap Mewujudkan <span>Website Impian</span> Anda
          </h2>
          <p className="section-desc">
            Proses yang terstruktur dan transparan — Anda tahu persis apa yang terjadi di setiap tahapnya.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            maxWidth: "900px",
            margin: "0 auto",
          }}
          className="two-col"
        >
          {processData.map((step, i) => {
            const IconComponent = iconMap[step.icon];
            return (
              <div
                key={step.num}
                className="card reveal"
                style={{
                  padding: "24px",
                  display: "flex",
                  gap: "18px",
                  alignItems: "flex-start",
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <div style={{ flexShrink: 0, textAlign: "center" }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "14px",
                      background: step.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "6px",
                    }}
                  >
                    {IconComponent && <IconComponent size={20} color="#fff" />}
                  </div>

                <div style={{ fontSize: "11px", fontWeight: 800, color: step.color, letterSpacing: "0.05em" }}>
                  {step.num}
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "6px" }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-body)", lineHeight: 1.6 }}>
                  {step.desc}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
