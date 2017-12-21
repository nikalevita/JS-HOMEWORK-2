"use strict";
class Fridge extends Device{
	constructor(name, model, temperature){
		super(name, model);
		this._type = "fridge";
		this._temperature = temperature;
	}

}