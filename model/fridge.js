"use strict";
class Fridge extends Device{
	constructor(name, model, id, temperature){
		super(name, model, id);
		this._type = "fridge";
		this._temperature = temperature;
	}

	temperatureValue(){ return this._temperature.tempValue; }
	setTemperatureMaxValue(max){ return this._temperature.maxValue(max); }
	setTemperatureMinValue(min){ return this._temperature.minValue(min); }
	increaseTemperature(){ return this._temperature.increase(); }
	decreaseTemperature(){ return this._temperature.decrease(); }

}