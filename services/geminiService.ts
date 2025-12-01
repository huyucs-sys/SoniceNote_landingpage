import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const summarizeText = async (text: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: text,
      config: {
        systemInstruction: `你是一个智能录音笔“聆犀 SonicNote”的AI引擎。
        你的目标是展示强大的文本摘要能力。
        
        输出格式：
        1. 【摘要】(2-3句话总结核心内容)
        2. 【关键点】(使用列表形式)
        3. 【待办事项/Action Items】
        
        请使用中文回答。保持专业、商务的语气。`,
      }
    });

    return response.text || "无法生成摘要。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("AI处理失败，请稍后重试。");
  }
};

export const generateImage = async (prompt: string): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      // Nano banana models do not support responseMimeType
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Image Generation Error:", error);
    return null;
  }
};