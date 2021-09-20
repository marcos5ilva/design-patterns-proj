import PaypalTransaction from './PaypalTransaction';
import PaypalTransactionAdapter from './PaypalTransactionAdapter';
import StripeTransaction from './StripeTransaction';
import StripeTransactionAdapter from './StripeTransactionAdapter';

test('Should make a transaction on Stripe', function () {
	const stripeTransaction = new StripeTransaction('AHN67HFRHF', 1000, 2);
	const transaction = new StripeTransactionAdapter(stripeTransaction);
	expect(transaction.status).toBe('succeeded');
});

test('Should make a transaction on Paypal', function () {
	const payPalTransaction = new PaypalTransaction('656768', 1000, 'S');
	const transaction = new PaypalTransactionAdapter(payPalTransaction);
	expect(transaction.status).toBe('succeeded');
});
