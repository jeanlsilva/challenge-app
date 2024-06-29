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
import { Toaster } from "../ui/toaster"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { Skeleton } from "../ui/skeleton"
import { format } from "date-fns"
import { AccordionHeader } from "@radix-ui/react-accordion"

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
        tasks,
        isLoadingTasks
    } = useUser()
    const viewMode = selectedUser && !editMode

    return (
        <Drawer 
            direction="right" 
            open={user?.id === selectedUser?.id && isDrawerOpen} 
            onOpenChange={(open) => setIsDrawerOpen(open)}
        >
            <DrawerTrigger asChild>
                <Button className="mt-2" onClick={() => setSelectedUser(user)}>
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
                            </form>
                        </Form>
                        {editMode && (
                            <TaskProvider>
                                <TaskForm />
                            </TaskProvider>
                        )}
                        {isLoadingTasks ? (
                            <div className="flex flex-col gap-2 mt-10">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <Skeleton key={i} className="h-8 rounded-md" />
                                ))}
                            </div>
                        ) : tasks ? (
                            <Accordion type="single" collapsible className="mt-10 h-64 overflow-y-auto">
                                <hr />
                                {tasks.length > 0 && <h3 className="mt-4">Tasks</h3>}
                                {tasks.map((task) => (
                                    <AccordionItem key={task.id} value={task.id}>
                                        <AccordionTrigger>{task.name}</AccordionTrigger>
                                        <AccordionContent>
                                            <p>Due date: {format(task.dueDate, "PPP")}</p>
                                            <p>Priority: {task.priority}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        ) : <></>}
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