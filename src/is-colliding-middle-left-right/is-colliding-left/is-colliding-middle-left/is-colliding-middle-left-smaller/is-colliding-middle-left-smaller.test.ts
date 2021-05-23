import {middleLeftSmaller} from '../../../../shared/testing/test-data';
import isCollidingMiddleLeftSmaller from '.';

it('should return true if obj2 collides with the middle left of obj1 and obj1 is smaller than obj2', () => {
  expect(
    isCollidingMiddleLeftSmaller(middleLeftSmaller.obj1, middleLeftSmaller.obj2)
  ).toBe(true);
});
