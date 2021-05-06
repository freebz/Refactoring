// 메서드 내리기
// Push Down Method


class Employee {
  get quota {...}
}

class Engineer extends Employee {...}
class Salesperson extends Employee {...}


// ▼


class Employee {...}

class Engineer extends Employee {...}
class Salesperson extends Employee {
  get quota {...}
}
