function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0)
	* product.basePrice * product.discountRate;
  const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
	? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = quantity * shippingPerCase;
  const price = basePrice - discount + shippingCost;
  return price;
}



console.log(priceOrder(
  {
    basePrice: 1000,
    discountThreshold: 100,
    discountRate: 0.2,
  },
  200,
  {
    discountThreshold: 100,
    discountedFee: 200,
    feePerCase: 300,
  }
));
