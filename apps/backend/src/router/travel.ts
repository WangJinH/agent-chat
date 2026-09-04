import express from "express";
import type { Router } from "express";
import { handleTravelPlan } from "../controllers/travel.plan.controller";
import { handleTravelChat } from "../controllers/travel.chat.controller";
import { validate } from "../middleware/validate.middleware";
import { travelPlanInputSchema, chatSchema } from "@monorepo/types";

const router: Router = express.Router();

router.post("/travel/plan", [validate(travelPlanInputSchema)], handleTravelPlan);

router.post("/travel/chat", [validate(chatSchema)], handleTravelChat);

export default router;
