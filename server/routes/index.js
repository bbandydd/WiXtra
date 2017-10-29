import compose from 'koa-compose';
import helloRouter from './hello';

export default compose([
  helloRouter.routes(),
]);
