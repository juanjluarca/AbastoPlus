import { Order } from "../order";
import { OrderId } from "../domain/value-objects/order-id";

export interface OrderRepository {
  save(order: Order): Promise<void>;
  findById(id: OrderId): Promise<Order | null>;
}
