import isCollidingBottomLeft from '.'
import { expect } from 'chai';

describe('isCollidingBottomLeft tests', () => {
  it('should return true if object2 collides with the bottom left of object1', () => {     
    const object1 = {
      x1: 5,
      x2: 15,
      y1: 0,
      y2: 10
    }

    const object2 = {
      x1: 0,
      x2: 10,
      y1: 5,
      y2: 15
    }
    
    expect(isCollidingBottomLeft(object1, object2)).to.be.true
  })
})
