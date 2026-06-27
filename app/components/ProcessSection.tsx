"use client";

import React, { useState } from 'react';

export default function ProcessSection() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    { title: "Diskusi Singkat", desc: "Kita ngobrol santai soal kebutuhan dan target Anda." },
    { title: "Rencana & Strategi", desc: "Kami siapkan peta jalan digital yang paling pas." },
    { title: "Desain UI/UX", desc: "Pembuatan antarmuka visual yang modern dan intuitif." },
    { title: "Pengembangan", desc: "Kode mulai ditulis menjadi sistem yang nyata." },
    { title: "Rilis & Panduan", desc: "Siap diluncurkan, kami pandu cara menggunakannya." },
  ];

  return (
    <section id="process" className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Background Decorative Elements */}
      <div className="absolute rounded-full pointer-events-none z-0" style={{ top: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(47,160,132,0.08) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
      <div className="absolute rounded-full pointer-events-none z-0" style={{ bottom: '-10%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(67,240,205,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }}></div>
      
      {/* Subtle Dotted Pattern Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ opacity: 0.03, backgroundImage: "radial-gradient(#2FA084 1.5px, transparent 1.5px)", backgroundSize: "32px 32px" }}></div>

      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header Layout */}
        <div className="flex flex-col items-center text-center" style={{ marginBottom: '20px', width: '100%' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <span 
              className="inline-block font-bold tracking-widest uppercase" 
              style={{ padding: '6px 16px', backgroundColor: 'rgba(47, 160, 132, 0.1)', color: '#2FA084', fontSize: '11px', borderRadius: '50px', marginBottom: '20px' }}
            >
              Cara Kerja
            </span>
            <h2 className="text-[28px] md:text-3xl lg:text-[40px] font-extrabold text-slate-900 leading-[1.3] tracking-tight mb-4" style={{ margin: '0 auto 20px auto' }}>
              Langkah Digital Tidak Harus <span style={{ color: '#2FA084' }}>Rumit</span>
            </h2>
            <p className="text-slate-600 text-[15px] md:text-[16px] leading-relaxed" style={{ margin: '0 auto' }}>
              Banyak orang merasa teknologi itu rumit. <br className="hidden md:block" />
              Padahal yang dibutuhkan bukan teknologi yang paling canggih, <br className="hidden md:block" />
              melainkan solusi yang paling sesuai.
            </p>
          </div>
        </div>

        {/* Desktop Zig-Zag Timeline (Hidden on Mobile) */}
        <div className="hidden lg:block relative w-full" style={{ maxWidth: '1000px', height: '440px', margin: '0 auto' }}>
          
          {/* SVG Dotted Curve */}
          <div className="absolute w-full" style={{ top: '203px', left: 0, height: '68px', zIndex: 0 }}>
            <svg width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path 
                d="M 100 0 C 200 0, 200 100, 300 100 C 400 100, 400 0, 500 0 C 600 0, 600 100, 700 100 C 800 100, 800 0, 900 0" 
                stroke="#cbd5e1" 
                strokeWidth="2.5" 
                strokeDasharray="8,8" 
                fill="none" 
              />
            </svg>
          </div>

          {/* 5 Steps Grid */}
          <div className="grid grid-cols-5 absolute inset-0 w-full h-full" style={{ zIndex: 10 }}>
            {steps.map((step, i) => {
              const isTop = i % 2 === 0;
              const isHovered = hoveredStep === i;
              
              const boxStyle = {
                height: '140px',
                backgroundColor: '#ffffff',
                border: isHovered ? '1px solid rgba(47, 160, 132, 0.3)' : '1px solid rgba(47, 160, 132, 0.15)',
                boxShadow: isHovered ? '0 20px 40px -10px rgba(47,160,132,0.2)' : '0 10px 30px -10px rgba(47,160,132,0.08)',
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                transition: 'all 0.3s ease',
              };

              const titleColor = isHovered ? '#2FA084' : '#1e293b';
              const dotBg = isHovered ? '#2FA084' : '#e6f5f1';
              const dotBorder = isHovered ? '#bbf2e3' : '#2FA084'; 
              const cornerNumColor = isHovered ? '#2FA084' : '#cbd5e1';

              return (
                <div key={i} className="relative w-full h-full flex flex-col items-center">
                  {isTop ? (
                    <div 
                      className="absolute flex flex-col items-center w-full px-3 cursor-pointer" 
                      style={{ top: '40px' }}
                      onMouseEnter={() => setHoveredStep(i)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      {/* Box */}
                      <div className="w-full p-4 rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden" style={boxStyle}>
                        {/* Accent Top Bar */}
                        <div className="absolute top-0 left-0 w-full h-[4px]" style={{ background: 'linear-gradient(to right, #2FA084, #43F0CD)' }}></div>
                        
                        {/* Corner Number */}
                        <span className="font-black absolute top-3 right-4 z-0" style={{ fontSize: '24px', color: cornerNumColor, transition: 'color 0.3s ease' }}>
                          0{i+1}
                        </span>
                        
                        <h4 className="font-bold text-[14px] leading-tight mb-2 relative z-10" style={{ color: titleColor, transition: 'color 0.3s ease' }}>{step.title}</h4>
                        <p className="text-[11px] text-slate-500 leading-snug relative z-10">{step.desc}</p>
                      </div>
                      
                      {/* Dot */}
                      <div className="rounded-full shadow-sm" style={{ width: '22px', height: '22px', marginTop: '12px', backgroundColor: dotBg, border: `5px solid ${dotBorder}`, transition: 'all 0.3s ease' }}></div>
                    </div>
                  ) : (
                    <div 
                      className="absolute flex flex-col-reverse items-center w-full px-3 cursor-pointer" 
                      style={{ top: '260px' }}
                      onMouseEnter={() => setHoveredStep(i)}
                      onMouseLeave={() => setHoveredStep(null)}
                    >
                      {/* Box */}
                      <div className="w-full p-4 rounded-2xl flex flex-col justify-center items-center text-center relative overflow-hidden" style={{ ...boxStyle, marginTop: '12px' }}>
                        {/* Accent Top Bar */}
                        <div className="absolute top-0 left-0 w-full h-[4px]" style={{ background: 'linear-gradient(to right, #2FA084, #43F0CD)' }}></div>
                        
                        {/* Corner Number */}
                        <span className="font-black absolute top-3 right-4 z-0" style={{ fontSize: '24px', color: cornerNumColor, transition: 'color 0.3s ease' }}>
                          0{i+1}
                        </span>
                        
                        <h4 className="font-bold text-[14px] leading-tight mb-2 relative z-10" style={{ color: titleColor, transition: 'color 0.3s ease' }}>{step.title}</h4>
                        <p className="text-[11px] text-slate-500 leading-snug relative z-10">{step.desc}</p>
                      </div>
                      
                      {/* Dot */}
                      <div className="rounded-full shadow-sm" style={{ width: '22px', height: '22px', backgroundColor: dotBg, border: `5px solid ${dotBorder}`, transition: 'all 0.3s ease' }}></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Vertical Timeline (Hidden on Desktop) */}
        <div className="block lg:hidden relative w-full px-4">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 border-l-2 border-dashed border-slate-200" style={{ left: '27px' }}></div>
          
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => {
              const isHovered = hoveredStep === i;
              
              const mBoxStyle = {
                backgroundColor: '#ffffff',
                border: isHovered ? '1px solid rgba(47, 160, 132, 0.3)' : '1px solid rgba(47, 160, 132, 0.15)',
                boxShadow: isHovered ? '0 20px 40px -10px rgba(47,160,132,0.2)' : '0 10px 30px -10px rgba(47,160,132,0.08)',
                transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
                transition: 'all 0.3s ease',
              };

              const titleColor = isHovered ? '#2FA084' : '#1e293b';
              const dotBg = isHovered ? '#2FA084' : '#e6f5f1';
              const dotBorder = isHovered ? '#bbf2e3' : '#2FA084'; 
              const cornerNumColor = isHovered ? '#2FA084' : '#cbd5e1';

              return (
              <div 
                key={i} 
                className="relative flex items-center gap-6 cursor-pointer"
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 rounded-full shadow-sm" style={{ width: '22px', height: '22px', marginLeft: '-3px', backgroundColor: dotBg, border: `5px solid ${dotBorder}`, transition: 'all 0.3s ease' }}></div>
                
                {/* Box */}
                <div className="flex-1 p-5 rounded-2xl flex flex-col justify-center relative overflow-hidden" style={mBoxStyle}>
                  {/* Accent Left Bar */}
                  <div className="absolute top-0 left-0 w-[4px] h-full" style={{ background: 'linear-gradient(to bottom, #2FA084, #43F0CD)' }}></div>
                  
                  {/* Corner Number */}
                  <span className="font-black absolute top-3 right-4 z-0" style={{ fontSize: '24px', color: cornerNumColor, transition: 'color 0.3s ease', lineHeight: 1 }}>
                    0{i+1}
                  </span>

                  <h4 className="font-bold text-[15px] leading-tight mb-2 relative z-10" style={{ color: titleColor, transition: 'color 0.3s ease' }}>{step.title}</h4>
                  <p className="text-[13px] text-slate-500 leading-relaxed relative z-10">{step.desc}</p>
                </div>
              </div>
            )})}
          </div>
        </div>

      </div>
    </section>
  );
}
