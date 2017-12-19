"use strict";

let myTv = new Tv('My TV 1', 'LG', new Sound());

let myTv1 = new Tv('My TV 2', 'LG-200', new Sound());

let myTv2 = new Tv('My TV 3', 'LG-3000', new Sound());

myTv1._sound.increase(); // test

let myDevices = [myTv, myTv1, myTv2];

for(let i = 0; i < myDevices.length; i++){
	new View(myDevices[i], document.getElementById("app")).render();
}

console.dir(myDevices);