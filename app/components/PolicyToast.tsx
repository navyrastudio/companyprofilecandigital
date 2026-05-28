"use client";
import { useState, useEffect } from "react";

export default function PolicyToast() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Delay sedikit agar animasi slide-in terasa natural setelah halaman load
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  function handleClose() {
    setExiting(true);
    setTimeout(() => setVisible(false), 380);
  }

  if (!visible) return null;

  return (
    <>
      <div
        id="policy-toast"
        role="alertdialog"
        aria-label="Pemberitahuan Kebijakan"
        style={{
          position: "fixed",
          bottom: "28px",
          left: "24px",
          zIndex: 9000,
          width: "clamp(300px, 90vw, 380px)",
          animation: exiting
            ? "toastOut 0.38s cubic-bezier(0.4,0,1,1) forwards"
            : "toastIn 0.55s cubic-bezier(0.16,1,0.3,1) forwards",
        }}
      >
        {/* Card */}
        <div
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow:
              "0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.07)",
          }}
        >
          {/* Top accent bar */}
          <div
            style={{
              height: "3px",
              background: "linear-gradient(90deg, #ef4444 0%, #f97316 100%)",
            }}
          />

          <div style={{ padding: "20px 20px 18px" }}>
            {/* Header row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              {/* Icon + label */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                {/* Shield icon */}
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "10px",
                    background: "rgba(239,68,68,0.12)",
                    border: "1px solid rgba(239,68,68,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: 17, height: 17 }}
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#ef4444",
                      lineHeight: 1,
                      marginBottom: "3px",
                    }}
                  >
                    Pemberitahuan Kebijakan
                  </div>
                  <div
                    style={{
                      fontSize: "10.5px",
                      color: "rgba(255,255,255,0.35)",
                      fontWeight: 500,
                    }}
                  >
                    Harap dibaca sebelum menghubungi kami
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                id="policy-toast-close"
                onClick={handleClose}
                aria-label="Tutup pemberitahuan"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  width: "28px",
                  height: "28px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "rgba(255,255,255,0.4)",
                  flexShrink: 0,
                  transition: "all 0.2s ease",
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "rgba(239,68,68,0.15)";
                  el.style.color = "#ef4444";
                  el.style.borderColor = "rgba(239,68,68,0.3)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "rgba(255,255,255,0.06)";
                  el.style.color = "rgba(255,255,255,0.4)";
                  el.style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  style={{ width: 12, height: 12 }}
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(to right, rgba(239,68,68,0.3), rgba(255,255,255,0.06) 70%, transparent)",
                marginBottom: "14px",
              }}
            />

            {/* Message body */}
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.7)",
                fontWeight: 400,
              }}
            >
              Kami{" "}
              <strong style={{ color: "#fff", fontWeight: 700 }}>
                tidak menerima
              </strong>{" "}
              proyek dari{" "}
              <span style={{ color: "rgba(255,200,200,0.9)" }}>pemerintah</span>
              ,{" "}
              <span style={{ color: "rgba(255,200,200,0.9)" }}>
                terafiliasi pemerintah
              </span>
              , dan tidak menerima{" "}
              <strong style={{ color: "#fff", fontWeight: 700 }}>
                kucuran dana investasi
              </strong>{" "}
              dari pemerintah.
            </p>

            {/* Footer row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#ef4444",
                    boxShadow: "0 0 8px #ef4444",
                    animation: "policyPulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: "10.5px",
                    color: "rgba(255,255,255,0.3)",
                    fontWeight: 500,
                  }}
                >
                  Kebijakan resmi CanDigit
                </span>
              </div>

              <button
                onClick={handleClose}
                style={{
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  borderRadius: "7px",
                  padding: "5px 14px",
                  fontSize: "11.5px",
                  fontWeight: 700,
                  color: "rgba(255,140,140,0.9)",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "rgba(239,68,68,0.2)";
                  el.style.color = "#ef4444";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "rgba(239,68,68,0.1)";
                  el.style.color = "rgba(255,140,140,0.9)";
                }}
              >
                Mengerti
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes toastIn {
          from {
            opacity: 0;
            transform: translateY(20px) translateX(-8px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(0) scale(1);
          }
        }
        @keyframes toastOut {
          from {
            opacity: 1;
            transform: translateY(0) translateX(0) scale(1);
          }
          to {
            opacity: 0;
            transform: translateY(12px) translateX(-8px) scale(0.94);
          }
        }
        @keyframes policyPulse {
          0%, 100% { box-shadow: 0 0 4px #ef4444; opacity: 1; }
          50%       { box-shadow: 0 0 12px #ef4444; opacity: 0.6; }
        }
      `}</style>
    </>
  );
}
