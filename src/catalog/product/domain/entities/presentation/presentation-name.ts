// String VO
import { StringValueObject } from "../../../../../shared/domain/value-objects/string-value-object";

export class PresentationName extends StringValueObject {
    constructor(value: string) {
        if (value.length <= 10) {
            throw new Error("El nombre de la presentación debe tener más de 10 caracteres");
        }
        super(value);
    }
}