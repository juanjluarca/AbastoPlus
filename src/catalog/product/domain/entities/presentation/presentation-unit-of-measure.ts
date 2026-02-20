// Enum VO
import { EnumValueObject } from "../../../../../shared/domain/value-objects/enum-value-objects";

export class PresentationUnitOfMeasure extends EnumValueObject {
    private static allowedUnits = ["kg", "g", "lb", "ml", "lt", "unidad"];

    constructor(value: string) {
        super(value, PresentationUnitOfMeasure.allowedUnits);
    }
}