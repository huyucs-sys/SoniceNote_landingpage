import React from 'react';
import { Mic2, FileText, BrainCircuit, Globe2, BatteryCharging, ShieldCheck } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "6D 全景双麦克风",
    description: "搭载 Knowles Sisonic™ 麦克风，配合 AI 主动降噪芯片，从源头消除噪音，录音清晰通透。",
    icon: Mic2
  },
  {
    title: "AI 实时转写",
    description: "基于智谱 GLM-4.6 强大的语言模型，能快速识别语音并转写成文字，区分多人说话。",
    icon: FileText
  },
  {
    title: "智能总结与脑图",
    description: "不仅仅是录音。自动梳理内容摘要、待办事项，并一键生成直观可视化的思维导图。",
    icon: BrainCircuit
  },
  {
    title: "MagSafe 磁吸设计",
    description: "薄出手机裸感，厚度仅 0.315cm。磁吸充电，完美贴合手机背部，随吸随用。",
    icon: ShieldCheck
  },
  {
    title: "166天 超长待机",
    description: "聚合物电池不发烫，安全稳定。400mAh 大容量，支持连续录音 36 小时。",
    icon: BatteryCharging
  },
  {
    title: "多种语言方言支持",
    description: "精准转写翻译中文（普通话、11种方言）、英语、日语、韩语、泰语等多种语言。",
    icon: Globe2
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">功能懂你所需 全新升级</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">好产品不怕对比，硬核参数与顶尖AI的完美融合。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-brand-900/50 flex items-center justify-center text-brand-500 mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;