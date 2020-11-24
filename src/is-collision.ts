import CollisionObject from './shared/models/collision-object'
import isCollidingTopOrBottom from './is-colliding-top-bottom'
import isCollidingMiddleRightOrLeft from './is-colliding-middle-left-right'

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

export default isColliding
