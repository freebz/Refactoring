function bookConcert(aCustomer, isPremium) {
  if (isPremium) {
    // 프리미엄 예약용 로직
  } else {
    // 일반 예약용 로직
  }
}


bookConcert(aCustomer, true);

bookConcert(aCustomer, CustomerType.PREMIUM);

bookConcert(aCustomer, "premium");
