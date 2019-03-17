class Polygon {
	constructor(numbers) {
		this.numbers = numbers;
		this.count = this.numbers.length;
	}

	get getCount() {
		return this.numbers.length;
	}

	get perimeter() {
		return this.numbers.reduce((total, num) => total + num);
	}
}

class Triangle extends Polygon {
	get isValid() {
		let side1 = this.numbers[0];
		let side2 = this.numbers[1];
		let side3 = this.numbers[2];
		return side1 === side2 && side1 === side3 && side2 === side3;
	}
}

class Square extends Polygon {
	get isValid() {
		let side1 = this.numbers[0];
		let side2 = this.numbers[1];
		let side3 = this.numbers[2];
		let side4 = this.numbers[3];
		return side1 === side2 && side1 === side3 && side1 === side4;
	}

	get area() {
		let side1 = this.numbers[0];
		let side2 = this.numbers[1];
		return side1 * side2;
	}
}
