// 서브클래스 제거하기
// Remove Subclass


class Person {
  get genderCode() {return "X";}
}
class Male extends Person {
  get genderCode() {return "M";}
}
class Fermale extends Person {
  get genderCode() {return "F";}
}


// ▼


class Person {
  get genderCode() {
    return this._genderCode;
  }
}
