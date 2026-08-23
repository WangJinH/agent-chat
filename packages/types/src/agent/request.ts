import { z } from "zod";

export const travelPlanInputSchema = z.object({
  city: z
    .string({
      error: "城市必须是字符串"
    })
    .min(1, "城市不能为空")
    .max(50, "城市名称不能超过 50 个字符"),

  budget: z
    .number({
      error: "预算必须是数字"
    })
    .positive("预算必须大于 0"),

  days: z
    .number({
      error: "天数必须是数字"
    })
    .int("天数必须是整数")
    .min(1, "旅游天数至少为 1 天")
    .max(30, "旅游天数不能超过 30 天"),

  people: z
    .number({
      error: "人数必须是数字"
    })
    .int("人数必须是整数")
    .min(1, "人数至少为 1 人")
    .optional(),

  preferences: z
    .string({
      error: "偏好必须是字符串"
    })
    .max(500, "偏好描述不能超过 500 个字符")
    .optional()
});

// 从 Zod Schema 自动推导 TypeScript 类型
export type TravelPlanInput = z.infer<typeof travelPlanInputSchema>;
