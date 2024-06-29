import { Skeleton } from "../ui/skeleton";

export function ListLoading() {
    return (
        <div className="flex flex-col gap-4 mt-8">
            {Array.from({ length: 10 }).map((_, i) => (
                <Skeleton key={i} className="w-full h-10 rounded-md" />
            ))}
        </div>
    )
}