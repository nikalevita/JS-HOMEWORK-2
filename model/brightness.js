"use strict";
class Brightness{
	constructor(){
		this._value = 50;
	}

	get brightValue(){
		return this._value;
	}

	increase(){
		if (this._value < 100) {
			this._value += 1;
		}
	}
	decrease(){
		if (this._value > 0) {
			this._value -= 1;
		}
	}

}