import { z } from "zod";
import { TaskSchema } from "../task/Task.schema";

export const UserSchema = z.object({
    id: z.string(),
    name: z.string({ required_error: "Name is required." })
      .min(5, "Name must have at least 5 characters")
      .max(20, "Name must have up to 20 characters"),
    email: z.string({ required_error: "E-mail is required."})
      .email("You must provide a valid email address"),
    address: z.string({ required_error: "Address is required" }),
    tasks: z.array(TaskSchema)
})

export const CreateOrUpdateUserInputSchema = UserSchema.omit({ id: true }).extend({
  id: z.string().optional()
})

export const ListAllUsersInputSchema = z.object({
  page: z.number().optional()
})

export const ListAllUsersOutputSchema = z.object({
  users: z.array(UserSchema),
  total: z.number()
})

export const FindUserTasksInputSchema = z.object({
  id: z.string().optional()
})