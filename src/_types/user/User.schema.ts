import { z } from "zod";
import { TaskSchema } from "../task/Task.schema";

export const UserSchema = z.object({
    uuid: z.string().uuid(),
    name: z.string({ required_error: "Name is required." }).min(5).max(20),
    email: z.string({ required_error: "E-mail is required."})
      .email("You must provide a valid email address"),
    address: z.string({ required_error: "Address is required" }),
    tasks: z.array(TaskSchema)
})

export const CreateUserInputSchema = UserSchema.omit({ uuid: true })

export const ListUsersOutputSchema = z.array(UserSchema)