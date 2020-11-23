import CollisionObject from '../../shared/collision-object'
import isCollidingBottomLeft from './is-colliding-bottom-left'
import isCollidingBottomMiddle from './is-colliding-bottom-middle'
import isCollidingBottomRight from './is-colliding-bottom-right'

/**
 * isCollidingBottom()
 * -------------------
 * Used to determine whether the bottom of obj1 collides with the top of
 * obj2. The objects must have an x1, y1, x2, and y2.
 *
 * @param {CollisionObject} obj1 This is the first object in the collision test.
 * @param {CollisionObject} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
const isCollidingBottom = (obj1: CollisionObject, obj2: CollisionObject): boolean => {
  return isCollidingBottomLeft(obj1, obj2) ||
      isCollidingBottomMiddle(obj1, obj2) ||
      isCollidingBottomRight(obj1, obj2)
}

export default isCollidingBottom
