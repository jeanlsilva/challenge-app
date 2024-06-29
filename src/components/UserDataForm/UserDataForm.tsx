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
    DrawerTitle,
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
import { Tooltip, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import { TooltipContent } from "../ui/tooltip"

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
                <Button className="bg-primary mt-2" onClick={() => setSelectedUser(user)}>
                    {user ? <InfoIcon /> : <PlusCircle />}
                </Button>
            </DrawerTrigger>
            <DrawerPortal>
                <DrawerTitle className="invisible">User Form</DrawerTitle>
                <DrawerOverlay />
                <DrawerContent className="h-full rounded-none w-[400px] left-auto mt-24 fixed bottom-0">
                    <DrawerHeader className="pb-0">
                        {selectedUser ? (
                            <div className="flex justify-between">
                                <h2 className="text-2xl font-bold">{editMode ? "Edit user" : "View user details"}</h2>
                                <Button variant="link" onClick={() => setEditMode(!editMode)}>
                                    {editMode ? "View mode" : "Edit mode"}
                                </Button>
                            </div>
                        ) : <h2 className="text-2xl font-bold">Create new user</h2>}
                    </DrawerHeader>
                    <div className="flex-1 p-4 py-0">
                        <Form {...methods}>
                            <form onSubmit={methods.handleSubmit(onSubmit)} id="userForm">
                                <FormField
                                    control={methods.control}
                                    name="name"
                                    render={({ field, fieldState: { error } }) => (
                                        <FormItem className="mt-2">
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Input 
                                                                placeholder="name" 
                                                                disabled={viewMode} 
                                                                className={error ? "text-destructive border-destructive" : ""}
                                                                {...field} 
                                                            />
                                                        </TooltipTrigger>
                                                        {error?.message && (
                                                            <TooltipContent>
                                                                <p>{error?.message}</p>
                                                            </TooltipContent>
                                                        )}
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={methods.control}
                                    name="email"
                                    render={({ field, fieldState: { error } }) => (
                                        <FormItem className="mt-2">
                                            <FormLabel>E-mail</FormLabel>
                                            <FormControl>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Input 
                                                                type="email" 
                                                                placeholder="email" 
                                                                disabled={viewMode} 
                                                                className={error ? "text-destructive border-destructive" : ""}
                                                                {...field}
                                                            />
                                                        </TooltipTrigger>
                                                        {error?.message && (
                                                            <TooltipContent>
                                                                <p>{error?.message}</p>
                                                            </TooltipContent>
                                                        )}
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={methods.control}
                                    name="address"
                                    render={({ field, fieldState: { error } }) => (
                                        <FormItem className="mt-2">
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger asChild>
                                                            <Input 
                                                                placeholder="address" 
                                                                disabled={viewMode} 
                                                                className={error ? "text-destructive border-destructive" : ""}
                                                                {...field} 
                                                            />
                                                        </TooltipTrigger>
                                                        {error?.message && (
                                                            <TooltipContent>
                                                                <p>{error?.message}</p>
                                                            </TooltipContent>
                                                        )}
                                                    </Tooltip>
                                                </TooltipProvider>
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
                    <DrawerFooter className="h-[120px] py-4">
                        <Button 
                            type="submit" 
                            form="userForm" 
                            disabled={isPending || !methods.formState.isValid} 
                            className={viewMode ? "invisible" : ""}
                        >
                            {isPending && <Loader className="mr-2 h-4 w-4 animate-spin" /> }
                            Submit
                        </Button>
                        <DrawerClose asChild>
                            <Button variant="outline" onClick={() => setSelectedUser(undefined)}>
                                {!viewMode ? "Cancel" : "Close"}
                            </Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerPortal>
            <Toaster />
        </Drawer>
    )
}