import React, { useState, useEffect } from 'react';
import { Power, Mic, Bluetooth, FileText, Share2, AlertCircle } from 'lucide-react';
import { generateImage } from '../services/geminiService';

interface GuideStep {
  id: number;
  title: string;
  icon: React.ElementType;
  content: string[];
  tips?: string;
  imagePrompt: string;
}

const steps: GuideStep[] = [
  {
    id: 1,
    title: "硬件操控基础",
    icon: Power,
    content: [
      "开/关机：长按电源键 3 秒。",
      "开始录音：向上推动录音键（震动1次）。",
      "暂停/继续：录音中短按电源键。",
      "保存录音：向下推动录音键（震动2次，显示SAVE）。",
      "模式切换：双击电源键切换「通话录音」与「普通录音」。"
    ],
    imagePrompt: "Close up technical illustration of a finger sliding a physical switch on a sleek metallic grey voice recorder device. Minimalist style, cinematic lighting, dark background.",
  },
  {
    id: 2,
    title: "APP 连接与同步",
    icon: Bluetooth,
    content: [
      "打开手机蓝牙，进入 SonicNote APP。",
      "连接后音频文件会自动同步至列表。",
      "如果搜索不到设备：请检查是否开机，或尝试重启手机蓝牙。",
      "重新绑定：进入设备详情页，点击「断开连接」或「解绑设备」后重试。"
    ],
    imagePrompt: "A smartphone displaying a futuristic dark-mode app interface scanning for a device, with bluetooth waves connecting to a small metal card nearby. High tech visualization.",
  },
  {
    id: 3,
    title: "AI 转写与导出",
    icon: FileText,
    content: [
      "转写：选择音频文件 -> 点击「开始转录」 -> 选择场景模版。",
      "总结：AI 自动生成摘要、脑图及待办事项。",
      "导出：支持导出「总结文本」、「转录原文」或「原始音频」。",
      "格式：支持 PDF、Word 等多种格式分享给好友。"
    ],
    imagePrompt: "Smartphone screen showing a clean business document summary with a download/share icon overlay. Digital particles representing data processing. Professional business setting.",
  }
];

const UsageGuide: React.FC = () => {
  const [images, setImages] = useState<Record<number, string | null>>({});
  const [loadingState, setLoadingState] = useState<Record<number, boolean>>({1: true, 2: true, 3: true});

  useEffect(() => {
    let mounted = true;

    const loadImages = async () => {
      // Load images sequentially to avoid hitting rate limits too hard
      for (const step of steps) {
        if (!mounted) break;
        try {
          const url = await generateImage(step.imagePrompt);
          if (mounted && url) {
            setImages(prev => ({ ...prev, [step.id]: url }));
          }
        } catch (error) {
          console.error(`Failed to load image for step ${step.id}`, error);
        } finally {
          if (mounted) {
            setLoadingState(prev => ({ ...prev, [step.id]: false }));
          }
        }
      }
    };

    loadImages();

    return () => { mounted = false; };
  }, []);

  return (
    <section className="py-24 bg-[#0F131F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">3分钟快速上手</h2>
          <p className="text-gray-400">从开机到生成 AI 总结，简单三步搞定。</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="glass-panel rounded-2xl overflow-hidden flex flex-col h-full border border-gray-800 hover:border-brand-500/50 transition-colors">
              {/* Image Area */}
              <div className="h-48 bg-gray-900 relative overflow-hidden group">
                {loadingState[step.id] ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                    <div className="w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : images[step.id] ? (
                  <img 
                    src={images[step.id]!} 
                    alt={step.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-600 text-xs">
                    Image unavailable
                  </div>
                )}
                <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold text-sm shadow-lg z-10">
                  {step.id}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-brand-500 bg-brand-500/10 p-2 rounded-lg">
                    <step.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                </div>

                <ul className="space-y-4 mb-6 flex-1">
                  {step.content.map((text, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0"></span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                {step.tips && (
                  <div className="mt-auto bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 flex items-start gap-3">
                    <AlertCircle size={16} className="text-yellow-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-yellow-200/80">{step.tips}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsageGuide;