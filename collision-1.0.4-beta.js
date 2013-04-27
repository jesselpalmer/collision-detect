/**
 * @fileoverview This is a library to detect collisions between two objects.
 * @author Jesse L. Palmer
 */

/**
 * Used to determine whether the top-left side of object1 collides with the
 * bottom of object2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isCollidingTopLeft(object1, object2) {
    'use strict';
    return (object1.x1 > object2.x1) && (object1.x1 < object2.x2) &&
        (object1.x2 > object2.x1) && (object1.x2 > object2.x2) &&
        (object1.y1 > object2.y1) && (object1.y1 < object2.y2) &&
        (object1.y2 > object2.y1) && (object1.y2 > object2.y2);
}

/**
 * Used to determine whether the top-middle of object1 collides with the bottom
 * of object2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isCollidingTopMiddle(object1, object2) {
    'use strict';
    return (object1.x1 > object2.x1) && (object1.x1 < object2.x2) &&
        (object1.x2 > object2.x1) && (object1.x2 < object2.x2) &&
        (object1.y1 > object2.y1) && (object1.y1 < object2.y2) &&
        (object1.y2 > object2.y1) && (object1.y2 > object2.y2);
}

/**
 * Used to determine whether the top-right of object1 collides with the bottom
 * of object2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isCollidingTopRight(object1, object2) {
    'use strict';
    return (object1.x1 < object2.x1) && (object1.x1 < object2.x2) &&
        (object1.x2 > object2.x1) && (object1.x2 < object2.x2) &&
        (object1.y1 > object2.y1) && (object1.y1 < object2.y2) &&
        (object1.y2 > object2.y1) && (object1.y2 > object2.y2);
}

/**
 * Used to determine whether the top of object1 collides with the bottom of
 * object2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isCollidingTop(object1, object2) {
    'use strict';
    return isCollidingTopLeft(object1, object2) ||
        isCollidingTopMiddle(object1, object2) ||
        isCollidingTopRight(object1, object2);
}

/**
 * Used to determine whether the left-bottom side of object1 collides with the
 * right side of object2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isCollidingBottomLeft(object1, object2) {
    'use strict';
    return (object1.x1 > object2.x1) && (object1.x1 < object2.x2) &&
        (object1.x2 > object2.x1) && (object1.x2 > object2.x2) &&
        (object1.y1 < object2.y1) && (object1.y1 < object2.y2) &&
        (object1.y2 > object2.y1) && (object1.y2 < object2.y2);
}

/**
 * Used to determine whether the bottom-middle side of object1 collides with the
 * top of object2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isCollidingBottomMiddle(object1, object2) {
    'use strict';
    return (object1.x1 > object2.x1) && (object1.x1 < object2.x2) &&
        (object1.x2 > object2.x1) && (object1.x2 < object2.x2) &&
        (object1.y1 < object2.y1) && (object1.y1 < object2.y2) &&
        (object1.y2 > object2.y1) && (object1.y2 < object2.y2);
}

/**
 * Used to determine whether the right-bottom side of object1 collides with the
 * left side of object2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isCollidingBottomRight(object1, object2) {
    'use strict';
    return (object1.x1 < object2.x1) && (object1.x1 < object2.x2) &&
        (object1.x2 > object2.x1) && (object1.x2 < object2.x2) &&
        (object1.y1 < object2.y1) && (object1.y1 < object2.y2) &&
        (object1.y2 > object2.y1) && (object1.y2 < object2.y2);
}

/**
 * Used to determine whether the bottom of object1 collides with the top of
 * object2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isCollidingBottom(object1, object2) {
    'use strict';
    return isCollidingBottomLeft(object1, object2) ||
        isCollidingBottomMiddle(object1, object2) ||
        isCollidingBottomRight(object1, object2);
}

/**
 * Used to determine whether the right-middle side of object1 collides with
 * the left side of object2. The objects must have an x1, y1, x2, and y2. This
 * function will return true only if the collision occurs when the object2
 * side is larger than the object1 side.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isCollidingMiddleRight(object1, object2) {
    'use strict';
    return (object1.x1 < object2.x1) && (object1.x1 < object2.x2) &&
        (object1.x2 > object2.x1) && (object1.x2 < object2.x2) &&
        (object1.y1 > object2.y1) && (object1.y1 < object2.y2) &&
        (object1.y2 > object2.y1) && (object1.y2 < object2.y2);
}

/**
 * Used to determine whether the right side of object1 collides with the
 * left side of object2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isCollidingRight(object1, object2) {
    'use strict';
    return isCollidingMiddleRight(object1, object2);
}

/**
 * Used to determine whether the left-middle side of object1 collides with the
 * right side of object2. The objects must have an x1, y1, x2, and y2. This
 * function will return true only if the collision occurs when the object2
 * side is larger than the object1 side.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isCollidingMiddleLeft(object1, object2) {
    'use strict';
    return (object1.x1 > object2.x1) && (object1.x1 < object2.x2) &&
        (object1.x2 > object2.x1) && (object1.x2 > object2.x2) &&
        (object1.y1 > object2.y1) && (object1.y1 < object2.y2) &&
        (object1.y2 > object2.y1) && (object1.y2 < object2.y2);
}

/**
 * Used to determine whether the left side of object1 collides with the
 * right side of object2. The objects must have an x1, y1, x2, and y2.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isCollidingLeft(object1, object2) {
    'use strict';
    return isCollidingMiddleLeft(object1, object2);
}

/**
 * This function is to be used to determine whether two objects collide on the
 * top or bottom. The objects must have an x1, y1, x2, and y2.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isCollidingTopBottom(object1, object2) {
    'use strict';
    return isCollidingTop(object1, object2) ||
        isCollidingBottom(object1, object2);
}

/**
 * This function is to be used to determine whether two objects collide on the
 * right or left sides. The objects must have an x1, y1, x2, and y2.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isCollidingRightLeft(object1, object2) {
    'use strict';
    return isCollidingRight(object1, object2) ||
        isCollidingLeft(object1, object2);
}

/**
 * This function is to be used to determine whether two objects collide. The
 * objects must have an x1, y1, x2, and y2.
 * @param {Object} object1 This is the first object in the collision test.
 * @param {Object} object2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
function isColliding(object1, object2) {
    'use strict';
    return isCollidingTopBottom(object1, object2) ||
        isCollidingRightLeft(object1, object2);
}
