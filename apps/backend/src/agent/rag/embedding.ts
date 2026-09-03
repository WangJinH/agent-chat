import { OllamaEmbeddings } from "@langchain/ollama";
import { env } from '../../config/env'

export const embedding = new OllamaEmbeddings({ ...env.ollama });
