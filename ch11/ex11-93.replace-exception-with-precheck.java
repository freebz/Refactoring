// 예외를 사전확인으로 바꾸기
// Replace Exception with Precheck


double getValueForPeriod (int periodNumber) {
  try {
    return values[periodNumber];
  } catch (ArrayIndexOutOfBoundsException e) {
    return 0;
  }
}


// ▼


double getValueForPeriod (int periodNumber) {
  return (periodNumber >= values.length) ? 0: values[periodNumber];
}
