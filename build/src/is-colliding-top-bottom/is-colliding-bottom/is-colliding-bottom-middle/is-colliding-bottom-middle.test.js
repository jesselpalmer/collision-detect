"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
it('should return true if obj2 collides with the bottom middle of obj1', () => {
    const obj1 = {
        x1: 0,
        x2: 10,
        y1: 0,
        y2: 10,
    };
    const obj2 = {
        x1: 5,
        x2: 8,
        y1: 5,
        y2: 15,
    };
    expect(_1.default(obj1, obj2)).toBe(true);
});
//# sourceMappingURL=is-colliding-bottom-middle.test.js.map