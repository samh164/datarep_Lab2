class Bmi {
    constructor(height, weight) {
        this.height = height;
        this.weoght = weight;

    }


    calculateBmi() {
        let bmi = this.weight / (this.height ** 2);
    }
}

let MyBmi = new Bmi(2,90);
let calculatedBmi = MyBmi.calculateBmi();
console.log(calculatedBmi);