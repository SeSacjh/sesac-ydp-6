class Shape {
    constructor (width, height) {
        this.width = width;
        this.height = height;        
    }
    getArea() {
        let result = this.width * this.height;
        return result;
    }
}
// let rec1 = new Shape(3,4);
// console.log(rec1.getArea());
// ------------------------------------------------------
class Rectangel extends Shape {
    constructor (width, height) {
        super(width,height)
    }
    getArea() {
        return this.width * this.height;
    }

    getSqrt() {
        return Math.sqrt(this.width**2 + this.height**2)
    }
}

// ------------------------------------------------------
class Triangle {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

// ------------------------------------------------------
class Circle extends Shape {
    constructor (width, height, radius) {
        super(width, height)
        this.radius = radius;
    }
    getArea() {        
        let area = this.radius * this.radius * Math.PI;
        return area;
    }
}

let rec = new Rectangel(2, 4);
let tri = new Triangle(5, 2);
let cir = new Circle(4, 4, 3);
console.log(rec.getArea());
console.log(tri.getArea());
console.log(cir.getArea());