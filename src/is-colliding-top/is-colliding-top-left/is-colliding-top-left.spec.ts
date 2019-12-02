import { expect } from 'chai'
import isCollidingTopLeft from '.'

describe('isCollidingTopLeft tests', () => {
  it('should return true if obj2 collides with the top left of obj1', () => {
    const obj1 = {
      x1: 5,
      x2: 15,
      y1: 5,
      y2: 15,
    }

    const obj2 = {
      x1: 0,
      x2: 10,
      y1: 0,
      y2: 10,
    }

    expect(isCollidingTopLeft(obj1, obj2)).to.equal(true)
  })
})
