import CollisionObject from './collision-object'
import { isCollidingBottom } from './is-colliding-bottom'
import isCollidingMiddleLeft from './is-colliding-left'
import isCollidingMiddleRight from './is-colliding-right'
import { isCollidingTop } from './is-colliding-top'

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
const isCollidingTopOrBottom = (obj1: CollisionObject, obj2: CollisionObject): boolean => {
  return isCollidingTop(obj1, obj2) || isCollidingBottom(obj1, obj2)
}

/**
 * isCollidingMiddleRightOrLeft()
 * ------------------------------
 * This function is to be used to determine whether two objects collide on the
 * right or left sides. The objects must have an x1, y1, x2, and y2.
 *
 * @param {CollisionObject} obj1 This is the first object in the collision test.
 * @param {CollisionObject} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
const isCollidingMiddleRightOrLeft = (obj1: CollisionObject, obj2: CollisionObject): boolean => {
  return isCollidingMiddleRight(obj1, obj2) || isCollidingMiddleLeft(obj1, obj2)
}

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
const isColliding = (obj1: CollisionObject, obj2: CollisionObject): boolean => {
  return isCollidingTopOrBottom(obj1, obj2) || isCollidingMiddleRightOrLeft(obj1, obj2)
}

export { isColliding, isCollidingMiddleRightOrLeft, isCollidingTopOrBottom }
