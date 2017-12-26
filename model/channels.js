"use strict";
class Channels{
	constructor(channels){
		this._currentChannel = 0;
		this._channels = channels;
	}
	
	currentChannel(){
		return this._channels[this._currentChannel];
	}

	addChannels(channels){
		this._channels = this._channels.concat(channels);
	}

	deleteChannels(delEl){
		this._channels.splice(delEl, 1);
	}

	setCurrentChannel(currentChannel){
		if (this._currentChannel < this._channels.length - 1) {
			this._currentChannel = currentChannel;
		}
	}

	next(){
		if (this._currentChannel < this._channels.length - 1) {
			this._currentChannel += 1;
		}
	}
	prev(){
		if (this._currentChannel > 0) {
			this._currentChannel -= 1;
		}
	}

}