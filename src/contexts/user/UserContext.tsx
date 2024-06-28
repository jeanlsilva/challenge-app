import { createContext } from "react";
import { useForm } from "react-hook-form"
import { User } from "@/_types/user/User.types"
import { UserContextData, UserProviderProps } from "./UserContext.types";

export const UserContext = createContext({} as UserContextData)

export function UserProvider({ children }: UserProviderProps) {
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

    return (
        <UserContext.Provider value={{ methods, onSubmit }}>
            {children}
        </UserContext.Provider>
    )
}