import { createContext, useState } from "react";
import { TaskContextData, TaskProviderProps } from "./TaskContext.types";
import { useForm } from "react-hook-form";
import { Task } from "@/_types/task/Task.types";
import { useCreateTaskMutation } from "@/queries/task/Task.queries";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@/hooks/user/useUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateTaskInputSchema } from "@/_types/task/Task.schema";
import { CreateTaskRequest } from "@/_types/task/Task.use-cases";

export const TaskContext = createContext({} as TaskContextData)

export default function TaskProvider({ children }: TaskProviderProps) {
    const { mutate, isPending } = useCreateTaskMutation()
    const { refetchListUserTasks, selectedUser } = useUser()
    const [popoverIsOpen, setPopoverIsOpen] = useState(false)

    const { toast } = useToast()

    const methods = useForm<CreateTaskRequest>({
        defaultValues: {
            userId: selectedUser?.id
        },
        mode: 'onChange',
        resolver: zodResolver(CreateTaskInputSchema)
    })

    function onSubmit(values: CreateTaskRequest) {
        mutate(
            values,
            {
                onSuccess: () => {
                    setPopoverIsOpen(false)
                    methods.reset()
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