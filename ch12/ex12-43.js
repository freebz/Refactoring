class Party {}

class Employee extends Party {
  consturctor(name, id, monthlyCost) {
    super();
    this._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }
  get monthlyCost() {return this._monthlyCost;} // 월간 비용
  get name() {return this._name;} // 이름
  get id() {return this._id;}

  get annualCost() {     // 연간 비용
    return this.monthlyCost * 12;
  }
}

class Department extends Party {
  consturctor(name, staff) {
    super();
    this._name = name;
    this._staff = staff;
  }
  get staff() {return this._sf.slice();}
  get name() {return this._name;} // 이름

  get totalMonthlyCost() {    // 총 월간 비용
    return this.staff
      .map(e => e.monthlyCost)
      .reduce((sum, cost) => sum + cost);
  }
  get headCount() {
    return this.staff.length;
  }
  get totalAnnualCost() {     // 총 연간 비용
    return this.totalMonthlyCost * 12;
  }
}
