// Task 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        return "Woof!";
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        return "Meow!";
    };
    return Cat;
}(Animal));
var animals = [new Dog(), new Cat()];
animals.forEach(function (animal) {
    console.log(animal.makeSound());
});
// Task 2
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var ColoredShape = /** @class */ (function (_super) {
    __extends(ColoredShape, _super);
    function ColoredShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ColoredShape;
}(Shape));
var ColoredCircle = /** @class */ (function (_super) {
    __extends(ColoredCircle, _super);
    function ColoredCircle(radius, color) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        _this.color = color;
        return _this;
    }
    ColoredCircle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    return ColoredCircle;
}(ColoredShape));
var ColoredRectangle = /** @class */ (function (_super) {
    __extends(ColoredRectangle, _super);
    function ColoredRectangle(width, height, color) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        _this.color = color;
        return _this;
    }
    ColoredRectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return ColoredRectangle;
}(ColoredShape));
var shapes = [
    new ColoredCircle(5, "Red"),
    new ColoredRectangle(3, 4, "Blue"),
];
shapes.forEach(function (shape) {
    console.log(" Color: ".concat(shape.color, ", Area: ").concat(shape.calculateArea()));
});
// Task 3
var Appliance = /** @class */ (function () {
    function Appliance() {
    }
    return Appliance;
}());
var WashingMachine = /** @class */ (function (_super) {
    __extends(WashingMachine, _super);
    function WashingMachine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WashingMachine.prototype.turnOn = function () {
        console.log("Washing machine is on");
    };
    WashingMachine.prototype.turnOff = function () {
        console.log("Washing machine is off");
    };
    return WashingMachine;
}(Appliance));
var Refrigerator = /** @class */ (function (_super) {
    __extends(Refrigerator, _super);
    function Refrigerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Refrigerator.prototype.turnOn = function () {
        console.log("Refrigerator is on");
    };
    Refrigerator.prototype.turnOff = function () {
        console.log("Refrigerator is off");
    };
    return Refrigerator;
}(Appliance));
var appliances = [new WashingMachine(), new Refrigerator()];
appliances.forEach(function (appliance) {
    appliance.turnOn();
    appliance.turnOff();
});
// Task 4
var Account = /** @class */ (function () {
    function Account() {
    }
    return Account;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.balance = 0;
        return _this;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited ".concat(amount, ". New balance is ").concat(this.balance));
    };
    SavingsAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log("Withdraw ".concat(amount, ". New balance is ").concat(this.balance));
        }
        else {
            console.log("Insufficient funds");
        }
    };
    return SavingsAccount;
}(Account));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.balance = 0;
        _this.fee = 1.5;
        return _this;
    }
    CheckingAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log("Deposited ".concat(amount, ". New balance is ").concat(this.balance));
    };
    CheckingAccount.prototype.withdraw = function (amount) {
        if (this.balance >= amount + this.fee) {
            this.balance -= amount + this.fee;
            console.log("Withdraw ".concat(amount, ". New balance is ").concat(this.balance));
        }
        else {
            console.log("Insufficient funds, including fee");
        }
    };
    return CheckingAccount;
}(Account));
var savingsAccount = new SavingsAccount();
savingsAccount.deposit(100);
savingsAccount.withdraw(50);
var checkingAccount = new CheckingAccount();
checkingAccount.deposit(100);
checkingAccount.withdraw(50);
checkingAccount.withdraw(60); // Проверка недостатка средств
// Task 5
var Media = /** @class */ (function () {
    function Media() {
    }
    return Media;
}());
var AudioPlayer = /** @class */ (function (_super) {
    __extends(AudioPlayer, _super);
    function AudioPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AudioPlayer.prototype.play = function () {
        console.log("Playing audio");
    };
    return AudioPlayer;
}(Media));
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Video.prototype.play = function () {
        console.log("Playing video");
    };
    return Video;
}(Media));
var mediaItems = [new AudioPlayer(), new Video()];
mediaItems.forEach(function (item) {
    item.play();
});
