import { CustomerId } from "../../customers/customer/domain/value-objects/customer-id";

export const OrderStatus = {
  Draft: "Draft",
  Confirmed: "Confirmed",
  Cancelled: "Cancelled",
} as const;

export type OrderStatus = typeof OrderStatus[keyof typeof OrderStatus];

export interface OrderItem {
  productId: string;
  quantity: number;
}

export class Order {
  public readonly customerId: CustomerId;
  public readonly items: OrderItem[];
  private _status: OrderStatus;

  private constructor(customerId: CustomerId, status: OrderStatus, items: OrderItem[]) {
    this.customerId = customerId;
    this._status = status;
    this.items = items;
  }

  public get status(): OrderStatus {
    return this._status;
  }

  public static create(customerId: CustomerId): Order {
    return new Order(customerId, OrderStatus.Draft, []);
  }

  public addItem(item: OrderItem): void {
    if (this._status === OrderStatus.Cancelled) {
      throw new InvalidOrderStateError("Cannot add items to a cancelled order");
    }
    if (item.quantity <= 0) {
      throw new InvalidQuantityError("Item quantity must be a positive number");
    }
    this.items.push(item);
  }

  public confirm(): void {
    this._status = OrderStatus.Confirmed;
  }

  public cancel(): void {
    this._status = OrderStatus.Cancelled;
  }
}


export class InvalidOrderStateError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidOrderStateError";
  }
}

export class InvalidQuantityError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidQuantityError";
  }
}