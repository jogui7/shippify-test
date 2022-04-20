import { Router } from 'express';

export const vehicleRouter = Router();

vehicleRouter.get('', (req, res) => res.status(200).send('ok'));
