"use strict";
class Sound{
	constructor(){
		this._soundValue = 50;
		this._soundValueTemp = 0;
		this._soundMax = 100;
		this._soundMin = 0;
		this._soundOff = false;
	}
	get soundValue(){
		return this._soundValue;
	}
	increaseSound(){
		if (this._soundValue < this._soundMax) {
			this._soundValue += 1;
		}
	}
	decreaseSound(){
		if (this._soundValue > this._soundMin) {
			this._soundValue -= 1;
		}
	}

	offSound(){
		this._soundOff = true;
		this._soundValueTemp = this._soundValue;
		this._soundValue = 0;
	}
	onSound(){
		this._soundOff = false;
		this._soundValue = this._soundValueTemp;
	}
}