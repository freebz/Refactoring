// 오류 코드를 예외로 바꾸기
// Replace Error Code with Exception


if (data)
  return new ShippingRules(data);
else
  return -23;


// ▼


if (data)
  return new ShippingRules(data);
else
  throw new OrderProcessingError(-23);
