import CollisionObject from '../../../shared/models/collision-object';
import isCollidingMiddleRightLarger from './is-colliding-middle-right-larger';
import isCollidingMiddleRightSmaller from './is-colliding-middle-right-smaller';

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
const isCollidingMiddleRight = (
  obj1: CollisionObject,
  obj2: CollisionObject
): boolean => {
  return (
    isCollidingMiddleRightSmaller(obj1, obj2) ||
    isCollidingMiddleRightLarger(obj1, obj2)
  );
};

export default isCollidingMiddleRight;
