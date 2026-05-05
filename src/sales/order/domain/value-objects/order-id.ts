import { StringValueObject } from "../../../../shared/domain/value-objects/string-value-object";

export class OrderId extends StringValueObject {
  constructor(value: string) {
    super(value);
  }

  public static from(value: string): OrderId {
    return new OrderId(value);
  }
}
