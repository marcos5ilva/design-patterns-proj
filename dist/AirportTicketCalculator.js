"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AirportTicketCalculator {
    calculate(checkinDate, checkoutDate) {
        const period = (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60);
        let amount = 10;
        const remainingHOurs = period - 3;
        if (remainingHOurs > 0) {
            return (amount += remainingHOurs * 3);
        }
        return amount;
    }
}
exports.default = AirportTicketCalculator;
