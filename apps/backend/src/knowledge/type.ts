export interface KnowledgeDocument {
    content: string
    metadata: {
        source: string
        fileName: string
    }
}