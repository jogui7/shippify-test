import { Router } from 'express';
import { DriverVehicleController } from '../controllers/driver-vehicle.controller';
import { DriverVehicleService } from '../services';

export const driverVehicleRouter = Router({ mergeParams: true });

const driverVehicleService = new DriverVehicleService();
const driverVehicleController = new DriverVehicleController(driverVehicleService);

driverVehicleRouter.get('/', (req, res) => driverVehicleController.list(req, res));
