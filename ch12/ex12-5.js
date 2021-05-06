class Employee extends Party {
}

class Department extends Party {
}

class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}
