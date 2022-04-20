import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Driver } from "../../driver/models";
import { BaseDTO } from "../../entity";
import { Vehicle } from "../models";

export class ListVehicleDTO extends BaseDTO<ListVehicleDTO>{

  id: number;
  plate: string;
  model: string;
  type: string;
  capacity: string;
  driver: Driver;

  static toDTO(entity: Vehicle): ListVehicleDTO {
    return new ListVehicleDTO({
      id: entity.id,
      plate: entity.plate,
      model: entity.model,
      type: entity.type,
      capacity: entity.capacity,
      driver: entity.driver,
    })
  }
}
