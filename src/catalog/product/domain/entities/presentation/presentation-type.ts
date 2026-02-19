// Enum VO
import { EnumValueObject } from "../../../../../shared/domain/value-objects/enum-value-objects";

export class PresentationType extends EnumValueObject {
    private static allowedUnits = ["bag", "sack", "box", "can", "jar", "bottle"];

    constructor(value: string) {
        super(value, PresentationType.allowedUnits);
    }
}