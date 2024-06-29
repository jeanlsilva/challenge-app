import { z } from "zod";
import { TaskSchema } from "./Task.schema";

export enum TaskPriority {
    LOW = "low",
    NORMAL = "normal",
    HIGH = "high"
}

export type Task = z.infer<typeof TaskSchema>