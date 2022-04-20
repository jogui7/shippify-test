import { getRepository } from "typeorm";
import { Vehicle } from "../../vehicle/models";

export class DriverVehicleService {
  async list(driverId: number) {
    const repository = getRepository(Vehicle);

    return repository.find({
      relations: ['driver', 'driver.company'],
      where: { driver: { id: driverId } }
    })
  }
}
