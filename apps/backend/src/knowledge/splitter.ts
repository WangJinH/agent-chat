import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import type { KnowledgeDocument } from './type';
import type { Document } from "@langchain/core/documents";

export const splitterText = async (document: KnowledgeDocument): Promise<Document[]> => {
    const splitter = new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 50,
        separators: ["\n\n", "\n", "。", "！", "？", "；", "，", " ", ""]
    });

    return await splitter.splitDocuments([document])
};
