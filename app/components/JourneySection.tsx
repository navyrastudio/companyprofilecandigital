import { Monitor, Database, PenTool } from 'lucide-react';

export default function JourneySection() {
  const cards = [
    {
      title: "Website Profesional",
      desc: "Sebagai pusat informasi yang mudah diakses kapan saja.",
    },
    {
      title: "Sistem Informasi",
      desc: "Untuk membantu pekerjaan menjadi lebih tertata dan efisien.",
    },
    {
      title: "UI/UX Design",
      desc: "Agar teknologi mudah digunakan oleh siapa pun.",
    },
    {
      title: "Pendampingan Digital",
      desc: "Membantu Anda memahami dan memanfaatkan solusi yang telah dibangun.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden z-0 border-t border-slate-100 journey-section">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2FA084]/[0.03] via-transparent to-transparent opacity-70 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-0">
          
          {/* Left Column: Text & Grid (Takes 7 columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8 reveal-left pr-0 lg:pr-8">
            <div className="flex flex-col items-start">
              <div className="section-label">
                Tahapan Perjalanan
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 leading-[1.25]">
                Setiap Perjalanan Digital Memiliki Titik Awal yang <span className="text-[#2FA084]">Berbeda</span>
              </h2>
            </div>
            
            <ul className="list-disc list-inside space-y-2 marker:text-[#2FA084]">
              {[
                "Ada yang baru ingin memiliki website pertama.",
                "Ada yang ingin memperbaiki sistem yang sudah ada.",
                "Ada pula yang ingin mengelola data dan layanan dengan lebih efektif."
              ].map((item, i) => (
                <li 
                  key={i} 
                  className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed pl-1"
                >
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex bg-gradient-to-r from-[#2FA084]/5 to-transparent border-l-[3px] border-[#2FA084]/80 rounded-r-xl mb-2 py-4">
              <div className="w-6 flex-shrink-0"></div> {/* Physical Spacer */}
              <p className="text-slate-600 text-[14px] leading-[1.7] italic pr-4">
                "Karena itu kami tidak menawarkan solusi yang sama untuk semua orang. Kami memulai dengan memahami kebutuhan Anda terlebih dahulu."
              </p>
            </div>
            
            {/* 2x2 Grid of Cards Container */}
            <div className="relative mt-2">
              {/* Decorative Dot Pattern (Bottom Right) */}
              <div className="absolute -bottom-8 -right-6 w-32 h-32 md:w-48 md:h-48 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEuNSIgZmlsbD0icmdiYSg0NywgMTYwLCAxMzIsIDAuMykiLz48L3N2Zz4=')] opacity-70 z-0 pointer-events-none"></div>
              
              {/* 2x2 Grid of Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 relative z-10">
                {cards.map((card, i) => (
                  <div 
                    key={i} 
                    className="relative bg-white border border-slate-100 rounded-xl overflow-hidden shadow-[0_8px_24px_-8px_rgba(47,160,132,0.12)]"
                    style={{ padding: '24px' }}
                  >
                    {/* Accent Top Bar (Permanent) */}
                    <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#2FA084] to-[#43F0CD]"></div>
                    
                    <h4 className="text-[14px] md:text-[15px] font-extrabold text-slate-800 mb-2 mt-1">
                      {card.title}
                    </h4>
                    <p className="text-slate-500 text-[12px] md:text-[13px] leading-[1.65]">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Graphic Representation (Takes 4 columns, skips 1 for spacing) */}
          <div className="lg:col-span-4 lg:col-start-9 flex justify-center lg:justify-end w-full mt-12 lg:mt-0 reveal-scale">
            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] lg:max-w-full">
              {/* The Giant Circle */}
              <div className="absolute inset-4 rounded-full bg-[#f4fbf9] border border-[#2FA084]/10 shadow-inner"></div>
            
            {/* Decorative dots pattern inside circle */}
            <div className="absolute inset-10 rounded-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoNDcsIDE2MCwgMTMyLCAwLjE1KSIvPjwvc3ZnPg==')] opacity-40"></div>

            {/* Floating Logo 1 (Top Left) - Website Profesional */}
            <div className="absolute top-[12%] left-[0%] w-[50%] h-[35%] rounded-3xl shadow-[0_20px_40px_-10px_rgba(47,160,132,0.15)] border border-white/80 z-10 animate-[float_6s_ease-in-out_infinite] bg-white/70 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#43F0CD]/10 to-transparent"></div>
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#2FA084] to-[#43F0CD] flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(47,160,132,0.4)]">
                <Monitor className="text-white w-8 h-8" strokeWidth={2} />
              </div>
            </div>

            {/* Floating Logo 2 (Middle Right) - Sistem Informasi */}
            <div className="absolute top-[35%] right-[0%] w-[50%] h-[35%] rounded-3xl shadow-[0_25px_50px_-12px_rgba(47,160,132,0.2)] border border-white/90 z-20 animate-[float_7s_ease-in-out_infinite_reverse] bg-white/80 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-bl from-[#2FA084]/5 via-transparent to-[#43F0CD]/10"></div>
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#43F0CD]/20 rounded-full blur-2xl"></div>
               <div className="relative z-10 w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-slate-50">
                  <Database className="text-[#2FA084] w-8 h-8" strokeWidth={2} />
               </div>
               <div className="relative z-10 mt-3 flex items-center gap-1.5">
                 <div className="w-2 h-2 rounded-full bg-[#2FA084] animate-pulse"></div>
                 <div className="w-8 h-1.5 rounded-full bg-slate-200"></div>
               </div>
            </div>


            {/* Floating Logo 3 (Bottom Left) - UI/UX Design */}
            <div className="absolute bottom-[10%] left-[10%] w-[50%] h-[35%] rounded-3xl shadow-[0_15px_30px_-8px_rgba(0,0,0,0.08)] border border-white/60 z-30 animate-[float_8s_ease-in-out_infinite] bg-white/60 backdrop-blur-lg flex flex-col items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-[#2FA084]/10 to-transparent opacity-50"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#2FA084]/10 rounded-full blur-xl"></div>
               <div className="relative z-10 w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-[0_10px_20px_-5px_rgba(47,160,132,0.15)] border border-white">
                 <PenTool className="text-[#2FA084] w-8 h-8" strokeWidth={2.5} />
               </div>
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}
