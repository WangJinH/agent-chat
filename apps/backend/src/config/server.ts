import type { ServerConfig } from "../types/server"


const config: ServerConfig = {
    port: process.env.PORT && Number(process.env.PORT) || 3000,
    host: process.env.HOST && String(process.env.HOST) || "localhost"
}

export default config


