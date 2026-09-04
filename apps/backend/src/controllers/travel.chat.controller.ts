import { RequestHandler } from "express";
// import { ragStream } from '../agent/rag'

export const handleTravelChat: RequestHandler = (req, res) => {
    const { question } = req.body

    res.status(200).json({
        code: 200,
        message: '获取数据成功',
        data: { question }
    })

    //   res.setHeader("Content-Type", "text/event-stream; charset=utf-8");
    //   res.setHeader("Cache-Control", "no-cache");
    //   res.setHeader("Connection", "keep-alive");
}