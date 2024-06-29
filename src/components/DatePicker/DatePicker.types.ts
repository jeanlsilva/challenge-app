import { Task } from "@/_types/task/Task.types";
import { ControllerRenderProps } from "react-hook-form";

export interface DatePickerProps {
    field: ControllerRenderProps<Task, "dueDate">
}