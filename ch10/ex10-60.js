{
  name: "애크미 보스턴",
  location: "Malden MA",
  // 더 많은 현장(site) 정보
  customer: {
    name: "애크미 산업",
    billingPlan: "plan-451",
    paymentHistory: {
      weeksDelinquentInLastYear: 7
      // 중략
    },
    // 중략
  }
}


{
  name: "물류창고 15",
  location: "Malden MA",
  // 더 많은 현장(site) 정보
  customer: "미확인 고객",
}

function isUnknown(aCustomer) {
  return aCustomer === "미확인 고객";
}

function enrichSite(inputSite) {
  const result = _.cloneDeep(inputSite);
  const unknownCustomer = {
    isUnknown: true,
  }

  if (isUnknown(result.customer)) result.customer = unknownCustomer;
  else result.customer.isUnknown = false;
  return result;
}

// 클라이언트 1
const rawSite = acquireSiteData();
const site = enrichSite(rawSite);
const aCustomer = site.customer;
// ... 수많은 코드 ...
let customerName;
if (isUnknown(aCustomer)) customerName = "거주자";
else customerName = aCustomer.name;

// 클라이언트 2
const plan = (isUnknown(aCustomer)) ?
      registry.billingPlans.basic
      : aCustomer.billingPlan;

// 클라이언트 3
const weeksDelinquent = (isUnknown(aCustomer)) ?
      0
      : aCustomer.paymentHistory.weeksDelinquentInLastYear;
