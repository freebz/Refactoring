//import createStatementData from './createStatementData.js';
const { createStatementData } = require('./createStatementData-v1');

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data, plays) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;
  for (let perf of data.performances) {
    
    // 청구 내역을 출력한다.
    result += `  ${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }
  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
  return result;

  function usd(aNumber) {
    return new Intl.NumberFormat("en-US",
				 { style: "currency", currency: "USD",
				   minimumFractionDigits: 2 }).format(aNumber/100);
  } 
}


const invoices = require('./invoices');
const plays = require('./plays');

console.log(statement(invoices[0], plays));
