// 필드 옮기기
// Move Field


class Customer {
  get plan() {return this._plan;}
  get discountRate() {return this._discountRate;}
}


// ▼


class Customer {
  get plan() {return this._plan;}
  get discountRate() {return this.plan.discountRate;}
}
