class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }

  get name() {return this._name;}
  get type() {
    return Employee.legalTypeCodes[this._typeCode];
  }
  static get legalTypeCodes() {
    return {"E": "Engineer", "M": "Manager", "S": "Saalesperson"};
  }
}

// 호출자
canidate = createEmployee(document.name, document.empType);

// 호출자
const leadEngineer = createEmployee(document.leadEngineer, 'E');


function createEmployee(name, typeCode) {
  return new Employee(name, typeCode);
}
