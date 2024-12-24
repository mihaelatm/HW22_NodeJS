import { capitalize, reverseString } from "./stringUtils";
import { Finance } from "./finance";
import { UserManagement } from "./userManagement";
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils";

const text = "hello world";

console.log(capitalize(text));
console.log(reverseString(text));

const loanCalculator = new Finance.LoanCalculator(20000, 5, 5);
console.log(
  `Monthly Payment: ${loanCalculator.calculateMonthlyPayment().toFixed(2)}`
);

const taxCalculator = new Finance.TaxCalculator(50000, 20);
console.log(`Tax Amount: ${taxCalculator.calculateTax()}`);

const adminUser = new UserManagement.Admin.AdminUser(
  "Alice",
  "alice@example.com",
  true
);
console.log(`Admin: ${adminUser.name}, Super Admin: ${adminUser.isSuperAdmin}`);
adminUser.changeAccess(false);
console.log(`Admin: ${adminUser.name}, Super Admin: ${adminUser.isSuperAdmin}`);

const fibonacciSequence = generateFibonacci(100);
console.log("Fibonacci Sequence:", fibonacciSequence);

// Тестирование функции для генерации простых чисел
const primeNumbers = generatePrimeNumbers(50);
console.log("Prime Numbers:", primeNumbers);
