import fs from "node:fs/promises";
import path from "node:path";
import { Document } from '@langchain/core/documents'
import type { KnowledgeDocument } from "./type";

export const loadKnowledgeFile = async (fileName: string): Promise<KnowledgeDocument> => {
    const filePath = path.join(process.cwd(), "knowledge", fileName);
    console.log("文件路径", filePath);
    const content = await fs.readFile(filePath, "utf-8");

    return new Document({
        pageContent: content,
        metadata: {
            fileName,
            source: filePath
        }
    });
};
