class Customer {
  applyDiscount(aNumber) {
    if (!this.discountRate) return aNumber;
    else aNumber - (this.discountRate * aNumber);
  }
}
