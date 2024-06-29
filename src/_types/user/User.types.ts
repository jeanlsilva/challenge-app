import { z } from "zod";
import { UserSchema } from "./User.schema";

export type User = z.infer<typeof UserSchema>