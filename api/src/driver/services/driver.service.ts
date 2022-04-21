import { getRepository } from "typeorm";
import { Driver } from "../models";

export class DriverService {
  async list() {
    const repository = getRepository(Driver);

    return repository.find();
  }
}
