import { ListUserTasksRequest, ListUserTasksResponse } from "@/_types/task/Task.use-cases"
import { FindUserTasksRequest, FindUserTasksResponse, ListAllUsersResponse } from "@/_types/user/User.use-cases"

export async function listAllUsers(): Promise<ListAllUsersResponse | undefined> {
    try {
        const response = await fetch("/api/user")
        const json = await response.json()
        console.log({ json })
        if (!json.users) {
            throw new Error("Something went wrong")
        }
        return json.users
    } catch (error: any) {
        console.log({ error })
    }
}

export async function findUserTasks({ id }: ListUserTasksRequest): Promise<ListUserTasksResponse | undefined> {
    try {
        const response = await fetch(`/api/user/${id}/tasks`)
        const json = await response.json()
        if (!json.tasks) {
            throw new Error("Something went wrong")
        }
        return json.tasks
    } catch (error: any) {
        console.log({ error })
    }
}