"use client";

import React, { useState } from 'react';

const teamData = [
  { name: "Yakub Firman", role: "Chief Executive Officer", initials: "YF" },
  { name: "Rafli Dio", role: "Chief Technology Officer", initials: "RD" },
  { name: "Rifan Ardiansyah", role: "Lead UI/UX Designer", initials: "RA" },
  { name: "Achmad Zaki", role: "Head of Marketing", initials: "AZ" },
];

const TeamMember = ({ member }: { member: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  const avatarStyle = {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px auto',
    background: isHovered ? 'linear-gradient(135deg, #2FA084 0%, #43F0CD 100%)' : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    boxShadow: isHovered ? '0 20px 40px -10px rgba(47,160,132,0.4)' : '0 10px 30px -10px rgba(0,0,0,0.08)',
    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    color: isHovered ? '#ffffff' : '#94a3b8',
    fontSize: '48px',
    fontWeight: '900',
    letterSpacing: '2px',
  };

  return (
    <div 
      className="flex flex-col items-center cursor-pointer reveal-scale"
      style={{ width: '260px', textAlign: 'center' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={avatarStyle}>
        {member.initials}
      </div>
      <h4 style={{ fontSize: '20px', fontWeight: '800', color: isHovered ? '#2FA084' : '#1e293b', transition: 'color 0.3s ease', marginBottom: '8px' }}>
        {member.name}
      </h4>
      <p style={{ fontSize: '15px', color: '#64748b', fontWeight: '500' }}>
        {member.role}
      </p>
    </div>
  );
};

export default function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Background Decorative Elements */}
      <div className="testi-bg-dots"></div>
      <div className="testi-bg-glow testi-bg-glow--left"></div>
      <div className="testi-bg-glow testi-bg-glow--right"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10" style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header Layout */}
        <div className="flex flex-col items-center text-center" style={{ marginBottom: '80px', width: '100%' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="testi-label">
              Tim Kami
            </span>
            <h2 className="text-[32px] md:text-4xl lg:text-[46px] font-extrabold text-slate-900 leading-[1.2] tracking-tight mb-4" style={{ margin: '0 auto' }}>
              Kenali Lebih Dekat <br className="hidden md:block" />
              <span style={{ color: '#2FA084' }}>Kekuatan Utama</span> Kami
            </h2>
          </div>
        </div>

        {/* Team Grid Layout (4 columns inline) */}
        <div className="flex flex-wrap justify-center w-full mx-auto" style={{ gap: '32px', maxWidth: '1200px' }}>
          {teamData.map((member, i) => (
            <TeamMember key={i} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}
