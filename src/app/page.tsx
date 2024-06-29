"use client"

import { List } from "@/components/List";
import { UserDataForm } from "@/components/UserDataForm";
import { UserProvider } from "@/contexts/user/UserContext";

export default function Home() {
  return (
    <main className="p-4">
      <UserProvider>
        <UserDataForm />
        <List />
      </UserProvider>
    </main>
  );
}
