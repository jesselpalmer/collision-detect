import CollisionObject from '../../../shared/models/collision-object'
import isCollidingTopiddle from '.'

test('should return true if obj2 collides with the top middle of obj1', () => {
  const obj1: CollisionObject = {
    x1: 0,
    x2: 10,
    y1: 5,
    y2: 15,
  }

  const obj2: CollisionObject = {
    x1: 5,
    x2: 8,
    y1: 0,
    y2: 10,
  }

  expect(isCollidingTopiddle(obj1, obj2)).toBe(true)
})
