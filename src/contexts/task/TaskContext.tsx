import { createContext, useState } from "react";
import { TaskContextData, TaskProviderProps } from "./TaskContext.types";
import { useForm } from "react-hook-form";
import { Task } from "@/_types/task/Task.types";
import { useCreateTaskMutation } from "@/queries/task/Task.queries";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/hooks/user/useUser";

export const TaskContext = createContext({} as TaskContextData)

export default function TaskProvider({ children }: TaskProviderProps) {
    const { mutate, isPending } = useCreateTaskMutation()
    const { refetchListUserTasks } = useUser()
    const [popoverIsOpen, setPopoverIsOpen] = useState(false)

    const { toast } = useToast()

    const methods = useForm<Task>({
        defaultValues: {
            name: '',
        },
        mode: 'onChange'
    })

    function onSubmit(values: Task) {
        mutate(
            values,
            {
                onSuccess: () => {
                    setPopoverIsOpen(false)
                    refetchListUserTasks()
                    toast({
                        description: "Task created successfully"
                    })
                }
            }
        )    
    }

    return (
        <TaskContext.Provider 
            value={{
                methods,
                onSubmit,
                popoverIsOpen,
                setPopoverIsOpen,
                isPending
            }}
        >
            {children}
        </TaskContext.Provider>
    )
}