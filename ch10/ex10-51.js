class Site {
  get customer() {return this._customer;}
}

class Customer {
  get name()           {...}
  get billingPlan()    {...}
  get billingPlan(arg) {...}
  get paymentHistory() {...}
}

// 클라이언트 1
const aCustomer = site.customer;
// ... 수많은 코드 ...
let customerName;
if (aCustomer === "미확인 고객") customerName = "거주자";
else customerName = aCustomer.name;

// 클라이언트 2
const plan = (aCustomer === "미확인 고객") ?
      registry.billingPlans.basic
      : aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = (aCustomer === "미확인 고객") ?
      0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
