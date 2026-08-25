import type { Response, Request } from "express";

export const notFountMiddleware = (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    code: "NOT_FOUND",
    message: `接口不存在: ${req.method} ${req.originalUrl}`
  });
};
