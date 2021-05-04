class ChargeCalculator {
  charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
  }
}


// 호출자
monthCharge = charge(customer, usage, provider);


function charge(customer, usage, provider) {
  return new ChargeCalculator(customer, usage, provider)
                      .charge(customer, usage, provider);
}
