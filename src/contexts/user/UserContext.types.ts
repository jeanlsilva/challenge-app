import { User } from "@/_types/user/User.types";
import React from "react";
import { UseFormReturn } from "react-hook-form";

export interface UserContextData {
    methods: UseFormReturn<User>
    onSubmit: (values: User) => void
}

export interface UserProviderProps {
    children: React.ReactNode
}