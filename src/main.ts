// Probar la creación de un producto
import { Product } from "./catalog/product/product";

const product = Product.build(
    "123e4567-e89b-12d3-a456-426614174000",
    "Producto de prueba con un nombre suficientemente largo",
    "unidad"
);

console.log(product.toString());