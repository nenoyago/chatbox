import { Router } from 'express';

import { SettingsController } from '../controllers/SettingsController';

const SettingsRouter = Router();

const settingsController = new SettingsController();

SettingsRouter.post('/settings', settingsController.create);
SettingsRouter.get('/settings/:username', settingsController.findByUserName);
SettingsRouter.put('/settings/:username', settingsController.update);

export { SettingsRouter };