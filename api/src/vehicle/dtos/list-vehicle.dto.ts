import { ListDriverDTO } from "../../driver/dtos/list-driver.dto";
import { BaseDTO } from "../../entity";
import { Vehicle } from "../models";

export class ListVehicleDTO extends BaseDTO<ListVehicleDTO>{

  id: number;
  plate: string;
  model: string;
  type: string;
  capacity: string;
  driver: ListDriverDTO;

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
