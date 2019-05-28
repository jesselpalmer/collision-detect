import { isCollidingBottom } from './is-colliding-bottom'
import isCollidingMiddleLeft from './is-colliding-left'
import isCollidingMiddleRight from './is-colliding-right'
import { isCollidingTop } from './is-colliding-top'

/**
 * This function is to be used to determine whether two objects collide on the
 * top or bottom. The objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
const isCollidingTopOrBottom = (obj1, obj2) => {
  return isCollidingTop(obj1, obj2) || isCollidingBottom(obj1, obj2)
}

/**
 * This function is to be used to determine whether two objects collide on the
 * right or left sides. The objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
const isCollidingMiddleRightOrLeft = (obj1, obj2) => {
  return isCollidingMiddleRight(obj1, obj2) || isCollidingMiddleLeft(obj1, obj2)
}

/**
 * This function is to be used to determine whether two objects collide. The
 * objects must have an x1, y1, x2, and y2.
 * @param {Object} obj1 This is the first object in the collision test.
 * @param {Object} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
const isColliding = (obj1, obj2) => {
  return isCollidingTopOrBottom(obj1, obj2) || isCollidingMiddleRightOrLeft(obj1, obj2)
}

export { isColliding, isCollidingMiddleRightOrLeft, isCollidingTopOrBottom }
