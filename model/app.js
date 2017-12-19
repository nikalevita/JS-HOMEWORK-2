"use strict";

let myTv = new Tv('My TV 1', 'LG', new Sound());
let myTvView = new View(myTv, document.getElementById("app"));

let myTv1 = new Tv('My TV 2', 'LG-200', new Sound());
let myTv1View = new View(myTv1, document.getElementById("app"));

let myTv2 = new Tv('My TV 3', 'LG-3000', new Sound());
let myTv2View = new View(myTv2, document.getElementById("app"));

myTv1._sound.increase();

let myDevices = [myTvView, myTv1View, myTv2View];

for(let i = 0; i < myDevices.length; i++){
	myDevices[i].render();
}


console.dir(myDevices);