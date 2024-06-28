import { z } from "zod";
import { CreateUserInputSchema, ListUsersOutputSchema, UserSchema } from "./User.schema";

export type CreateUserRequest = z.infer<typeof CreateUserInputSchema>

export type CreateUserResponse = z.infer<typeof UserSchema>

export type ListAllUsersResponse = z.infer<typeof ListUsersOutputSchema>