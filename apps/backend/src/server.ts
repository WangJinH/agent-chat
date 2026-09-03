import 'dotenv/config'
import app from './app'
import config from './config/server'
import { initKnowledgeBase } from './agent/rag'


const startServer = async () => {
    try {
        await initKnowledgeBase('shanghai.md')
        app.listen(config.port, config.host, () => {
            console.log(`服务器启动成功！服务器地址：http://${config.host}:${config.port}`)
        })
    } catch (error) {
        console.error("服务器启动失败：", error);
        process.exit(1);
    }
}


startServer()


