import { Router } from 'express';

import { MessagesController } from '../controllers/MessagesController';

const MessagesRouter = Router();

const messagesController = new MessagesController();

MessagesRouter.post('/messages', messagesController.create);
MessagesRouter.get('/messages/:id', messagesController.showByUser);

export { MessagesRouter };