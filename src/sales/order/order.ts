import { CustomerId } from "../../customers/customer/domain/value-objects/customer-id";

export const OrderStatus = {
  Draft: "Draft",
} as const;

export type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];

export interface OrderItem {}

export class Order {
  private constructor(
    public readonly customerId: CustomerId,
    public readonly status: OrderStatus,
    public readonly items: OrderItem[],
  ) {}

  public static create(customerId: CustomerId): Order {
    return new Order(customerId, "Draft", []);
  }
}
