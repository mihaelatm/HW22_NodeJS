"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance = void 0;
var Finance;
(function (Finance) {
    var LoanCalculator = /** @class */ (function () {
        function LoanCalculator(amount, annualRate, years) {
            this.amount = amount;
            this.annualRate = annualRate;
            this.years = years;
        }
        LoanCalculator.prototype.calculateMonthlyPayment = function () {
            var monthlyRate = this.annualRate / 100 / 12;
            var numberOfPayments = this.years * 12;
            return ((this.amount * monthlyRate) /
                (1 - Math.pow(1 + monthlyRate, -numberOfPayments)));
        };
        return LoanCalculator;
    }());
    Finance.LoanCalculator = LoanCalculator;
    var TaxCalculator = /** @class */ (function () {
        function TaxCalculator(income, taxRate) {
            this.income = income;
            this.taxRate = taxRate;
        }
        TaxCalculator.prototype.calculateTax = function () {
            return (this.income * this.taxRate) / 100;
        };
        return TaxCalculator;
    }());
    Finance.TaxCalculator = TaxCalculator;
})(Finance || (exports.Finance = Finance = {}));
