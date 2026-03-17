import { injectable } from 'inversify';
import { DomainEvent } from '../domain/domain-event';
import { EventBus, EventHandler } from '../domain/event-bus';

@injectable()
export class InMemoryEventBus implements EventBus {
  private readonly subscribers = new Map<string, EventHandler[]>();

  on<T extends DomainEvent>(eventName: string, handler: EventHandler<T>): void {
    const existing = this.subscribers.get(eventName) ?? [];
    this.subscribers.set(eventName, [...existing, handler as EventHandler]);
  }

  async emit<T extends DomainEvent>(event: T): Promise<void> {
    const handlers = this.subscribers.get(event.eventName) ?? [];
    await Promise.all(handlers.map((h) => h(event)));
  }
}