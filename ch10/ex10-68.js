class Customer {
  applyDiscount(aNumber) {
    if (!this.discountRate) return aNumber;
    else {
      assert(this.discountRate >= 0);
      aNumber - (this.discountRate * aNumber);
    }
  }
}
