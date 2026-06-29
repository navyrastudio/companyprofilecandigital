import Image from "next/image";
import { ImageIcon, Search, Globe, ShieldCheck, Zap } from "lucide-react";

export function WhyUsSection() {
  const items = [
    { icon: <Search className="w-5 h-5 text-white" />, text: "Informasi dicari melalui Google" },
    { icon: <Globe className="w-5 h-5 text-white" />, text: "Website menjadi pusat informasi resmi" },
    { icon: <ShieldCheck className="w-5 h-5 text-white" />, text: "Kepercayaan dibangun dari kehadiran digital yang profesional" },
    { icon: <Zap className="w-5 h-5 text-white" />, text: "Kecepatan akses informasi memengaruhi keputusan masyarakat" }
  ];

  return (
    <section 
      id="why-us"
      className="relative overflow-hidden" 
      style={{ backgroundColor: '#ffffff', paddingTop: '70px', paddingBottom: '100px' }}
    >
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        
        {/* Floating Decorative Elements */}
        <div className="why-float-1" style={{ position: "absolute", top: "15%", left: "48%", width: "45px", height: "45px", borderRadius: "14px", background: "linear-gradient(135deg, #2FA084, #43F0CD)", transform: "rotate(20deg)", boxShadow: "0 12px 25px rgba(47,160,132,0.4)", opacity: 0.8, zIndex: 0 }} />
        
        <div className="why-float-2" style={{ position: "absolute", bottom: "15%", right: "52%", width: "24px", height: "24px", borderRadius: "50%", background: "#ff7a59", boxShadow: "0 8px 20px rgba(255,122,89,0.4)", opacity: 0.9, zIndex: 0 }} />
        
        <div className="why-float-3" style={{ position: "absolute", top: "45%", right: "-1%", width: "35px", height: "35px", borderRadius: "10px", background: "linear-gradient(135deg, #004258, #005a75)", transform: "rotate(-15deg)", boxShadow: "0 10px 20px rgba(0,66,88,0.3)", opacity: 0.5, zIndex: 0 }} />

        <div className="why-float-4" style={{ position: "absolute", top: "35%", left: "-3%", width: "28px", height: "28px", borderRadius: "50%", background: "linear-gradient(135deg, #ff9478, #ff7a59)", boxShadow: "0 8px 20px rgba(255,122,89,0.3)", opacity: 0.7, zIndex: 0 }} />

        <div className="why-float-5" style={{ position: "absolute", bottom: "5%", left: "10%", width: "40px", height: "40px", borderRadius: "12px", background: "linear-gradient(135deg, rgba(47,160,132,0.6), rgba(67,240,205,0.6))", transform: "rotate(35deg)", boxShadow: "0 10px 25px rgba(47,160,132,0.2)", opacity: 0.6, zIndex: 0 }} />

        
        {/* Header Section */}
        <div className="w-full text-center lg:text-left reveal" style={{ marginBottom: '40px' }}>
          <div className="testi-label">
            Transformasi Digital
          </div>
          
          <h2 className="text-[28px] md:text-3xl lg:text-[42px] font-extrabold text-slate-900 leading-[1.3] tracking-tight">
            Cara Masyarakat Mencari Informasi <span className="text-[#2FA084]">Sudah Berubah</span>
          </h2>
        </div>

        {/* 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Illustration Image (No Wrapper) */}
          <div className="relative w-full reveal-left flex justify-center items-center">
            <div className="group relative w-full aspect-[4/3] transition-all duration-500 hover:-translate-y-3">
              <Image 
                src="/images/why-us-section-new.png"
                alt="Ilustrasi Transformasi Digital Candigit"
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Right: Custom Styled Cards */}
          <div className="reveal-right">
            <p className="text-[17px] text-slate-600 leading-[1.7] text-center lg:text-left" style={{ marginBottom: '20px' }}>
              Sebelum memutuskan membeli produk, mendaftar sekolah, atau menggunakan layanan tertentu, kebanyakan orang akan mencari informasi terlebih dahulu melalui internet.
            </p>
            <div className="flex flex-col gap-3">
              
              {items.map((item, idx) => (
                <div 
                  className="group relative rounded-xl py-3 px-4 shadow-[5px_5px_0px_rgba(47,160,132,0.15)] transition-all duration-400 hover:shadow-[0_15px_30px_rgba(47,160,132,0.25)] hover:-translate-y-1 flex items-center mt-2 gap-4 z-10 cursor-default overflow-hidden" 
                  style={{ background: 'linear-gradient(135deg, #2FA084 0%, #43F0CD 100%)' }}
                  key={idx}
                >
                  {/* Subtle Light Hover Overlay */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                  
                  <div 
                    className="w-11 h-11 min-w-[2.75rem] rounded-lg flex items-center justify-center transition-all duration-500 relative overflow-hidden z-20 group-hover:scale-110 group-hover:rotate-6" 
                  >
                    {/* Shine effect on hover */}
                    <div className="absolute top-[-100%] left-[-100%] w-[300%] h-[300%] bg-gradient-to-br from-white/80 to-transparent rotate-45 -translate-y-[150%] transition-transform duration-700 -z-10 group-hover:translate-y-[150%]"></div>
                    
                    {item.icon}
                  </div>
                  <h3 className="leading-relaxed" style={{ color: '#ffffff', fontSize: '13.5px', fontWeight: '400' }}>
                    {item.text}
                  </h3>
                </div>
              ))}

            </div>
          </div>
          
        </div>
      </div>

      <style>{`
        @keyframes whyFloat1 {
          0% { transform: translateY(0px) rotate(20deg); }
          50% { transform: translateY(-20px) rotate(15deg); }
          100% { transform: translateY(0px) rotate(20deg); }
        }
        @keyframes whyFloat2 {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
          100% { transform: translateY(0px) scale(1); }
        }
        @keyframes whyFloat3 {
          0% { transform: translateY(0px) rotate(-15deg); }
          50% { transform: translateY(-18px) rotate(-5deg); }
          100% { transform: translateY(0px) rotate(-15deg); }
        }
        .why-float-1 { animation: whyFloat1 7s ease-in-out infinite; }
        .why-float-2 { animation: whyFloat2 5s ease-in-out infinite 1s; }
        .why-float-3 { animation: whyFloat3 8s ease-in-out infinite 2s; }
        .why-float-4 { animation: whyFloat2 6s ease-in-out infinite 0.5s; }
        .why-float-5 { animation: whyFloat1 9s ease-in-out infinite 1.5s; }
      `}</style>
    </section>
  );
}

export function StatsSection() {
  return null;
}
