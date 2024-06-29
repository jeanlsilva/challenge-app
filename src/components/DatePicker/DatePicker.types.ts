import { CreateTaskRequest } from "@/_types/task/Task.use-cases";
import { ControllerRenderProps } from "react-hook-form";

export interface DatePickerProps {
    field: ControllerRenderProps<CreateTaskRequest, "dueDate">
}