import React, { useState, useEffect } from 'react';
import { generateImage } from '../services/geminiService';
import { PhoneCall, MousePointerClick, Shield } from 'lucide-react';

interface AdvantageCardProps {
  title: string;
  description: string;
  imagePrompt: string;
  icon: React.ElementType;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({ title, description, imagePrompt, icon: Icon }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const fetchImage = async () => {
      try {
        const url = await generateImage(imagePrompt);
        if (mounted && url) {
          setImageUrl(url);
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchImage();
    return () => { mounted = false; };
  }, [imagePrompt]);

  return (
    <div className="glass-panel rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all duration-300 group h-full flex flex-col">
      <div className="relative h-48 w-full bg-gray-900 overflow-hidden">
        {loading ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 bg-gray-900/50">
             <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin mb-2"></div>
             <span className="text-xs font-mono text-brand-500">AI Rendering...</span>
          </div>
        ) : imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-500 text-xs">
            Image Load Failed
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#161B28] to-transparent"></div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-500 mb-4">
          <Icon size={20} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const ProductAdvantages: React.FC = () => {
  return (
    <section id="advantages" className="py-24 bg-[#0B0F19]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">为什么选择 SonicNote?</h2>
          <p className="text-gray-400">三大核心优势，超越传统，领先时代。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AdvantageCard
            title="骨传导通话录音"
            description="相比传统录音笔，SonicNote 的骨传导传感器可精准捕捉手机震动。无论是微信语音还是电话会议，贴上即录，清晰还原双方人声。"
            imagePrompt="A close-up 3D render of a thin metallic recording card magnetically attached to the back of a modern smartphone, visualizing sound waves entering through the card via vibration (bone conduction), high-tech blue glowing accents, photorealistic, cinematic lighting."
            icon={PhoneCall}
          />
          <AdvantageCard
            title="一键物理录音"
            description="拒绝繁琐，无需解锁手机找App。轻轻拨动物理开关即可开始录音。无惧来电打断，低功耗运行，彻底告别续航焦虑。"
            imagePrompt="A sleek metallic device with a prominent red physical recording button being pressed by a finger. No screens, minimal design, conveying instant action and simplicity. Dark background with subtle rim lighting."
            icon={MousePointerClick}
          />
          <AdvantageCard
            title="全国产信创安全"
            description="支持11种方言精准识别。基于智谱GLM大模型，数据全程加密，国产信创方案，极低幻觉率，为您的重要信息保驾护航。"
            imagePrompt="A futuristic digital security shield protecting a map of China, with data nodes representing different dialects connected safely. Gold and blue color scheme, symbolizing localized secure data processing and AI intelligence."
            icon={Shield}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductAdvantages;