import { ProductId } from "./domain/value-objects/product-id";
import { ProductName } from "./domain/value-objects/product-name";
import { ProductoBaseUnit } from "./domain/value-objects/producto-base-unit";

export class Product {
    constructor(
        private readonly id: ProductId,
        private readonly name: ProductName,
        private readonly baseUnit: ProductoBaseUnit
    ) {
        this.id = id;
        this.name = name;
        this.baseUnit = baseUnit;
    }

    public static build (id: string, name: string, baseUnit: string): Product {
        return new Product(
            new ProductId(id),
            new ProductName(name),
            new ProductoBaseUnit(baseUnit)
        );
    }

    // To String
    public toString(): string {
        return `Product [id=${this.id.value}, name=${this.name.value}, baseUnit=${this.baseUnit.value}]`;
    }
}