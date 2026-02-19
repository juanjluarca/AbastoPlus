"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoBaseUnit = void 0;
const enum_value_objects_1 = require("../../../../shared/domain/value-objects/enum-value-objects");
class ProductoBaseUnit extends enum_value_objects_1.EnumValueObject {
    constructor(value) {
        super(value, ProductoBaseUnit.allowedUnits);
    }
}
exports.ProductoBaseUnit = ProductoBaseUnit;
ProductoBaseUnit.allowedUnits = ["kg", "g", "lb", "ml", "lt", "unidad"];
//# sourceMappingURL=producto-base-unit.js.map