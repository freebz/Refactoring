// 레코드 캡슐화하기
// Encapsulate Record


organization = {name: "애크미 구스베리", country: "GB"};


// ▼


class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get name()    {return this._name;}
  set name(arg) {this._name = arg;}
  get country()    {return this._country;}
  set country(arg) {this._country = args;}
}
