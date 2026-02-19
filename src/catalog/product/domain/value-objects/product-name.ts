import { StringValueObject } from "../../../../shared/domain/value-objects/string-value-object";

export class ProductName extends StringValueObject {
    constructor(value: string) {
        if (value.length <= 10) {
            throw new Error("El nombre del producto debe tener más de 10 caracteres");
        }
        super(value);
    }
}