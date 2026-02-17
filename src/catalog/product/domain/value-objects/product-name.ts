import { StringValueObject } from "../../../../shared/domain/value-objects/string-value-object";

export class ProductName extends StringValueObject {
    constructor(value: string) {
        super(value);
    }
}