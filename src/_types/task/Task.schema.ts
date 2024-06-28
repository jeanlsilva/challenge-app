import { z } from "zod"
import { TaskPriority } from "./Task.types"

export const TaskSchema = z.object({
    id: z.string(),
    name: z.string({ required_error: "Task name is required." }),
    dueDate: z.date({ required_error: "Task due date is required" }),
    priority: z.nativeEnum(TaskPriority),
    user: z.object({
        id: z.string().uuid(),
        name: z.string()
    })
})

export const CreateTaskInputSchema = TaskSchema.omit({ id: true })

export const ListTasksInputSchema = z.object({
    id: z.string().uuid()
})

export const ListTasksOutputSchema = z.array(TaskSchema)