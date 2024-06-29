import { z } from "zod";
import { 
    CreateOrUpdateUserInputSchema, 
    FindUserTasksInputSchema, 
    ListAllUsersOutputSchema, 
    UserSchema 
} from "./User.schema";

export type CreateUserRequest = z.infer<typeof CreateOrUpdateUserInputSchema>

export type CreateUserResponse = z.infer<typeof UserSchema>

export type ListAllUsersResponse = z.infer<typeof ListAllUsersOutputSchema>

export type FindUserTasksRequest = z.infer<typeof FindUserTasksInputSchema>

export type FindUserTasksResponse = z.infer<typeof UserSchema>