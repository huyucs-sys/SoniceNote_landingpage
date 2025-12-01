import React, { useState, useEffect } from 'react';
import { SpecItem } from '../types';
import { generateImage } from '../services/geminiService';
import { Loader2 } from 'lucide-react';

const specs: SpecItem[] = [
  { label: "产品尺寸", value: "8.6cm x 5.4cm x 0.315cm" },
  { label: "产品重量", value: "32g" },
  { label: "电池规格", value: "400mAh 聚合物电池" },
  { label: "待机时长", value: "长达 166 天" },
  { label: "连续录音", value: "36 小时" },
  { label: "存储容量", value: "64GB (双重备份)" },
  { label: "连接方式", value: "蓝牙 5.3 / USB-C" },
  { label: "麦克风", value: "2x Knowles Sisonic™" },
  { label: "系统兼容", value: "iOS, Android, HarmonyOS" },
];

const Specs: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchImage = async () => {
      try {
        const prompt = "Side profile close-up of an ultra-thin 3mm silver aluminum card device standing vertically, macro photography, depth of field, dark futuristic technology background, blue rim lighting, high tech product photography style";
        const url = await generateImage(prompt);
        if (mounted && url) {
          setImageUrl(url);
        }
      } catch (err) {
        console.error("Specs image generation failed", err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchImage();
    return () => { mounted = false; };
  }, []);

  return (
    <section id="specs" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 order-2 lg:order-1">
             <h2 className="text-3xl md:text-4xl font-bold mb-6">产品参数</h2>
             <p className="text-gray-400 mb-10 leading-relaxed">
               SonicNote 采用航空级铝合金机身，在保证极致轻薄的同时坚固耐用。背面内置磁吸模块，完美支持 MagSafe 生态。
             </p>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {specs.map((spec, i) => (
                  <div key={i} className="border-b border-gray-800 pb-2">
                    <p className="text-gray-500 text-sm mb-1">{spec.label}</p>
                    <p className="text-white font-medium">{spec.value}</p>
                  </div>
                ))}
             </div>
          </div>

          <div className="lg:w-1/2 relative order-1 lg:order-2">
             <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 aspect-[4/3] bg-gray-900 group">
               {loading ? (
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                   <Loader2 className="w-8 h-8 animate-spin mb-2 text-brand-500" />
                   <span className="text-xs font-mono">Rendering Schematics...</span>
                 </div>
               ) : imageUrl ? (
                 <img 
                   src={imageUrl} 
                   alt="SonicNote Construction" 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
               ) : (
                 <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-500 text-sm">
                    Image Unavailable
                 </div>
               )}
               
               <div className="absolute bottom-6 left-6 bg-black/70 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                 <p className="text-xs text-gray-300">机身厚度</p>
                 <p className="text-xl font-bold text-white">0.315 cm</p>
               </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-500/20 rounded-full blur-3xl pointer-events-none"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specs;