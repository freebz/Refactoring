// 중개자 제거하기
// Remove Middle Man


manager = aPerson.manager;

class Person {
  get manager() {return this.department.manager;}
}


// ▼


manager = aPerson.department.manager;
