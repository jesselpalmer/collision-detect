import { expect } from 'chai'

import CollisionObject from '../../../../shared/collision-object'
import isCollidingMiddleLeftSmaller from '.'

describe('isCollidingMiddleLeftSmaller tests', () => {
  it('should return true if obj2 collides with the middle left of obj1 and obj1 is smaller than obj2', () => {
    const obj1: CollisionObject = {
      x1: 6,
      x2: 12,
      y1: 5,
      y2: 9,
    }

    const obj2: CollisionObject = {
      x1: 3,
      x2: 10,
      y1: 3,
      y2: 11,
    }

    expect(isCollidingMiddleLeftSmaller(obj1, obj2)).to.equal(true)
  })
})
