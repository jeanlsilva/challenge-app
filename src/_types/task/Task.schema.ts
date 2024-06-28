import { z } from "zod"
import { TaskPriority } from "./Task.types"

export const TaskSchema = z.object({
    uuid: z.string().uuid(),
    name: z.string({ required_error: "Task name is required." }),
    dueDate: z.date({ required_error: "Task due date is required" }),
    priority: z.nativeEnum(TaskPriority),
    user: z.object({
        uuid: z.string().uuid(),
        name: z.string()
    })
})

export const CreateTaskInputSchema = TaskSchema.omit({ uuid: true })

export const ListTasksInputSchema = z.object({
    uuid: z.string().uuid()
})

export const ListTasksOutputSchema = z.array(TaskSchema)