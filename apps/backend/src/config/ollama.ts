import { env } from './env'
import type { OllamaTagsResponse } from '../types/ollama'

export const checkOllama = async () => {
    // 检查 Ollama 服务
    try {
        const response = await fetch(env.ollama.baseUrl);
        if (!response.ok) {
            throw new Error(`Ollama 服务异常：${response.status}`);
        }
    } catch {
        throw new Error(`无法连接 Ollama，请确认 Ollama 是否启动：${env.ollama.baseUrl}`);
    }

    // 检查 BGE-M3 模型
    try {
        const response = await fetch(`${env.ollama.baseUrl}/api/tags`);

        if (!response.ok) {
            throw new Error("无法获取 Ollama 模型列表");
        }
        const data = (await response.json() as OllamaTagsResponse);
        const modelExists = data.models?.some((model: { name: string }) => model.name === env.ollama.model || model.name.startsWith(`${env.ollama.model}:`));
        if (!modelExists) {
            throw new Error(`Ollama 中没有找到模型：${env.ollama.model}`);
        }

    } catch (error) {
        throw new Error("检查 Ollama 模型失败", { cause: error });
    }
};