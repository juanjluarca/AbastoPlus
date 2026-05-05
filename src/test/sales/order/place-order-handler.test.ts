import { describe, it, expect, beforeEach } from "vitest";
import { Order } from "../../../sales/order/order";
import { OrderRepository } from "../../../sales/order/application/order-repository";
import { OrderId } from "../../../sales/order/domain/value-objects/order-id";
import { SalesProductPort, ProductDetails } from "../../../sales/order/application/sales-product-port";
import {
  PlaceOrderHandler,
  PlaceOrderCommand,
  ProductNotFoundError,
} from "../../../sales/order/application/use-cases/place-order-handler";

class MockOrderRepository implements OrderRepository {
  private orders = new Map<string, Order>();
  public savedOrders: Order[] = [];
  private shouldErrorOnSave = false;

  async save(order: Order): Promise<void> {
    if (this.shouldErrorOnSave) {
      throw new Error("Simulated save error");
    }
    this.orders.set(order.id, order);
    this.savedOrders.push(order);
  }

  async findById(id: OrderId): Promise<Order | null> {
    return this.orders.get(id.value) ?? null;
  }

  simulateErrorOnSave(): void {
    this.shouldErrorOnSave = true;
  }
}

class MockProductRepository implements SalesProductPort {
  private products = new Map<string, ProductDetails>();

  async findById(id: string): Promise<ProductDetails | null> {
    return this.products.get(id) ?? null;
  }

  addProduct(product: ProductDetails): void {
    this.products.set(product.id, product);
  }
}

function createTestProduct(id: string, price: number): ProductDetails {
  return { id, price };
}

describe("PlaceOrderHandler", () => {
  let handler: PlaceOrderHandler;
  let orderRepo: MockOrderRepository;
  let productRepo: MockProductRepository;

  beforeEach(() => {
    orderRepo = new MockOrderRepository();
    productRepo = new MockProductRepository();
    handler = new PlaceOrderHandler(orderRepo, productRepo);
  });

  it("creates order with items and saves", async () => {
    productRepo.addProduct(createTestProduct("prod-1", 10.0));
    productRepo.addProduct(createTestProduct("prod-2", 20.0));

    const command: PlaceOrderCommand = {
      customerId: "cust-123",
      items: [
        { productId: "prod-1", quantity: 2 },
        { productId: "prod-2", quantity: 1 },
      ],
    };

    const orderId = await handler.handle(command);
    expect(orderId).toBeDefined();

    const savedOrder = await orderRepo.findById(OrderId.from(orderId));
    expect(savedOrder).not.toBeNull();
    expect(savedOrder!.items).toHaveLength(2);
    expect(savedOrder!.total.amount).toBe(40); // 2*10 + 1*20
  });

  it("throws when product not found", async () => {
    const command: PlaceOrderCommand = {
      customerId: "cust-123",
      items: [{ productId: "nonexistent", quantity: 1 }],
    };

    await expect(handler.handle(command)).rejects.toThrow(ProductNotFoundError);
  });

  it("rolls back on error", async () => {
    productRepo.addProduct(createTestProduct("prod-1", 10.0));
    orderRepo.simulateErrorOnSave();

    const command: PlaceOrderCommand = {
      customerId: "cust-123",
      items: [{ productId: "prod-1", quantity: 1 }],
    };

    await expect(handler.handle(command)).rejects.toThrow();
    expect(orderRepo.savedOrders).toHaveLength(0);
  });
});
