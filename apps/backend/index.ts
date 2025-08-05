import express from "express";
import { prisma } from "db";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});
app.post("/", async (req, res) => {
  // Example: await prisma.name.findMany()
  const { name, age } = req.body;
  const create = await prisma.user.create({
    data: {
      name: name,
      age: age,
    },
  });

  res.send(`User Created Successfully ${create.name}`);
});

app.listen(3000);
