"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_colliding_top_left_1 = require("./is-colliding-top-left");
const is_colliding_top_middle_1 = require("./is-colliding-top-middle");
const is_colliding_top_right_1 = require("./is-colliding-top-right");
/**
 * isCollidingTop()
 * ----------------
 * Used to determine whether the top of obj1 collides with the bottom of
 * obj2. The objects must have an x1, y1, x2, and y2.
 *
 * @param {CollisionObject} obj1 This is the first object in the collision test.
 * @param {CollisionObject} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
const isCollidingTop = (obj1, obj2) => {
    return (is_colliding_top_left_1.default(obj1, obj2) ||
        is_colliding_top_middle_1.default(obj1, obj2) ||
        is_colliding_top_right_1.default(obj1, obj2));
};
exports.default = isCollidingTop;
//# sourceMappingURL=is-colliding-top.js.map