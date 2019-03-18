class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get getCount() {
    return this.sides.length
  }

  get perimeter() {
    let sum = 0
    for (let i = 0; i < this.sides.length; i++) {
      sum += this.sides[i]
    }
    return sum
  }

}

class Triangle extends Polygon {

  get isValid() {
    return this.getCount === 3 &&
      this.sides[0] + this.sides[1] > this.sides[2] &&
      this.sides[0] + this.sides[2] > this.sides[1] &&
      this.sides[1] + this.sides[2] > this.sides[0]
  }
}

class Square extends Polygon {
  get isValid() {
    return this.getCount === 4 &&
      this.sides[0] === this.sides[1] &&
      this.sides[1] === this.sides[2] &&
      this.sides[2] === this.sides[3]
  }

  get area() {
    return this.sides[0] * this.sides[1]
  }
}
