/**
 * @fileoverview This is a library to detect collisions between two objects.
 * @author Jesse Palmer
 */

import { isCollidingBottom, isCollidingBottomLeft, isCollidingBottomMiddle,
  isCollidingBottomRight } from './is-colliding-top-bottom/is-colliding-bottom'
import { isCollidingTop, isCollidingTopLeft, isCollidingTopMiddle, isCollidingTopRight } from './is-colliding-top-bottom/is-colliding-top'
import isCollidingMiddleLeftRight from './is-colliding-middle-left-right'
import isCollidingTopOrBottom from './is-colliding-top-bottom'
import isColliding from './is-collision'

export default {
  isColliding,
  isCollidingBottom,
  isCollidingBottomLeft,
  isCollidingBottomMiddle,
  isCollidingBottomRight,
  isCollidingMiddleLeftRight,
  isCollidingTop,
  isCollidingTopLeft,
  isCollidingTopMiddle,
  isCollidingTopOrBottom,
  isCollidingTopRight,
}
