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
const numberOfMales = people.filter(p => isMale(p)).length;

function isMale(aPerson) {return aPerson instanceof Male;}


function createPerson(aRecord) {
  switch (aRecord.gender) {
    case 'M': return new Male(aRecord.name);
    case 'F': return new Female(aRecord.name);
    default:  return new Person(aRecord.name);
  }
}

function loadFromInput(data) {
  return data.map(aRecord => createPerson(aRecord));
}
