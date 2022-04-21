import { Driver } from "../../driver/models";
import { BaseDTO } from "../../entity";

export class ListDriverDTO extends BaseDTO<ListDriverDTO>{
  id: number;
  city: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatarUrl: string;
  status: string;

  static toDTO(entity: Driver): ListDriverDTO {
    return new ListDriverDTO({
      id: entity.id,
      city: entity.city,
      firstName: entity.firstName,
      lastName: entity.lastName,
      email: entity.email,
      phone: entity.phone,
      avatarUrl: entity.avatarUrl,
      status: entity.status,
    })
  }
}
