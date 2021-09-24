"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaypalTransaction {
    constructor(id, amount, status) {
        this.id = id;
        this.amount = amount;
        this.status = status;
    }
}
exports.default = PaypalTransaction;
