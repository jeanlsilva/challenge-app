import { ListUserTasksRequest } from "@/_types/task/Task.use-cases";
import { FindUserTasksRequest } from "@/_types/user/User.use-cases";
import { findUserTasks, listAllUsers } from "@/services/user";
import { useQuery } from "@tanstack/react-query";

export function useListAllUsersQuery() {
    const query = useQuery({
        queryKey: ['/user'],
        queryFn: listAllUsers
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