import CollisionObject from '../../collision-object'

/**
 * isCollidingMiddleRight()
 * ------------------------
 * Used to determine whether the right-middle side of obj1 collides with
 * the left side of obj2. The objects must have an x1, y1, x2, and y2.
 *
 * @param {CollisionObject} obj1 This is the first object in the collision test.
 * @param {CollisionObject} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
const isCollidingMiddleRight = (obj1: CollisionObject, obj2: CollisionObject): boolean => {
  return isCollidingMiddleRightSmaller(obj1, obj2) || isCollidingMiddleRightLarger(obj1, obj2)
}

const isCollidingMiddleRightSmaller = (obj1: CollisionObject, obj2: CollisionObject): boolean => {
  return (obj1.x1 < obj2.x1) && (obj1.x1 < obj2.x2) &&
    (obj1.x2 > obj2.x1) && (obj1.x2 < obj2.x2) &&
    (obj1.y1 < obj2.y1) && (obj1.y1 < obj2.y2) &&
    (obj1.y2 > obj2.y1) && (obj1.y2 > obj2.y2)
}

const isCollidingMiddleRightLarger = (obj1: CollisionObject, obj2: CollisionObject): boolean => {
  return (obj1.x1 < obj2.x1) && (obj1.x1 < obj2.x2) &&
    (obj1.x2 > obj2.x1) && (obj1.x2 < obj2.x2) &&
    (obj1.y1 > obj2.y1) && (obj1.y1 < obj2.y2) &&
    (obj1.y2 > obj2.y1) && (obj1.y2 < obj2.y2)
}

export default isCollidingMiddleRight
