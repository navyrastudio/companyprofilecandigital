import { FiSearch, FiFolder, FiShield, FiMonitor } from "react-icons/fi";

export default function ProblemSection() {
  const problems = [
    {
      title: "Informasi Sulit Diakses",
      description: "Masyarakat harus bertanya satu per satu untuk mendapatkan informasi yang sebenarnya bisa diakses secara mandiri.",
      icon: <FiSearch className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-500" />
    },
    {
      title: "Administrasi Masih Manual",
      description: "Data tersimpan di banyak tempat sehingga sulit dikelola dan dicari kembali.",
      icon: <FiFolder className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-500" />
    },
    {
      title: "Sulit Membangun Kepercayaan",
      description: "Calon pelanggan atau masyarakat kesulitan mendapatkan gambaran yang jelas tentang organisasi atau bisnis Anda.",
      icon: <FiShield className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-500" />
    },
    {
      title: "Belum Memanfaatkan Teknologi",
      description: "Potensi teknologi dapat membantu pekerjaan menjadi lebih cepat, rapi, dan efisien.",
      icon: <FiMonitor className="w-8 h-8 md:w-10 md:h-10 transition-colors duration-500" />
    }
  ];

  return (
    <section 
      className="py-24 lg:py-32 relative overflow-hidden z-0"
      style={{ background: 'linear-gradient(135deg, #2FA084 0%, #43F0CD 100%)' }}
    >
      
      {/* Background Decorative Elements (Inverted for Green BG) */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }}></div>
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-white/10 blur-[80px]"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white/10 blur-[80px]"></div>
      
      {/* Floating Animated Ornaments */}
      <div className="prob-float-1" style={{ position: "absolute", top: "15%", left: "8%", width: "60px", height: "60px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.15)", zIndex: 0 }} />
      <div className="prob-float-2" style={{ position: "absolute", bottom: "25%", right: "8%", width: "25px", height: "25px", borderRadius: "50%", background: "#ff7a59", boxShadow: "0 8px 20px rgba(255,122,89,0.4)", opacity: 0.9, zIndex: 0 }} />
      <div className="prob-float-3" style={{ position: "absolute", top: "45%", left: "15%", width: "40px", height: "40px", borderRadius: "12px", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(4px)", transform: "rotate(15deg)", zIndex: 0 }} />
      <div className="prob-float-4" style={{ position: "absolute", top: "25%", right: "12%", width: "80px", height: "80px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", zIndex: 0 }} />
      <div className="prob-float-5" style={{ position: "absolute", bottom: "10%", left: "35%", width: "20px", height: "20px", borderRadius: "4px", background: "rgba(255,255,255,0.2)", transform: "rotate(45deg)", zIndex: 0 }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="w-full text-center reveal flex flex-col items-center" style={{ marginBottom: '70px' }}>
          <div className="inline-flex items-center rounded-full text-xs font-bold uppercase tracking-widest" style={{ padding: '7px 20px', background: '#ff7a59', color: '#ffffff', border: 'none', marginBottom: '48px' }}>
            Tantangan Bisnis
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight max-w-3xl" style={{ color: '#ffffff' }}>
            Banyak Organisasi dan Bisnis Memiliki Potensi Besar, <span style={{ color: '#ffffff' }}>Tetapi...</span>
          </h2>
        </div>

        {/* Grid Konten (Sesuai Wireframe: Tanpa Card, Langsung Bulatan Besar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-16">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center reveal-scale"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Lingkaran Besar Sesuai Wireframe dengan Styling Premium (Inverted) */}
              <div 
                className="relative w-24 h-24 md:w-[112px] md:h-[112px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:-translate-y-3 overflow-hidden bg-white"
                style={{ 
                  boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                }}
              >
                
                {/* Efek Latar Belakang Lingkaran saat hover */}
                <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Ikon (Hijau) */}
                <div className="relative z-10 transition-transform duration-500 group-hover:scale-110 [&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10" style={{ color: '#2FA084' }}>
                  {problem.icon}
                </div>
                
                {/* Lingkaran luar (Ring) saat hover */}
                <div className="absolute inset-0 rounded-full border-2 border-[#2FA084]/20 scale-90 group-hover:scale-100 transition-all duration-500"></div>
              </div>
              
              {/* Spacer kuat untuk memaksa jarak renggang antara ikon dan judul */}
              <div className="h-8 md:h-12 w-full shrink-0"></div>
              
              {/* Judul Masalah */}
              <h3 className="text-[16px] md:text-[17px] font-extrabold mb-3 max-w-[260px] min-h-[48px] md:min-h-[56px] flex items-start justify-center" style={{ color: '#ffffff' }}>
                {problem.title}
              </h3>
              
              {/* Deskripsi Singkat */}
              <p className="text-[13px] md:text-[14px] leading-[1.7] max-w-[260px] text-white">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes probFloat1 {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
          100% { transform: translateY(0px) scale(1); }
        }
        @keyframes probFloat2 {
          0% { transform: translateY(0px) rotate(15deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(15deg); }
        }
        @keyframes probFloat3 {
          0% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-10px) rotate(60deg); }
          100% { transform: translateY(0px) rotate(45deg); }
        }
        .prob-float-1 { animation: probFloat1 8s ease-in-out infinite; }
        .prob-float-2 { animation: probFloat1 5s ease-in-out infinite 1s; }
        .prob-float-3 { animation: probFloat2 7s ease-in-out infinite 2s; }
        .prob-float-4 { animation: probFloat1 10s ease-in-out infinite 0.5s; }
        .prob-float-5 { animation: probFloat3 6s ease-in-out infinite 1.5s; }
      `}</style>
    </section>
  );
}
