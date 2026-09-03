import "dotenv/config";
import app from "./app";
import { env } from './config/env'
import { initKnowledgeBase } from "./agent/rag";

const startServer = async () => {
    try {
        const { server } = env
        await initKnowledgeBase("shanghai.md");
        app.listen(server.port, server.host, () => {
            console.log(`服务器启动成功！服务器地址：http://${server.host}:${server.port}`);
        });
    } catch (error) {
        console.error("服务器启动失败：", error);
        process.exit(1);
    }
};

startServer();
