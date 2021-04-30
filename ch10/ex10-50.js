class Site {
  get customer() {
    return (this._customer === "미확인 고객") ? new UnknownCustomer() :  this._customer;
  }
}

class Customer {
  get name()           {...}  // 고객 이름
  get billingPlan()    {...}  // 요금제
  set billingPlan(arg) {...}
  get paymentHistory() {...}  // 납부 이력
  get isUnknown() {return false;}
}

class UnknownCustomer {
  get isUnknown() {return true;}
  get name() {return "거주자";}
  get billingPlan()    {return registry.billingPlans.basic;}
  set billingPlan(arg) { /* 무시한다. */ }
  get paymentHistory() {return new NullPaymentHistory();}
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {return 0;}
}

// 클라이언트 1
const aCustomer = site.customer;
// ...수많은 코드 ...
const customerName = aCustomer.name;

// 클라이언트 2
const plan = aCustomer.billingPlan;

// 클라이언트 3
aCustomer.billingPlan = newPlan;

// 클라이언트 4
const weeksDelinquent = aCustomer.paymentHistory.weeksDelinquentInLastYear;
