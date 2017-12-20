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

	render() {
		/* info */
		let device = document.createElement("div");
		device.className = "device card col-4";

		let type = document.createElement("p");
		type.className = "type";
		type.innerText = `${this._device._type}`;

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

		/* on/off */
		this.btnOnOff.type = "button";
		this.btnOnOff.className = "btn";
		this.btnOnOff.addEventListener("click", () => {
			this.stateChange();
			this.stateVal();
		});

		this._btnDelete.type = "button";
		this._btnDelete.className = "close";
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

		device.appendChild(this.btnOnOff);	
		device.appendChild(this._btnDelete);	
		this._rootElement.appendChild(device);
	}

	clear() {
		this._rootElement.innerHTML = "";
	}
}