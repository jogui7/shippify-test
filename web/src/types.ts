export type Driver = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

export type Vehicle = {
  id: number;
  plate: string;
  model: string;
  type: string;
  capacity: string;
  driver: Driver;
};
