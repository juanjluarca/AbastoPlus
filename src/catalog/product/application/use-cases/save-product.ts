// Obtiene como atributo un ProductRepository, tiene el método execute que recibe primitivos de un producto
// ProductRepository recibe un Product
import { inject, injectable } from 'inversify';
import { ProductRepository } from "../product-repository";
import { Product } from "../../product";
import { TYPES } from '../../../../types';

@injectable()
export class SaveProduct {
    constructor(@inject(TYPES.ProductRepository) private productRepository: ProductRepository) {
        this.productRepository = productRepository;
    }
    
    async execute(data: {
        id: string;
        name: string;
        baseUnit: string;
        presentations: {
            id: string;
            name: string;
            type: string;
            netQuantity: number;
            unitOfMeasure: string;
        }[];
    }): Promise<void> {
        const product = Product.build(data.id, data.name, data.baseUnit, data.presentations);
        await this.productRepository.save(product);
    }
}