export abstract class ValueObject<T> {
  protected readonly _value: T;

  protected constructor(value: T) {
    this._value = value;
  }

  protected abstract validate(value: T): void;

  public get value(): T {
    return this._value;
  }

  public toString(): string {
    return String(this._value);
  }
}
