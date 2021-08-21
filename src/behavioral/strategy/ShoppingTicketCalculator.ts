import TicketCalculator from './TicketCalculator';

export default class ShoppingTicketCalculator implements TicketCalculator {
	calculate(checkinDate: Date, checkoutDate: Date): number {
		const period =
			(checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60);
		let amount = 0;
		if (checkinDate.getHours() >= 12 && checkoutDate.getHours() <= 14) {
			return (amount = 0);
		}
		return (amount = period * 3);
	}
}
