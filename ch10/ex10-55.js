class Site {
  get customer() {
    return (this._customer === "미확인 고객") ? createUnknownCustomer() : this._customer;
  }
}

class Customer {
  get name()           {...}
  get billingPlan()    {...}
  get billingPlan(arg) {...}
  get paymentHistory() {...}
  get isUnknown() {return false;}
}

function createUnknownCustomer() {
  return {
    isUnknown: true,
    name: "거주자",
    billingPlan: registry.billingPlans.basic,
  };
}

function isUnknown(arg) {
  return arg.isUnknown;
}

// 클라이언트 1
const aCustomer = site.customer;
// ... 수많은 코드 ...
const customerName = aCustomer.name;

// 클라이언트 2
const plan = aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = isUnknown(aCustomer) ?
      0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
