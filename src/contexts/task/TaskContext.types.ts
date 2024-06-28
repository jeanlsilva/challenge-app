import { Task } from "@/_types/task/Task.types";
import React from "react";
import { UseFormReturn } from "react-hook-form";

export interface TaskContextData {
    methods: UseFormReturn<Task>
    onSubmit: (values: Task) => void
}

export interface TaskProviderProps {
    children: React.ReactNode
}