import { ListUserTasksRequest } from "@/_types/task/Task.use-cases";
import { CreateUserRequest, ListAllUsersRequest } from "@/_types/user/User.use-cases";
import { createOrUpdateUser, findUserTasks, listAllUsers } from "@/services/user";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useListAllUsersQuery({ page }: ListAllUsersRequest) {
    const query = useQuery({
        queryKey: ['/user', page],
        queryFn: () => listAllUsers({ page })
    })

    return {
        ...query,
        data: query.data
    }
}

export function useFindUserTasksQuery({ id }: ListUserTasksRequest) {
    const query = useQuery({
        queryKey: ['/tasks', id],
        queryFn: () => id ? findUserTasks({ id }) : null,
    })

    return {
        ...query,
        data: query.data
    }
}

export function useCreateUserMutation() {
    const mutation = useMutation({
        mutationFn: (request: CreateUserRequest) => createOrUpdateUser(request),
    })

    return {
        ...mutation,
        data: mutation.data
    }
}