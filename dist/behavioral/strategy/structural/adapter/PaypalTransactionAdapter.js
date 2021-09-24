"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PaypalTransactionAdapter {
    constructor(payPalTransaction) {
        this.trackNumber = payPalTransaction.id;
        this.amount = payPalTransaction.amount;
        this.status = this.convertStatus(payPalTransaction.status);
    }
    convertStatus(status) {
        switch (status) {
            case 'P':
                return 'waiting_payment';
            case 'S':
                return 'paid';
            case 'F':
                return 'refunded';
            default:
                return '';
        }
    }
}
exports.default = PaypalTransactionAdapter;
