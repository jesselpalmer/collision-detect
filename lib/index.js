"use strict";
/**
 * @fileoverview This is a library to detect collisions between two objects.
 * @author Jesse Palmer
 */
Object.defineProperty(exports, "__esModule", { value: true });
var is_colliding_bottom_1 = require("./is-colliding-top-bottom/is-colliding-bottom");
var is_colliding_top_1 = require("./is-colliding-top-bottom/is-colliding-top");
var is_colliding_middle_left_right_1 = require("./is-colliding-middle-left-right");
var is_colliding_top_bottom_1 = require("./is-colliding-top-bottom");
var is_collision_1 = require("./is-collision");
exports.default = {
    isColliding: is_collision_1.default,
    isCollidingBottom: is_colliding_bottom_1.isCollidingBottom,
    isCollidingBottomLeft: is_colliding_bottom_1.isCollidingBottomLeft,
    isCollidingBottomMiddle: is_colliding_bottom_1.isCollidingBottomMiddle,
    isCollidingBottomRight: is_colliding_bottom_1.isCollidingBottomRight,
    isCollidingMiddleLeftRight: is_colliding_middle_left_right_1.default,
    isCollidingTop: is_colliding_top_1.isCollidingTop,
    isCollidingTopLeft: is_colliding_top_1.isCollidingTopLeft,
    isCollidingTopMiddle: is_colliding_top_1.isCollidingTopMiddle,
    isCollidingTopOrBottom: is_colliding_top_bottom_1.default,
    isCollidingTopRight: is_colliding_top_1.isCollidingTopRight,
};
