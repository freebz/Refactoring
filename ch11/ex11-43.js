class HeatingPlan {
  get targetTemperature() {
    const selectedTemperature = thermosstat.selectedTemperature;
    if      (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

// 호출자
if      (thePlan.targetTemperature > thermosstat.currentTemperature) setToHeat();
else if (thePlan.targetTemperature < thermosstat.currentTemperature) setToCool();
else setOff();
