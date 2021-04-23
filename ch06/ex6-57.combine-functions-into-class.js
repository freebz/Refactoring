// 여러 함수를 클래스로 묶기
// Combine Functions into Class


function base(aReading) {...}
function taxableCharge(aReading) {...}
function calculateBaseCharge(aReading) {...}


// ▼


class Reading {
  base() {...}
  taxableCharge() {...}
  calculateBaseCharge() {...}
}
