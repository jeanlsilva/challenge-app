import { createContext, useState } from "react";
import { TaskContextData, TaskProviderProps } from "./TaskContext.types";
import { User } from "@/_types/user/User.types";

const TaskContext = createContext({} as TaskContextData)

export default function TaskProvider({ children }: TaskProviderProps) {
    const [user, setUser] = useState<User | undefined>()
    return (
        <TaskContext.Provider 
            value={{
                user,
                setUser
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}