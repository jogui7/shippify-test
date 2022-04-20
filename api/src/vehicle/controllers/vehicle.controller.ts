import { Request, Response } from 'express';
import { VehicleService } from '../services';

export class VehicleController {
  constructor(
    private readonly vehicleService: VehicleService
  ) {}


  async create(request: Request, response: Response) {
    const saved = await this.vehicleService.create(request.body);

    return response.status(200).send(saved);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;

    const result = await this.vehicleService.update(Number(id), request.body);

    if(result.affected === 0) {
      return response.status(400).send({ error: 400, message: 'Could not update vehicle' })
    }

    return response.status(200).send();
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;

    const result = await this.vehicleService.delete(Number(id));

    if(result.affected === 0) {
      return response.status(400).send({ error: 400, message: 'Could not delete vehicle' })
    }

    return response.status(200).send();
  }
}
