class Rectangel {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}

let rec1 = new Rectangel(4,4);
console.log(rec1.getArea());


class Triangle {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}

let tri1 = new Triangle(4,5);
console.log(tri1.getArea());