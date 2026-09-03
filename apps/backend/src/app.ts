import express, { type Express } from "express";
import cors from "cors";
import logger from "./config/logger";
import healthRouter from "./router/health";
import travelRouter from "./router/travel";
import { notFountMiddleware } from "./middleware/notfount.middleware";
import { errorMiddleware } from "./middleware/error.middleware";

const app: Express = express();
app.use(cors());
app.use(logger);
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: false }));

app.use("/api", travelRouter);

// 服务器健康检查接口
app.use("/api", healthRouter);

// 404中间件
app.use(notFountMiddleware);

// 全局错误处理中间件
app.use(errorMiddleware);

export default app


