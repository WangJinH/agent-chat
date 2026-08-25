import { ChatOpenAI } from "@langchain/openai";
import { TravelPlanInput } from "@monorepo/types";
import { planPrompt } from "./prompt.template";
import { travelPlanSchema } from "@monorepo/types";

// 构建LLM实例
const LLM = new ChatOpenAI({
  model: "deepseek-chat",
  temperature: 0.7,
});

export const createTravelPlan = async (planOptions: TravelPlanInput) => {
  console.log(planOptions)
  if (!planOptions) {
    throw new Error("请传递必要的参数");
  }

  const structuredLLM = LLM.withStructuredOutput(travelPlanSchema, { method: "functionCalling" });
  const chain = planPrompt.pipe(structuredLLM);
  const result = await chain.invoke(planOptions);
  return result;
};
