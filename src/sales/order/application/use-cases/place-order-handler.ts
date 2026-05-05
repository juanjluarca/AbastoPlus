import { CustomerId } from "../../../../customers/customer/domain/value-objects/customer-id";
import { Order } from "../../order";
import { OrderRepository } from "../order-repository";
import { SalesProductPort } from "../sales-product-port";

export interface PlaceOrderCommand {
  customerId: string;
  items: Array<{ productId: string; quantity: number }>;
}

export class ProductNotFoundError extends Error {
  constructor(productId: string) {
    super(`Product with id '${productId}' not found`);
    this.name = "ProductNotFoundError";
  }
}

export class PlaceOrderHandler {
  constructor(
    private readonly orderRepo: OrderRepository,
    private readonly productRepo: SalesProductPort,
  ) {}

  async handle(command: PlaceOrderCommand): Promise<string> {
    const pricedItems: Array<{ productId: string; quantity: number; price: number }> = [];

    for (const item of command.items) {
      const product = await this.productRepo.findById(item.productId);
      if (!product) {
        throw new ProductNotFoundError(item.productId);
      }
      pricedItems.push({ ...item, price: product.price });
    }

    const orderId = `ord-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const customerId = CustomerId.from(command.customerId);
    const order = Order.create(orderId, customerId);

    for (const item of pricedItems) {
      order.addItem(item);
    }

    order.confirm();
    await this.orderRepo.save(order);

    return orderId;
  }
}
