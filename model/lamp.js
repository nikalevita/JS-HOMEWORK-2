"use strict";
class Lamp extends Device{
	constructor(name, model, brightness){
		super(name, model);
		this._type = "lamp";
		this._brightness = brightness;
	}

}