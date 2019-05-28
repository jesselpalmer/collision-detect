/**
 * @fileoverview This is a library to detect collisions between two objects.
 * @author Jesse Palmer
 */

import { isCollidingBottom, isCollidingBottomLeft, isCollidingBottomMiddle,
  isCollidingBottomRight } from './is-colliding-bottom'
import { isCollidingTop, isCollidingTopLeft, isCollidingTopMiddle, isCollidingTopRight } from './is-colliding-top'
import { isColliding, isCollidingMiddleRightOrLeft, isCollidingTopOrBottom } from './is-collision'

export default {
  isColliding,
  isCollidingBottom,
  isCollidingBottomLeft,
  isCollidingBottomMiddle,
  isCollidingBottomRight,
  isCollidingMiddleRightOrLeft,
  isCollidingTop,
  isCollidingTopLeft,
  isCollidingTopMiddle,
  isCollidingTopOrBottom,
  isCollidingTopRight,
}
