import React, { useState } from 'react';
import { Sparkles, Brain, FileOutput, Loader2 } from 'lucide-react';
import { summarizeText } from '../services/geminiService';
import { DemoStatus } from '../types';

const AiDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState<DemoStatus>(DemoStatus.IDLE);

  const handleDemo = async () => {
    if (!input.trim()) return;
    
    setStatus(DemoStatus.PROCESSING);
    try {
      const result = await summarizeText(input);
      setOutput(result);
      setStatus(DemoStatus.COMPLETED);
    } catch (e) {
      setStatus(DemoStatus.ERROR);
      setOutput("处理过程中发生错误，请重试。");
    }
  };

  const sampleText = `
会议时间：2023年10月24日
参会人员：王总, 李经理, 张工
主题：Q4 市场营销策略

王总：好了大家，我们开始吧。我们需要敲定Q4的预算。我考虑将40%的预算投入到社交媒体广告，特别是小红书和抖音。
李经理：我同意抖音对于C端的覆盖，但是对于我们的B端产品，上次的转化率并不理想。也许我们应该把那20%转移到百度搜索广告？
张工：李经理说得对，搜索意图更强。另外，我们需要讨论一下双十一的促销。我们还做20%的折扣吗？
王总：是的，但这次我们做个捆绑包。买硬件送3个月的会员服务。
李经理：这个主意不错。我会在周五前把具体数字跑一下。
  `.trim();

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-brand-dark to-[#0f1522]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-400 mb-4">
             <Sparkles size={12} /> 在线互动体验
           </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">体验强大的 AI 引擎</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            立即尝试我们的转写和总结引擎。粘贴一段对话或使用示例文本。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto h-full lg:h-[600px]">
          {/* Input Area */}
          <div className="flex flex-col h-full glass-panel rounded-2xl p-6 border border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-gray-200 flex items-center gap-2">
                <FileOutput size={18} /> 源文本 (录音转写稿)
              </h3>
              <button 
                onClick={() => setInput(sampleText)}
                className="text-xs text-brand-500 hover:text-brand-400 underline"
              >
                加载示例文本
              </button>
            </div>
            <textarea
              className="flex-1 w-full bg-[#0B0F19] rounded-xl border border-gray-800 p-4 text-gray-300 focus:outline-none focus:border-brand-500 resize-none font-mono text-sm leading-relaxed"
              placeholder="请在此粘贴录音转写文本..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleDemo}
                disabled={status === DemoStatus.PROCESSING || !input}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  status === DemoStatus.PROCESSING 
                    ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                    : 'bg-brand-600 hover:bg-brand-500 text-white shadow-lg shadow-brand-500/20'
                }`}
              >
                {status === DemoStatus.PROCESSING ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> 正在思考...
                  </>
                ) : (
                  <>
                    <Sparkles size={18} /> 生成智能总结
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Output Area */}
          <div className="flex flex-col h-full glass-panel rounded-2xl p-6 border border-gray-700 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50"></div>
             <h3 className="font-semibold text-gray-200 flex items-center gap-2 mb-4">
                <Brain size={18} /> AI 分析结果
              </h3>
             
             <div className="flex-1 w-full bg-[#0B0F19] rounded-xl border border-gray-800 p-6 overflow-y-auto">
                {status === DemoStatus.IDLE && (
                  <div className="h-full flex flex-col items-center justify-center text-gray-600">
                    <Brain size={48} className="mb-4 opacity-20" />
                    <p>AI 总结将显示在这里</p>
                  </div>
                )}
                {status === DemoStatus.PROCESSING && (
                  <div className="h-full flex flex-col items-center justify-center space-y-4">
                     <div className="w-16 h-16 rounded-full border-4 border-brand-900 border-t-brand-500 animate-spin"></div>
                     <p className="text-brand-500 animate-pulse">正在分析上下文...</p>
                  </div>
                )}
                {status === DemoStatus.COMPLETED && (
                  <div className="prose prose-invert prose-sm max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-gray-300">
                      {output}
                    </pre>
                  </div>
                )}
                {status === DemoStatus.ERROR && (
                   <div className="h-full flex flex-col items-center justify-center text-red-400">
                     <p>{output}</p>
                   </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiDemo;