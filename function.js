import { Application, Router, send } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

app.use(async (ctx) => {
  await send(ctx, ctx.request.url.pathname, {
    root: `${Deno.cwd()}/static`,
    index: "index.html",
  });
});

app.use(router.allowedMethods());

app.addEventListener(
  "listen",
  (e) => console.log("Listening on http://localhost:8080"),
);

await app.listen({ port: 8080 });
