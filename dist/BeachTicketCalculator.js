"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BeachTicketCalculator {
    calculate(checkinDate, checkoutDate) {
        const period = (checkoutDate.getTime() - checkinDate.getTime()) / (1000 * 60 * 60);
        const amount = period * 5;
        return amount;
    }
}
exports.default = BeachTicketCalculator;
