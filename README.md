[![npm](https://img.shields.io/npm/dw/CollisionDetect.svg)](https://www.npmjs.com/package/CollisionDetect) [![Node.js CI](https://github.com/jesselpalmer/CollisionDetect/actions/workflows/nodejs-ci.yml/badge.svg)](https://github.com/jesselpalmer/CollisionDetect/actions/workflows/nodejs-ci.yml/)

# CollisionDetect

CollisionDetect is a JavaScript library designed specifically for collision
detection. Happy colliding!

## Installation

To install CollisionDetect using npm:

```bash
npm install CollisionDetect --save
```

Then, in your JavaScript file:

```javascript
import {isCollidingWith} from 'CollisionDetect';
```

Note: Ensure you have Node.js and npm installed on your machine before
attempting the installation.

## Usage

At present, the library supports collision detection for squares and rectangles.

To leverage the library, it's required for objects to have the properties:
`x1`, `x2`, `y1`, and `y2`. Though they can have other properties or methods,
these are required for the collision detection to work.

### Simple object example

```javascript
import {isCollidingWith} from 'CollisionDetect';

let obj1 = {
  x1: 0,
  x2: 10,
  y1: 0,
  y2: 10,
};

let obj2 = {
  x1: 5,
  x2: 15,
  y1: 5,
  y2: 15,
};

if (isCollidingWith(obj1, obj2)) {
  // collision detected!
  obj1.x1 += 1;
  obj1.x2 += 1;
}
```

### Slightly more complex example

```javascript
import {isCollidingWith} from 'CollisionDetect';

class Rectangle {
  constructor(x1, x2, y1, y2) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
  }

  moveRight() {
    this.x1++;
    this.x2++;
  }
}

class Square extends Rectangle {
  constructor(...args) {
    super(...args);
  }
}

const rectangle = new Rectangle(5, 15, 5, 15);
const square = new Square(0, 10, 0, 10);

if (isCollidingWith(square, rectangle)) {
  // collision detected!
  square.moveRight();
}
```
