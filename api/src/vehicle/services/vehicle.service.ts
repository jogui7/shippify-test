import { getRepository } from "typeorm";
import { CreateVehicleDTO, UpdateVehicleDTO } from "../dtos";
import { Vehicle } from "../models";

export class VehicleService {

  async create(dto: CreateVehicleDTO) {
    const repository = getRepository(Vehicle);

    return repository.save(CreateVehicleDTO.toEntity(dto));
  }

  async update(id: number, dto: UpdateVehicleDTO) {
    const repository = getRepository(Vehicle);

    return repository.update({ id }, dto);
  }

  async delete(id: number) {
    const repository = getRepository(Vehicle);

    return repository.delete({ id });
  }
}
