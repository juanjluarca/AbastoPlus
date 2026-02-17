import { ValueObject } from "./value-object";

export class IntValueObject extends ValueObject<number> {
  protected validate(value: number): void {
    if (!Number.isInteger(value)) {
      throw new Error("El valor debe ser un número entero");
    }
  }
}
