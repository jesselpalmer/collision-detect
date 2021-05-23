import CollisionObject from '../../../shared/models/collision-object';
import isCollidingMiddleRight from '.';

it('should return true if obj2 collides with the middle right of obj1 and obj2 is smaller than obj1', () => {
  const obj1: CollisionObject = {
    x1: 0,
    x2: 10,
    y1: 0,
    y2: 10,
  };

  const obj2: CollisionObject = {
    x1: 5,
    x2: 15,
    y1: 5,
    y2: 7,
  };

  expect(isCollidingMiddleRight(obj1, obj2)).toBe(true);
});

it('should return true if obj2 collides with the middle right of obj1 is larger than obj1', () => {
  const obj1: CollisionObject = {
    x1: 0,
    x2: 10,
    y1: 5,
    y2: 10,
  };

  const obj2: CollisionObject = {
    x1: 5,
    x2: 15,
    y1: 0,
    y2: 15,
  };

  expect(isCollidingMiddleRight(obj1, obj2)).toBe(true);
});
