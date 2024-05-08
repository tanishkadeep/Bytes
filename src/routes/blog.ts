import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.post("/", (c) => {
  return c.text("blog");
});

blogRouter.put("/", (c) => {
  return c.text("blog");
});

blogRouter.get("/:id", (c) => {
  const id = c.req.param("id");
  console.log(id);
  return c.text("blog");
});

blogRouter.get("/bulk", (c) => {
  return c.text("all blogs");
});
