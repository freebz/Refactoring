function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePricingData(product, quantity);
  const price = applyShipping(priceData, shippingMethod);
  return price;
}

function calculatePricingData(product, quantity) {
  const basePrice = product.basePrice * quantity;
  const discount = Math.max(quantity - product.discountThreshold, 0)
	* product.basePrice * product.discountRate;
  return {basePrice: basePrice, quantity: quantity, discount: discount}
}

function applyShipping(priceData, shippingMethod) {
  const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
	? shippingMethod.discountedFee : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  const price = priceData.basePrice - priceData.discount + shippingCost;
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
