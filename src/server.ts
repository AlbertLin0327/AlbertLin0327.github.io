import { serve } from "bun";
import index from "../index.html";
import about from "../about.html";
import projects from "../projects.html";
import blog from "../blog.html";

const server = serve({
  routes: {
    "/": index,
    "/about": about,
    "/projects": projects,
    "/blog": blog,

    "/api/hello": {
      async GET(req) {
        return Response.json({
          message: "Hello, world!",
          method: "GET",
        });
      },
      async PUT(req) {
        return Response.json({
          message: "Hello, world!",
          method: "PUT",
        });
      },
    },

    "/api/hello/:name": async (req) => {
      const name = req.params.name;
      return Response.json({
        message: `Hello, ${name}!`,
      });
    },
  },

  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);