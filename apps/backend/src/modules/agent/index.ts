import { ChatOpenAI } from "@langchain/openai";
import type { TravelPlanInput } from "./type";
import { planPrompt } from "./prompt.template";
import { agentResponseSchema } from "@monorepo/types";


// 构建LLM实例
const LLM = new ChatOpenAI({
    model: 'deepseek-chat',
    temperature: 0.7
})


export const createTravelPlan = async (planOptions: TravelPlanInput) => {
    if (!planOptions) {
        throw new Error('请传递必要的参数')
    }
    const structuredLLM = LLM.withStructuredOutput(agentResponseSchema)
    const chain = planPrompt.pipe(structuredLLM)
    const result = await chain.invoke(planOptions)
    return result
} 