import { FindUserByIdRequest, FindUserByIdResponse, ListAllUsersResponse } from "@/_types/user/User.use-cases"

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

export async function findUserById({ id }: FindUserByIdRequest): Promise<FindUserByIdResponse | undefined> {
    try {
        const response = await fetch(`/api/user/${id}`)
        const json = await response.json()
        if (!json.user) {
            throw new Error("Something went wrong")
        }
        return json.user
    } catch (error: any) {
        console.log({ error })
    }
}