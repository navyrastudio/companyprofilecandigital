import { ImageIcon } from "lucide-react";

export function WhyUsSection() {
  const items = [
    { emoji: "📱", text: "Informasi dicari melalui Google", color: "rgba(59, 130, 246, 0.12)" },
    { emoji: "🌐", text: "Website menjadi pusat informasi resmi", color: "rgba(16, 185, 129, 0.12)" },
    { emoji: "⭐", text: "Kepercayaan dibangun dari kehadiran digital yang profesional", color: "rgba(245, 158, 11, 0.12)" },
    { emoji: "⏱", text: "Kecepatan akses informasi memengaruhi keputusan masyarakat", color: "rgba(99, 102, 241, 0.12)" }
  ];

  return (
    <section 
      id="why-us"
      className="relative py-24 lg:py-32 overflow-hidden bg-slate-50" 
    >
      {/* Background Decor */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute top-40 right-0 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[100px]"></div>

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        
        {/* Header Section */}
        <div className="w-full text-left mb-16 lg:mb-20 reveal">
          <h2 className="section-title whitespace-normal lg:whitespace-nowrap">
            Cara Masyarakat Mencari Informasi <span>Sudah Berubah</span>
          </h2>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Custom Styled Image Placeholder */}
          <div className="relative w-full reveal-left">
            <div className="why-image-wrapper shadow-xl">
              <ImageIcon className="why-image-icon" />
              <span className="why-image-text">Tempat untuk Gambar / Ilustrasi</span>
            </div>
          </div>

          {/* Right: Custom Styled Cards */}
          <div className="reveal-right">
            <p className="text-[17px] text-[#4a5568] leading-[1.7] mb-8">
              Sebelum memutuskan membeli produk, mendaftar sekolah, atau menggunakan layanan tertentu, kebanyakan orang akan mencari informasi terlebih dahulu melalui internet.
            </p>
            <div className="flex flex-col gap-3">
              
              {items.map((item, idx) => (
                <div className="why-card group" key={idx}>
                  <div className="why-icon-box" style={{ backgroundColor: item.color }}>
                    {item.emoji}
                  </div>
                  <h3 className="why-title-text">
                    {item.text}
                  </h3>
                </div>
              ))}

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return null;
}
