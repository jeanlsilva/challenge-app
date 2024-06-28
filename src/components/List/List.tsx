import { useUser } from "@/hooks/user/useUser";
import { Button } from "../ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { ClipboardList } from "lucide-react";
import { ListLoading } from "./List.loading";
import { ListEmpty } from "./List.empty";
import { useEffect } from "react";

export function List() {
    const { list, isLoading } = useUser()

    useEffect(() => {
        console.log({ list })
    }, [list])

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
                    <TableHead>Tasks</TableHead>
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
                            <Button variant="link">
                                <ClipboardList />
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}