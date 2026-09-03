import { MemoryVectorStore } from "@langchain/classic/vectorstores/memory";
import { embedding } from "./embedding";

export const memoryStore = new MemoryVectorStore(embedding);

export const retriever = memoryStore.asRetriever({
    k: Number(process.env.TOP_K ?? 3)
});
