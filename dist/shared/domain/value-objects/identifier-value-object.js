"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentifierValueObject = void 0;
const string_value_object_1 = require("./string-value-object");
const uuid_1 = require("uuid");
class IdentifierValueObject extends string_value_object_1.StringValueObject {
    validate(value) {
        super.validate(value);
        if (!(0, uuid_1.validate)(value)) {
            throw new Error("El identificador debe ser un UUID válido");
        }
    }
}
exports.IdentifierValueObject = IdentifierValueObject;
//# sourceMappingURL=identifier-value-object.js.map