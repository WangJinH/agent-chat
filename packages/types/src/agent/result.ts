import { z } from "zod";

export const travelPlanSchema = z.object({
    summary: z
        .string({
            error: "总结必须是字符串",
        })
        .min(1, "总结不能为空"),

    budgetBreakdown: z.object({
        transportation: z
            .number({
                error: "交通预算必须是数字",
            })
            .min(0, "交通预算不能小于 0"),

        accommodation: z
            .number({
                error: "住宿预算必须是数字",
            })
            .min(0, "住宿预算不能小于 0"),

        food: z
            .number({
                error: "餐饮预算必须是数字",
            })
            .min(0, "餐饮预算不能小于 0"),

        tickets: z
            .number({
                error: "门票预算必须是数字",
            })
            .min(0, "门票预算不能小于 0"),

        other: z
            .number({
                error: "其他预算必须是数字",
            })
            .min(0, "其他预算不能小于 0"),
    }),

    days: z
        .array(
            z.object({
                day: z
                    .number({
                        error: "天数必须是数字",
                    })
                    .int("天数必须是整数")
                    .min(1, "天数必须大于 0"),

                title: z
                    .string({
                        error: "每日标题必须是字符串",
                    })
                    .min(1, "每日标题不能为空"),

                items: z.array(
                    z.object({
                        time: z
                            .string({
                                error: "时间必须是字符串",
                            })
                            .min(1, "时间不能为空"),

                        activity: z
                            .string({
                                error: "活动内容必须是字符串",
                            })
                            .min(1, "活动内容不能为空"),

                        reason: z
                            .string({
                                error: "推荐理由必须是字符串",
                            })
                            .min(1, "推荐理由不能为空"),

                        estimatedCost: z
                            .number({
                                error: "预计费用必须是数字",
                            })
                            .min(0, "预计费用不能小于 0"),
                    })
                ),
            })
        )
        .min(1, "至少需要规划一天行程"),

    tips: z
        .array(
            z
                .string({
                    error: "旅游提示必须是字符串",
                })
                .min(1, "旅游提示不能为空")
        )
        .min(1, "至少需要提供一条旅游提示"),
});

export type TravelPlan = z.infer<typeof travelPlanSchema>;
