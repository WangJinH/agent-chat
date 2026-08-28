import fs from 'node:fs/promises'
import path from 'node:path'
import type { KnowledgeDocument } from './type';

export const loadKnowledgeFile = async (fileName: string): Promise<KnowledgeDocument> => {
    const filePath = path.join(process.cwd(), 'knowledge', fileName)
    console.log("文件路径", filePath)
    const content = await fs.readFile(filePath, 'utf-8')
    return {
        content,
        metadata: {
            fileName,
            source: filePath,
        }
    }
}
