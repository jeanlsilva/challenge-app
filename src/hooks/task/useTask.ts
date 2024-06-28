import { TaskContext } from "@/contexts/task/TaskContext";
import { useContext } from "react";

export function useTask() {
    const context = useContext(TaskContext);

    return context
}