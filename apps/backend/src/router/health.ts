import express from "express";
import type { Router } from "express";
import { handleHealth } from "../controllers/health.controller";
import { errorMiddleware } from "../middleware/error.middleware";


const router: Router = express.Router();

router.get("/health", errorMiddleware, handleHealth);

export default router;
