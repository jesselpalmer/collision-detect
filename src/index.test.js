import {isCollidingWith} from './index.js';

describe('isCollidingWith', () => {
  it('should detect when two boxes are colliding', () => {
    const boxA = {x1: 0, x2: 10, y1: 0, y2: 10};
    const boxB = {x1: 5, x2: 15, y1: 5, y2: 15};

    expect(isCollidingWith(boxA, boxB)).toBe(true);
  });

  it('should detect when two boxes are not colliding', () => {
    const boxA = {x1: 0, x2: 10, y1: 0, y2: 10};
    const boxB = {x1: 11, x2: 21, y1: 11, y2: 21};

    expect(isCollidingWith(boxA, boxB)).toBe(false);
  });

  it('should detect when two boxes are just touching', () => {
    const boxA = {x1: 0, x2: 10, y1: 0, y2: 10};
    const boxB = {x1: 10, x2: 20, y1: 10, y2: 20};

    expect(isCollidingWith(boxA, boxB)).toBe(false);
  });
});
