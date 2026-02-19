import { ValueObject } from "./value-object";

export class EnumValueObject extends ValueObject<string> {
    private readonly allowedValues: string[];
    constructor(value: string, allowedValues: string[]) {
        super(value);
        this.allowedValues = allowedValues;
    }
    
    protected validate(value: string): void {
        if (!this.allowedValues.includes(value)) {
            throw new Error(`El valor debe ser uno de los siguientes: ${this.allowedValues.join(", ")}`);
        }
    }
}