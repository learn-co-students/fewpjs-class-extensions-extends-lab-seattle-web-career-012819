class Polygon {
  constructor(sidesArray) {
    this.sidesArray = sidesArray;
  }

  get getCount() {
    return this.sidesArray.length;
  }

  get perimeter() {
    return this.sidesArray.reduce((a, b) => a + b);
  }
}

class Triangle extends Polygon {
  get isValid() {
    let maxSide = Math.max(...this.sidesArray);
    let otherSides = this.perimeter - maxSide;

    return otherSides > maxSide;
  }
}

class Square extends Polygon {
  get isValid() {
    return this.perimeter % 4 == 0
  }

  get area() {
    return (this.perimeter / 4) ** 2
  }
}
