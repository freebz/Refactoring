// 서브클래스를 위임으로 바꾸기
// Replace Subclass with Delegate


class Order {
  get daysToShip() {
    return this._warehouse.daysToShip;
  }
}

class PriorityOrder extends Order {
  get daysToShip() {
    return this._priorityPlan.daysToShip;
  }
}


// ▼


class Order {
  get daysToShip() {
    return (this._priorityDelegate)
      ? this._priorityDelegate.daysToShip
      : this._warehouse.daysToShip;
  }
}

class PriorityDelegate {
  get daysToShip() {
    return this._priorityDelegate.daysToShip;
  }
}
