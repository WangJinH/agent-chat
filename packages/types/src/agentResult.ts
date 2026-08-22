import { z } from 'zod';


export const agentResponseSchema = z.object({
    city: z.string(),
    summary: z.string(),
    attractions: z.array(
        z.object({
            name: z.string(),
            description: z.string()
        })
    )
})


export type AgentResponseType = z.infer<typeof agentResponseSchema>