function localShippingRules(country) {
  const data = countryData.shippingRules[country];
  if (data) return new ShppingRules(data);
  else return -23;
}


function calculateShippingCosts(anOrder) {
  // 관련 없는 코드
  const shippingRules = localShippingRules(anOrder.country);
  if (shippingRules < 0) return shippingRules; // 오류 전파
  // 더 관련 없는 코드
}


const status;
try {
  status = calculateShippingCosts(orderData);
} catch (e) {
  throw e;
}
if (status < 0) errorList.push({order: orderData, errorCode: status});


class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(`주문 처리 오류 ${errorCode}`);
    this.code = errorCode;
  }
  get name() {return "OrderProcessingError';}
}
