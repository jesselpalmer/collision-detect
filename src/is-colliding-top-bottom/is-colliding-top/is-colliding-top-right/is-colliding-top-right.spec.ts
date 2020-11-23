import { expect } from 'chai'

import CollisionObject from '../../../collision-object'
import isCollidingTopRight from '.'

describe('isCollidingTopRight tests', () => {
  it('should return true if obj2 collides with the top right of obj1', () => {
    const obj1: CollisionObject = {
      x1: 0,
      x2: 10,
      y1: 5,
      y2: 15,
    }

    const obj2: CollisionObject = {
      x1: 5,
      x2: 15,
      y1: 0,
      y2: 10,
    }

    expect(isCollidingTopRight(obj1, obj2)).to.equal(true)
  })
})
