test('Should calculate the ticket value for 3 hours parking', function () {
	const parkingLot = new ParkingLot();
	parkingLot.checkin('ABC-1234', new Date('2020-10-10T10:00:00'));
	const ticket = parkingLot.checkout(
		'ABC-1234',
		new Date('2020-10-10T13:00:00')
	);
	expect(ticket.amount).toBe(15);
});
