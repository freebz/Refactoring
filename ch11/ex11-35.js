// 호출자
const tempRange = aRoom.daysTempRange;
const isWithinRange = aPlan.xxNEWwithinRange(aPlan, tempRange);
if (!isWithinRange)
  alerts.push("방 온도가 지정 범위를 벗어났습니다.");

class HeatingPlan {
  xxNEWwithRange(aPlan, tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = aPlan.withinRange(low, high);
    return isWithinRange;
  }
}
