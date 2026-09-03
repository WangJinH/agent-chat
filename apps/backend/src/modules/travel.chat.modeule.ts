import { retriever } from "../agent/rag/index";

export const createTravelChat = async (chat: string) => {
    // 在向量数据库中查找数据
    const docs = await retriever.invoke(chat);
    // 格式化上下文
    return docs.map(t => t.pageContent).join("\n\n");
};
