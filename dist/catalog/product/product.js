"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const product_id_1 = require("./domain/value-objects/product-id");
const product_name_1 = require("./domain/value-objects/product-name");
const producto_base_unit_1 = require("./domain/value-objects/producto-base-unit");
class Product {
    constructor(id, name, baseUnit) {
        this.id = id;
        this.name = name;
        this.baseUnit = baseUnit;
        this.id = id;
        this.name = name;
        this.baseUnit = baseUnit;
    }
    static build(id, name, baseUnit) {
        return new Product(new product_id_1.ProductId(id), new product_name_1.ProductName(name), new producto_base_unit_1.ProductoBaseUnit(baseUnit));
    }
    // To String
    toString() {
        return `Product [id=${this.id.value}, name=${this.name.value}, baseUnit=${this.baseUnit.value}]`;
    }
}
exports.Product = Product;
//# sourceMappingURL=product.js.map