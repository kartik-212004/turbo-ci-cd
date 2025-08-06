import { prisma } from "db";
import { user } from "@prisma/client"; 

export const dynamic = "force-dynamic";

export default async function Home() {
  try {
    const users: user[] = await prisma.user.findMany(); 

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
