import { z } from "zod";
import { NestedFormSchema, TaskSchema, UserDataSchema } from "./NestedForm.schema"

export type NestedFrom = z.infer<typeof NestedFormSchema>

export type UserData = z.infer<typeof UserDataSchema>

export enum TaskPriority {
    LOW = "low",
    NORMAL = "normal",
    HIGH = "high"
}

export type Task = z.infer<typeof TaskSchema>