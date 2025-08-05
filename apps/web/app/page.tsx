import { prisma } from "db";

export const dynamic = 'force-dynamic';

export default async function Home() {
  try {
    const data = await prisma.user.findMany();
    return <div>{JSON.stringify(data)}</div>;
  } catch (error) {
    console.error('Database connection failed:', error);
    return <div>Database connection failed</div>;
  }
}
