/**
 * @fileoverview This is a library to detect collisions between two objects.
 * @author Jesse Palmer
 */

/**
 * Used to determine whether the top-left side of obj1 collides with the
 * bottom of obj2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingTopLeft = function (obj1, obj2) {
    'use strict';

    return (obj1.x1 > obj2.x1) && (obj1.x1 < obj2.x2) &&
        (obj1.x2 > obj2.x1) && (obj1.x2 > obj2.x2) &&
        (obj1.y1 > obj2.y1) && (obj1.y1 < obj2.y2) &&
        (obj1.y2 > obj2.y1) && (obj1.y2 > obj2.y2);
};

/**
 * Used to determine whether the top-middle of obj1 collides with the bottom
 * of obj2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingTopMiddle = function (obj1, obj2) {
    'use strict';

    return (obj1.x1 > obj2.x1) && (obj1.x1 < obj2.x2) &&
        (obj1.x2 > obj2.x1) && (obj1.x2 < obj2.x2) &&
        (obj1.y1 < obj2.y1) && (obj1.y1 < obj2.y2) &&
        (obj1.y2 > obj2.y1) && (obj1.y2 < obj2.y2);
};

/**
 * Used to determine whether the top-right of obj1 collides with the bottom
 * of obj2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingTopRight = function (obj1, obj2) {
    'use strict';

    return (obj1.x1 < obj2.x1) && (obj1.x1 < obj2.x2) &&
        (obj1.x2 > obj2.x1) && (obj1.x2 < obj2.x2) &&
        (obj1.y1 > obj2.y1) && (obj1.y1 < obj2.y2) &&
        (obj1.y2 > obj2.y1) && (obj1.y2 > obj2.y2);
};

/**
 * Used to determine whether the top of obj1 collides with the bottom of
 * obj2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingTop = function (obj1, obj2) {
    'use strict';

    return isCollidingTopLeft(obj1, obj2) ||
        isCollidingTopMiddle(obj1, obj2) ||
        isCollidingTopRight(obj1, obj2);
};

/**
 * Used to determine whether the left-bottom side of obj1 collides with the
 * right side of obj2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingBottomLeft = function (obj1, obj2) {
    'use strict';

    return (obj1.x1 > obj2.x1) && (obj1.x1 < obj2.x2) &&
        (obj1.x2 > obj2.x1) && (obj1.x2 > obj2.x2) &&
        (obj1.y1 < obj2.y1) && (obj1.y1 < obj2.y2) &&
        (obj1.y2 > obj2.y1) && (obj1.y2 < obj2.y2);
};

/**
 * Used to determine whether the bottom-middle side of obj1 collides with the
 * top of obj2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingBottomMiddle = function (obj1, obj2) {
    'use strict';

    return (obj1.x1 > obj2.x1) && (obj1.x1 < obj2.x2) &&
        (obj1.x2 > obj2.x1) && (obj1.x2 < obj2.x2) &&
        (obj1.y1 > obj2.y1) && (obj1.y1 < obj2.y2) &&
        (obj1.y2 > obj2.y1) && (obj1.y2 > obj2.y2);
};

/**
 * Used to determine whether the right-bottom side of obj1 collides with the
 * left side of obj2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingBottomRight = function (obj1, obj2) {
    'use strict';

    return (obj1.x1 < obj2.x1) && (obj1.x1 < obj2.x2) &&
        (obj1.x2 > obj2.x1) && (obj1.x2 < obj2.x2) &&
        (obj1.y1 < obj2.y1) && (obj1.y1 < obj2.y2) &&
        (obj1.y2 > obj2.y1) && (obj1.y2 < obj2.y2);
};

/**
 * Used to determine whether the bottom of obj1 collides with the top of
 * obj2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingBottom = function (obj1, obj2) {
    'use strict';

    return isCollidingBottomLeft(obj1, obj2) ||
        isCollidingBottomMiddle(obj1, obj2) ||
        isCollidingBottomRight(obj1, obj2);
};

/**
 * Used to determine whether the right-middle side of obj1 collides with
 * the left side of obj2. The objects must have an x1, y1, x2, and y2. This
 * function will return true only if the collision occurs when the obj2
 * side is larger than the obj1 side.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingMiddleRight = function (obj1, obj2) {
    'use strict';

    return (obj1.x1 < obj2.x1) && (obj1.x1 < obj2.x2) &&
        (obj1.x2 > obj2.x1) && (obj1.x2 < obj2.x2) &&
        (obj1.y1 > obj2.y1) && (obj1.y1 < obj2.y2) &&
        (obj1.y2 > obj2.y1) && (obj1.y2 < obj2.y2);
};

/**
 * Used to determine whether the right side of obj1 collides with the
 * left side of obj2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingRight = function (obj1, obj2) {
    'use strict';

    return isCollidingMiddleRight(obj1, obj2);
};

/**
 * Used to determine whether the left-middle side of obj1 collides with the
 * right side of obj2. The objects must have an x1, y1, x2, and y2. This
 * function will return true only if the collision occurs when the obj2
 * side is larger than the obj1 side.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingMiddleLeft = function (obj1, obj2) {
    'use strict';

    return (obj1.x1 > obj2.x1) && (obj1.x1 < obj2.x2) &&
        (obj1.x2 > obj2.x1) && (obj1.x2 > obj2.x2) &&
        (obj1.y1 > obj2.y1) && (obj1.y1 < obj2.y2) &&
        (obj1.y2 > obj2.y1) && (obj1.y2 < obj2.y2);
};

/**
 * Used to determine whether the left side of obj1 collides with the
 * right side of obj2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingLeft = function (obj1, obj2) {
    'use strict';

    return isCollidingMiddleLeft(obj1, obj2);
};

/**
 * This function is to be used to determine whether two objects collide on the
 * top or bottom. The objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingTopBottom = function (obj1, obj2) {
    'use strict';

    return isCollidingTop(obj1, obj2) ||
        isCollidingBottom(obj1, obj2);
};

/**
 * This function is to be used to determine whether two objects collide on the
 * right or left sides. The objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isCollidingRightLeft = function (obj1, obj2) {
    'use strict';

    return isCollidingRight(obj1, obj2) || isCollidingLeft(obj1, obj2);
};

/**
 * This function is to be used to determine whether two objects collide. The
 * objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
var isColliding = function (obj1, obj2) {
    'use strict';

    return isCollidingTopBottom(obj1, obj2) || isCollidingRightLeft(obj1, obj2);
};