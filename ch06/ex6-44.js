const assert = require('assert');

let defaultOwnerData = {firstName: "마틴", lastName: "파울러"};

function defaultOwner()       {return new Person(defaultOwnerData);}
function setDefaultOwner(arg) {defaultOwnerData = arg;}

class Person {
  constructor(data) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }
  get lastName() {return this._lastName;}
  get firstName() {return this._firstName;}
  // 다른 속성도 이런 식으로 처리한다.
}

const owner1 = defaultOwner();
assert.equal("파울러", owner1.lastName, "처음 값 확인");
const owner2 = defaultOwner();
owner2.lastName = "파슨스";
assert.equal("파슨스", owner1.lastName, "owner2를 변경한 후"); // 성공할까?
