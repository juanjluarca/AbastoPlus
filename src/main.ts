// import "reflect-metadata";
// import { container } from "./container";
// import { TYPES } from "./types";
// import { DatabaseConnection } from "./shared/domain/database-connection";
// import { SaveProduct } from "./catalog/product/application/use-cases/save-product";
// import { EventBus } from "./shared/domain/event-bus";
// import { ProductCreatedEvent } from "./catalog/product/domain/events/product-created-event";
// import { TranslateProduct } from "./catalog/product/application/use-cases/translate-product";

// async function main() {
//   const databaseConnection = container.get<DatabaseConnection>(
//     TYPES.DatabaseConnection,
//   );
//   await databaseConnection.connect();

//   // Registrar suscriptores ANTES de ejecutar el use case
//   const eventBus = container.get<EventBus>(TYPES.EventBus);
//   const translateProduct = container.get<TranslateProduct>(TranslateProduct);

//   eventBus.on<ProductCreatedEvent>("catalog.product_created", (event) =>
//     translateProduct.execute(event),
//   );

//   eventBus.on<ProductCreatedEvent>("catalog.product_created", async (event) => {
//     console.log(
//       `[NotifyBoss]        Producto creado: ${event.productName} (id: ${event.productId})`,
//     );
//   });

//   eventBus.on<ProductCreatedEvent>("catalog.product_created", async (event) => {
//     console.log(
//       `[SendSmsToCustomers] SMS enviado para producto: ${event.productName}`,
//     );
//   });

//   eventBus.on<ProductCreatedEvent>("catalog.product_created", async (event) => {
//     console.log(`[SendNotification]   Notificación push enviada`);
//   });

//   // Ejecutar el use case
//   const saveProduct = container.get<SaveProduct>(SaveProduct);

//   await saveProduct.execute({
//     id: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
//     name: "Large Bag of Potato Chips",
//     baseUnit: "lb",
//     presentations: [
//       {
//         id: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
//         name: "Presentation 1",
//         type: "bag",
//         netQuantity: 5,
//         unitOfMeasure: "lb",
//       },
//     ],
//   });

//   await databaseConnection.disconnect();
// }

// main();



