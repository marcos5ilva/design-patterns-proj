"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShoppingTicketCalculator {
    calculate(checkinDate, checkoutDate) {
        const period = (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60);
        let amount = 0;
        if (checkinDate.getHours() >= 12 && checkoutDate.getHours() <= 14) {
            return (amount = 0);
        }
        return (amount = period * 3);
    }
}
exports.default = ShoppingTicketCalculator;
