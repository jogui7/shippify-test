import { Router } from 'express';
import { driverVehicleRouter } from './driver-vehicles.routes';

export const driverRouter = Router();

driverRouter.use('/:id/vehicle', driverVehicleRouter);
