'use client'

import { UserData } from "@/_types/NestedForm.types"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { TaskForm } from "../TaskForm"

export function UserDataForm() {
    const form = useForm<UserData>({
        defaultValues: {
            name: '',
            email: '',
            address: ''
        },
        mode: 'onChange'
    })

    function onSubmit(values: UserData) {
        console.log({ values })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="name" {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your name
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="email" {...field} />
                            </FormControl>
                            <FormDescription>This is your e-mail</FormDescription>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input placeholder="address" {...field} />
                            </FormControl>
                            <FormDescription>This is your address</FormDescription>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
            <TaskForm />
        </Form>
    )
}