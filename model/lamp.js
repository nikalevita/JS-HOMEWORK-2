"use strict";
class Lamp extends Device{
	constructor(name, model, id, brightness){
		super(name, model, id);
		this._type = "lamp";
		this._brightness = brightness;
	}

	brightnessValue(){ return this._brightness._value; }
	increaseBrightness(){ return this._brightness.increase(); }
	decreaseBrightness(){ return this._brightness.decrease(); }

}