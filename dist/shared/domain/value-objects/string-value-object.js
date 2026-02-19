"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringValueObject = void 0;
const value_object_1 = require("./value-object");
class StringValueObject extends value_object_1.ValueObject {
    validate(value) {
        if (value === null || value === undefined) {
            throw new Error("El valor no puede ser nulo");
        }
        if (value.trim().length === 0) {
            throw new Error("El valor no puede estar vacío");
        }
    }
}
exports.StringValueObject = StringValueObject;
//# sourceMappingURL=string-value-object.js.map