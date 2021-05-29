"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_colliding_bottom_left_1 = require("./is-colliding-bottom-left");
const is_colliding_bottom_middle_1 = require("./is-colliding-bottom-middle");
const is_colliding_bottom_right_1 = require("./is-colliding-bottom-right");
/**
 * isCollidingBottom()
 * -------------------
 * Used to determine whether the bottom of obj1 collides with the top of
 * obj2. The objects must have an x1, y1, x2, and y2.
 *
 * @param {CollisionObject} obj1 This is the first object in the collision test.
 * @param {CollisionObject} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
const isCollidingBottom = (obj1, obj2) => {
    return (is_colliding_bottom_left_1.default(obj1, obj2) ||
        is_colliding_bottom_middle_1.default(obj1, obj2) ||
        is_colliding_bottom_right_1.default(obj1, obj2));
};
exports.default = isCollidingBottom;
//# sourceMappingURL=is-colliding-bottom.js.map