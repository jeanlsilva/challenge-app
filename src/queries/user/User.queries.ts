import { listAllUsers } from "@/services/user";
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