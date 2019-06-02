import isCollidingMiddleRight from '.'
import { expect } from 'chai';

describe('isCollidingMiddleRight tests', () => {
  it('should return true if obj2 collides with the middle right of obj1 and obj2 is smaller than obj1', () => {
    const object1 = {
      x1: 0,
      x2: 10,
      y1: 0,
      y2: 10
    }
      
    const object2 = {
      x1: 5,
      x2: 15,
      y1: 5,
      y2: 7
    }

    expect(isCollidingMiddleRight(object1, object2)).to.be.true
  })

  it('should return true if obj2 collides with the middle right of obj1 is larger than obj1', () => {
    const object1 = {
      x1: 0,
      x2: 10,
      y1: 5,
      y2: 10
    }
      
    const object2 = {
      x1: 5,
      x2: 15,
      y1: 0,
      y2: 15
    }

    expect(isCollidingMiddleRight(object1, object2)).to.be.true
  })
})
