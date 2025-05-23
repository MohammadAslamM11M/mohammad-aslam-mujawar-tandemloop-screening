class Calculator {
  constructor(a, b, typeOfOperation) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.typeOfOperation = typeOfOperation.toLowerCase();
  }

  calculate() {
    switch (this.typeOfOperation) {
      case "add":
        return this.a + this.b;
      case "subtract":
        return this.a - this.b;
      case "multiply":
        return this.a * this.b;
      case "divide":
        if (this.b === 0) return "Division by zero is not possible";
        else return this.a / this.b;
      default:
        return "Type of Operation is invalid";
    }
  }
}

const calcuation1 = new Calculator(5.5, 2.5, "add");
console.log("Addition:", calcuation1.calculate());

const calcuation2 = new Calculator(5.0, 2.0, "divide");
console.log("Division:", calcuation2.calculate());
