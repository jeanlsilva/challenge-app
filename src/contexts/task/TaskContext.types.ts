import { Task } from "@/_types/task/Task.types";
import { CreateTaskRequest } from "@/_types/task/Task.use-cases";
import React from "react";
import { UseFormReturn } from "react-hook-form";

export interface TaskContextData {
    methods: UseFormReturn<CreateTaskRequest>
    onSubmit: (values: CreateTaskRequest) => void
    popoverIsOpen: boolean
    setPopoverIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    isPending: boolean
}

export interface TaskProviderProps {
    children: React.ReactNode
}