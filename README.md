# collision.js

collision.js is a JavaScript library for use for collision detection to use for HTML5 Canvas games. The library is in beta right now so it should only be used for testing purposes. Happy colliding!

## Usage

```javascript
import { isColliding } from 'collision.js'

const obj1 = {
  x1: 0,
  x2: 10,
  y1: 0,
  y2: 10
}

const obt2 = {
  x1: 5,
  x2: 15,
  y1: 5,
  y2: 15
}

if (isColliding(obj1, obj2)) {
  obj1.x1 += 1
  obj1.x2 += 1
  ...
}
```