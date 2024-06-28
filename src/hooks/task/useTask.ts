import { TaskContext } from "@/contexts/task/TaskContext";
import { useContext } from "react";

export function useTask() {
    const { user, setUser } = useContext(TaskContext);

    return {
        user,
        setUser
    }
}