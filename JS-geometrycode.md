# Code for Geometry Students

The Goal: getting a geometry calculator with code as DRY and interactive as possible
(reference Khan Academy?)

- create classes
- add prompts to get values
- diff classes for diff shape types? or one for 2D one for 3D?
- add code to draw shape?
- what about angles...

## Initial Idea

class Rectangle {
constructor(height, width){
this.height = height;
this.width = width;
}
getArea() {
return this.height * this.width;
};
getPerimeter() {
return (2 * this.height) + (2 * this.width);
};
}

// add prompt somehow

let recOne = new Rectangle(2, 10);
console.log(recOne);
console.log(recOne.getArea());
console.log(recOne.getPerimeter());
