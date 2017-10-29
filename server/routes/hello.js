import Router from 'koa-router';
import KoaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';

const router = Router({
  prefix: '/api'
});

const schemas = require('../schemas').default().HelloSchema;

router
  .post('/hello', KoaBody(), graphqlKoa({ schema: schemas }))
  .get('/hello', graphqlKoa({ schema: schemas }))
  .get('/Ihello', graphiqlKoa({ endpointURL: '/api/hello' }));

export default router;
