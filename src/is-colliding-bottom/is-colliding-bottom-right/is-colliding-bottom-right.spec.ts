import isCollidingBottomRight from './is-colliding-bottom-right'
import { expect } from 'chai';

describe('isCollidingBottomRight tests', function() {
  it('should return true if object2 collides with the bottom right of object1', function() {
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
      y2: 15
    }

    expect(isCollidingBottomRight(object1, object2)).to.be.true
  })
})