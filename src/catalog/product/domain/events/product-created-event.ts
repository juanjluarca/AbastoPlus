import { DomainEvent } from '../../../../shared/domain/domain-event';

export class ProductCreatedEvent implements DomainEvent {
  readonly eventName = 'catalog.product_created';
  readonly occurredOn = new Date();

  constructor(
    public readonly productId: string,
    public readonly productName: string,
  ) {}
}