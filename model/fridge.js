"use strict";
class Fridge extends Device{
	constructor(name, model){
		super(name, model);
		this._type = "fridge";
		//this._sound = sound;
	}

	/*increaseVolume(){ return this._sound.increase(); }
	decreaseVolume(){ return this._sound.decrease(); }
	offVolume(){ return this._sound.off(); }
	onVolume(){ return this._sound.on(); }
	statusVolume(){ return this._sound._soundOff; }*/

}