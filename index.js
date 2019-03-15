class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get getCount() {
    return this.sides.length;
  }

  get perimeter() {
    return this.sides.reduce((acc, v) => acc += v, 0);
  }
}

class Triangle extends Polygon {
  constructor(sides) {
    super(sides);
  }

  get isValid() {
    if (this.count !== 3) return false;
    const [bottom, right, hyp] = this.sides.sort((a, b) => a - b);
    return bottom + right >= hyp;
  }

  get count() {
    return this.getCount;
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.getCount !== 4) return false;
    const sides = this.sides;
    const masterSide = sides[0];
    return sides.every(side => side === masterSide);
  }

  get count() {
    return this.getCount;
  }
  get area() {
    if (this.isValid) return this.sides[0] ** 2;
  }
}