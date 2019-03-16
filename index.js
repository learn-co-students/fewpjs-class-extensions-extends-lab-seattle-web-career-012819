class Polygon {
  constructor(sides){
    this.sides = sides
    this.count = this.sides.length
  }

  get getCount(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((total,int)=> int + total)

  }

}

class Triangle extends Polygon {
  get isValid(){
    if (this.count !== 3) return false;
  const [bottom, right, hyp] = this.sides.sort((a, b) => a - b);
  return bottom + right >= hyp;
  }
}

class Square extends Polygon {
  get area(){
    return (this.sides[0] **2)
  }
  get isValid() {
    if ( this.count !== 4 ) return;
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    let side4 = this.sides[3]
    return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }
}
