"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_data_1 = require("../../../../shared/testing/test-data");
const _1 = require(".");
it('should return true if obj2 collides with the middle left of obj1 and obj1 is smaller than obj2', () => {
    expect((0, _1.default)(test_data_1.middleLeftSmaller.obj1, test_data_1.middleLeftSmaller.obj2)).toBe(true);
});
//# sourceMappingURL=is-colliding-middle-left-smaller.test.js.map