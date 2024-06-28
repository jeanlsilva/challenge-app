import { FindUserByIdRequest } from "@/_types/user/User.use-cases";
import { findUserById, listAllUsers } from "@/services/user";
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

export function useFindUserByIdQuery({ id }: FindUserByIdRequest) {
    const query = useQuery({
        queryKey: ['/user', id],
        queryFn: () => id ? findUserById({ id }) : null,
    })

    return {
        ...query,
        data: query.data
    }
}