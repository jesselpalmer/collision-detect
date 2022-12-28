"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_colliding_bottom_1 = require("./is-colliding-bottom");
const is_colliding_top_1 = require("./is-colliding-top");
/**
 * isCollidingTopOrBottom()
 * ------------------------
 * This function is to be used to determine whether two objects collide on the
 * top or bottom. The objects must have an x1, y1, x2, and y2.
 *
 * @param {CollisionObject} obj1 This is the first object in the collision test.
 * @param {CollisionObject} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
const isCollidingTopOrBottom = (obj1, obj2) => {
    return (0, is_colliding_top_1.isCollidingTop)(obj1, obj2) || (0, is_colliding_bottom_1.isCollidingBottom)(obj1, obj2);
};
exports.default = isCollidingTopOrBottom;
//# sourceMappingURL=is-colliding-top-bottom.js.map