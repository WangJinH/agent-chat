import type { EnvConfig } from "../types/server";

export const env = {
  server: {
    port: (process.env.PORT && Number(process.env.PORT)) || 3000,
    host: (process.env.HOST && String(process.env.HOST)) || "localhost"
  },
  ollama: {
    model: process.env.OLLAMA_MODEL!,
    baseUrl: process.env.OLLAMA_BASE_URL!
  }
} satisfies EnvConfig;
