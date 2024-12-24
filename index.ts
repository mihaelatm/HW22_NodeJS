// Task 1

abstract class Animal {
  abstract makeSound(): string;
}

class Dog extends Animal {
  makeSound(): string {
    return "Woof!";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow!";
  }
}

const animals: Animal[] = [new Dog(), new Cat()];

animals.forEach((animal) => {
  console.log(animal.makeSound());
});

// Task 2

abstract class Shape {
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  radius: number;
  color: string;

  constructor(radius: number, color: string) {
    super();
    this.radius = radius;
    this.color = color;
  }
  calculateArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class ColoredRectangle extends ColoredShape {
  width: number;
  height: number;
  color: string;

  constructor(width: number, height: number, color: string) {
    super();
    this.width = width;
    this.height = height;
    this.color = color;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

const shapes: ColoredShape[] = [
  new ColoredCircle(5, "Red"),
  new ColoredRectangle(3, 4, "Blue"),
];

shapes.forEach((shape) => {
  console.log(` Color: ${shape.color}, Area: ${shape.calculateArea()}`);
});

// Task 3

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn(): void {
    console.log("Washing machine is on");
  }
  turnOff(): void {
    console.log("Washing machine is off");
  }
}

class Refrigerator extends Appliance {
  turnOn(): void {
    console.log("Refrigerator is on");
  }
  turnOff(): void {
    console.log("Refrigerator is off");
  }
}

const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];

appliances.forEach((appliance) => {
  appliance.turnOn();
  appliance.turnOff();
});

// Task 4

abstract class Account {
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance is ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(`Withdraw ${amount}. New balance is ${this.balance}`);
    } else {
      console.log("Insufficient funds");
    }
  }
}

class CheckingAccount extends Account {
  private balance: number = 0;
  private fee = 1.5;

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ${amount}. New balance is ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (this.balance >= amount + this.fee) {
      this.balance -= amount + this.fee;
      console.log(`Withdraw ${amount}. New balance is ${this.balance}`);
    } else {
      console.log("Insufficient funds, including fee");
    }
  }
}

const savingsAccount = new SavingsAccount();
savingsAccount.deposit(100);
savingsAccount.withdraw(50);

const checkingAccount = new CheckingAccount();
checkingAccount.deposit(100);
checkingAccount.withdraw(50);
checkingAccount.withdraw(60); // Проверка недостатка средств
