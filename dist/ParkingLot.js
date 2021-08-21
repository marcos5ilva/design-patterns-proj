"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParkingLot {
    constructor() {
        this.tickets = [];
    }
    checkin(plate, checkingDate) {
        this.tickets.push({ plate, checkingDate });
    }
    checkout(plate, checkoutDate) {
        const ticket = this.tickets.find(ticket => ticket.plate === plate);
        if (!ticket)
            throw Error('Ticket not found');
        const period = (checkoutDate.getTime() - ticket.checkingDate.getTime()) /
            (1000 * 60 * 60);
        const amount = period * 5;
        return { amount };
    }
}
exports.default = ParkingLot;
