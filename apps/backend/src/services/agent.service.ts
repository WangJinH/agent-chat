import 'dotenv/config'
import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate } from '@langchain/core/prompts'
import { agentResponseSchema, type AgentResponseType } from '@monorepo/types'


const LLM = new ChatOpenAI({
    model: 'deepseek-chat',
    temperature: 0.7
})

// 构建提示词
const prompt = PromptTemplate.fromTemplate(`你是一名专业的导游，请你介绍{city},给出景点推荐以及打卡机位，整体不超过100字,请以 JSON 格式返回结果。
要求：
1. 给出城市简介
2. 推荐三个景点
3. 每个景点给出名称和简介
4. 必须返回合法的 JSON
`)
// const promptValue = await prompt.invoke({ city: '上海' })
const structuredLLM = LLM.withStructuredOutput(agentResponseSchema, { method: 'jsonMode' })
// 改造写法 pipe
const chain = prompt.pipe(structuredLLM)
const result: AgentResponseType = await chain.invoke({ "city": "上海" })

console.log(result)