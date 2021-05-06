// 타입 코드를 서브클래스로 바꾸기
// Replace Type Code with Subclasses


function createEmployee(name, type) {
  return new Employee(name, type);
}


// ▼


function createEmployee(name, type) {
  switch (type) {
    case "engineer":    return new Engineer(name);
    case "salesperson": return new Salesperson(name);
    case "manager":     return new Manager (name);
  }
}
