import { RequestHandler } from "express";
import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";

export function dtoValidationMiddleware(type: any, skipMissingProperties = false): RequestHandler {

  return (req, res, next) => {
    const dtoObj = plainToInstance(type, req.body);
    validate(dtoObj, { skipMissingProperties }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const dtoErrors = errors.map((error: ValidationError) =>
            (Object as any).values(error.constraints)).join(", ");
          next(res.status(400).send({ error: 400, message:  dtoErrors}));
        } else {
          req.body = dtoObj;
          next();
        }
      }
    );
  };
}
