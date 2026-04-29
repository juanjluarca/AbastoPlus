import { describe, it, expect } from "vitest";
import { OrderStatus } from "../../../sales/order/order";
import { CustomerId } from "../../../customers/customer/domain/value-objects/customer-id";
import { OrderMother } from "../../../sales/order/order-mother";
import { InvalidOrderStateError, InvalidQuantityError } from "../../../sales/order/order";
import { create } from "node:domain";


describe("Order tests", () => {
  it("creates order with draft status", () => {
    const order = createDraftOrder();

    expect(order.status).toBe(OrderStatus.Draft);
    expect(order.items).toHaveLength(0);
  });

  it("adds item to order", () => {
    const order = createDraftOrder();
    const item = { productId: "prod-456", quantity: 2 };

    order.addItem(item);

    expect(order.items).toContain(item);
  });

  it("changes order status to confirmed", () => {
    const order = createDraftOrder();

    order.confirm();

    expect(order.status).toBe(OrderStatus.Confirmed);

});
  it("creates order with specified number of items", () => {
    const n = 3;
    const order = createOrderWithItems(n);

    expect(order.items).toHaveLength(n);
});

  it('throws when order is cancelled', () => {
    const order = createCancelledOrder();

    expect(() => {
      order.addItem({ productId: "prod-789", quantity: 1 });
    }).toThrow(InvalidOrderStateError);
  });

  it('throws when quantity is zero', () => {
    const order = createDraftOrder();
    
    expect(() => {
      order.addItem({ productId: "prod-789", quantity: 0 });
    }).toThrow(InvalidQuantityError);
  })


});


function createDraftOrder() {
  const order = OrderMother.draft();
  return order;
}

function createConfirmedOrder() {
  const order = OrderMother.create();
  return order;
}

function createOrderWithItems(n: number) {
  const order = OrderMother.withItems(n);
  return order;
}

function createCancelledOrder() {
  const order = OrderMother.createCancelled();
  return order;
}
  