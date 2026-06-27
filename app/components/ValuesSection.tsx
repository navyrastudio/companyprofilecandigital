"use client";

import React, { useState } from 'react';

const valuesData = [
  {
    title: "Collaboration",
    desc: "Membangun solusi bersama.",
  },
  {
    title: "Simplicity",
    desc: "Membuat teknologi lebih mudah dipahami.",
  },
  {
    title: "Integrity",
    desc: "Menjaga kepercayaan dalam setiap proses.",
  },
  {
    title: "Growth",
    desc: "Mendukung perkembangan jangka panjang.",
  },
  {
    title: "Impact",
    desc: "Menghadirkan manfaat yang nyata.",
  },
];

const ValueCard = ({ title, desc, index }: { title: string, desc: string, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    backgroundColor: '#ffffff',
    border: isHovered ? '1px solid rgba(47, 160, 132, 0.3)' : '1px solid rgba(47, 160, 132, 0.1)',
    boxShadow: isHovered ? '0 20px 40px -10px rgba(47,160,132,0.2)' : '0 10px 30px -10px rgba(47,160,132,0.05)',
    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
    transition: 'all 0.3s ease',
    padding: '32px 24px',
  };

  const titleColor = isHovered ? '#2FA084' : '#1e293b';

  return (
    <div 
      className="relative w-full rounded-2xl flex flex-col justify-center items-center text-center cursor-pointer overflow-hidden reveal-scale"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Accent Top Bar */}
      <div className="absolute top-0 left-0 w-full h-[4px]" style={{ background: 'linear-gradient(to right, #2FA084, #43F0CD)', opacity: isHovered ? 1 : 0.7, transition: 'opacity 0.3s ease' }}></div>
      
      {/* Watermark Icon/Number Optional (Keeping it clean as requested) */}
      
      <h4 className="font-bold text-[18px] leading-tight mb-3 relative z-10" style={{ color: titleColor, transition: 'color 0.3s ease' }}>{title}</h4>
      <p className="text-[14px] text-slate-500 leading-relaxed relative z-10">{desc}</p>
    </div>
  );
};

export default function ValuesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(47,160,132,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle, rgba(67,240,205,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }}></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header Layout */}
        <div className="flex flex-col items-center text-center" style={{ marginBottom: '64px', width: '100%' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="text-[28px] md:text-3xl lg:text-[42px] font-extrabold text-slate-900 leading-[1.3] tracking-tight mb-4" style={{ margin: '0 auto' }}>
              Kami Percaya Teknologi Harus <br className="hidden md:block" />
              <span style={{ color: '#2FA084' }}>Memudahkan</span>, Bukan <span className="text-slate-900">Membingungkan</span>
            </h2>
          </div>
        </div>

        {/* Desktop Layout (Hidden on Mobile) */}
        <div className="hidden md:flex flex-col w-full" style={{ gap: '24px', maxWidth: '1000px', margin: '0 auto', alignItems: 'center' }}>
          
          {/* Top Row: 3 Items */}
          <div className="flex w-full" style={{ gap: '24px', justifyContent: 'center' }}>
            {valuesData.slice(0, 3).map((val, i) => (
              <div key={i} style={{ width: 'calc(33.333% - 16px)', flexShrink: 0 }}>
                <ValueCard index={i} title={val.title} desc={val.desc} />
              </div>
            ))}
          </div>

          {/* Bottom Row: 2 Items (Centered) */}
          <div className="flex w-full" style={{ gap: '24px', justifyContent: 'center' }}>
            {valuesData.slice(3, 5).map((val, i) => (
              <div key={i + 3} style={{ width: 'calc(33.333% - 16px)', flexShrink: 0 }}>
                <ValueCard index={i + 3} title={val.title} desc={val.desc} />
              </div>
            ))}
          </div>
          
        </div>

        {/* Mobile Layout (Hidden on Desktop) */}
        <div className="flex flex-col md:hidden w-full" style={{ gap: '16px' }}>
          {valuesData.map((val, i) => (
            <div key={i} className="w-full">
              <ValueCard index={i} title={val.title} desc={val.desc} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
