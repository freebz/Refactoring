class HeatingPlan {
  get targetTemperature() {
    return this.xxNEWtargetTemperature(thermosstat.selectedTemperature);
  }

  xxNEWtargetTemperature(selectedTemperature) {
    if      (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

// 호출자
if      (thePlan.xxNEWtargetTemperature(thermosstat.selectedTemperature) >
	 thermosstat.currentTemperature)
  setToHeat();
else if (thePlan.xxNEWtargetTemperature(thermosstat.selectedTemperature) <
	 thermosstat.currentTemperature)
  setToCool();
else
  setOff();
