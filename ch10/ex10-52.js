class Site {
  get customer() {return this._customer;}
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
  };
}

function isUnknown(arg) {
  return (arg === "미확인 고객");
}

// 클라이언트 1
const aCustomer = site.customer;
// ... 수많은 코드 ...
let customerName;
if (isUnknown(aCustomer) customerName = "거주자";
else customerName = aCustomer.name;

// 클라이언트 2
const plan = isUnknown(aCustomer) ?
      registry.billingPlans.basic
      : aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = isUnknown(aCustomer) ?
      0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
