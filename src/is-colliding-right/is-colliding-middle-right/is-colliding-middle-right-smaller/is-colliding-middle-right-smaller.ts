import CollisionObject from '../../../collision-object'

const isCollidingMiddleRightLarger = (obj1: CollisionObject, obj2: CollisionObject): boolean => {
  return (obj1.x1 < obj2.x1) && (obj1.x1 < obj2.x2) &&
    (obj1.x2 > obj2.x1) && (obj1.x2 < obj2.x2) &&
    (obj1.y1 > obj2.y1) && (obj1.y1 < obj2.y2) &&
    (obj1.y2 > obj2.y1) && (obj1.y2 < obj2.y2)
}

export default isCollidingMiddleRightLarger
