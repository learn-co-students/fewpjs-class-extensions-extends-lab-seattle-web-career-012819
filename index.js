// Your code here
class Polygon{
  constructor(sides){
    this.sides = sides;

  }

  get getCount(){
    return this.sides.length;
  }

  get perimeter(){
    let total =0;
    for(let i =0; i < this.sides.length; i++){
      total += this.sides[i];
    }
    return total;
  }
}

class Triangle extends Polygon{
  get isValid(){
    // if(this.sides[0] == this.sides[1] && this.sides[1] == this.sides[2]){
    //   return true;
    // }
    // else {
    //   return false;
    // }
    return this.sides[0] == this.sides[1] && this.sides[1] == this.sides[2] ? true : false;
  }
}

class Square extends Polygon{

  get area(){
    return this.sides[0] **2;
  }

  get isValid(){
    return this.sides[0] == this.sides[1] && this.sides[1] == this.sides[2] &&  this.sides[2] == this.sides[3]? true : false;
  }

}
