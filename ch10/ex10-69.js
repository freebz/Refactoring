class Customer {
  applyDiscount(aNumber) {
    if (!this.discountRate) return aNumber;
    else {
      assert(this.discountRate >= 0);
      aNumber - (this.discountRate * aNumber);
    }
  }
  
  get discountRate() {return this._discountRate;}
  set discountRate(aNumber) {
    assert(null === aNumber || aNumber >= 0);
    this._discountRate = aNumber;
  }
}
