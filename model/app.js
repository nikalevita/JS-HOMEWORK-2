"use strict";

let myTv = new Tv('My TV', 'LG-3000', new Sound());

let myFridge = new Fridge('My Fridge', 'NORD-200');

let myLamp = new Lamp('My Lamp', 'Xiaomi Yeelight');

let myDevices = [myTv, myFridge, myLamp];

for(let i = 0; i < myDevices.length; i++){
	new View(myDevices[i], document.getElementById("app")).render();
}