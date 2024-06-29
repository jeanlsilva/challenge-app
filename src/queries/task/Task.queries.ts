import { CreateTaskRequest } from "@/_types/task/Task.use-cases";
import { createTask } from "@/services/task";
import { useMutation } from "@tanstack/react-query";

export function useCreateTaskMutation() {
    const mutation = useMutation({
        mutationFn: (request: CreateTaskRequest) => createTask(request)
    })

    return {
        ...mutation,
        data: mutation.data
    }
}