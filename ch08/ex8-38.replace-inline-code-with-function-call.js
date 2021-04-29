// 인라인 코드를 함수 호출로 바꾸기
// Replace Inline Code with Function Call


let appliesToMass = false;
for(const s of states) {
  if (s === "MA") appliesToMass = true;
}


// ▼


appliesToMass = state.includes("MA");
