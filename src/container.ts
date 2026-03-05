import { Container } from 'inversify';
import { TYPES } from './types';
import { ProductRepository } from './catalog/product/application/product-repository';
import { MongoProductRepository } from './catalog/product/infrastructure/mongo-product-repository';
import { DatabaseConnection } from './shared/domain/database-connection';
import { MongoDatabaseConnection } from './catalog/product/infrastructure/mongo-database-connection';
import { SaveProduct } from './catalog/product/application/use-cases/save-product';

const container = new Container();

container.bind<ProductRepository>(TYPES.ProductRepository).to(MongoProductRepository);
container.bind<DatabaseConnection>(TYPES.DatabaseConnection).to(MongoDatabaseConnection);
container.bind<SaveProduct>(SaveProduct).toSelf();

export { container };