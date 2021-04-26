// 클래스 추출하기
// Extract Class


class Person {
  get officeAreaCode() {return this._officeAreaCode;}
  get officeNumber()   {return this._officeNumber;}
}


// ▼


class Person {
  get officeAreaCode() {return this._telephoneNumber.areaCode;}
  get officeNumber()   {return this._telephoneNumber.number;}
}

class TelephoneNumber {
  get areaCode() {return this.areaCode;}
  get number()   {return this._number;}
}
