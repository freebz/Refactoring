class Person {
  consturctor(name) {
    this._name = name;
  }
  get name()       {return this._name;}
  get genderCode() {return "X";}
  // 생략
}

class Male extends Person {
  get genderCode() {return "M";}
}

class Female extends Person {
  get genderCode() {return "F";}
}


// 클라이언트
const numberOfMales = people.filter(p => p instanceof Male).length;
