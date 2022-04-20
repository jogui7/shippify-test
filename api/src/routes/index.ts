import { Router } from 'express';
import { driverRouter } from '../driver/routes';
import { vehicleRouter } from '../vehicle/routes/vehicle.routes';

const routes = Router();

routes.use('/driver', driverRouter);
routes.use('/vehicle', vehicleRouter);

export default routes;
