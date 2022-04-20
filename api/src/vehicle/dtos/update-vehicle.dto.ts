import { IsNumber, IsOptional, IsString } from "class-validator";
import { BaseDTO } from "../../entity";
import { Vehicle } from "../models";

export class UpdateVehicleDTO extends BaseDTO<UpdateVehicleDTO> {

  @IsNumber()
  @IsOptional()
  driverId: number;

  @IsString()
  @IsOptional()
  plate: string;

  @IsString()
  @IsOptional()
  model: string;

  @IsString()
  @IsOptional()
  type: string;

  @IsString()
  @IsOptional()
  capacity: string;

  static toEntity(dto: UpdateVehicleDTO): Vehicle {
    return new Vehicle({
      driverId: dto.driverId,
      plate: dto.plate,
      model: dto.model,
      type: dto.type,
      capacity: dto.capacity,
    })
  }
}
