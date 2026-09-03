import type { RequestHandler } from "express";
import { createTravelPlan } from "../modules/travel.plan.module";
import { AppError } from "../errors/app-errors";

export const handleTravelPlan: RequestHandler = async (req, res) => {
  try {
    const result = await createTravelPlan(req.body);

    if (result) {
      res.status(200).json({
        code: 200,
        message: "数据获取成功！",
        data: result
      });
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new AppError(err.message, 500, "SERVER_ERROR");
    }

    throw new AppError("服务器错误", 500, "SERVER_ERROR");
  }
};
