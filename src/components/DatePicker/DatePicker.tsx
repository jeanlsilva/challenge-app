import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { FormControl, FormItem, FormLabel } from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { DatePickerProps } from "./DatePicker.types";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";

export function DatePicker({ field }: DatePickerProps) {
    return (
        <FormItem className="flex flex-col mt-1 flex-1">
            <FormLabel>Due date</FormLabel>
            <FormControl>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn(
                                "justify-start text-left font-normal",
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
    )
}