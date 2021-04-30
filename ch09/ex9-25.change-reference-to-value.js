// 참조를 값으로 바꾸기
// Change Reference to Value


class Product {
  applyDiscount(arg) {this._price.amount -= arg;}
}


// ▼


class Product {
  applyDiscount(arg) {
    this._price = new Money(this._price.amount - arg, this._price.currency);
  }
}
