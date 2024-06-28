import { createContext } from "react";
import { TaskContextData, TaskProviderProps } from "./TaskContext.types";
import { useForm } from "react-hook-form";
import { Task } from "@/_types/task/Task.types";

export const TaskContext = createContext({} as TaskContextData)

export default function TaskProvider({ children }: TaskProviderProps) {
    const methods = useForm<Task>({
        defaultValues: {
            name: '',
        },
        mode: 'onChange'
    })

    function onSubmit(values: Task) {
        console.log({ values })
    }
    return (
        <TaskContext.Provider 
            value={{
                methods,
                onSubmit
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}