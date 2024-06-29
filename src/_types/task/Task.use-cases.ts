import { z } from "zod";
import { CreateTaskInputSchema, ListUserTasksInputSchema, ListUserTasksOutputSchema, TaskSchema } from "./Task.schema";

export type CreateTaskRequest = z.infer<typeof CreateTaskInputSchema>

export type CreateTaskResponse = z.infer<typeof TaskSchema>

export type ListUserTasksRequest = z.infer<typeof ListUserTasksInputSchema>

export type ListUserTasksResponse = z.infer<typeof ListUserTasksOutputSchema>