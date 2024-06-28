import { User } from "@/_types/user/User.types"
import { ListAllUsersResponse } from "@/_types/user/User.use-cases"

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