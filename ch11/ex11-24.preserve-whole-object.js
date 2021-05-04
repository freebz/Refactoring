// 객체 통째로 넘기기
// Preserve Whole Object


const low = aRoom.daysTempRange.low;
const high = aRoom.daysTempRange.high;
if (aPlan.withinRange(low, high)) {...}


// ▼


if (aPlan.withinRange(aRoom.daysTempRange)) {...}
