import express from 'express';
import * as usersController from '../controllers/usersController';
import {validateCreateUser, validateUUId} from '../middleware/errorHandler'

const router = express.Router();

router.get('/', usersController.getAllUsers);

router.post('/', validateCreateUser, usersController.createUser);

router
  .route('/:id')
  .get(usersController.getUserById)
  .put(validateUUId, usersController.updateUser)
  .delete(validateUUId, usersController.deleteUser);

export default router;


