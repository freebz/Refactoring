const assert = require('assert');

class Book {
  _reservations = [];
  
  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}



const book = new Book()
book.addReservation({
  name: "BigCo",
});
console.log(book);
