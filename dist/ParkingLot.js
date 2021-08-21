"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParkingLot {
    constructor(location, ticketCalculator) {
        this.tickets = [];
        this.location = location;
        this.ticketCalculator = ticketCalculator;
    }
    checkin(plate, checkingDate) {
        this.tickets.push({ plate, checkingDate });
    }
    checkout(plate, checkoutDate) {
        const ticket = this.tickets.find(ticket => ticket.plate === plate);
        if (!ticket)
            throw Error('Ticket not found');
        let amount = this.ticketCalculator.calculate(ticket.checkingDate, checkoutDate);
        return { amount };
    }
}
exports.default = ParkingLot;
