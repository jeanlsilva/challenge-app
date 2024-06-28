"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Button } from "../ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { useTask } from "@/hooks/task/useTask"
import { DatePicker } from "../DatePicker"

export function TaskForm() {
    const { methods, onSubmit } = useTask()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="link">New Task</Button>
            </PopoverTrigger>
            <PopoverContent className="bg-red-300 p-4 rounded-sm">
                <Form {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} id="taskForm">
                        <FormField
                            control={methods.control}
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
                            control={methods.control}
                            name="dueDate"
                            render={({ field }) => (
                                <DatePicker field={field} />
                            )}
                        />
                        <FormField 
                            control={methods.control}
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
                        <div className="flex flex-col gap-2 mt-2">
                            <PopoverClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </PopoverClose>
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </Form>
            </PopoverContent>
        </Popover>
    )
}