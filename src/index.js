export const isCollidingWith = (boxA, boxB) => {
  return (
    boxA.x1 < boxB.x2 &&
    boxA.x2 > boxB.x1 &&
    boxA.y1 < boxB.y2 &&
    boxA.y2 > boxB.y1
  );
};
