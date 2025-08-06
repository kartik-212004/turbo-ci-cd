import { prisma } from "db";

interface User {
  name: string;
  age: number;
  id: number;
}

export const dynamic = "force-dynamic";

export default async function Home() {
  try {
    const users: User[] = await prisma.user.findMany();

    return (
      <div>
        {users.map((user) => (
          <div key={user.id}>
            {user.name} || {user.age} || {user.id}
          </div>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Database connection failed:", error);
    return <div>Database connection failed</div>;
  }
}
