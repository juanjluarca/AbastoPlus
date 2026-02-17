import { EnumValueObject } from "../../../../shared/domain/value-objects/enum-value-objects";

export class ProductoBaseUnit extends EnumValueObject {
    private static allowedUnits = ["kg", "g", "l"];

    constructor(value: string) {
        super(value, ProductoBaseUnit.allowedUnits);
    }
}