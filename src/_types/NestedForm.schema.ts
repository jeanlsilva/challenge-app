import { z } from "zod"
import { TaskPriority } from "./NestedForm.types"

export const NestedFormSchema = z.object({
  username: z.string().min(2).max(50),
})

export const UserDataSchema = z.object({
  name: z.string({ required_error: "Name is required." }).min(5).max(20),
  email: z.string({ required_error: "E-mail is required."})
    .email("You must provide a valid email address"),
  address: z.string({ required_error: "Address is required" })
})

export const TaskSchema = z.object({
  name: z.string({ required_error: "Task name is required." }),
  dueDate: z.date({ required_error: "Task due date is required" }),
  priority: z.nativeEnum(TaskPriority)
})