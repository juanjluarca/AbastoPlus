// Number VO
import { IntValueObject } from "../../../../../shared/domain/value-objects/int-value-object";

export class PresentationNetQuantity extends IntValueObject {
    constructor(value: number) {
        super(value);
    }
}