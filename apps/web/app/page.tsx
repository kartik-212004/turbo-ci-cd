import { prisma } from "db";

export const dynamic = "force-dynamic";

export default async function Home() {
  try {
    const users = await prisma.user.findMany();

    return (
      <div>
        {users.map((user, i) => (
          <div key={i}>
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
