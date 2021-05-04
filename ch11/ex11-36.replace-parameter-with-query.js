// 매개변수를 질의 함수로 바꾸기
// Replace Parameter with Query


availableVacation(anEmployee, anEmployee.grade);

function availableVacation(anEmployee, grade) {
  // 연휴 계산...
}


// ▼


availableVacation(anEmployee)

function availableVacation(anEmployee) {
  const grade = anEmployee.grade;
  // 연휴 계산...
}
