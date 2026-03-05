import express from 'express';

const router = express.Router();

router.get('/', );

router.post('/', );

router
  .route('/:id')
  .get()
  .put()
  .delete();

export default router;