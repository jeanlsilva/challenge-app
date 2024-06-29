import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from "@/_types/user/User.types"
import { UserContextData, UserProviderProps } from "./UserContext.types";
import { useCreateUserMutation, useFindUserTasksQuery, useListAllUsersQuery } from "@/queries/user/User.queries";
import { CreateUserRequest } from "@/_types/user/User.use-cases";
import { useToast } from "@/components/ui/use-toast";
import { CreateOrUpdateUserInputSchema } from "@/_types/user/User.schema";

export const UserContext = createContext({} as UserContextData)

export function UserProvider({ children }: UserProviderProps) {
    const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined)
    const [editMode, setEditMode] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [page, setPage] = useState(1)

    const { toast } = useToast()

    const { data: usersData, isLoading, refetch } = useListAllUsersQuery({ page })
    const { data: tasks, isLoading: isLoadingTasks, refetch: refetchListUserTasks } = 
        useFindUserTasksQuery({ id: selectedUser?.id })
    const { mutate, isPending } = useCreateUserMutation()

    const methods = useForm<CreateUserRequest>({
        values: {
            id: selectedUser?.id,
            name: selectedUser?.name || "",
            email: selectedUser?.email || "",
            address: selectedUser?.address || "",
            tasks: []
        },
        mode: 'onChange',
        resolver: zodResolver(CreateOrUpdateUserInputSchema)
    })

    useEffect(() => {
        console.log(methods.formState)
    }, [methods.formState])

    function onSubmit(values: CreateUserRequest) {
        /*mutate(
            values,
            {
                onSuccess: () => {
                    setIsDrawerOpen(false)
                    methods.reset()
                    refetch()
                    toast({
                        description: "User successfully created"
                    })
                },
            }
        )*/
    }

    return (
        <UserContext.Provider 
            value={{ 
                methods, 
                onSubmit, 
                usersData, 
                isLoading, 
                selectedUser,
                setSelectedUser,
                tasks,
                isLoadingTasks,
                editMode,
                setEditMode,
                isPending,
                isDrawerOpen,
                setIsDrawerOpen,
                refetchListUserTasks,
                page,
                setPage
            }}>
                {children}
        </UserContext.Provider>
    )
}