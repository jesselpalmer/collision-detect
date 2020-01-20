"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isCollidingMiddleRightSmaller = function (obj1, obj2) {
    return (obj1.x1 < obj2.x1) && (obj1.x1 < obj2.x2) &&
        (obj1.x2 > obj2.x1) && (obj1.x2 < obj2.x2) &&
        (obj1.y1 < obj2.y1) && (obj1.y1 < obj2.y2) &&
        (obj1.y2 > obj2.y1) && (obj1.y2 > obj2.y2);
};
exports.default = isCollidingMiddleRightSmaller;
