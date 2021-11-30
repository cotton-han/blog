import Router from 'koa-router';
import * as controller from './posts.controller';

const posts = new Router();

posts.get('/', controller.list);
posts.post('/', controller.write);
posts.get('/:id', controller.checkObjectId, controller.read);
posts.delete('/:id', controller.checkObjectId, controller.remove);
posts.patch('/:id', controller.checkObjectId, controller.update);

export default posts;
