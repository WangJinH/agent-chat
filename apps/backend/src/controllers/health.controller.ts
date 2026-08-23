import type { RequestHandler } from "express";

export const handleHealth: RequestHandler = (req, res) => {
  res.status(200).json({
    code: 200,
    success: true,
    message: "服务器正常"
  });
};
