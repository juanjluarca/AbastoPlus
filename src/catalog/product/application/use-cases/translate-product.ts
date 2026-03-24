import { inject, injectable } from "inversify";
import { TYPES } from "../../../../types";
import { ProductRepository } from "../product-repository";
import { TranslationService } from "../ports/translation-service";
import { ProductCreatedEvent } from "../../domain/events/product-created-event";

@injectable()
export class TranslateProduct {
  constructor(
    @inject(TYPES.ProductRepository)
    private productRepository: ProductRepository,
    @inject(TYPES.TranslationService)
    private translationService: TranslationService,
  ) {}

  async execute(event: ProductCreatedEvent): Promise<void> {
    const product = await this.productRepository.findById(event.productId);

    if (!product) {
      console.warn(
        `[TranslateProduct] Producto no encontrado: ${event.productId}`,
      );
      return;
    }

    const translatedName = await this.translationService.translate(
      product.name.value,
      "es",
    );

    // Sólo actualiza si la traducción realmente cambió el nombre
    if (translatedName === product.name.value) return;

    const updated = product.withName(translatedName); // ver punto 4
    await this.productRepository.update(updated);

    console.log(
      `[TranslateProduct] "${product.name.value}" → "${translatedName}"`,
    );
  }
}
