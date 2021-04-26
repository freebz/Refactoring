// 클라이언트
manager = aPerson.department.manager;

class Person {
  get department() {return this._department;}
}

class Department {
  get manager() {return this._manager;}
}
