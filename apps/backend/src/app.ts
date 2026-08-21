import express from 'express';
import 'dotenv/config'
import config from './config/server'
import healthRouter from './router/health'

const app = express()

// 服务器健康检查接口
app.use('/api', healthRouter)




app.listen(config.port, config.host, () => {
    console.log(`服务器启动成功！服务器地址：http://${config.host}:${config.port}`)
})





