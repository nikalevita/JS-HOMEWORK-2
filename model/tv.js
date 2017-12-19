"use strict";
class Tv extends Device{
	constructor(name, model, sound){
		super(name, model);
		this._sound = sound;
	}
	//increaseVolume = this._sound.increase();
}