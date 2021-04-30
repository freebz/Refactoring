// 파생 변수를 질의 함수로 바꾸기
// Replace Derived Variable with Query


get discountedTotal() {return this._discountedTotal;}
set discount(aNumber) {
  const old = this._discount;
  this._discount = aNumber;
  this.discountedTotal += old - aNumber;
}


// ▼


get discountedTotal() {return this._baseTotal - this._discount;}
set discount(aNumber) {this._discount = aNumber;}
