// 컬렉션 캡슐화하기
// Encapsulate Collection


class Person {
  get courses() {return this._courses;}
  set courses(aList) {this._courses = aList;}
}


// ▼


class Person {
  get courses() {return this._courses.slice();}
  addCourse(aCourse)    { ... }
  removeCourse(aCourse) { ... }
}
