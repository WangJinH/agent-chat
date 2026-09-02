import { MemoryVectorStore } from '@langchain/classic/vectorstores/memory'
import { embedding } from './embedding'

export const memoryStore = new MemoryVectorStore(embedding)