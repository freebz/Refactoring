class Order {
  constructor(data) {
    this.priority = data.priority;
    // 나머지 초기화 코드 생략
  }

  get priority()        {return this._priority;}
  set priority(aString) {this._priority = aString;}
}

// 클라이언트
highPriorityCount = orders.filter(o => "high" === o.priority
				    || "rush" === o.priority)
                          .length;
