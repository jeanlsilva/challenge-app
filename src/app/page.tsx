"use client"

import { User } from "@/_types/user/User.types";
import { List } from "@/components/List";
import { UserDataForm } from "@/components/UserDataForm";
import { UserProvider } from "@/contexts/user/UserContext";
import { useEffect, useState } from "react";

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
