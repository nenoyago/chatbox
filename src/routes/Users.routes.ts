import { Router } from 'express';

import { UsersController } from '../controllers/UsersController';

const UsersRouter = Router();

const usersController = new UsersController();

UsersRouter.post('/users', usersController.create);

export { UsersRouter };