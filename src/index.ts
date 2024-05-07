import { Hono } from "hono";

const app = new Hono().basePath("/api/v1");

app.post("/user/signup", (c) => {
  return c.text("signup route");
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
