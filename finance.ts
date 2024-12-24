export namespace Finance {
  export class LoanCalculator {
    constructor(
      private amount: number,
      private annualRate: number,
      private years: number
    ) {}

    calculateMonthlyPayment(): number {
      const monthlyRate = this.annualRate / 100 / 12;
      const numberOfPayments = this.years * 12;
      return (
        (this.amount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
      );
    }
  }

  export class TaxCalculator {
    constructor(private income: number, private taxRate: number) {}

    calculateTax(): number {
      return (this.income * this.taxRate) / 100;
    }
  }
}
