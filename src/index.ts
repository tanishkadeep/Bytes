import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>().basePath("/api/v1");

app.post("/user/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();

  try {
    await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });
    return c.text("signup successful");
  } catch (err) {
    c.status(403);
    return c.text("signup failed");
  }
});

app.post("/user/signin", (c) => {
  return c.text("signin route");
});

app.post("/blog", (c) => {
  return c.text("blog");
});

app.put("/blog", (c) => {
  return c.text("blog");
});

app.get("/blog/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);
  return c.text("blog");
});

app.get("/blog/bulk", (c) => {
  return c.text("all blogs");
});

export default app;
