"use strict";
class Tv extends Device{
	constructor(name, model, sound, brightness, channels){
		super(name, model);
		this._type = "tv";
		this._sound = sound;
		this._brightness = brightness;
		this._channels = channels;
	}

	soundValue(){ return this._sound._soundValue; }
	increaseVolume(){ return this._sound.increase(); }
	decreaseVolume(){ return this._sound.decrease(); }
	offVolume(){ return this._sound.off(); }
	onVolume(){ return this._sound.on(); }
	statusVolume(){ return this._sound._soundOff; }

}