// 필드 올리기
// Pull Up Field


class Employee {...} // 자바 코드

class Salesperson extends Employee {
  private String name;
}

class Engineer extends Employee {
  private String name;
}



// ▼


class Employee {
  protected String name;
}

class Salesperson extends Employee {...}
class Engineer extends Employee {...}
