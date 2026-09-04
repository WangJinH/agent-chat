import { LLM } from "../agent/model/index";
import { TravelPlanInput } from "@monorepo/types";
import { planPrompt } from "../agent/model/prompt";
import { travelPlanSchema } from "@monorepo/types";
import { AppError } from "../errors/app-errors";

export const createTravelPlan = async (planOptions: TravelPlanInput) => {
    if (!planOptions) {
        throw new AppError("createTravelPlan未传递参数,请传递必要的参数");
    }

    const structuredLLM = LLM.withStructuredOutput(travelPlanSchema, { method: "functionCalling" });
    const chain = planPrompt.pipe(structuredLLM);
    const result = await chain.invoke(planOptions);
    return result;
};
