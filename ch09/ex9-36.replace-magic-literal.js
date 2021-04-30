// 매직 리터럴 바꾸기
// Replace Magic Literal


function potentialEnergy(mass, height) {
  return mass * 9.81 * height;
}


// ▼


const STANDARD_GRAVITY = 9.81;
function potentialEnergy(mass, height) {
  return mass * STANDARD_GRAVITY * height;
}
