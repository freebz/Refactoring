// 필드 내리기
// Push Down Field


class Employee { // 자바 코드
  private String quota;
}

class Engineer extends Employee {...}
class Salesperson extends Employee {...}


// ▼


class Employee {...}

class Engineer extends Employee {...}
class Salesperson extends Employee {
  protected String quota;
}
