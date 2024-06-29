import { UserContext } from "@/contexts/user/UserContext";
import { useContext } from "react";

export function useUser() {
    const context = useContext(UserContext)

    return context
}