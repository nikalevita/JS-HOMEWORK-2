"use strict";
class View {
	constructor(device, rootElement) {
		this._device = device;
		this._rootElement = rootElement;
		this.btnOnOff = document.createElement("button");

		this._sound = document.createElement("p");
		this._soundDecBtn = document.createElement("button");
		this._soundIncBtn = document.createElement("button");
		this._soundOff = document.createElement("button");

		this._bright = document.createElement("p");
		this._brightDecBtn = document.createElement("button");
		this._brightIncBtn = document.createElement("button");

		this._temp = document.createElement("p");
		this._tempDecBtn = document.createElement("button");
		this._tempIncBtn = document.createElement("button");

		this._channel = document.createElement("p");
		this._channelPrevBtn = document.createElement("button");
		this._channelNextBtn = document.createElement("button");

		this._btnDelete = document.createElement("button");
	}

	stateVal() {
		if(this._device._state === false){
			this.btnOnOff.classList.remove("btn-success");
			this.btnOnOff.classList.add("btn-danger");
			this.btnOnOff.innerText = "Off";
		}else{
			this.btnOnOff.classList.remove("btn-danger");
			this.btnOnOff.classList.add("btn-success");
			this.btnOnOff.innerText = "On";
		}
	}

	stateChange() {
		if(this._device._state === true){
			this._device.off();
		}else{
			this._device.on();
		}
	}

	volInc() {
		this._device.increaseVolume();
		this._sound.innerText = `Громкость: ${this._device.soundValue()}`;
	}
	volDec() {
		this._device.decreaseVolume();
		this._sound.innerText = `Громкость: ${this._device.soundValue()}`;
	}
	volStatus() {
		if(this._device.statusVolume() === true){
			this._device.onVolume();
			this._sound.innerText = `Громкость: ${this._device.soundValue()}`;
			this._soundDecBtn.disabled = false;
			this._soundIncBtn.disabled = false;
			this._soundOff.classList.remove("btn-warning");
		}else{
			this._device.offVolume();
			this._sound.innerText = `Громкость: ${this._device.soundValue()}`;
			this._soundDecBtn.disabled = true;
			this._soundIncBtn.disabled = true;
			this._soundOff.classList.add("btn-warning");
		}
	}


	brightInc() {
		this._device.increaseBrightness();
		this._bright.innerText = `Яркость: ${this._device.brightnessValue()}`;
	}
	brightDec() {
		this._device.decreaseBrightness();
		this._bright.innerText = `Яркость: ${this._device.brightnessValue()}`;
	}


	tempInc() {
		this._device.increaseTemperature();
		this._temp.innerText = `Температура: ${this._device.temperatureValue()}`;
	}
	tempDec() {
		this._device.decreaseTemperature();
		this._temp.innerText = `Температура: ${this._device.temperatureValue()}`;
	}


	channelPrev() {
		this._device.channelPrev();
		this._channel.innerText = `Текущий канал: ${this._device.currentChannel()}`;
	}
	channelNext() {
		this._device.channelNext();
		this._channel.innerText = `Текущий канал: ${this._device.currentChannel()}`;
	}

