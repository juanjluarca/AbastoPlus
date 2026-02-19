"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
class ValueObject {
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value;
    }
    toString() {
        return String(this._value);
    }
}
exports.ValueObject = ValueObject;
//# sourceMappingURL=value-object.js.map