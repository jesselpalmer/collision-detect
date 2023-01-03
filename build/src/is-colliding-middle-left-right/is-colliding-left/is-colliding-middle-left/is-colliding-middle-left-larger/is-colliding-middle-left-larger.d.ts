import CollisionObject from '../../../../shared/models/collision-object';
/**
 * isCollidingMiddleLeftLarger()
 * ------------------------------
 * Used to determine whether obj2 collides with the left side of obj1 where the
 * right side of obj2 is larger than the left side of obj1. The objects must
 * have an x1, y1, x2, and y2.
 *
 * @param {CollisionObject} obj1 This is the first object in the collision test.
 * @param {CollisionObject} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
declare const isCollidingMiddleLeftLarger: (obj1: CollisionObject, obj2: CollisionObject) => boolean;
export default isCollidingMiddleLeftLarger;
