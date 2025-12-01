import React from 'react';
import { Mic, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05080f] pt-20 pb-10 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Mic className="text-brand-500" />
              <span className="text-xl font-bold text-white">聆犀 SonicNote</span>
            </div>
            <p className="text-gray-500 text-sm max-w-md leading-relaxed">
              重新定义信息记录与处理方式。
              SonicNote 结合前沿硬件与强大 AI，助您事半功倍，释放思考价值。
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">产品</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition-colors">功能特性</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">技术规格</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">App 下载</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">配件中心</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">公司</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-brand-500 transition-colors">关于我们</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">技术支持</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">隐私政策</a></li>
              <li><a href="#" className="hover:text-brand-500 transition-colors">服务条款</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SonicNote Inc. 保留所有权利.
          </p>
          <div className="flex gap-6">
            <Twitter size={20} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
            <Facebook size={20} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
            <Instagram size={20} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
            <Linkedin size={20} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;