export class CustomerId {
  private readonly _value: string;

  private constructor(value: string) {
    if (!value || !value.startsWith("cust-") || value.length <= "cust-".length) {
      throw new Error("CustomerId must follow the format 'cust-<id>'");
    }
    this._value = value;
  }

  public static from(value: string): CustomerId {
    return new CustomerId(value);
  }

  public get value(): string {
    return this._value;
  }
}
