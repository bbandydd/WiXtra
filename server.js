import Koa from 'koa';
import Router from 'koa-router';
import next from 'next';
import routes from './routes';
import configs from './configs';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
// const handler = routes.getRequestHandler(app);

app.prepare()
.then(() => {
  const server = new Koa();
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
  server.listen(configs.port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${configs.port}`);
  });
});
