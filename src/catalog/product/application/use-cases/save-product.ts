import { inject, injectable } from 'inversify';
import { ProductRepository } from '../product-repository';
import { Product } from '../../product';
import { TYPES } from '../../../../types';
import { TranslationService } from '../ports/translation-service';
import { EventBus } from '../../../../shared/domain/event-bus';           
import { ProductCreatedEvent } from '../../domain/events/product-created-event'; 

@injectable()
export class SaveProduct {
  constructor(
    @inject(TYPES.ProductRepository)
    private productRepository: ProductRepository,
    @inject(TYPES.TranslationService)
    private translationService: TranslationService,
    @inject(TYPES.EventBus)                       
    private eventBus: EventBus,
  ) {}

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

    // Emitir evento después de guardar
    await this.eventBus.emit(new ProductCreatedEvent(product.id.value, product.name.value));
  }
}