import { Task } from "@/_types/task/Task.types";
import { User } from "@/_types/user/User.types";
import { CreateUserRequest } from "@/_types/user/User.use-cases";
import React from "react";
import { UseFormReturn } from "react-hook-form";

export interface UserContextData {
    methods: UseFormReturn<CreateUserRequest>
    onSubmit: (values: CreateUserRequest) => void
    users?: User[]
    isLoading: boolean,
    selectedUser: User | undefined
    setSelectedUser: React.Dispatch<React.SetStateAction<User | undefined>>
    tasks?: Task[] | null
    isLoadingTasks: boolean,
    editMode: boolean
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

export interface UserProviderProps {
    children: React.ReactNode
}