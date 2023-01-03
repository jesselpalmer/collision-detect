"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const leftObject = {
    x1: 2,
    y1: 2,
    x2: 7,
    y2: 13,
};
const rightObject = {
    x1: 4,
    y1: 4,
    x2: 11,
    y2: 11,
};
it('should return true if obj2 collides with the middle left of obj1 and obj1 is smaller than obj2', () => {
    expect((0, _1.default)(rightObject, leftObject)).toBe(true);
});
//# sourceMappingURL=is-colliding-middle-left-larger.test.js.map