// 질의 함수를 매개변수로 바꾸기
// Replace Query with Parameter


targetTemperature(aPlan)

function targetTemperature(aPlan) {
  currentTemperature = thermosstat.currentTemperature;
  // 생략
}


// ▼


targetTemperature(aPlan, thermosstat.currentTemperature)

function targetTemperature(aPlan, currentTemperature) {
  // 생략
}
