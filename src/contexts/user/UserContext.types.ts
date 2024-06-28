import { User } from "@/_types/user/User.types";
import React from "react";
import { UseFormReturn } from "react-hook-form";

export interface UserContextData {
    methods: UseFormReturn<User>
    onSubmit: (values: User) => void
    list?: User[]
    isLoading: boolean,
    selectedUser: User | undefined
    setSelectedUser: React.Dispatch<React.SetStateAction<User | undefined>>
}

export interface UserProviderProps {
    children: React.ReactNode
}