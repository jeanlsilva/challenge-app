import { User } from "@/_types/user/User.types";
import React from "react";

export interface TaskContextData {
    user?: User
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

export interface TaskProviderProps {
    children: React.ReactNode
}