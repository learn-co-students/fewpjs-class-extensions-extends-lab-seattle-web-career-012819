// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get getCount() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((total, side) => {
      return total += side;
    }, 0);
  }
}

class Triangle extends Polygon{
  get isValid() {
    return (this.sides[0] < (this.sides[1] + this.sides[2])) ? true : false;
  }
}

class Square extends Polygon {
  get isValid() {
    let checkSide = this.sides[0];
    this.sides.forEach((side) => {
      if (side !== checkSide) {
        return false;
      }
    });
    return true;
  }

  get area() {
    return this.sides[0] ** 2;
  }
}