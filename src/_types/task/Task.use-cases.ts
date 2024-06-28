import { z } from "zod";
import { CreateTaskInputSchema, TaskSchema } from "./Task.schema";

export type CreateTaskRequest = z.infer<typeof CreateTaskInputSchema>

export type CreateTaskResponse = z.infer<typeof TaskSchema>