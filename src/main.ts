import { Product } from "./catalog/product/product";
import { connectToDatabase, disconnectFromDatabase } from "./catalog/product/infrastructure/mongo-db";
import { MongoProductRepository } from "./catalog/product/infrastructure/mongo-product-repository";


async function main() {
    await connectToDatabase();
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

    const repository = new MongoProductRepository();
    await repository.save(product);

    await disconnectFromDatabase();
}

main();
