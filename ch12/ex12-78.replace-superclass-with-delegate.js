// 슈퍼클래스를 위임으로 바꾸기
// Replace Superclass with Delegate


class List {...}
class Stack extends List {...}


// ▼


class Stack {
  constructor() {
    this._storage = new List();
  }
}

class List {...}
