// Probar la creación de producto
import { Product } from "./catalog/product/product";
try {
    const product = Product.build("123e4567-e89b-12d3-a456-426614174000", "Producto de prueba", "lb");
    console.log(product.toString());

} catch(error) {
    console.error("Error al crear el producto:", error);
}