import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@tanishkadeep/bytes-common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const jwt = c.req.header("Authorization");

  if (!jwt) {
    c.status(401);
    return c.text("You are not logged in");
  }

  const token = jwt.split(" ")[1];

  try {
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload) {
      c.status(401);
      return c.text("authorization failed");
    }
    c.set("userId", payload.id);
  } catch (e) {
    c.status(403);
    return c.json({ error: e });
  }

  await next();
});

blogRouter.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = createBlogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.text("Incorrect Inputs");
  }

  const userId = c.get("userId");

  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId,
    },
  });
  return c.text(post.id);
});

blogRouter.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const { success } = updateBlogInput.safeParse(body);

  if (!success) {
    c.status(411);
    return c.text("Incorrect Inputs");
  }

  try {
    const post = await prisma.post.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });

    return c.text(post.id);
  } catch (e) {
    c.json({ error: e });
  }
});

blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const posts = await prisma.post.findMany({
      select: {
        content: true,
        title: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!posts) return c.text("No blogs");
    return c.json({ posts });
  } catch (e) {
    c.status(400);
    return c.text("error while fetching blogs: " + e);
  }
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  console.log(id);

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const post = await prisma.post.findFirst({
      where: {
        id,
      },
      select: {
        title: true,
        content: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!post) return c.text("No blog");
    return c.json({ post });
  } catch (e) {
    c.status(400);
    return c.text("error while fetching blogs: " + e);
  }
});
