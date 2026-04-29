import { describe, it, expect } from "vitest";
import { MoneyValueObject, InvalidMoneyAmountError } from "../../../shared/domain/value-objects/money-value-object";

describe("MoneyValueObject", () => {
  it("should create a valid MoneyValueObject", () => {
    const money = MoneyValueObject.create(100, "USD");
    expect(money.amount).toBe(100);
    expect(money.currency).toBe("USD");
  });

  it("should throw InvalidMoneyAmountError when amount is zero", () => {
    expect(() => MoneyValueObject.create(0, "USD")).toThrow(InvalidMoneyAmountError);
  });

  it("should throw InvalidMoneyAmountError when amount is negative", () => {
    expect(() => MoneyValueObject.create(-50, "USD")).toThrow(InvalidMoneyAmountError);
  });

  it("should throw InvalidMoneyAmountError when amount is NaN", () => {
    expect(() => MoneyValueObject.create(NaN, "USD")).toThrow(InvalidMoneyAmountError);
  });

  it("should throw InvalidMoneyAmountError when currency is empty", () => {
    expect(() => MoneyValueObject.create(100, "")).toThrow(InvalidMoneyAmountError);
  });

  it("should throw InvalidMoneyAmountError when currency is only whitespace", () => {
    expect(() => MoneyValueObject.create(100, "   ")).toThrow(InvalidMoneyAmountError);
  });

  it("should add two MoneyValueObjects with the same currency", () => {
    const a = MoneyValueObject.create(100, "USD");
    const b = MoneyValueObject.create(50, "USD");
    const result = a.add(b);
    expect(result.amount).toBe(150);
    expect(result.currency).toBe("USD");
  });

  it("should throw when adding MoneyValueObjects with different currencies", () => {
    const a = MoneyValueObject.create(100, "USD");
    const b = MoneyValueObject.create(50, "EUR");
    expect(() => a.add(b)).toThrow();
  });

  it("add should return a new MoneyValueObject instance", () => {
    const a = MoneyValueObject.create(100, "USD");
    const b = MoneyValueObject.create(50, "USD");
    expect(a.add(b)).not.toBe(a);
  });
});
