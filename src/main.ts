import { connectToDatabase, disconnectFromDatabase } from "./catalog/product/infrastructure/mongo-db";
import { MongoProductRepository } from "./catalog/product/infrastructure/mongo-product-repository";
import { SaveProduct } from "./catalog/product/application/use-cases/save-product";

async function main() {
    await connectToDatabase();
    const productRepository = new MongoProductRepository();
    const saveProduct = new SaveProduct(productRepository);
    await saveProduct.execute({
        id: "1",
        name: "Product 1 - more than 10 words",
        baseUnit: "kg",
        presentations: [
            {
                id: "1",
                name: "Presentation 1",
                type: "bag",
                netQuantity: 1,
                unitOfMeasure: "kg"
            },
            {
                id: "2",
                name: "Presentation 2",
                type: "bag",
                netQuantity: 2,
                unitOfMeasure: "kg"
            }
        ]
    });
    await disconnectFromDatabase();
}

main();
