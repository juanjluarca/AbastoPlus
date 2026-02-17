import { ProductId } from "./domain/value-objects/product-id";
import { ProductName } from "./domain/value-objects/product-name";
import { ProductoBaseUnit } from "./domain/value-objects/producto-base-unit";

export class Product {
    constructor(
        public readonly id: ProductId,
        public readonly name: ProductName,
        public readonly baseUnit: ProductoBaseUnit
    ) {
        this.id = id;
        this.name = name;
        this.baseUnit = baseUnit;
    }
}