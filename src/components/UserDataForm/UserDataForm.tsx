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
    DrawerOverlay,
    DrawerPortal,
    DrawerTrigger
  } from "@/components/ui/drawer"
import TaskProvider from "@/contexts/task/TaskContext"
import { useUser } from "@/hooks/user/useUser"
import { InfoIcon, Loader, PlusCircle } from "lucide-react"
import { UserDataFormProps } from "./UserForm.types"
import { Toast } from "../ui/toast"
import { Toaster } from "../ui/toaster"

export function UserDataForm({ user }: UserDataFormProps) {
    const { 
        methods, 
        onSubmit, 
        editMode, 
        setEditMode, 
        isPending, 
        isDrawerOpen, 
        setIsDrawerOpen, 
        selectedUser, 
        setSelectedUser,
    } = useUser()
    const viewMode = selectedUser && !editMode

    return (
        <Drawer direction="right" open={isDrawerOpen} onOpenChange={(open) => setIsDrawerOpen(open)}>
            <DrawerTrigger asChild>
                <Button className="mt-2" onClick={() => user ? setSelectedUser(user) : setEditMode(false)}>
                    {user ? <InfoIcon /> : <PlusCircle />}
                </Button>
            </DrawerTrigger>
            <DrawerPortal>
                <DrawerOverlay />
                <DrawerContent className="h-full rounded-none w-[400px] left-auto mt-24 fixed bottom-0">
                    <DrawerHeader>
                        {selectedUser ? (
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
                            <form onSubmit={methods.handleSubmit(onSubmit)} id="userForm">
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
                            <Button variant="outline" onClick={() => setSelectedUser(undefined)}>
                                {!viewMode ? "Cancel" : "Close"}
                            </Button>
                        </DrawerClose>
                        {!viewMode && (
                            <Button type="submit" form="userForm" disabled={isPending}>
                                {isPending && <Loader className="mr-2 h-4 w-4 animate-spin" /> }
                                Submit
                            </Button>
                        )}
                    </DrawerFooter>
                </DrawerContent>
            </DrawerPortal>
            <Toaster />
        </Drawer>
    )
}