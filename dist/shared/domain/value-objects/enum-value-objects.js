"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumValueObject = void 0;
const value_object_1 = require("./value-object");
class EnumValueObject extends value_object_1.ValueObject {
    constructor(value, allowedValues) {
        super(value);
        this.allowedValues = allowedValues;
        this.validate(value);
    }
    validate(value) {
        if (!this.allowedValues.includes(value)) {
            throw new Error(`El valor debe ser uno de los siguientes: ${this.allowedValues.join(", ")}`);
        }
    }
}
exports.EnumValueObject = EnumValueObject;
//# sourceMappingURL=enum-value-objects.js.map