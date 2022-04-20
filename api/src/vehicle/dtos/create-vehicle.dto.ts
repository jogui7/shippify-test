import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Vehicle } from "../models";

export class CreateVehicleDTO {
  @IsNotEmpty()
  @IsNumber()
  driverId: number;

  @IsNotEmpty()
  @IsString()
  plate: string;

  @IsNotEmpty()
  @IsString()
  model: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsString()
  capacity: string;

  static toEntity(dto: CreateVehicleDTO): Vehicle {
    return new Vehicle({
      driverId: dto.driverId,
      plate: dto.plate,
      model: dto.model,
      type: dto.type,
      capacity: dto.capacity,
    })
  }
}
