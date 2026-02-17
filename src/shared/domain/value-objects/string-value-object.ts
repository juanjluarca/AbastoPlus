import { ValueObject } from "./value-object";

export class StringValueObject extends ValueObject<string> {
  protected validate(value: string): void {
    if (value === null || value === undefined) {
      throw new Error("El valor no puede ser nulo");
    }

    if (value.trim().length === 0) {
      throw new Error("El valor no puede estar vacío");
    }
  }
}
