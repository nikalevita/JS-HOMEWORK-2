"use strict";
class Tv extends Device{
	constructor(name, model, id, sound, brightness, channels){
		super(name, model, id);
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

	brightnessValue(){ return this._brightness._value; }
	increaseBrightness(){ return this._brightness.increase(); }
	decreaseBrightness(){ return this._brightness.decrease(); }

	currentChannel(){ return this._channels.currentChannel(); }
	setCurrentChannel(currentChannel){ return this._channels.setCurrentChannel(currentChannel); }
	channelNext(){ return this._channels.next(); }
	channelPrev(){ return this._channels.prev(); }
	addChannels(channels){ return this._channels.addChannels(channels); }
	deleteChannels(delEl){ return this._channels.deleteChannels(delEl); }

}