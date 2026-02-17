import { StringValueObject } from "./string-value-object";
import { validate as uuidValidate } from "uuid";
export class IdentifierValueObject extends StringValueObject {
  protected validate(value: string): void {
    super.validate(value);
    
    if (!uuidValidate(value)) {
      throw new Error("El identificador debe ser un UUID válido");
    }
  }
}
