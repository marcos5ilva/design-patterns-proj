"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StripeTransactionAdapter {
    constructor(stripeTransaction) {
        this.trackNumber = stripeTransaction.code;
        this.amount = stripeTransaction.grossAmount;
        this.status = this.convertStatus(stripeTransaction.status);
    }
    convertStatus(status) {
        switch (status) {
            case 1:
                return 'required_payment_method';
            case 2:
                return 'succeed';
            case 3:
                return 'failed';
            default:
                return '';
        }
    }
}
exports.default = StripeTransactionAdapter;
