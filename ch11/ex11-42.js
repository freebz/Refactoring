class HeatingPlan {
  get targetTemperature() {
    if      (thermosstat.selectedTemperature > this._max) return this._max;
    else if (thermosstat.selectedTemperature < this._min) return this._min;
    else return thermosstat.selectedTemperature;
  }
}

// 호출자
if      (thePlan.targetTemperature > thermosstat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature < thermosstat.currentTemperature) setToCool();
else setOff();
