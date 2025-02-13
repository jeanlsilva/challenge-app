import { z } from "zod"
import { TaskPriority } from "./Task.types"

export const TaskSchema = z.object({
    id: z.string(),
    name: z.string({ required_error: "Task name is required." })
        .min(5, "Task name must have at leat 5 characters"),
    dueDate: z.date({ required_error: "Task due date is required" }),
    priority: z.nativeEnum(TaskPriority),
    userId: z.string()
})

export const CreateTaskInputSchema = TaskSchema.omit({ id: true }).extend({
    id: z.string().optional()
})

export const ListUserTasksInputSchema = z.object({
    id: z.string().uuid().optional()
})

export const ListUserTasksOutputSchema = z.array(TaskSchema)