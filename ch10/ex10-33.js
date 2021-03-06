function rating(voyage, history) { // 투자 등급
  return new Rating(voyage, history).value;
}

class Rating {  // 함수들을 Rating 클래수로 묶었다.
  constructor(voyage, history) {
    this.voyage = voyage;
    this.history = history;
  }

  get value() {
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk;
    const chr = this.captainHistoryRisk;
    if (vpf * 3 > (vr + chr * 2)) return "A";
    else return "B";
  }

  get voyageRisk() {
    let result = 1;
    if (this.voyage.length > 4) result += 2;
    if (this.voyage.length > 8) result += this.voyage.length - 8;
    if (["중국", "동인도"].includes(this.voyage.zone)) result += 4;
    return Math.max(result, 0);
  }
  
  get captainHistoryRisk() {
    let result = 1;
    if (this.history.length < 5) result += 4;
    result += this.history.filter(v => v.profit < 0).length;
    if (this.voyage.zone === "중국" && this.hasChina(history)) result -= 2;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    let result = 2;
    
    if (this.voyage.zone === "중국") result += 1;
    if (this.voyage.zone === "동인도") result += 1;
    if (this.voyage.zone === "중국" && this.hasChina(history)) {
      result += 3;
      if (this.history.length > 10) result += 1;
      if (this.voyage.length > 12) result += 1;
      if (this.voyage.length > 18) result -= 1;
    }
    else {
      if (this.history.length > 8) result += 1;
      if (this.voyage.length > 14) result -= 1;
    }
    return result;
  }

  get hasChinaHistory() {
    return this.history.some(v => "중국" === v.zone);
  }
}


const voyage = {zone: "서인도", length: 10};
const history = [
  {zone: "동인도", profit:  5},
  {zone: "서인도", profit: 15},
  {zone: "중국", profit: -2},
  {zone: "서아프리카", profit:  7},
];

const myRating = rating(voyage, history);

console.log(myRating);
