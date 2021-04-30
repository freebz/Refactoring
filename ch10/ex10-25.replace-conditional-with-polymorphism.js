// 조건부 로직을 다형성으로 바꾸기
// Replace Conditional with Polymorphism


switch (bird.type) {
  case '유럽 제비':
    return "보통이다";
  case '아프리카 제비':
    return (bird.numberOfCocounts > 2) "지쳤다" : "보통이다";
  case '노르웨이 파랑 앵무':
    return (bird.voltage > 100) ? "그을렸"다 : "예쁘다";
  default:
    return "알 수 없다";
}


// ▼


class EuropeanSwallow {
  get plumage() {
    return "보통이다";
  }
  ...
}
class AfricanSwallow {
  get plumage() {
    return (this.numberOfCocounts > 2) ? "지쳤다" : "보통이다";
  }
  ...
}
class NorwegianBlueParrot {
  get plumage() {
    return (this.voltage > 100) ? "그을렸다" : "예쁘다";
  }
  ...
}
