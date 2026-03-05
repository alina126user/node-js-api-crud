import express from 'express';
import * as usersController from '../controllers/usersController';
import { validateCreateUser, validateUserId } from '../middleware/errorHandler'

const router = express.Router();

router.get('/', usersController.getAllUsers);

router.post('/', validateCreateUser, usersController.createUser);

router
  .route('/:id')
  .get(usersController.getUserById)
  .put(validateUserId, usersController.updateUser)
  .delete(validateUserId, usersController.deleteUser);

export default router;


