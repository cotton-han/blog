import Router from 'koa-router';
import checkLoggedIn from '../../lib/checkLoggedIn';
import * as controller from './posts.controller';

const posts = new Router();

posts.get('/', controller.list);
posts.post('/', checkLoggedIn, controller.write);
posts.get('/:id', controller.getPostById, controller.read);
posts.delete(
  '/:id',
  checkLoggedIn,
  controller.getPostById,
  controller.checkOwnPost,
  controller.remove,
);
posts.patch(
  '/:id',
  checkLoggedIn,
  controller.getPostById,
  controller.checkOwnPost,
  controller.update,
);

export default posts;
