import { Request, Response } from "express";
import { ListDriverDTO } from "../dtos";
import { DriverService } from "../services";

export class DriverController {
  constructor(
    private readonly driverService: DriverService,
  ) {}

  async list(request: Request, response: Response) {

    const vehicles = await this.driverService.list();

    return response.status(200).send(vehicles.map(ListDriverDTO.toDTO));
  }
}
