import { LLM } from "../model";
import { retriever } from "./vectorstore";
import { ragPrompt } from "../model/prompt";
import { AppError } from "../../errors/app-errors";

export const ragStream = async (question: string) => {
  if (!question.trim()) {
    throw new AppError("ragStream 未传递question参数");
  }
  const docs = await retriever.invoke(question);
  const context = docs.map(t => t.pageContent).join("\n\n");
  const message = await ragPrompt.invoke({
    context,
    history: [],
    question
  });

  return LLM.stream(message);
};
