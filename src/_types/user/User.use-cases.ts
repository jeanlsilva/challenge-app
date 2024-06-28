import { z } from "zod";
import { CreateUserInputSchema, FindUserByIdInputSchema, ListAllUsersOutputSchema, UserSchema } from "./User.schema";

export type CreateUserRequest = z.infer<typeof CreateUserInputSchema>

export type CreateUserResponse = z.infer<typeof UserSchema>

export type ListAllUsersResponse = z.infer<typeof ListAllUsersOutputSchema>

export type FindUserByIdRequest = z.infer<typeof FindUserByIdInputSchema>

export type FindUserByIdResponse = z.infer<typeof UserSchema>