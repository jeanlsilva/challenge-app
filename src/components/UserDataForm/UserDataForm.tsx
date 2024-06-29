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
    const { methods, onSubmit, setSelectedUser, editMode, setEditMode } = useUser()
    const viewMode = user && !editMode

    return (
        <Drawer direction="right">
        <DrawerTrigger asChild>
            <Button className="mt-2" onClick={() => setSelectedUser(user)}>
                {user ? <InfoIcon /> : <PlusCircle />}
            </Button>
        </DrawerTrigger>
        <DrawerPortal>
            <DrawerContent className="h-full rounded-none w-[400px] left-auto mt-24 fixed bottom-0">
                <DrawerHeader>
                    {user ? (
                        <div className="flex justify-between">
                            <h2 className="text-2xl font-bold">{editMode ? "Edit user" : "View user details"}</h2>
                            <Button variant="link" onClick={() => setEditMode(!editMode)}>
                                {editMode ? "View mode" : "Edit mode"}
                            </Button>
                        </div>
                    ) : <h2 className="text-2xl font-bold">Create new user</h2>}
                </DrawerHeader>
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
                                                <Input placeholder="name" disabled={viewMode} {...field} />
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
                                                <Input type="email" placeholder="email" disabled={viewMode} {...field} />
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
                                                <Input placeholder="address" disabled={viewMode} {...field} />
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
                        <DrawerClose asChild>
                            <Button variant="outline">{!viewMode ? "Cancel" : "Close"}</Button>
                        </DrawerClose>
                        {!viewMode && <Button type="submit" form="taskForm">Submit</Button>}
                    </DrawerFooter>
                </DrawerContent>
            </DrawerPortal>
        </Drawer>
    )
}