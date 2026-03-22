import { Container } from 'inversify';
import { TYPES } from './types';
import { ProductRepository } from './catalog/product/application/product-repository';
import { MongoProductRepository } from './catalog/product/infrastructure/mongo-product-repository';
import { DatabaseConnection } from './shared/domain/database-connection';
import { MongoDatabaseConnection } from './catalog/product/infrastructure/mongo-database-connection';
import { SaveProduct } from './catalog/product/application/use-cases/save-product';
import { TranslateProduct } from './catalog/product/application/use-cases/translate-product';
import { TranslationService } from './catalog/product/application/ports/translation-service';
import { DeepLTranslationService } from './catalog/product/infrastructure/deepl-translator';
import { EventBus } from './shared/domain/event-bus';                        
import { InMemoryEventBus } from './shared/infrastructure/in-memory-event-bus'; 

const container = new Container();

container.bind<ProductRepository>(TYPES.ProductRepository).to(MongoProductRepository);
container.bind<DatabaseConnection>(TYPES.DatabaseConnection).to(MongoDatabaseConnection);
container.bind<TranslationService>(TYPES.TranslationService).to(DeepLTranslationService).inSingletonScope();
container.bind<EventBus>(TYPES.EventBus).to(InMemoryEventBus).inSingletonScope();
container.bind<SaveProduct>(SaveProduct).toSelf();
container.bind<TranslateProduct>(TranslateProduct).toSelf();

export { container };