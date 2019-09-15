# collision.js

collision.js is a JavaScript library for use for collision detection to use for HTML5 Canvas games. The library is in beta right now so it should only be used for testing purposes. Happy colliding!

## Usage

Currently, only squares and rectangles. It is required that both objects contain `x1`, `x2`, `y1`, and `y2`. They can contain other methods as well.

### Simple object example

```javascript
import { isColliding } from 'collision.js'

let obj1 = {
  x1: 0,
  x2: 10,
  y1: 0,
  y2: 10
}

let obt2 = {
  x1: 5,
  x2: 15,
  y1: 5,
  y2: 15
}

if (isColliding(obj1, obj2)) {
  obj1.x1 += 1
  obj1.x2 += 1
}
```

### Slightly more complex example

```javascript
import { isColliding } from 'collision.js'

class Square {
  constructor(x1, x2, y1, y2) {
    this.x1 = x1
    this.x2 = x2
    this.y1 = y1
    this.y2 = y2
  }

  moveRight() {
    this.x1++
    this.x2++
  }
}

class Rectangle extends Square {
  constructor(...args) {
    super(...args)
  }
}

const square = new Square(0, 10, 0, 10)
const rectangle = new Rectangle(5, 15, 5, 15)

if (isColliding(square, rectangle)) {
  square.moveRight()
}
```
