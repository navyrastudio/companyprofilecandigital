"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    q: "Berapa biaya yang diperlukan untuk membuat website?",
    a: "CanDigital memberikan layanan pembuatan website secara custom yang disesuaikan dengan kebutuhan. Oleh karena itu, penawaran harga secara akurat baru dapat diketahui setelah proses konsultasi. Lihat estimasi biaya di halaman Harga.",
  },
  {
    q: "Apa saja yang perlu dipersiapkan untuk membuat website?",
    a: "Yang perlu disiapkan pada tahap awal adalah tujuan pembuatan website dan aset visual bisnis (seperti: logo, foto produk, gedung, dsb.). Selanjutnya, kami akan memberikan kuesioner singkat untuk membantu Anda mengumpulkan materi pendukung.",
  },
  {
    q: "Berapa lama waktu yang dibutuhkan untuk membuat website?",
    a: "Umumnya 14–30 hari kerja tergantung kompleksitas proyek. Landing page bisa selesai dalam 7–10 hari. Kami akan memberikan estimasi waktu yang akurat setelah konsultasi.",
  },
  {
    q: "Apa saja layanan yang saya dapatkan dari CanDigital?",
    a: "CanDigital akan membantu Anda mulai dari perencanaan, penyusunan materi, desain, development, hingga maintenance website. Layanan kami bersifat opsional dan tidak mengikat, silakan berdiskusi dengan kami.",
  },
  {
    q: "Apakah website yang dibuat ramah SEO?",
    a: "Ya! Setiap website yang kami buat sudah dioptimalkan untuk SEO on-page dasar: struktur heading, meta tags, sitemap, dan loading speed. Untuk paket Enterprise, kami menyediakan SEO full optimization.",
  },
  {
    q: "Apakah saya bisa meminta revisi desain?",
    a: "Tentu! Setiap paket sudah termasuk jatah revisi yang kami komunikasikan di awal. Kami memastikan hasil akhir 100% sesuai ekspektasi Anda sebelum website diluncurkan.",
  },
  {
    q: "Bagaimana cara mengelola konten website saya?",
    a: "Kami menyediakan sistem manajemen konten (CMS) yang mudah digunakan tanpa pengetahuan teknis. Anda juga akan mendapatkan user guide lengkap dan training singkat setelah website selesai.",
  },
  {
    q: "Apa tools yang digunakan CanDigital untuk membuat website?",
    a: "Saat ini kami menyediakan 2 opsi utama: WordPress dan Laravel. Keduanya memiliki kelebihan masing-masing. Silakan berdiskusi dengan kami untuk mengetahui pilihan terbaik bagi kebutuhan Anda.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq">
      <div className="container">
        {/* Header wrapper pakai reveal agar animasi masuk */}
        <div className="section-header reveal">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">
            Pertanyaan yang <span>Sering Ditanyakan</span>
          </h2>
          <p className="section-desc">
            Temukan jawaban atas pertanyaan umum seputar proses pembuatan website bersama CanDigital.
          </p>
        </div>

        {/* FAQ list — TIDAK pakai class reveal di sini agar tidak conflict dengan state toggle */}
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                style={{
                  border: `1px solid ${isOpen ? "rgba(0,66,88,0.3)" : "var(--border)"}`,
                  borderRadius: "12px",
                  overflow: "hidden",
                  marginBottom: "12px",
                  background: "#fff",
                  boxShadow: isOpen ? "var(--shadow-sm)" : "none",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
              >
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
                    color: isOpen ? "var(--primary)" : "var(--text-dark)",
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: "inherit",
                    transition: "color 0.2s",
                  }}
                >
                  <span>{faq.q}</span>

                  {/* Icon filled */}
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: "50%",
                      background: isOpen ? "var(--primary)" : "var(--bg-light)",
                      border: `1px solid ${isOpen ? "var(--primary)" : "var(--border)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.25s ease",
                    }}
                  >
                    {isOpen
                      ? <FaMinus size={11} color="#fff" />
                      : <FaPlus size={11} color="var(--text-muted)" />
                    }
                  </div>
                </button>

                {/* Answer — toggle via inline style (tidak pakai class) */}
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
                      color: "var(--text-body)",
                      fontSize: "15px",
                      lineHeight: 1.75,
                      borderTop: "1px solid var(--border)",
                      paddingTop: "16px",
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
    </section>
  );
}
