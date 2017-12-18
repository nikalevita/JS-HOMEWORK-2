"use strict";
class View {
	constructor(device, rootElement) {
		this._device = device;
		this._rootElement = rootElement;
		this.btnOnOff = document.createElement("button");
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

	render() {
		let device = document.createElement("div");
		device.className = "device card col-4";

		let name = document.createElement("h2");
		name.innerText = `Имя: ${this._device._name}`;

		let model = document.createElement("h3");
		model.innerText = `Модель: ${this._device._model}`;

		this.btnOnOff.type = "button";
		this.btnOnOff.className = "btn";
		this.btnOnOff.addEventListener("click", () => {
			this.stateChange();
			this.stateVal();
		});

		this.stateVal();
		device.appendChild(name);
		device.appendChild(model);
		device.appendChild(this.btnOnOff);

		this._rootElement.innerHTML = "";
		this._rootElement.appendChild(device);
	}
}