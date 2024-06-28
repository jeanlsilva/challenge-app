"use client"

import { User } from "@/_types/user/User.types";
import { List } from "@/components/List";
import { UserDataForm } from "@/components/UserDataForm";
import { UserProvider } from "@/contexts/user/UserContext";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function load() {
      const response = await fetch("/api/user")
      const data = await response.json();

      if (data.users) {
        setUsers(data.users)
      }
    }

    load()
  }, [])

  return (
    <main className="p-4">
      <UserProvider>
        <UserDataForm />
      </UserProvider>
      <List users={users} />
    </main>
  );
}
