import CollisionObject from '../../../../shared/models/collision-object';
import isCollidingMiddleLeftSmaller from '.';

const leftObject: CollisionObject = {
  x1: 2,
  y1: 2,
  x2: 7,
  y2: 13,
};

const rightObject: CollisionObject = {
  x1: 4,
  y1: 4,
  x2: 11,
  y2: 11,
};

it('should return true if obj2 collides with the middle left of obj1 and obj1 is smaller than obj2', () => {
  expect(isCollidingMiddleLeftSmaller(rightObject, leftObject)).toBe(true);
});
