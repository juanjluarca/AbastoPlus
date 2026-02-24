import { Product } from "../product";

// Interface para repositorio de producto en BD (puede ser MongoDB, SQL, etc.)
export interface ProductRepository {
    save(data: Product): Promise<void>;
}