"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
it('should return true if obj2 collides with the top left of obj1', () => {
    const obj1 = {
        x1: 5,
        x2: 15,
        y1: 5,
        y2: 15,
    };
    const obj2 = {
        x1: 0,
        x2: 10,
        y1: 0,
        y2: 10,
    };
    expect(_1.default(obj1, obj2)).toBe(true);
});
//# sourceMappingURL=is-colliding-top-left.test.js.map