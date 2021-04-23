function rating(aDriver) {
  return  aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}



console.log(rating({
  numberOfLateDeliveries: 10,
}));
