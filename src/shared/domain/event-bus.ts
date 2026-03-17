import { DomainEvent } from './domain-event';

export type EventHandler<T extends DomainEvent = DomainEvent> = (
  event: T
) => void | Promise<void>;

export interface EventBus {
  emit<T extends DomainEvent>(event: T): Promise<void>;
  on<T extends DomainEvent>(eventName: string, handler: EventHandler<T>): void;
}