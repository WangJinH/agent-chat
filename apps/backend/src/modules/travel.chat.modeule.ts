// import { LLM } from "../agent/model";
import { loadKnowledgeFile, splitterText, memoryStore, retriever } from '../agent/rag/index'


export const createTravelChat = async (chat: string) => {
    // 读取知识库文件
    const file = await loadKnowledgeFile('shanghai.md')
    // 文件数据切块
    const chunks = await splitterText(file)
    // 文件向量化并放入向量数据库
    await memoryStore.addDocuments(chunks)
    // 在向量数据库中查找数据
    const docs = await retriever.invoke(chat)
    // 格式化上下文
    const context = docs.map(t => t.pageContent).join('\n\n')
    console.log("用户问题：", chat)
    console.log("检索结果：", docs)
    console.log("上下文：", context)
    console.log(context)
}