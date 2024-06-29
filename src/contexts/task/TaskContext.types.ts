import { Task } from "@/_types/task/Task.types";
import React from "react";
import { UseFormReturn } from "react-hook-form";

export interface TaskContextData {
    methods: UseFormReturn<Task>
    onSubmit: (values: Task) => void
    popoverIsOpen: boolean
    setPopoverIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    isPending: boolean
}

export interface TaskProviderProps {
    children: React.ReactNode
}