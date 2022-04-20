import { Router } from 'express';

export const driverRouter = Router();

driverRouter.get('', (req, res) => res.status(200).send('ok'));
