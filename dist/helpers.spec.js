"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helpers_1 = require("./helpers");
describe("helpers", () => {
    it("should convert PWM refresh rate to PWM config", () => {
        const zeroResult = helpers_1.convertPWMRefreshRateToPWMConf(0);
        chai_1.expect(zeroResult).to.be.equal("00");
        const twoHundredsResult = helpers_1.convertPWMRefreshRateToPWMConf(200);
        chai_1.expect(twoHundredsResult).to.be.equal("02");
        const fiveHundredsResult = helpers_1.convertPWMRefreshRateToPWMConf(500);
        chai_1.expect(fiveHundredsResult).to.be.equal("05");
    });
});
//# sourceMappingURL=helpers.spec.js.map