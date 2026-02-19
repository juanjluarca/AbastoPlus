"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductName = void 0;
const string_value_object_1 = require("../../../../shared/domain/value-objects/string-value-object");
class ProductName extends string_value_object_1.StringValueObject {
    constructor(value) {
        if (value.length <= 10) {
            throw new Error("El nombre del producto debe tener más de 10 caracteres");
        }
        super(value);
    }
}
exports.ProductName = ProductName;
//# sourceMappingURL=product-name.js.map