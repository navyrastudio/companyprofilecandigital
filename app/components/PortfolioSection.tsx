"use client";

import { FaArrowRight, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    { name: "Company Profile Navyra Studio", type: "Featured Project", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" },
    { name: "Company Profile Navyra Studio", type: "Web Development", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" },
    { name: "Company Profile Navyra Studio", type: "Sistem Informasi", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" },
    { name: "Company Profile Navyra Studio", type: "Mobile App", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=800&q=80" },
    { name: "Company Profile Navyra Studio", type: "UI/UX Design", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#2FA084] relative overflow-hidden portfolio-section">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1.2px, transparent 1.2px)', backgroundSize: '28px 28px' }}></div>
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] rounded-full bg-white/10 blur-[80px]"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white/10 blur-[80px]"></div>
      
      {/* Floating Animated Ornaments */}
      <div className="animate-[float_6s_ease-in-out_infinite]" style={{ position: "absolute", top: "15%", left: "8%", width: "60px", height: "60px", borderRadius: "50%", border: "2px solid rgba(255,255,255,0.15)", zIndex: 0 }} />
      <div className="animate-[float_8s_ease-in-out_infinite_reverse]" style={{ position: "absolute", bottom: "25%", right: "8%", width: "25px", height: "25px", borderRadius: "50%", background: "#ff7a59", boxShadow: "0 8px 20px rgba(255,122,89,0.4)", opacity: 0.9, zIndex: 0 }} />
      <div className="animate-[float_7s_ease-in-out_infinite]" style={{ position: "absolute", top: "45%", left: "15%", width: "40px", height: "40px", borderRadius: "12px", background: "rgba(255,255,255,0.08)", backdropFilter: "blur(4px)", transform: "rotate(15deg)", zIndex: 0 }} />
      <div className="animate-[float_9s_ease-in-out_infinite_reverse]" style={{ position: "absolute", top: "25%", right: "12%", width: "80px", height: "80px", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", zIndex: 0 }} />
      <div className="animate-[float_5s_ease-in-out_infinite]" style={{ position: "absolute", bottom: "10%", left: "35%", width: "20px", height: "20px", borderRadius: "4px", background: "rgba(255,255,255,0.2)", transform: "rotate(45deg)", zIndex: 0 }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header Layout */}
        <div style={{ marginBottom: '40px' }}>
          <div className="max-w-xl reveal-left flex flex-col items-start">
            <div style={{ backgroundColor: '#ff7a59', color: '#ffffff', padding: '6px 32px', borderRadius: '50px', fontSize: '13px', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '20px', display: 'inline-block', boxShadow: '0 4px 15px rgba(255, 122, 89, 0.2)' }}>
              PORTOFOLIO
            </div>
            <h2 className="text-[26px] md:text-3xl lg:text-[34px] font-bold leading-[1.35] tracking-tight mb-4" style={{ color: '#ffffff' }}>
              Karya yang Menjadi Bagian dari <span>Perjalanan Klien Kami</span>
            </h2>
            <p className="text-[14px] md:text-[15px] leading-relaxed max-w-lg" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Lihat bagaimana kami membantu berbagai organisasi dan bisnis <br className="hidden md:block" />
              menghadirkan solusi digital yang sesuai dengan kebutuhan mereka.
            </p>
          </div>
        </div>

        {/* Bento Grid Portfolio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          
          {/* Large Featured Project (Left Side) */}
          <div className="lg:col-span-6 reveal-scale">
            <div 
              onClick={() => setSelectedProject(projects[0])}
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative w-full h-[280px] lg:h-[360px] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(47,160,132,0.25)] transition-all duration-500 bg-[#eef1f6] hover:bg-[#e2e8f0] border border-slate-200/60"
            >
              
              {/* Image Placeholder Symbol (Optional aesthetic) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 transition-transform duration-700 group-hover:scale-110">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full" style={{ padding: '20px 20px 20px 20px' }}>
                <span 
                  className="inline-block text-[9px] font-bold rounded-full shadow-md transition-colors duration-300 border" 
                  style={{ 
                    padding: '6px 12px', 
                    marginBottom: '12px',
                    backgroundColor: hoveredCard === 0 ? '#2FA084' : '#ffffff',
                    color: hoveredCard === 0 ? '#ffffff' : '#475569',
                    borderColor: hoveredCard === 0 ? '#2FA084' : '#e2e8f0'
                  }}
                >
                  {projects[0].type}
                </span>
                <h3 className="text-slate-800 text-[16px] lg:text-[18px] font-bold leading-tight">
                  {projects[0].name}
                </h3>
              </div>
            </div>
          </div>

          {/* 4 Small Projects (Right Side) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 reveal-scale" style={{ animationDelay: '0.2s' }}>
            {projects.slice(1).map((project, i) => (
              <div 
                key={i}
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setHoveredCard(i + 1)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative w-full h-[180px] lg:h-[168px] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-[0_15px_30px_-10px_rgba(47,160,132,0.2)] transition-all duration-500 bg-[#eef1f6] hover:bg-[#e2e8f0] border border-slate-200/60"
              >
                
                {/* Image Placeholder Symbol (Optional aesthetic) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-5 transition-transform duration-700 group-hover:scale-110">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full" style={{ padding: '16px 16px 14px 16px' }}>
                  <span 
                    className="inline-block text-[8px] font-bold rounded-full shadow-sm transition-colors duration-300 border" 
                    style={{ 
                      padding: '4px 10px', 
                      marginBottom: '8px',
                      backgroundColor: hoveredCard === (i + 1) ? '#2FA084' : '#ffffff',
                      color: hoveredCard === (i + 1) ? '#ffffff' : '#475569',
                      borderColor: hoveredCard === (i + 1) ? '#2FA084' : '#e2e8f0'
                    }}
                  >
                    {project.type}
                  </span>
                  <h3 className="text-slate-800 text-[12px] lg:text-[13px] font-bold leading-snug">
                    {project.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* View All CTA Button */}
        <div className="flex justify-center reveal-up" style={{ marginTop: '64px' }}>
            <a 
              href="#"
              className="inline-flex items-center gap-2 rounded-full text-white font-bold text-[14px] transition-all duration-300"
              style={{
                padding: "12px 24px",
                background: "linear-gradient(to right, #ff7a59 0%, #ff9478 100%)",
                boxShadow: "0 10px 20px rgba(255, 122, 89, 0.25)",
                border: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(255, 122, 89, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(255, 122, 89, 0.25)";
              }}
            >
              More Project
              <FaArrowRight size={12} />
            </a>
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center" style={{ padding: '24px', zIndex: 99999 }} onClick={() => setSelectedProject(null)}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
          
          {/* Modal Content */}
          <div 
            className="relative bg-white w-full shadow-2xl"
            style={{ maxWidth: '400px', borderRadius: '20px', maxHeight: '90vh', overflowY: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute bg-white hover:bg-slate-50 text-slate-800 rounded-full shadow-md transition-all flex items-center justify-center z-10"
              style={{ top: '12px', right: '12px', width: '32px', height: '32px' }}
            >
              <FaTimes size={12} />
            </button>

            {/* Modal Image Placeholder */}
            <div className="w-full bg-[#eef1f6] flex items-center justify-center relative border-b border-slate-100" style={{ height: '140px' }}>
              <div className="opacity-10">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </div>
            </div>

            {/* Modal Text Content */}
            <div style={{ padding: '24px' }}>
              <span className="inline-block bg-[#2FA084]/10 text-[#2FA084] font-bold rounded-full" style={{ fontSize: '9px', padding: '4px 10px', marginBottom: '12px' }}>
                {selectedProject.type}
              </span>
              <h3 className="font-extrabold text-slate-900 leading-tight" style={{ fontSize: '18px', marginBottom: '12px' }}>
                {selectedProject.name}
              </h3>
              
              <div className="text-slate-600 leading-relaxed" style={{ fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p>
                  Ini adalah contoh detail deskripsi untuk proyek <strong>{selectedProject.name}</strong>. Di sini Anda bisa menjelaskan latar belakang proyek dan tantangan klien.
                </p>
                <p>
                  Desain antarmuka dibuat sangat modern, bersih, dan responsif, mengutamakan pengalaman pengguna (UX) yang mulus.
                </p>
              </div>

              <div className="border-t border-slate-100 flex" style={{ marginTop: '20px', paddingTop: '20px' }}>
                <a href="#" className="inline-flex items-center justify-center bg-[#2FA084] text-white font-bold rounded-full hover:bg-[#25856d] transition-colors" style={{ padding: '8px 16px', fontSize: '11px', gap: '6px' }}>
                  Kunjungi Website <FaArrowRight size={8} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