	render() {
		/* info */
		let device = document.createElement("div");
		device.className = "device card col-4";

		let type = document.createElement("p");
		type.className = "type";
		type.innerText = `${this._device._type} (id-${this._device._id})`;

		let name = document.createElement("h2");
		name.innerText = `Имя: ${this._device._name}`;

		let model = document.createElement("h3");
		model.innerText = `Модель: ${this._device._model}`;

		/* sound */
		let soundWrap = document.createElement("div");
		if('_sound' in this._device){
			soundWrap.className = "btn-group";

			this._sound.className = "sound";
			this._sound.innerText = `Громкость: ${this._device.soundValue()}`;

			this._soundDecBtn.type = "button";
			this._soundDecBtn.innerHTML = "-";
			this._soundDecBtn.className = "btn btn-primary sound-dec";
			this._soundDecBtn.addEventListener("click", () => {
				this.volDec();
			});

			this._soundIncBtn.type = "button";
			this._soundIncBtn.innerHTML = "+";
			this._soundIncBtn.className = "btn btn-primary sound-inc";
			this._soundIncBtn.addEventListener("click", () => {
				this.volInc();
			});

			this._soundOff.type = "button";
			this._soundOff.innerHTML = "Off";
			this._soundOff.className = "btn btn-primary sound-off";
			this._soundOff.addEventListener("click", () => {
				this.volStatus();
			});
		}

		let tempWrap = document.createElement("div");
		if('_temperature' in this._device){
			tempWrap.className = "btn-group";

			this._temp.className = "temp";
			this._temp.innerText = `Температура: ${this._device.temperatureValue()}`;

			this._tempDecBtn.type = "button";
			this._tempDecBtn.innerHTML = "-";
			this._tempDecBtn.className = "btn btn-primary temp-dec";
			this._tempDecBtn.addEventListener("click", () => {
				this.tempDec();
			});

			this._tempIncBtn.type = "button";
			this._tempIncBtn.innerHTML = "+";
			this._tempIncBtn.className = "btn btn-primary temp-inc";
			this._tempIncBtn.addEventListener("click", () => {
				this.tempInc();
			});
		}

		let brightWrap = document.createElement("div");
		if('_brightness' in this._device){
			brightWrap.className = "btn-group";

			this._bright.className = "bright";
			this._bright.innerText = `Яркость: ${this._device.brightnessValue()}`;

			this._brightDecBtn.type = "button";
			this._brightDecBtn.innerHTML = "-";
			this._brightDecBtn.className = "btn btn-primary bright-dec";
			this._brightDecBtn.addEventListener("click", () => {
				this.brightDec();
			});

			this._brightIncBtn.type = "button";
			this._brightIncBtn.innerHTML = "+";
			this._brightIncBtn.className = "btn btn-primary bright-inc";
			this._brightIncBtn.addEventListener("click", () => {
				this.brightInc();
			});
		}

		let channelWrap = document.createElement("div");
		if('_channels' in this._device){
			channelWrap.className = "btn-group";

			this._channel.className = "channel";
			this._channel.innerText = `Текущий канал: ${this._device.currentChannel()}`;

			this._channelPrevBtn.type = "button";
			this._channelPrevBtn.innerHTML = "Prev";
			this._channelPrevBtn.className = "btn btn-primary prev";
			this._channelPrevBtn.addEventListener("click", () => {
				this.channelPrev();
			});

			this._channelNextBtn.type = "button";
			this._channelNextBtn.innerHTML = "Next";
			this._channelNextBtn.className = "btn btn-primary next";
			this._channelNextBtn.addEventListener("click", () => {
				this.channelNext();
			});
		}

		/* on/off */
		this.btnOnOff.type = "button";
		this.btnOnOff.className = "btn";
		this.btnOnOff.addEventListener("click", () => {
			this.stateChange();
			this.stateVal();
		});

		this._btnDelete.type = "button";
		this._btnDelete.className = "close";
		this._btnDelete.setAttribute("data-id", this._device._id);
		this._btnDelete.innerHTML = "<span aria-hidden='true'>&times;</span>";
		this._btnDelete.addEventListener("click", () => {

		});

		/* render */
		this.stateVal();
		device.appendChild(type);
		device.appendChild(name);
		device.appendChild(model);

		if('_sound' in this._device){
			device.appendChild(this._sound);
			device.appendChild(soundWrap);
			soundWrap.appendChild(this._soundDecBtn);
			soundWrap.appendChild(this._soundIncBtn);
			soundWrap.appendChild(this._soundOff);
		}

		if('_temperature' in this._device){
			device.appendChild(this._temp);
			device.appendChild(tempWrap);
			tempWrap.appendChild(this._tempDecBtn);
			tempWrap.appendChild(this._tempIncBtn);
		}

		if('_brightness' in this._device){
			device.appendChild(this._bright);
			device.appendChild(brightWrap);
			brightWrap.appendChild(this._brightDecBtn);
			brightWrap.appendChild(this._brightIncBtn);
		}

		if('_channels' in this._device){
			device.appendChild(this._channel);
			device.appendChild(channelWrap);
			channelWrap.appendChild(this._channelPrevBtn);
			channelWrap.appendChild(this._channelNextBtn);
		}

		device.appendChild(this.btnOnOff);	
		device.appendChild(this._btnDelete);	
		this._rootElement.appendChild(device);
	}

	clear() {
		this._rootElement.innerHTML = "";
	}
}