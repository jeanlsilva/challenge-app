import { CreateTaskRequest, CreateTaskResponse } from "@/_types/task/Task.use-cases";

export async function createTask(request: CreateTaskRequest): Promise<CreateTaskResponse | undefined> {
    try {
        const response = await fetch('/api/task/create', {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-type': 'application/json'
            }
        })

        const json = await response.json()

        if (!json.task) {
            throw new Error("Something went wrong")
        }

        return json.task
    } catch (error: any) {
        console.log({ error })
    }
}