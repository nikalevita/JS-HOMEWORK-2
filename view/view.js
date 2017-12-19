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
		this._device._sound.increase();
		this._sound.innerText = `Громкость: ${this._device._sound._soundValue}`;
	}
	volDec() {
		this._device._sound.decrease();
		this._sound.innerText = `Громкость: ${this._device._sound._soundValue}`;
	}
	volStatus() {
		if(this._device._sound._soundOff === true){
			this._device._sound.on();
			this._sound.innerText = `Громкость: ${this._device._sound._soundValue}`;
			this._soundDecBtn.disabled = false;
			this._soundIncBtn.disabled = false;
			this._soundOff.classList.remove("btn-warning");
		}else{
			this._device._sound.off();
			this._sound.innerText = `Громкость: ${this._device._sound._soundValue}`;
			this._soundDecBtn.disabled = true;
			this._soundIncBtn.disabled = true;
			this._soundOff.classList.add("btn-warning");
		}
	}

	render() {
		/* info */
		let device = document.createElement("div");
		device.className = "device card col-4";

		let name = document.createElement("h2");
		name.innerText = `Имя: ${this._device._name}`;

		let model = document.createElement("h3");
		model.innerText = `Модель: ${this._device._model}`;

		/* sound */
		let soundWrap = document.createElement("div");
		soundWrap.className = "btn-group";

		this._sound.className = "sound";
		this._sound.innerText = `Громкость: ${this._device._sound._soundValue}`;


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

		/* on/off */
		this.btnOnOff.type = "button";
		this.btnOnOff.className = "btn";
		this.btnOnOff.addEventListener("click", () => {
			this.stateChange();
			this.stateVal();
		});

		/* render */
		this.stateVal();
		device.appendChild(name);
		device.appendChild(model);
		device.appendChild(this._sound);
		device.appendChild(soundWrap);
		soundWrap.appendChild(this._soundDecBtn);
		soundWrap.appendChild(this._soundIncBtn);
		soundWrap.appendChild(this._soundOff);
		device.appendChild(this.btnOnOff);

		this._rootElement.innerHTML = "";
		this._rootElement.appendChild(device);
	}
}