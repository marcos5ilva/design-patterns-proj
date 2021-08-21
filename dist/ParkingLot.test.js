"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AirportTicketCalculator_1 = __importDefault(require("./AirportTicketCalculator"));
const BeachTicketCalculator_1 = __importDefault(require("./BeachTicketCalculator"));
const ParkingLot_1 = __importDefault(require("./ParkingLot"));
const ShoppingTicketCalculator_1 = __importDefault(require("./ShoppingTicketCalculator"));
test('Should calculate the ticket value for 3 hours parking at the beach', function () {
    const parkingLot = new ParkingLot_1.default('beach', new BeachTicketCalculator_1.default());
    parkingLot.checkin('ABC-1234', new Date('2020-10-10T10:00:00'));
    const ticket = parkingLot.checkout('ABC-1234', new Date('2020-10-10T13:00:00'));
    expect(ticket.amount).toBe(15);
});
test('Should calculate the ticket value for 10 hours parking at the airport', function () {
    const parkingLot = new ParkingLot_1.default('airport', new AirportTicketCalculator_1.default());
    parkingLot.checkin('ABC-1234', new Date('2020-10-10T10:00:00'));
    const ticket = parkingLot.checkout('ABC-1234', new Date('2020-10-10T20:00:00'));
    expect(ticket.amount).toBe(31);
});
test('Should calculate the ticket value for 2 hours parking at the airport', function () {
    const parkingLot = new ParkingLot_1.default('shopping', new ShoppingTicketCalculator_1.default());
    parkingLot.checkin('ABC-1234', new Date('2020-10-10T12:00:00'));
    const ticket = parkingLot.checkout('ABC-1234', new Date('2020-10-10T14:00:00'));
    expect(ticket.amount).toBe(0);
});
