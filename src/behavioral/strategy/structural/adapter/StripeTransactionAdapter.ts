import StripeTransaction from './StripeTransaction';
import Transaction from './Transaction';

export default class StripeTransactionAdapter implements Transaction {
	trackNumber: string;
	amount: number;
	status: string;

	constructor(stripeTransaction: StripeTransaction) {
		this.trackNumber = stripeTransaction.code;
		this.amount = stripeTransaction.grossAmount;
		this.status = this.convertStatus(stripeTransaction.status);
	}

	convertStatus(status: number): string {
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
