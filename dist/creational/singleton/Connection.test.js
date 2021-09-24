"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Connection_1 = __importDefault(require("./Connection"));
test('Should allways connect in the same instance', function () {
    const connection1 = Connection_1.default.getInstance();
    const connection2 = Connection_1.default.getInstance();
    expect(connection1.id).toBe(connection2.id);
});
