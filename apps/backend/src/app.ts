import express from "express";
import "dotenv/config";
import cors from "cors";
import config from "./config/server";
import logger from "./config/logger";
import healthRouter from "./router/health";
import travelRouter from "./router/travel";
import { notFountMiddleware } from "./middleware/notfount.middleware";
import { errorMiddleware } from "./middleware/error.middleware";
import { loadKnowledgeFile } from './knowledge/loader'
import { splitterText } from './knowledge/splitter'

const app = express();
app.use(cors());
app.use(logger);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: false }));

const result = await loadKnowledgeFile('shanghai.md')
const chunks = await splitterText(result)
console.log(chunks)

app.use("/api", travelRouter);

// 服务器健康检查接口
app.use("/api", healthRouter);

// 404中间件
app.use(notFountMiddleware);

// 全局错误处理中间件
app.use(errorMiddleware);

app.listen(config.port, config.host, () => {
  console.log(`服务器启动成功！服务器地址：http://${config.host}:${config.port}`);
});
