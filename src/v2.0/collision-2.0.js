/**
 * @fileoverview This is a library to detect collisions between two objects.
 * @author Jesse Palmer
 */

window.collision = (function () {
    'use strict';

    /**
     * @name collision.isCollidingTopLeft
     * @kind function
     *
     * @description Used to determine whether the top-left side of obj1
     * collides with the bottom of obj2. The objects must have an x1, y1,
     * x2, and y2.
     *
     * @param {Object} obj1 This is the first object in the collision test.
     * @param {Object} obj2 This is the second object in the collision test.
     * @return {boolean} Returns whether there is a collision or not.
     */
    function isCollidingTopLeft(obj1, obj2) {
        return (obj1.x1 > obj2.x1) && (obj1.x1 < obj2.x2) &&
            (obj1.x2 > obj2.x1) && (obj1.x2 > obj2.x2) &&
            (obj1.y1 > obj2.y1) && (obj1.y1 < obj2.y2) &&
            (obj1.y2 > obj2.y1) && (obj1.y2 > obj2.y2);
    }

    /**
     * @name collision.isCollidingTopMiddle
     * @kind function
     *
     * @description Used to determine whether the top-middle of obj1 collides
     * with the bottom of obj2. The objects must have an x1, y1, x2, and y2.
     *
     * @param {Object} obj1 This is the first object in the collision test.
     * @param {Object} obj2 This is the second object in the collision test.
     * @return {boolean} Returns whether there is a collision or not.
     */
    function isCollidingTopMiddle(obj1, obj2) {
        return (obj1.x1 > obj2.x1) && (obj1.x1 < obj2.x2) &&
            (obj1.x2 > obj2.x1) && (obj1.x2 < obj2.x2) &&
            (obj1.y1 < obj2.y1) && (obj1.y1 < obj2.y2) &&
            (obj1.y2 > obj2.y1) && (obj1.y2 < obj2.y2);
    }

    /**
     * @name collision.isCollidingTopRight
     * @kind function
     *
     * @description Used to determine whether the top-right of obj1 collides
     * with the bottom of obj2. The objects must have an x1, y1, x2, and y2.
     *
     * @param {Object} obj1 This is the first object in the collision test.
     * @param {Object} obj2 This is the second object in the collision test.
     * @return {boolean} Returns whether there is a collision or not.
     */
    function isCollidingTopRight(obj1, obj2) {
        return (obj1.x1 < obj2.x1) && (obj1.x1 < obj2.x2) &&
            (obj1.x2 > obj2.x1) && (obj1.x2 < obj2.x2) &&
            (obj1.y1 > obj2.y1) && (obj1.y1 < obj2.y2) &&
            (obj1.y2 > obj2.y1) && (obj1.y2 > obj2.y2);
    }

    /**
     * @name collision.isCollidingTop
     * @kind function
     *
     * @description Used to determine whether the top of obj1 collides with
     * the bottom of obj2. The objects must have an x1, y1, x2, and y2.
     *
     * @param {Object} obj1 This is the first object in the collision test.
     * @param {Object} obj2 This is the second object in the collision test.
     * @return {boolean} Returns whether there is a collision or not.
     */
    function isCollidingTop(obj1, obj2) {
        return isCollidingTopLeft(obj1, obj2) ||
            isCollidingTopMiddle(obj1, obj2) ||
            isCollidingTopRight(obj1, obj2);
    }

    /**
     * @name collision.isCollidingBottomLeft
     * @kind function
     *
     * @description Used to determine whether the left-bottom side of obj1
     * collides with the right side of obj2. The objects must have an x1,
     * y1, x2, and y2.
     *
     * @param {Object} obj1 This is the first object in the collision test.
     * @param {Object} obj2 This is the second object in the collision test.
     * @return {boolean} Returns whether there is a collision or not.
     */
    function isCollidingBottomLeft(obj1, obj2) {
        return (obj1.x1 > obj2.x1) && (obj1.x1 < obj2.x2) &&
            (obj1.x2 > obj2.x1) && (obj1.x2 > obj2.x2) &&
            (obj1.y1 < obj2.y1) && (obj1.y1 < obj2.y2) &&
            (obj1.y2 > obj2.y1) && (obj1.y2 < obj2.y2);
    }

    /**
     * @name collision.isCollidingBottomMiddle
     * @kind function
     *
     * @description Used to determine whether the bottom-middle side of
     * obj1 collides with the top of obj2. The objects must have an x1,
     * y1, x2, and y2.
     *
     * @param {Object} obj1 This is the first object in the collision test.
     * @param {Object} obj2 This is the second object in the collision test.
     * @return {boolean} Returns whether there is a collision or not.
     */
    function isCollidingBottomMiddle(obj1, obj2) {
        return (obj1.x1 > obj2.x1) && (obj1.x1 < obj2.x2) &&
            (obj1.x2 > obj2.x1) && (obj1.x2 < obj2.x2) &&
            (obj1.y1 > obj2.y1) && (obj1.y1 < obj2.y2) &&
            (obj1.y2 > obj2.y1) && (obj1.y2 > obj2.y2);
    }

    /**
     * @name collision.isCollidingBottomRight
     * @kind function
     *
     * @description Used to determine whether the right-bottom side of
     * obj1 collides with the left side of obj2. The objects must have an
     * x1, y1, x2, and y2.
     *
     * @param {Object} obj1 This is the first object in the collision test.
     * @param {Object} obj2 This is the second object in the collision test.
     * @return {boolean} Returns whether there is a collision or not.
     */
    function isCollidingBottomRight(obj1, obj2) {
        return (obj1.x1 < obj2.x1) && (obj1.x1 < obj2.x2) &&
            (obj1.x2 > obj2.x1) && (obj1.x2 < obj2.x2) &&
            (obj1.y1 < obj2.y1) && (obj1.y1 < obj2.y2) &&
            (obj1.y2 > obj2.y1) && (obj1.y2 < obj2.y2);
    }

    /**
     * @name collision.isCollidingBottom
     * @kind function
     *
     * @description Used to determine whether the bottom of obj1 collides
     * with the top of obj2. The objects must have an x1, y1, x2, and y2.
     *
     * @param {Object} obj1 This is the first object in the collision test.
     * @param {Object} obj2 This is the second object in the collision test.
     * @return {boolean} Returns whether there is a collision or not.
     */
    function isCollidingBottom(obj1, obj2) {
        return isCollidingBottomLeft(obj1, obj2) ||
            isCollidingBottomMiddle(obj1, obj2) ||
            isCollidingBottomRight(obj1, obj2);
    }

    /**
     * @name collision.isCollidingMiddleRight
     * @kind function
     *
     * @description Used to determine whether the right-middle side of obj1
     * collides with the left side of obj2. The objects must have an x1, y1,
     * x2, and y2. This function will return true only if the collision occurs
     * when the obj2 side is larger than the obj1 side.
     *
     * @param {Object} obj1 This is the first object in the collision test.
     * @param {Object} obj2 This is the second object in the collision test.
     * @return {boolean} Returns whether there is a collision or not.
     */
    function isCollidingMiddleRight(obj1, obj2) {
        return (obj1.x1 < obj2.x1) && (obj1.x1 < obj2.x2) &&
            (obj1.x2 > obj2.x1) && (obj1.x2 < obj2.x2) &&
            (obj1.y1 > obj2.y1) && (obj1.y1 < obj2.y2) &&
            (obj1.y2 > obj2.y1) && (obj1.y2 < obj2.y2);
    }

    /**
     * @name collision.isCollidingRight
     * @kind function
     *
     * @description Used to determine whether the right side of obj1 collides
     * with the left side of obj2. The objects must have an x1, y1, x2, and y2.
     *
     * @param {Object} obj1 This is the first object in the collision test.
     * @param {Object} obj2 This is the second object in the collision test.
     * @return {boolean} Returns whether there is a collision or not.
     */
    function isCollidingRight(obj1, obj2) {
        return isCollidingMiddleRight(obj1, obj2);
    }

    /**
    * @name collision.isCollidingMiddleLeft
    * @kind function
    *
    * @description Used to determine whether the left-middle side of obj1
    * collides with the right side of obj2. The objects must have an x1,
    * y1, x2, and y2. This function will return true only if the collision
    * occurs when the obj2 side is larger than the obj1 side.
    *
    * @param {Object} obj1 This is the first object in the collision test.
    * @param {Object} obj2 This is the second object in the collision test.
    * @return {boolean} Returns whether there is a collision or not.
    */
    function isCollidingMiddleLeft(obj1, obj2) {
        return (obj1.x1 > obj2.x1) && (obj1.x1 < obj2.x2) &&
            (obj1.x2 > obj2.x1) && (obj1.x2 > obj2.x2) &&
            (obj1.y1 > obj2.y1) && (obj1.y1 < obj2.y2) &&
            (obj1.y2 > obj2.y1) && (obj1.y2 < obj2.y2);
    }

    /**
    * @name collision.isCollidingLeft
    * @kind function
    *
    * @description Used to determine whether the left side of obj1 collides
    * with the right side of obj2. The objects must have an x1, y1, x2, and y2.
    *
    * @param {Object} obj1 This is the first object in the collision test.
    * @param {Object} obj2 This is the second object in the collision test.
    * @return {boolean} Returns whether there is a collision or not.
    */
    function isCollidingLeft(obj1, obj2) {
        return isCollidingMiddleLeft(obj1, obj2);
    }

    /**
    * @name collision.isCollidingTopOrBottom
    * @kind function
    *
    * @description This function is to be used to determine whether two objects
    * collide on the top or bottom. The objects must have an x1, y1, x2, and y2.
    *
    * @param {Object} obj1 This is the first object in the collision test.
    * @param {Object} obj2 This is the second object in the collision test.
    * @return {boolean} Returns whether there is a collision or not.
    */
    function isCollidingTopOrBottom(obj1, obj2) {
        return isCollidingTop(obj1, obj2) || isCollidingBottom(obj1, obj2);
    }

    /**
    * @name collision.isCollidingRightOrLeft
    * @kind function
    *
    * @description This function is to be used to determine whether two objects
    * collide on the right or left sides. The objects must have an x1, y1, x2,
    * and y2.
    *
    * @param {Object} obj1 This is the first object in the collision test.
    * @param {Object} obj2 This is the second object in the collision test.
    * @return {boolean} Returns whether there is a collision or not.
    */
    function isCollidingRightOrLeft(obj1, obj2) {
        return isCollidingRight(obj1, obj2) || isCollidingLeft(obj1, obj2);
    }

    /**
    * @name collision.isColliding
    * @kind function
    *
    * @description This function is to be used to determine whether two objects
    * collide. The objects must have an x1, y1, x2, and y2.
    *
    * @param {Object} obj1 This is the first object in the collision test.
    * @param {Object} obj2 This is the second object in the collision test.
    * @return {boolean} Returns whether there is a collision or not.
    */
    function isColliding(obj1, obj2) {
        return isCollidingTopOrBottom(obj1, obj2) ||
            isCollidingRightOrLeft(obj1, obj2);
    }

    var collision = {
        isCollidingTopLeft: function (obj1, obj2) {
            return isCollidingTopLeft(obj1, obj2);
        },
        isCollidingTopMiddle: function (obj1, obj2) {
            return isCollidingTopMiddle(obj1, obj2);
        },
        isCollidingTopRight: function (obj1, obj2) {
            return isCollidingMiddleLeft(obj1, obj2);
        },
        isCollidingTop: function (obj1, obj2) {
            return isCollidingTop(obj1, obj2);
        },
        isCollidingBottomLeft: function (obj1, obj2) {
            return isCollidingBottomLeft(obj1, obj2);
        },
        isCollidingBottomMiddle: function (obj1, obj2) {
            return isCollidingBottomMiddle(obj1, obj2);
        },
        isCollidingBottomRight: function (obj1, obj2) {
            return isCollidingBottomRight(obj1, obj2);
        },
        isCollidingBottom: function (obj1, obj2) {
            return isCollidingBottom(obj1, obj2);
        },
        isCollidingMiddleRight: function (obj1, obj2) {
            return isCollidingMiddleRight(obj1, obj2);
        },
        isCollidingRight: function (obj1, obj2) {
            return isCollidingRight(obj1, obj2);
        },
        isCollidingMiddleLeft: function (obj1, obj2) {
            return isCollidingMiddleLeft(obj1, obj2);
        },
        isCollidingLeft: function (obj1, obj2) {
            return isCollidingLeft(obj1, obj2);
        },
        isCollidingTopOrBottom: function (obj1, obj2) {
            return isCollidingTopOrBottom(obj1, obj2);
        },
        isCollidingRightOrLeft: function (obj1, obj2) {
            return isCollidingRightOrLeft(obj1, obj2);
        },
        isColliding: function (obj1, obj2) {
            return isColliding(obj1, obj2);
        }
    };

    return collision;
}());