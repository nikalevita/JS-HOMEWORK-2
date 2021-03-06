"use strict";
class Device{
	constructor(name, model, id){
		this._name = name;
		this._model = model;
		this._state = false;
		this._id = id;
	}

	get name(){
		return this._name;
	}
	set name(name){
		this._name = name;
	}

	get model(){
		return this._model;
	}

	on(){
		this._state = true;
	}
	off(){
		this._state = false;
	}

}