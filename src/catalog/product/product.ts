import { ProductId } from "./domain/value-objects/product-id";
import { ProductName } from "./domain/value-objects/product-name";
import { ProductoBaseUnit } from "./domain/value-objects/producto-base-unit";
import { PresentationList } from "./domain/entities/presentation/presentation-list";
import { Presentation } from "./domain/entities/presentation";

// Interface para definir la estructura que tendrá la presentación
interface PresentationData {
    id: string;
    name: string;
    type: string;
    netQuantity: number;
    unitOfMeasure: string;
}


export class Product {
    constructor(
        public readonly id: ProductId,
        public readonly name: ProductName,
        public readonly baseUnit: ProductoBaseUnit,
        public readonly presentations: PresentationList
    ) {
        this.id = id;
        this.name = name;
        this.baseUnit = baseUnit;
        this.presentations = presentations;
    }

    public static build(id: string, name: string, baseUnit: string, presentationsData: Array<PresentationData>): Product {
        const presentations: Presentation[] = presentationsData.map(p =>
            p.unitOfMeasure === baseUnit ? 
            Presentation.build(p.id, p.name, p.type, p.netQuantity, p.unitOfMeasure)
                : (() => { throw new Error(`La unidad de medida de la presentación (${p.unitOfMeasure}) no coincide con la unidad base del producto (${baseUnit})`); })()
        );

        return new Product(
            new ProductId(id),
            new ProductName(name),
            new ProductoBaseUnit(baseUnit),
            PresentationList.build(presentations)
        );
    }

    // Para imprimir el producto de forma legible
    public toString(): string {
        return `Product { id: ${this.id.value}, name: ${this.name.value}, baseUnit: ${this.baseUnit.value} }`;
    }
}