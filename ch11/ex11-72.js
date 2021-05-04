class ChargeCalculator {
  constructor(customer, usage, provider) {
    this._usage = usage;
    this._provider = provider;
  }
  charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * this._usage;
    return baseCharge + this._provider.connectionCharge;
  }
}


// 호출자
monthCharge = charge(customer, usage, provider);


function charge(customer, usage, provider) {
  return new ChargeCalculator(customer, usage, provider)
                      .charge(customer, usage, provider);
}
