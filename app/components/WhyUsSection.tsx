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
        <div className="w-full text-left mb-24 lg:mb-32 reveal">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
            Cara Masyarakat Mencari Informasi <span className="text-[#2FA084]">Sudah Berubah</span>
          </h2>
        </div>

        {/* Spacer for guaranteed extra gap */}
        <div className="h-10 lg:h-16 w-full"></div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Custom Styled Image Placeholder */}
          <div className="relative w-full reveal-left">
            <div className="group relative w-full aspect-[4/3] rounded-[2rem] bg-slate-50 flex flex-col items-center justify-center overflow-hidden cursor-pointer shadow-xl transition-all duration-400">
              
              {/* Inner dashed border element */}
              <div className="absolute inset-1 rounded-[1.8rem] border-2 border-dashed border-[#2FA084]/40 transition-all duration-500 group-hover:border-solid group-hover:border-[#2FA084] group-hover:scale-[0.97] group-hover:bg-[#2FA084]/5"></div>
              
              <ImageIcon className="w-16 h-16 text-slate-300 mb-4 transition-all duration-500 z-10 group-hover:text-[#2FA084] group-hover:scale-125 group-hover:-translate-y-1" />
              <span className="text-sm font-semibold text-slate-400 z-10 transition-colors duration-300 group-hover:text-[#2FA084]">Tempat untuk Gambar / Ilustrasi</span>
            </div>
          </div>

          {/* Right: Custom Styled Cards */}
          <div className="reveal-right">
            <p className="text-[17px] text-slate-600 leading-[1.7] mb-8">
              Sebelum memutuskan membeli produk, mendaftar sekolah, atau menggunakan layanan tertentu, kebanyakan orang akan mencari informasi terlebih dahulu melalui internet.
            </p>
            <div className="flex flex-col gap-3">
              
              {items.map((item, idx) => (
                <div 
                  className="group relative bg-white rounded-xl py-2 px-4 shadow-[5px_5px_0px_rgba(47,160,132,0.15)] transition-all duration-300 border border-[#2FA084]/10 hover:border-transparent hover:shadow-[0_10px_20px_rgba(47,160,132,0.08)] hover:-translate-y-1 flex items-center mt-2 gap-4 z-10 cursor-default" 
                  key={idx}
                >
                  {/* Subtle Gradient Hover Overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#2FA084]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  
                  <div 
                    className="w-11 h-11 min-w-[2.75rem] rounded-lg flex items-center justify-center text-xl transition-all duration-500 relative overflow-hidden z-20 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-md" 
                    style={{ backgroundColor: item.color }}
                  >
                    {/* Shine effect on hover */}
                    <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] bg-gradient-to-br from-white/80 to-transparent rotate-45 -translate-y-[150%] transition-transform duration-700 -z-10 group-hover:translate-y-[150%]"></div>
                    
                    {item.emoji}
                  </div>
                  <h3 className="text-[15px] font-medium text-slate-700 leading-relaxed transition-colors duration-300 group-hover:text-[#2FA084]">
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
