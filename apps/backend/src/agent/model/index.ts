import { ChatOpenAI } from "@langchain/openai";

// 构建LLM实例
export const LLM = new ChatOpenAI({
  model: "deepseek-chat",
  temperature: 0.7
});
