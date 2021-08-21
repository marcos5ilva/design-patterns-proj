export default class ParkingLot {
	tickets: { plate: string; checkingDate: Date }[];
	constructor() {
		this.tickets = [];
	}

	checkin(plate: string, checkingDate: Date) {
		this.tickets.push({ plate, checkingDate });
	}

	checkout(plate: string, checkoutDate: Date) {
		const ticket = this.tickets.find(ticket => ticket.plate === plate);
		if (!ticket) throw Error('Ticket not found');
		const period =
			(checkoutDate.getTime() - ticket.checkingDate.getTime()) /
			(1000 * 60 * 60);
		const amount = period * 5;
		return { amount };
	}
}
