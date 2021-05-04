// 질의 함수와 변경 함수 분리하기
// Separate Query from Modifier


function getTotalOutstandingAndSendBill() {
  const result = customer.invoices.reduce((tatal, each) => each.amount + total, 0);
  sendBill();
  return result;
}


// ▼


function totalOutstanding() {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
  emailGateway.send(formatBill(customer));
}
