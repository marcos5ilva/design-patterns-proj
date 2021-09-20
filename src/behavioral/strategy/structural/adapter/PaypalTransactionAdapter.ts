import PaypalTransaction from './PaypalTransaction';
import Transaction from './Transaction';

export default class PaypalTransactionAdapter implements Transaction {
	trackNumber: string;
	amount: number;
	status: string;

	constructor(payPalTransaction: PaypalTransaction) {
		this.trackNumber = payPalTransaction.id;
		this.amount = payPalTransaction.amount;
		this.status = this.convertStatus(payPalTransaction.status);
	}

	convertStatus(status: string): string {
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
