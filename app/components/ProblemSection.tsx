import { FiSearch, FiFolder, FiShield, FiMonitor } from "react-icons/fi";

export default function ProblemSection() {
  const problems = [
    {
      title: "Informasi Sulit Diakses",
      description: "Masyarakat harus bertanya satu per satu untuk mendapatkan informasi yang sebenarnya bisa diakses secara mandiri.",
      icon: <FiSearch className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-[#2FA084] transition-colors duration-500" />
    },
    {
      title: "Administrasi Masih Manual",
      description: "Data tersimpan di banyak tempat sehingga sulit dikelola dan dicari kembali.",
      icon: <FiFolder className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-[#2FA084] transition-colors duration-500" />
    },
    {
      title: "Sulit Membangun Kepercayaan",
      description: "Calon pelanggan atau masyarakat kesulitan mendapatkan gambaran yang jelas tentang organisasi atau bisnis Anda.",
      icon: <FiShield className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-[#2FA084] transition-colors duration-500" />
    },
    {
      title: "Belum Memanfaatkan Teknologi",
      description: "Potensi teknologi dapat membantu pekerjaan menjadi lebih cepat, rapi, dan efisien.",
      icon: <FiMonitor className="w-8 h-8 md:w-10 md:h-10 text-slate-400 group-hover:text-[#2FA084] transition-colors duration-500" />
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#f8fafc] relative overflow-hidden border-t border-slate-100/50 z-0">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#2FA084]/[0.03] via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute -left-[200px] top-[20%] w-[500px] h-[500px] rounded-full bg-[#2FA084]/[0.04] blur-[120px] pointer-events-none"></div>
      <div className="absolute -right-[200px] bottom-[10%] w-[600px] h-[600px] rounded-full bg-[#43F0CD]/[0.04] blur-[120px] pointer-events-none"></div>
      
      {/* Subtle Pattern Grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoNDcsIDE2MCwgMTMyLCAwLjA1KSIvPjwvc3ZnPg==')] opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Header Section */}
        <div className="w-full text-center mb-16 lg:mb-24 reveal flex flex-col items-center">
          <div className="testi-label">
            Tantangan Bisnis
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight max-w-3xl">
            Banyak Organisasi dan Bisnis Memiliki Potensi Besar, <span className="text-[#2FA084]">Tetapi...</span>
          </h2>
        </div>

        {/* Spacer to guarantee extra gap between header and grid */}
        <div className="h-4 lg:h-8 w-full"></div>

        {/* Grid Konten (Sesuai Wireframe: Tanpa Card, Langsung Bulatan Besar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-16">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="group flex flex-col items-center text-center reveal-scale"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Lingkaran Besar Sesuai Wireframe dengan Styling Premium (Light Theme) */}
              <div className="relative w-24 h-24 md:w-[112px] md:h-[112px] rounded-full bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center justify-center transition-all duration-500 group-hover:shadow-[0_20px_50px_-10px_rgba(47,160,132,0.25)] group-hover:-translate-y-3 group-hover:border-[#2FA084]/40 overflow-hidden">
                
                {/* Efek Latar Belakang Lingkaran (Glow/Gradient) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#2FA084]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-[#43F0CD]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                
                {/* Ikon */}
                <div className="relative z-10 text-slate-400 group-hover:text-[#2FA084] transition-colors duration-500 group-hover:scale-110 [&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-10 md:[&>svg]:h-10 [&>svg]:!text-current">
                  {problem.icon}
                </div>
                
                {/* Lingkaran luar (Ring) saat hover */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-[#2FA084]/10 scale-90 group-hover:scale-100 transition-all duration-500"></div>
              </div>
              
              {/* Spacer kuat untuk memaksa jarak renggang antara ikon dan judul */}
              <div className="h-8 md:h-12 w-full shrink-0"></div>
              
              {/* Judul Masalah */}
              <h3 className="text-[16px] md:text-[17px] font-extrabold text-slate-800 mb-3 transition-colors duration-300 group-hover:text-[#2FA084] max-w-[260px] min-h-[48px] md:min-h-[56px] flex items-start justify-center">
                {problem.title}
              </h3>
              
              {/* Deskripsi Singkat */}
              <p className="text-[13px] md:text-[14px] text-slate-500 leading-[1.7] max-w-[260px]">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
