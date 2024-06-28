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
import { InfoIcon, PlusCircle } from "lucide-react"
import { UserDataFormProps } from "./UserForm.types"

export function UserDataForm({ user }: UserDataFormProps) {
    const { methods, onSubmit, setSelectedUser } = useUser()

    return (
        <Drawer direction="right">
        <DrawerTrigger asChild>
            <Button className="mt-2" onClick={() => setSelectedUser(user)}>
                {user ? <InfoIcon /> : <PlusCircle />}
            </Button>
        </DrawerTrigger>
        <DrawerPortal>
            <DrawerContent className="h-full rounded-none w-[400px] left-auto mt-24 fixed bottom-0">
                {user ? (
                    <>
                        <DrawerHeader>User Details</DrawerHeader>
                        <div className="p-4">
                            <p>Name: {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>Address: {user.address}</p>
                            <TaskProvider>
                                <TaskForm />
                            </TaskProvider>
                        </div>
                        <DrawerFooter>
                            <DrawerClose asChild>
                                <Button className="w-full">Close</Button>
                            </DrawerClose>
                        </DrawerFooter>
                    </>
                ) : (
                    <>
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
                                        <TaskForm />
                                    </TaskProvider>
                                </form>
                            </Form>
                        </div>
                        <DrawerFooter>
                            <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
                            <Button type="submit" form="taskForm">Submit</Button>
                        </DrawerFooter>
                    </>
                )}
                </DrawerContent>
            </DrawerPortal>
        </Drawer>
    )
}