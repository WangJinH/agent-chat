import express from "express";
import { handleHealth } from "../controllers/handleHealth";
import type { Router } from "express";

const router: Router = express.Router();

router.get("/health", handleHealth);

export default router;
