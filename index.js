class Polygon {constructor(sidesArray) {
  this.sides = sidesArray
  this.count = this.sides.length
  }

  get getCount() {
    return this.sides.length
  }

  get perimeter() {
    let total = 0;
    for (let number of this.sides ) {
      total += number
    }
    return total
  }
}

class Triangle extends Polygon {

  get isValid() {
    if ( !Array.isArray( this.sides ) ) return;
   if ( this.count !== 3 ) return;
   let side1 = this.sides[ 0 ]
   let side2 = this.sides[ 1 ]
   let side3 = this.sides[ 2 ]
   return (( side1 === side2 ) && ( side1 === side3 ) && ( side2 === side3 ))
 }
}

class Square extends Polygon {
  get isValid() {
    if ( !Array.isArray( this.sides ) ) return;
    if ( this.count !== 4 ) return;
    let side1 = this.sides[ 0 ]
    let side2 = this.sides[ 1 ]
    let side3 = this.sides[ 2 ]
    let side4 = this.sides[ 3 ]
    return (( side1 === side2 ) && ( side1 === side3 ) && ( side1 === side4 ))
  }
  get area() {
    if ( !Array.isArray( this.sides ) ) return;
    if ( this.count !== 4 ) return;
    return this.sides[ 0 ] * this.sides[ 0 ]
  }
}
