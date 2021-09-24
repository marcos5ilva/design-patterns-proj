"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class View {
    constructor(themeFactory) {
        this.label = themeFactory.createLabel();
        this.button = themeFactory.createButton();
    }
}
exports.default = View;
