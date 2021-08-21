import TicketCalculator from './TicketCalculator';

export default class ParkingLot {
	tickets: { plate: string; checkingDate: Date }[];
	location: string;
	ticketCalculator: TicketCalculator;

	constructor(location: string, ticketCalculator: TicketCalculator) {
		this.tickets = [];
		this.location = location;
		this.ticketCalculator = ticketCalculator;
	}

	checkin(plate: string, checkingDate: Date) {
		this.tickets.push({ plate, checkingDate });
	}

	checkout(plate: string, checkoutDate: Date) {
		const ticket = this.tickets.find(ticket => ticket.plate === plate);
		if (!ticket) throw Error('Ticket not found');
		let amount = this.ticketCalculator.calculate(
			ticket.checkingDate,
			checkoutDate
		);
		return { amount };
	}
}
