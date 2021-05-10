import { Router } from 'express';

import { UsersRouter } from './Users.routes';
import { MessagesRouter } from './Messages.routes';
import { SettingsRouter } from './Settings.routes';

const routes = Router();

routes.use('/', UsersRouter);
routes.use('/', MessagesRouter);
routes.use('/', SettingsRouter);

export { routes };