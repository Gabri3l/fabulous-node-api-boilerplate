import express from 'express';
import controller from './unicornController';

const router = express.Router();

router.param('id', controller.params);

router.route('/')
  .get(controller.get)
  .post(controller.post);

router.route('/:id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.del);

module.exports = router;
