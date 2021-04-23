// 여러 함수를 변환 함수로 묶기
// Combine Functions into Transform


function base(aReading) {...}
function taxableCharge(aReading) {...}


// ▼


function enrichReading(argReading) {
  const aReading = _.cloneDeep(argReading);
  aReading.baseCharge = base(aReading);
  aReading.taxableCharge = taxableCharge(aReading);
  return aReading;
}
