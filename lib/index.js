"use strict";
/**
 * @fileoverview This is a library to detect collisions between two objects.
 * @author Jesse Palmer
 */
Object.defineProperty(exports, "__esModule", { value: true });
var is_collision_1 = require("./is-collision");
var is_colliding_bottom_1 = require("./is-colliding-bottom");
var is_colliding_top_1 = require("./is-colliding-top");
exports.default = {
    isColliding: is_collision_1.isColliding,
    isCollidingBottom: is_colliding_bottom_1.isCollidingBottom,
    isCollidingBottomLeft: is_colliding_bottom_1.isCollidingBottomLeft,
    isCollidingBottomMiddle: is_colliding_bottom_1.isCollidingBottomMiddle,
    isCollidingBottomRight: is_colliding_bottom_1.isCollidingBottomRight,
    isCollidingMiddleRightOrLeft: is_collision_1.isCollidingMiddleRightOrLeft,
    isCollidingTop: is_colliding_top_1.isCollidingTop,
    isCollidingTopLeft: is_colliding_top_1.isCollidingTopLeft,
    isCollidingTopMiddle: is_colliding_top_1.isCollidingTopMiddle,
    isCollidingTopOrBottom: is_collision_1.isCollidingTopOrBottom,
    isCollidingTopRight: is_colliding_top_1.isCollidingTopRight
};
