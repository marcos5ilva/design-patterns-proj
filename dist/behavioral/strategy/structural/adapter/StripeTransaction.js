"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StripeTransaction {
    constructor(code, grossAmount, status) {
        this.code = code;
        this.grossAmount = grossAmount;
        this.status = status;
    }
}
exports.default = StripeTransaction;
