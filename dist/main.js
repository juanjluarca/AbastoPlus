"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Probar la creación de producto
const product_1 = require("./catalog/product/product");
try {
    const product = product_1.Product.build("123e4567-e89b-12d3-a456-426614174000", "Producto de prueba", "onza");
    console.log(product.toString());
}
catch (error) {
    console.error("Error al crear el producto:", error);
}
//# sourceMappingURL=main.js.map