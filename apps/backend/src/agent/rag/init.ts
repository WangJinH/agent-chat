import { loadKnowledgeFile } from "./loader";
import { splitterText } from "./splitter";
import { memoryStore } from "./vectorstore";

export const initKnowledgeBase = async (fileName: string) => {
  // 读取知识库文件
  const file = await loadKnowledgeFile(fileName);
  // 文件数据切块
  const chunks = await splitterText(file);
  // 文件向量化并放入向量数据库
  await memoryStore.addDocuments(chunks);
  console.log(`知识库 ${fileName} 初始化完成，共 ${chunks.length} 个 chunks`);
};
