import 'reflect-metadata';
import { container } from './container';
import { TYPES } from './types';
import { DatabaseConnection } from './shared/domain/database-connection';
import { SaveProduct } from './catalog/product/application/use-cases/save-product';

async function main() {
    const databaseConnection = container.get<DatabaseConnection>(TYPES.DatabaseConnection);
    await databaseConnection.connect();

    const saveProduct = container.get<SaveProduct>(SaveProduct);

    await saveProduct.execute({
        id: "1",
        name: "Large Bag of Potatoe Chips",
        baseUnit: "lb",
        presentations: [
            {
                id: "1",
                name: "Presentation 1",
                type: "bag",
                netQuantity: 5,
                unitOfMeasure: "lb"
            },
            {
                id: "2",
                name: "Presentation 2",
                type: "box",
                netQuantity: 20,
                unitOfMeasure: "lb"
            }
        ]
    });

    await databaseConnection.disconnect();
}

main();
