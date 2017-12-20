"use strict";

let myTv = new Tv('My TV', 'LG-3000', new Sound());
let myFridge = new Fridge('My Fridge', 'NORD-200');
let myLamp = new Lamp('My Lamp', 'Xiaomi Yeelight');

let myDevices = [myTv, myFridge, myLamp];

function render(){
	for(let i = 0; i < myDevices.length; i++){
		new View(myDevices[i], document.getElementById("app")).render();
	}
}

render();

/* ADD */
document.getElementById('addDevice').addEventListener("click", function(){

	let type = document.getElementById('deviceType').value;
	let name = document.getElementById('name').value;
	let model = document.getElementById('model').value;

	let newDevice; 

	switch(type) {
		case 'tv':
			if( name !== '' ){
				newDevice = new Tv(name, model, new Sound());
			} else {
				throw new Error("Введите данные");
			}
			break;
		case 'fridge':
			if( name !== '' ){
				newDevice = new Fridge(name, model);
			} else {
				throw new Error("Введите данные");
			}
			break;
		case 'lamp':
			if( name !== '' ){
				newDevice = new Lamp(name, model);
			} else {
				throw new Error("Введите данные");
			}
			break;
	}

	myDevices.push(newDevice);
	new View(null, document.getElementById("app")).clear();
	render();

});

/* REMOVE */
