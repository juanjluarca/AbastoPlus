import { describe, it, expect } from "vitest";
import { Order, OrderStatus } from "../../../sales/order/order";
import { CustomerId } from "../../../customers/customer/domain/value-objects/customer-id";

describe("Order", () => {
  describe("create", () => {
    it("creates order with draft status", () => {
      const customerId = CustomerId.from("cust-123");
      const order = Order.create(customerId);

      expect(order.status).toBe(OrderStatus.Draft);
      expect(order.customerId).toEqual(customerId);
      expect(order.items).toHaveLength(0);
    });
  });
});
