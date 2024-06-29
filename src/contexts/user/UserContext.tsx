import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { User } from "@/_types/user/User.types"
import { UserContextData, UserProviderProps } from "./UserContext.types";
import { useFindUserTasksQuery, useListAllUsersQuery } from "@/queries/user/User.queries";
import { CreateUserRequest } from "@/_types/user/User.use-cases";

export const UserContext = createContext({} as UserContextData)

export function UserProvider({ children }: UserProviderProps) {
    const { data: users, isLoading } = useListAllUsersQuery()
    const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined)
    const [editMode, setEditMode] = useState(false)
    const { data: tasks, isLoading: isLoadingTasks } = useFindUserTasksQuery({ id: selectedUser?.id })
    const methods = useForm<CreateUserRequest>({
        values: {
            name: selectedUser?.name || "",
            email: selectedUser?.email || "",
            address: selectedUser?.address || "",
            tasks: []
        },
        mode: 'onChange'
    })

    function onSubmit(values: CreateUserRequest) {
        console.log({ values })
    }

    useEffect(() => {
        console.log({ selectedUser })
    }, [selectedUser])

    return (
        <UserContext.Provider 
            value={{ 
                methods, 
                onSubmit, 
                users, 
                isLoading, 
                selectedUser, 
                setSelectedUser,
                tasks,
                isLoadingTasks,
                editMode,
                setEditMode
            }}>
            {children}
        </UserContext.Provider>
    )
}