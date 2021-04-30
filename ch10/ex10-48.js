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
}

function isUnknown(arg) {
  if (!((arg instanceof Customer) || arg instanceof UnknownCustomer))
    throw new Error(`잘못된 값과 비교: <${arg}>`);
  return arg.isUnknown;
}

// 클라이언트 1
const aCustomer = site.customer;
// ...수많은 코드 ...
const customerName = aCustomer.name;

// 클라이언트 2
const plan = (isUnknown(aCustomer)) ?
      registry.billingPlans.basic
      : aCustomer.billingPlan;

// 클라이언트 3
if (!isUnknown(aCustomer)) aCustomer.billingPlan = newPlan;

// 클라이언트 4
const weeksDelinquent = isUnknown(aCustomer) ?
      0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
