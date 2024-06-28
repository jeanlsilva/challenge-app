import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { User } from "@/_types/user/User.types"
import { UserContextData, UserProviderProps } from "./UserContext.types";
import { useFindUserByIdQuery, useListAllUsersQuery } from "@/queries/user/User.queries";

export const UserContext = createContext({} as UserContextData)

export function UserProvider({ children }: UserProviderProps) {
    const { data: list, isLoading } = useListAllUsersQuery()
    const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined)
    const { data: user, isLoading: isLoadingUser } = useFindUserByIdQuery({ id: selectedUser?.id })
    const methods = useForm<User>({
        defaultValues: {
            name: '',
            email: '',
            address: ''
        },
        mode: 'onChange'
    })

    function onSubmit(values: User) {
        console.log({ values })
    }

    useEffect(() => {
        console.log({ user })
    }, [user])

    return (
        <UserContext.Provider value={{ methods, onSubmit, list, isLoading, selectedUser, setSelectedUser }}>
            {children}
        </UserContext.Provider>
    )
}