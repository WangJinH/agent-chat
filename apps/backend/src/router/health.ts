import express from "express";
import type { Router } from "express";
import { handleHealth } from "../controllers/health.controller";

const router: Router = express.Router();

router.get("/health", handleHealth);

export default router;
