import { ListUserTasksRequest, ListUserTasksResponse } from "@/_types/task/Task.use-cases"
import { CreateUserRequest, CreateUserResponse, ListAllUsersRequest, ListAllUsersResponse } from "@/_types/user/User.use-cases"

export async function listAllUsers({ page }: ListAllUsersRequest): Promise<ListAllUsersResponse | undefined> {
    try {
        const response = await fetch(`/api/user?page=${page ?? 0}`)
        const json = await response.json()
        console.log({ json })
        if (!json.users) {
            throw new Error("Something went wrong")
        }
        return json
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

export async function createOrUpdateUser(request: CreateUserRequest): Promise<CreateUserResponse | undefined> {
    try {
        let url = '/api/user/create'
        let method = 'POST'
        if (request?.id) {
            url = `/api/user/${request.id}/update`
            method = 'PUT'
        }
        const response = await fetch(url, {
            method,
            body: JSON.stringify(request),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const json = await response.json()
        if (!json.user) throw new Error("Something went wrong")
        return json.user
    } catch (error) {
        console.log({ error })
    }
}