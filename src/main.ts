import { Product } from "./catalog/product/product";

try {
    const product = Product.build(
        "123e4567-e89b-12d3-a456-426614174000", // ID debe ser UUID
        "Agua Mineral",
        "ml",
        [
            { id: "pres-001", name: "Botella 500ml", type: "bottle", netQuantity: 500, unitOfMeasure: "ml" },
            { id: "pres-002", name: "Botella 1000ml",   type: "bottle", netQuantity: 1000, unitOfMeasure: "ml" },
            { id: "pres-003", name: "Botella 2000ml",   type: "bottle", netQuantity: 2000, unitOfMeasure: "ml" },
        ]
    );

    console.log("Producto creado correctamente:");
    console.log(product.toString());
    console.log("Presentaciones:");
    product.presentations.presentations.forEach(p => {
        console.log(`  - [${p.id.value}] ${p.name.value} | ${p.type.value} | ${p.netQuantity.value} ${p.unitOfMeasure.value}`);
    });
} catch (error) {
    console.error("Error inesperado:", error);
}

