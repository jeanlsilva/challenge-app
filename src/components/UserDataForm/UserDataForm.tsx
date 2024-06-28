'use client'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
  } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { TaskForm } from "../TaskForm"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
    DrawerPortal
  } from "@/components/ui/drawer"
import TaskProvider from "@/contexts/task/TaskContext"
import { useUser } from "@/hooks/user/useUser"
import { PlusCircle } from "lucide-react"

export function UserDataForm() {
    const { methods, onSubmit } = useUser()

    return (
        <Drawer direction="right">
        <DrawerTrigger asChild>
            <Button className="mt-2"><PlusCircle /></Button>
        </DrawerTrigger>
        <DrawerPortal>
            <DrawerContent className="h-full rounded-none w-[400px] left-auto mt-24 fixed bottom-0">
                <DrawerHeader>Create new user</DrawerHeader>
                    <div className="flex-1 p-4">
                        <Form {...methods}>
                            <form onSubmit={methods.handleSubmit(onSubmit)}>
                                <FormField
                                    control={methods.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="name" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={methods.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="email" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={methods.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="address" {...field} />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <TaskProvider>
                                    <TaskForm userName={methods.watch("name")} />
                                </TaskProvider>
                            </form>
                        </Form>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
                        <Button type="submit" form="taskForm">Submit</Button>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerPortal>
        </Drawer>
    )
}