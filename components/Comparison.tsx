import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F131F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">行业标杆，卓越体验</h2>
          <p className="text-gray-400">为什么选择聆犀 SonicNote？</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* SonicNote Card */}
            <div className="bg-gradient-to-b from-brand-600 to-brand-900 rounded-3xl p-1 relative overflow-hidden shadow-2xl shadow-brand-900/50 transform lg:-translate-y-4">
                <div className="absolute top-0 right-0 p-4 bg-white text-brand-600 font-bold text-xs rounded-bl-xl z-10">我们家产品</div>
                <div className="bg-brand-dark h-full rounded-[20px] p-8 flex flex-col">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-24 bg-gray-300 rounded-lg flex items-center justify-center border border-gray-400 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                             <div className="text-brand-dark font-bold text-xs">Sonic</div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">聆犀 SonicNote</h3>
                            <p className="text-brand-500 font-medium">更强、更薄、更智能</p>
                        </div>
                    </div>
                    
                    <ul className="space-y-6 flex-1">
                        <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-brand-500 shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-white">聚合物电池技术</p>
                                <p className="text-sm text-gray-400">不发烫，稳定安全</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-brand-500 shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-white">400mAh 大容量电池</p>
                                <p className="text-sm text-gray-400">待机166天，续航无忧</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-brand-500 shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-white">存储双重备份</p>
                                <p className="text-sm text-gray-400">防止数据丢失</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-brand-500 shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-white">智谱全国产大模型</p>
                                <p className="text-sm text-gray-400">安全、低幻觉率、更懂中文</p>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-8 pt-8 border-t border-gray-800">
                        <button className="w-full py-3 bg-brand-600 hover:bg-brand-500 rounded-xl font-bold transition-colors">选择聆犀</button>
                    </div>
                </div>
            </div>

            {/* Competitor Card */}
            <div className="bg-gray-800 rounded-3xl p-1 relative overflow-hidden opacity-80">
                <div className="absolute top-0 right-0 p-4 bg-gray-600 text-gray-300 font-bold text-xs rounded-bl-xl z-10">同行家产品</div>
                <div className="bg-[#1a1f2e] h-full rounded-[20px] p-8 flex flex-col">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-16 h-24 bg-gray-700 rounded-lg flex items-center justify-center opacity-50">
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-300">其他产品</h3>
                            <p className="text-gray-500 font-medium">普通录音设备</p>
                        </div>
                    </div>
                    
                    <ul className="space-y-6 flex-1">
                        <li className="flex items-start gap-3">
                            <XCircle className="text-gray-500 shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-400">锂电池技术</p>
                                <p className="text-sm text-gray-600">严重发烫，不稳定不安全</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <XCircle className="text-gray-500 shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-400">240mAh 小容量</p>
                                <p className="text-sm text-gray-600">待机仅90天</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <XCircle className="text-gray-500 shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-400">单方面内置存储</p>
                                <p className="text-sm text-gray-600">容易丢失数据</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-3">
                            <XCircle className="text-gray-500 shrink-0 mt-1" />
                            <div>
                                <p className="font-semibold text-gray-400">非国产大模型</p>
                                <p className="text-sm text-gray-600">幻觉率高，数据出境风险</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;