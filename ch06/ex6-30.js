class Book {
  _reservations = [];
  
  addReservation(customer) {
    this.zz_addReservation(customer);
  }

  zz_addReservation(customer) {
    this._reservations.push(customer);
  }
}



const book = new Book()
book.addReservation({
  name: "BigCo",
});
console.log(book);
