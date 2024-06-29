import { useUser } from "@/hooks/user/useUser";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { ListLoading } from "./List.loading";
import { ListEmpty } from "./List.empty";
import { UserDataForm } from "../UserDataForm";
import { Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from "../ui/pagination";
import { USERS_PER_PAGE } from "@/constants";
import { Button } from "../ui/button";

export function List() {
    const { usersData, isLoading, page, setPage } = useUser()

    if (isLoading) return <ListLoading />

    if (usersData?.users?.length === 0) return <ListEmpty />

    return usersData?.users && (
        <>
            <div className="border rounded-sm mt-4">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>E-mail</TableHead>
                            <TableHead>Address</TableHead>
                            <TableHead className="text-center">Details</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {usersData.users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.address}</TableCell>
                                <TableCell className="text-center">
                                    <UserDataForm user={user} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            {usersData.total / USERS_PER_PAGE > 1 && (
            <Pagination className="mt-4">
                <PaginationContent>
                    {page > 1 && (
                        <PaginationItem>
                            <PaginationPrevious onClick={() => setPage(page - 1)} />
                        </PaginationItem>
                    )}
                    {Array.from({ length: Math.ceil(usersData.total / USERS_PER_PAGE) }, (_, i) => i + 1).map((v, i) => (
                        <PaginationItem key={i}>
                            <Button variant={page === v ? "default" : "link"} onClick={() => setPage(v)}>{v}</Button>
                        </PaginationItem>
                    ))}
                    {page < Math.ceil(usersData.total / USERS_PER_PAGE) && (
                        <PaginationItem>
                            <PaginationNext onClick={() => setPage(page + 1)} />
                        </PaginationItem>
                    )}
                </PaginationContent>
            </Pagination>
            )}
        </>
    )
}