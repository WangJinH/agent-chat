import type { Document } from "@langchain/core/documents";

export interface KnowledgeDocument extends Document<Record<string, unknown>> {
  metadata: {
    source: string;
    fileName: string;
  };
}
