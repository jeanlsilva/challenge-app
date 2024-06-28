import { List } from "@/components/List";
import { UserDataForm } from "@/components/UserDataForm";

export default function Home() {
  return (
    <main className="flex gap-8 p-4">
      <UserDataForm />
      <List />
    </main>
  );
}
