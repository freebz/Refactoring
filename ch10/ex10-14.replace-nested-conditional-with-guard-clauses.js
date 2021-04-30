// 중첩 조건문을 보호 구문으로 바꾸기
// Replace Nested Conditional with Guard Clauses


function getPayAmount() {
  let result;
  if (isDead)
    result = deadAmount();
  else {
    if (isSeparated)
      result = separatedAmount();
    else {
      if (isRetired)
	result = retiredAmount();
      else
	result = normalPayAmount();
    }
  }
  return result;
}


// ▼


function getPayAmount() {
  if (isDead) return deadAmount();
  if (isSeparated) return separatedAmount();
  if (isRetired) return retiredAmount();
  return normalPayAmount();
}
