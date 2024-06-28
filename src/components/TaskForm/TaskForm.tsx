"use client"

import { Task } from "@/_types/NestedForm.types"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "../ui/calendar"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTrigger,
    DrawerPortal
  } from "@/components/ui/drawer"

export function TaskForm() {
    const form = useForm<Task>({
        defaultValues: {
            name: '',
        },
        mode: 'onChange'
    })

    function onSubmit(values: Task) {
        console.log({ values })
    }

    return (
        <Drawer direction="right">
            <DrawerTrigger asChild>
                <Button className="mt-2">Create task</Button>
            </DrawerTrigger>
            <DrawerPortal>
                <DrawerContent className="h-full rounded-none w-[400px] left-auto mt-24 fixed bottom-0">
                    <DrawerHeader>Create new task</DrawerHeader>
                    <div className="p-4">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} id="taskForm">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Task name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Task name" {...field} />
                                            </FormControl>
                                            <FormDescription>Name of the task</FormDescription>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="dueDate"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Due date</FormLabel>
                                            <FormControl>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button 
                                                            variant="outline"
                                                            className={cn(
                                                                "w-[280px] justify-start text-left font-normal",
                                                                !field.value && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={field.onChange}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                                <FormField 
                                    control={form.control}
                                    name="priority"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Priority</FormLabel>
                                            <FormControl>
                                                <Select {...field}>
                                                    <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Select a priority" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Priority</SelectLabel>
                                                            <SelectItem value="low">Low</SelectItem>
                                                            <SelectItem value="normal">Normal</SelectItem>
                                                            <SelectItem value="high">High</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </form>
                        </Form>
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild><Button>Cancel</Button></DrawerClose>
                        <Button type="submit" form="taskForm">Submit</Button>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerPortal>
        </Drawer>
    )
}