import { ValueObject } from "./value-object";

interface MoneyProps {
  amount: number;
  currency: string;
}

export class InvalidMoneyAmountError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidMoneyAmountError";
  }
}

export class MoneyValueObject extends ValueObject<MoneyProps> {
  private constructor(props: MoneyProps) {
    super(props);
  }

  public static create(amount: number, currency: string): MoneyValueObject {
    const money = new MoneyValueObject({ amount, currency });
    money.validate();
    return money;
  }

  protected validate(): void {
    if (typeof this._value.amount !== "number" || isNaN(this._value.amount)) {
      throw new InvalidMoneyAmountError("Amount must be a valid number");
    }

    if (this._value.amount <= 0) {
      throw new InvalidMoneyAmountError("Amount must be a positive number");
    }

    if (!this._value.currency || this._value.currency.trim().length === 0) {
      throw new InvalidMoneyAmountError("Currency is required");
    }
  }

  public add(other: MoneyValueObject): MoneyValueObject {
    if (this._value.currency !== other._value.currency) {
      throw new Error("Cannot add money with different currencies");
    }

    return MoneyValueObject.create(
      this._value.amount + other._value.amount,
      this._value.currency
    );
  }

  public get amount(): number {
    return this._value.amount;
  }

  public get currency(): string {
    return this._value.currency;
  }
}
