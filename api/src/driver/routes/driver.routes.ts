import { Router } from 'express';
import { DriverController } from '../controllers';
import { DriverService } from '../services';
import { driverVehicleRouter } from './driver-vehicles.routes';

export const driverRouter = Router();

const driverService = new DriverService();
const driverController = new DriverController(driverService);

driverRouter.get('/', (req, res) => driverController.list(req, res));

driverRouter.use('/:id/vehicle', driverVehicleRouter);
