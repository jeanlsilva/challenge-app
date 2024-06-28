import { ListX } from "lucide-react";

export function ListEmpty() {
    return (
        <div className="bg-slate-200 h-20">
            <ListX size="40" />
            <h3>No users found</h3>
        </div>
    )
}