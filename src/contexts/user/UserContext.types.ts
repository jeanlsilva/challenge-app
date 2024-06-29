import { Task } from "@/_types/task/Task.types";
import { ListUserTasksResponse } from "@/_types/task/Task.use-cases";
import { User } from "@/_types/user/User.types";
import { CreateUserRequest } from "@/_types/user/User.use-cases";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import React from "react";
import { UseFormReturn } from "react-hook-form";

export interface UserContextData {
    methods: UseFormReturn<CreateUserRequest>
    onSubmit: (values: CreateUserRequest) => void
    users?: User[]
    isLoading: boolean,
    selectedUser: User | undefined,
    setSelectedUser: React.Dispatch<React.SetStateAction<User | undefined>>
    tasks?: Task[] | null
    isLoadingTasks: boolean,
    editMode: boolean
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>
    isPending: boolean
    isDrawerOpen: boolean
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
    refetchListUserTasks: (options?: RefetchOptions | undefined) => Promise<QueryObserverResult<ListUserTasksResponse | null | undefined>>
}

export interface UserProviderProps {
    children: React.ReactNode
}