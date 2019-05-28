/**
 * @fileoverview This is a library to detect collisions between two objects.
 * @author Jesse Palmer
 */

import { isColliding, isCollidingMiddleRightOrLeft, isCollidingTopOrBottom } from './is-collision'
import { isCollidingBottom, isCollidingBottomLeft, isCollidingBottomMiddle, isCollidingBottomRight } from './is-colliding-bottom'
import { isCollidingTop, isCollidingTopLeft, isCollidingTopMiddle, isCollidingTopRight } from './is-colliding-top'

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
  isCollidingTopRight
} 
