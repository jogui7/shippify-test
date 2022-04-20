import { Request, Response } from "express";
import { ListVehicleDTO } from "../../vehicle/dtos/list-vehicle.dto";
import { DriverVehicleService } from "../services";

export class DriverVehicleController {
  constructor(
    private readonly driverVehicleService: DriverVehicleService,
  ) {}

  async list(request: Request, response: Response) {
    const { id } = request.params;

    const vehicles = await this.driverVehicleService.list(Number(id));

    return response.status(200).send(vehicles.map(ListVehicleDTO.toDTO));
  }
}
