import express from 'express';
import type { Router } from 'express';
import { handleTravelPlan } from '../controllers/travel.plan.controller';
import { errorMiddleware } from '../middleware/error.middleware';
import { validate } from "../middleware/validate.middleware";
import { travelPlanInputSchema } from '@monorepo/types';

const router: Router = express.Router()

router.get('/travel/plan', [validate(travelPlanInputSchema), errorMiddleware], handleTravelPlan)

export default router