import { createContext, useEffect } from "react";
import { useForm } from "react-hook-form"
import { User } from "@/_types/user/User.types"
import { UserContextData, UserProviderProps } from "./UserContext.types";
import { useListAllUsersQuery } from "@/queries/user/User.queries";

export const UserContext = createContext({} as UserContextData)

export function UserProvider({ children }: UserProviderProps) {
    const { data: list, isLoading } = useListAllUsersQuery()
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
        console.log({ list })
    }, [list])

    return (
        <UserContext.Provider value={{ methods, onSubmit, list, isLoading }}>
            {children}
        </UserContext.Provider>
    )
}