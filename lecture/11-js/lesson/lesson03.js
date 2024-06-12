class Shape {
    constructor (inch) {
        this.inch = inch;        
    }
    getArea() {
        return Math.sqrt(this.inch**2);
    }
}

let rec1 = new Shape(4);
console.log(rec1.getArea());