"use client"

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from "../ui/form"
import { Input } from "../ui/input"
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover"
import { Button } from "../ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { useTask } from "@/hooks/task/useTask"
import { DatePicker } from "../DatePicker"
import { Loader, XCircle } from "lucide-react"

export function TaskForm() {
    const { methods, onSubmit, popoverIsOpen, setPopoverIsOpen, isPending } = useTask()

    return (
        <Popover open={popoverIsOpen} onOpenChange={(open) => setPopoverIsOpen(open)}>
            <PopoverTrigger asChild>
                <Button variant="link" className="p-0 absolute top-[44%]">New Task</Button>
            </PopoverTrigger>
            <PopoverContent className="bg-red-300 p-4 rounded-sm w-[400px]">
                <div className="flex justify-between items-center">
                    <h4 className="text-xl">Create new task</h4>
                    <PopoverClose asChild>
                        <Button variant="link" className="p-0"><XCircle /></Button>
                    </PopoverClose>
                </div>
                <Form {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <FormField
                            control={methods.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Task name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Task name" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className="flex items-center justify-between gap-2 mt-4">
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
                                    <FormItem className="space-y-1">
                                        <FormLabel>Priority</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger>
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
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <Button type="submit">
                                {isPending && <Loader className="mr-2 h-4 w-4 animate-spin" />}
                                Submit
                            </Button>
                        </div>
                    </form>
                </Form>
            </PopoverContent>
        </Popover>
    )
}