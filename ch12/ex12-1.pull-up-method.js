// 메서드 올리기
// Pull Up Method


class Employee {...}

class Salesperson extends Employee {
  get name() {...}
}

class Engineer extends Employee {
  get name() {...}
}


// ▼


class Employee {
  get name() {...}
}

class Salesperson extends Employee {...}
class Engineer extends Employee {...}
