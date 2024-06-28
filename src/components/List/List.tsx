import { useUser } from "@/hooks/user/useUser";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { ListLoading } from "./List.loading";
import { ListEmpty } from "./List.empty";
import { UserDataForm } from "../UserDataForm";

export function List() {
    const { list, isLoading } = useUser()

    if (isLoading) return <ListLoading />

    if (list?.length === 0) return <ListEmpty />

    return list && (
        <Table>
            <TableCaption>Users list</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>E-mail</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Details</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {list.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.address}</TableCell>
                        <TableCell>
                            <UserDataForm user={user} />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}