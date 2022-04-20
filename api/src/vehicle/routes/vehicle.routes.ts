import { Router } from 'express';
import { dtoValidationMiddleware } from '../../middlewares';
import { VehicleController } from '../controllers';
import { CreateVehicleDTO, UpdateVehicleDTO } from '../dtos';
import { VehicleService } from '../services';

export const vehicleRouter = Router();

const vehicleService = new VehicleService();
const vehicleController = new VehicleController(vehicleService);

vehicleRouter.post('/', dtoValidationMiddleware(CreateVehicleDTO), (req, res) => vehicleController.create(req, res));
vehicleRouter.patch('/:id', dtoValidationMiddleware(UpdateVehicleDTO), (req, res) => vehicleController.update(req, res));
vehicleRouter.delete('/:id', (req, res) => vehicleController.delete(req, res));
