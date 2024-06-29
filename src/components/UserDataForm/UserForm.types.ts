import { User } from "@/_types/user/User.types"

export interface UserFormStoreState {
    name?: string
    setName: (name?: string) => void,
    email?: string
    setEmail: (email?: string) => void,
    address?: string
    setAddress: (address?: string) => void,
}

export interface UserDataFormProps {
    user?: User
}