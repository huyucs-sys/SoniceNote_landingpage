import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-hero-glow pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-500 mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
          </span>
          Powered by Z.ai GLM-4.6
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          会录音 | 会转写 <br />
          <span className="text-white">会总结 | 会思考</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          聆犀 SonicNote 智能录音笔记，释放每次对话的价值。
          <span className="block mt-2 text-white/80">0.315cm 超薄裸感 · 166天超长待机 · MagSafe 磁吸设计</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-brand-dark rounded-full font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
            立即购买 <ArrowRight size={18} />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-full font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            <PlayCircle size={18} /> 观看宣传片
          </button>
        </div>

        {/* Product Visual Mockup */}
        <div className="mt-20 relative mx-auto max-w-4xl">
           <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 glass-panel group bg-gradient-to-br from-gray-900 to-black">
             {/* Abstract Tech Background */}
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000')] opacity-30 bg-cover bg-center mix-blend-overlay"></div>
             
             <div className="absolute inset-0 flex items-center justify-center gap-12 transform scale-90 md:scale-100">
                {/* Device Back */}
                <div className="relative w-56 h-80 bg-gradient-to-br from-[#E0E0E0] to-[#A0A0A0] rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/30 flex flex-col p-4 transform -rotate-6 transition-transform group-hover:-rotate-3 duration-700">
                    <div className="w-full flex justify-between items-center mb-8">
                         <div className="w-12 h-6 bg-black/80 rounded-full"></div>
                         <div className="flex gap-2">
                             <div className="w-3 h-3 rounded-full border border-gray-500"></div>
                             <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_red]"></div>
                         </div>
                    </div>
                    <div className="mt-auto">
                        <h3 className="text-brand-dark font-bold text-lg text-right">SonicNote</h3>
                    </div>
                    {/* Texture */}
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply pointer-events-none rounded-lg"></div>
                </div>

                {/* Device Front/Phone Attached */}
                <div className="relative w-56 h-80 bg-black rounded-[3rem] border-4 border-gray-700 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center overflow-hidden transform rotate-6 transition-transform group-hover:rotate-3 duration-700">
                     <div className="absolute inset-0 bg-gray-900 flex flex-col p-4">
                        {/* Fake UI */}
                        <div className="w-full h-8 flex justify-between items-center px-2 mb-4">
                           <span className="text-[10px] text-white">9:41</span>
                           <div className="flex gap-1">
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                              <div className="w-3 h-3 bg-white rounded-full"></div>
                           </div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-3 mb-2 backdrop-blur-sm">
                           <div className="h-2 w-1/2 bg-white/50 rounded mb-2"></div>
                           <div className="h-2 w-3/4 bg-white/30 rounded"></div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-3 mb-2 backdrop-blur-sm">
                           <div className="h-2 w-2/3 bg-white/50 rounded mb-2"></div>
                           <div className="h-2 w-full bg-white/30 rounded"></div>
                        </div>
                        
                        {/* Waveform */}
                        <div className="mt-auto h-24 flex items-end gap-[2px] justify-center opacity-80">
                            {[...Array(20)].map((_,i) => (
                                <div key={i} className="w-1 bg-brand-500 rounded-t" style={{height: `${Math.random() * 100}%`, animation: `pulse ${0.5 + Math.random()}s infinite`}}></div>
                            ))}
                        </div>
                     </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;