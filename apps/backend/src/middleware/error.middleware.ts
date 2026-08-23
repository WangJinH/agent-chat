import type { Response, Request, NextFunction } from "express";
import { AppError } from "../errors/app-errors";

export const errorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  // 相应已经发送，交由Express自己处理
  if (res.headersSent) {
    return next(err);
  }

  // 自定义业务错误
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      code: err.code,
      message: err.message
    });
  }

  // 未知错误
  return res.status(500).json({
    success: false,
    code: "INTERNAL_SERVER_ERROR",
    message: "服务器内部错误"
  });
};
