"use strict";
class Temperature{
	constructor(){
		this._value = 0;
		this._max = 10;
		this._min = -10;
	}

	get tempValue(){
		return this._value;
	}
	set maxValue(max){
		if (typeoff(max) === "number") {
			this._max = max;
		}
	}
	set minValue(min){
		if (typeoff(min) === "number") {
			this._min = min;
		}
	}

	increase(){
		if (this._value < this._max) {
			this._value += 1;
		}
	}
	decrease(){
		if (this._value > this._min) {
			this._value -= 1;
		}
	}
}