function createBird(data) {
  switch (data.type) {
    case '노르웨이 파랑 앵무':
      return new NorwegianBlueParrot(data);
    default:
      return new Bird(data);
  }
}

class Bird {
  constructor(data) {
    this._name = data.name;
    this._plumage = data.plumage;
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }

  selectSpeciesDelegate(data) {
    switch(data.type) {
      case '유럽 제비':
	return new EuropeanSwallowDelegate();
      case '아프리카 제비':
        return new AfricanSwallowDelegate(data);
      case '노르웨이 파랑 앵무':
        return new NorwegianBlueParrotDelegate(data, this);
      default: return null;
    }
  }

  get name()    {return this._name;}
  get plumage() {
    if (this._speciesDelegate)
      return this._speciesDelegate.plumage;
    else
      return this._plumage || "보통이다";
  }
  get airSpeedVelocity() {
    return this._speciesDelegate ? this._speciesDelegate.airSpeedVelocity : null;
  }
}

class NorwegianBlueParrot extends Bird {
  constructor(data) {
    super(data);
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }

  get plumage() {
    return this._speciesDelegate.plumage;
  }
  get airSpeedVelocity() {
    return this._speciesDelegate.airSpeedVelocity;
  }
}

class EuropeanSwallowDelegate {
  get airSpeedVelocity() {return 35;}
}

class AfricanSwallowDelegate {
  constructor(data) {
    this._numberOfCocounts = data.numberOfCocounts;
  }

  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCocounts;
  }
}

class NorwegianBlueParrotDelegate() {
  constructor(data, bird) {
    this._bird = bird;
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }
  
  get airSpeedVelocity() {
    return (this._isNailed) ? 0 : 10 + this._voltage / 10;
  }

  get plumage() {
    if (this._voltage > 100) return "그을렸다";
    else return this._bird._plumage || "예쁘다";
  }
}
