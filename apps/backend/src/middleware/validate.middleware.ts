import type { Response, Request, NextFunction } from "express";
import type { ZodType } from "zod";

export const validate = (schame: ZodType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schame.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        code: "VALIDATE ERROR",
        message: "参数格式错误",
        errors: result.error.issues[0]?.message
      });
    }
    req.body = result.data;
    next();
  };
};
