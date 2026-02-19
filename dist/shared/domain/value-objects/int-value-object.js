"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntValueObject = void 0;
const value_object_1 = require("./value-object");
class IntValueObject extends value_object_1.ValueObject {
    validate(value) {
        if (!Number.isInteger(value)) {
            throw new Error("El valor debe ser un número entero");
        }
    }
}
exports.IntValueObject = IntValueObject;
//# sourceMappingURL=int-value-object.js.map