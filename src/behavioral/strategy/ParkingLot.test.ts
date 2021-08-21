import AirportTicketCalculator from './AirportTicketCalculator';
import BeachTicketCalculator from './BeachTicketCalculator';
import ParkingLot from './ParkingLot';
import ShoppingTicketCalculator from './ShoppingTicketCalculator';

test('Should calculate the ticket value for 3 hours parking at the beach', function () {
	const parkingLot = new ParkingLot('beach', new BeachTicketCalculator());
	parkingLot.checkin('ABC-1234', new Date('2020-10-10T10:00:00'));
	const ticket = parkingLot.checkout(
		'ABC-1234',
		new Date('2020-10-10T13:00:00')
	);
	expect(ticket.amount).toBe(15);
});

test('Should calculate the ticket value for 10 hours parking at the airport', function () {
	const parkingLot = new ParkingLot('airport', new AirportTicketCalculator());
	parkingLot.checkin('ABC-1234', new Date('2020-10-10T10:00:00'));
	const ticket = parkingLot.checkout(
		'ABC-1234',
		new Date('2020-10-10T20:00:00')
	);
	expect(ticket.amount).toBe(31);
});

test('Should calculate the ticket value for 2 hours parking at the airport', function () {
	const parkingLot = new ParkingLot('shopping', new ShoppingTicketCalculator());
	parkingLot.checkin('ABC-1234', new Date('2020-10-10T12:00:00'));
	const ticket = parkingLot.checkout(
		'ABC-1234',
		new Date('2020-10-10T14:00:00')
	);
	expect(ticket.amount).toBe(0);
});
