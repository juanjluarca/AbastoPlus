import { Order } from "./order";
import { CustomerId } from "../../customers/customer/domain/value-objects/customer-id";

export class OrderMother {
  private static defaultCustomerId(): CustomerId {
    return CustomerId.from("cust-123");
  }

  static draft(customerId: CustomerId = OrderMother.defaultCustomerId()): Order {
    return Order.create(customerId);
  }

  static create(customerId: CustomerId = OrderMother.defaultCustomerId()): Order {
    const order = Order.create(customerId);
    order.addItem({ productId: "prod-1", quantity: 1 });
    order.confirm();
    return order;
  }

  static createCancelled(customerId: CustomerId = OrderMother.defaultCustomerId()): Order {
    const order = Order.create(customerId);
    order.cancel();
    return order;
  }

  static withItems(n: number, customerId: CustomerId = OrderMother.defaultCustomerId()): Order {
    const order = Order.create(customerId);
    for (let i = 0; i < n; i++) {
      order.addItem({ productId: `prod-${i + 1}`, quantity: 1 });
    }
    order.confirm();
    return order;
  }
}
