class Organization {
  constructor(data) {
    this._data = data;
  }

  set name(aString) {this._data.name = aString;}
}


const organization = new Organization({name: "애크미 구스베리", country: "GB"});
function getRawDataOfOrganization() {return organization._data;}
function getOrganization() {return organization;}

result += `<h1>${getRawDataOfOrganization().name}</h1>`; // 읽기 예
getOrganization().name = newName; // 쓰기 예
