// 명령을 함수로 바꾸기
// Replace Command with Function


class ChargeCalculator {
  constructor(customer, usage) {
    this._customer = customer;
    this._usage = usage;
  }
  execute() {
    return this._customer.rate * this._usage;
  }
}


// ▼


function charge(customer, usage) {
  return customer.rate * usage;
}
