"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PaypalTransaction_1 = __importDefault(require("./PaypalTransaction"));
const PaypalTransactionAdapter_1 = __importDefault(require("./PaypalTransactionAdapter"));
const StripeTransaction_1 = __importDefault(require("./StripeTransaction"));
const StripeTransactionAdapter_1 = __importDefault(require("./StripeTransactionAdapter"));
test('Should make a transaction on Stripe', function () {
    const stripeTransaction = new StripeTransaction_1.default('AHN67HFRHF', 1000, 2);
    const transaction = new StripeTransactionAdapter_1.default(stripeTransaction);
    expect(transaction.status).toBe('succeeded');
});
test('Should make a transaction on Paypal', function () {
    const payPalTransaction = new PaypalTransaction_1.default('656768', 1000, 'S');
    const transaction = new PaypalTransactionAdapter_1.default(payPalTransaction);
    expect(transaction.status).toBe('succeeded');
});
