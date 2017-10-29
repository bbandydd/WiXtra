import Koa from 'koa';
import koaRouter from 'koa-router';
import next from 'next';
import cors from 'koa-cors';
import convert from 'koa-convert';
import routes from './routes';
import configs from './configs';

import mongoose from 'mongoose';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = new Koa();
  const router = new koaRouter();

  const db = mongoose.createConnection(['mongodb://', configs.mongodb.ip, '/', configs.mongodb.dbname].join(''));

  if (db) {
      console.log('mongodb connected successfully');
      global.db = db;
  } else {
      console.log('mongodb connected failed');
  }

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

  server.use(convert(cors(configs.cors)));
  // server apis
  const serverRoutes = require('./server/routes').default;
  server.use(serverRoutes);
  // client apis
  server.use(router.routes());
  server.use(router.allowedMethods());

  server.listen(configs.port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${configs.port}`);
  });
});
