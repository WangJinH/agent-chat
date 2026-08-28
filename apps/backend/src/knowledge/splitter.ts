import { RecursiveCharacterTextSplitter } from '@langchain/textsplitters'

export const createSplitterText = () => {
    return new RecursiveCharacterTextSplitter({
        chunkSize: 500,
        chunkOverlap: 50,
        separators: [
            '\n\n',
            '\n',
            '。',
            '！',
            '？',
            '；',
            '，',
            ' ',
            '',
        ],
    })
}