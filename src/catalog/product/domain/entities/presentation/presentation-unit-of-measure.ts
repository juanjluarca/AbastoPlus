// Enum VO
import { EnumValueObject } from "../../../../../shared/domain/value-objects/enum-value-objects";

export class PresentationUnitOfMeasure extends EnumValueObject {
    private static allowedUnits = ["bag", "sack", "box", "can", "jar", "bottle"];

    constructor(value: string) {
        super(value, PresentationUnitOfMeasure.allowedUnits);
    }
}