"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_colliding_middle_right_larger_1 = require("./is-colliding-middle-right-larger");
const is_colliding_middle_right_smaller_1 = require("./is-colliding-middle-right-smaller");
/**
 * isCollidingMiddleRight()
 * ------------------------
 * Used to determine whether the right-middle side of obj1 collides with
 * the left side of obj2. The objects must have an x1, y1, x2, and y2.
 *
 * @param {CollisionObject} obj1 This is the first object in the collision test.
 * @param {CollisionObject} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
const isCollidingMiddleRight = (obj1, obj2) => {
    return (is_colliding_middle_right_smaller_1.default(obj1, obj2) ||
        is_colliding_middle_right_larger_1.default(obj1, obj2));
};
exports.default = isCollidingMiddleRight;
//# sourceMappingURL=is-colliding-middle-right.js.map