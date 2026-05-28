"use client";
import { useState } from "react";
import { FaTimes, FaExclamationCircle } from "react-icons/fa";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      id="announcement-bar"
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        background: "linear-gradient(90deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
        borderBottom: "1px solid rgba(239,68,68,0.35)",
        padding: "0",
        overflow: "hidden",
      }}
    >
      {/* Animated scanline */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "repeating-linear-gradient(90deg, transparent 0px, transparent 6px, rgba(239,68,68,0.03) 6px, rgba(239,68,68,0.03) 7px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          padding: "9px 56px 9px 20px",
          position: "relative",
          flexWrap: "wrap",
        }}
      >
        {/* Icon */}
        <span
          style={{
            display: "flex",
            alignItems: "center",
            color: "#ef4444",
            flexShrink: 0,
          }}
        >
          <FaExclamationCircle size={14} />
        </span>

        {/* Label badge */}
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "rgba(239,68,68,0.15)",
            border: "1px solid rgba(239,68,68,0.4)",
            borderRadius: "4px",
            padding: "2px 8px",
            fontSize: "10px",
            fontWeight: 800,
            letterSpacing: "0.08em",
            color: "#ef4444",
            textTransform: "uppercase",
            flexShrink: 0,
          }}
        >
          PEMBERITAHUAN
        </span>

        {/* Message */}
        <p
          style={{
            margin: 0,
            fontSize: "12.5px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.9)",
            letterSpacing: "0.01em",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          Kami{" "}
          <strong style={{ color: "#ef4444" }}>TIDAK MENERIMA</strong> proyek
          dari pemerintah, terafiliasi pemerintah, dan{" "}
          <strong style={{ color: "#ef4444" }}>TIDAK MENERIMA</strong> kucuran
          dana investasi dari pemerintah
        </p>
      </div>

      {/* Close button */}
      <button
        onClick={() => setVisible(false)}
        aria-label="Tutup pemberitahuan"
        style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "6px",
          width: "28px",
          height: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "rgba(255,255,255,0.5)",
          transition: "all 0.2s ease",
          flexShrink: 0,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(239,68,68,0.15)";
          (e.currentTarget as HTMLButtonElement).style.color = "#ef4444";
          (e.currentTarget as HTMLButtonElement).style.borderColor =
            "rgba(239,68,68,0.4)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background =
            "rgba(255,255,255,0.06)";
          (e.currentTarget as HTMLButtonElement).style.color =
            "rgba(255,255,255,0.5)";
          (e.currentTarget as HTMLButtonElement).style.borderColor =
            "rgba(255,255,255,0.12)";
        }}
      >
        <FaTimes size={11} />
      </button>

      <style>{`
        #announcement-bar {
          animation: slideDown 0.4s cubic-bezier(0.16,1,0.3,1) both;
        }
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
      `}</style>
    </div>
  );
}
