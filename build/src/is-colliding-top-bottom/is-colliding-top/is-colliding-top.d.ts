import CollisionObject from '../../shared/models/collision-object';
/**
 * isCollidingTop()
 * ----------------
 * Used to determine whether the top of obj1 collides with the bottom of
 * obj2. The objects must have an x1, y1, x2, and y2.
 *
 * @param {CollisionObject} obj1 This is the first object in the collision test.
 * @param {CollisionObject} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
declare const isCollidingTop: (obj1: CollisionObject, obj2: CollisionObject) => boolean;
export default isCollidingTop;
