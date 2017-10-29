const koa = require('koa');
const Router = require('koa-router');
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// const handler = routes.getRequestHandler(app);

app.prepare()
.then(() => {
  const server = new koa();
  const router = new Router();

  router.get('/api/test', async ctx => {
    ctx.body = {
      test: '1'
    };
  });

  router.get('*', async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    // Koa doesn't seems to set the default statusCode.
    // So, this middleware does that
    ctx.res.statusCode = 200;
    await next();
  })

  server.use(router.routes());
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
