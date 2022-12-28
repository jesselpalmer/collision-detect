"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const is_colliding_top_bottom_1 = require("./is-colliding-top-bottom");
const is_colliding_middle_left_right_1 = require("./is-colliding-middle-left-right");
/**
 * isColliding()
 * -------------
 * This function is to be used to determine whether two objects collide. The
 * objects must have an x1, y1, x2, and y2.
 *
 * @param {CollisionObject} obj1 This is the first object in the collision test.
 * @param {CollisionObject} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
const isColliding = (obj1, obj2) => {
    return ((0, is_colliding_top_bottom_1.default)(obj1, obj2) ||
        (0, is_colliding_middle_left_right_1.default)(obj1, obj2));
};
exports.default = isColliding;
//# sourceMappingURL=is-collision.js.map