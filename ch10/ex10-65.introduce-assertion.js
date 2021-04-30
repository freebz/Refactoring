// 어서션 추가하기
// Introduce Assertion


if (this.discountRate)
  base = base - (this.discountRate * base);


// ▼


assert(this.discountRate >= 0);
if (this.discountRate)
  base = base - (this.discountRate * base);
