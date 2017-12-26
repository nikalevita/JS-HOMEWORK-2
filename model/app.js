"use strict";

let channelsPackage = {
	standart: ["First", "Second", "Third"],
	sport: ["sport-1", "sport-2", "sport-3", "sport-4"],
	discovery: ["discovery-1", "discovery-2", "discovery-3", "discovery-4"]

};

let myTv = new Tv('My TV', 'LG-3000', 1, new Sound(), new Brightness(), new Channels(channelsPackage.standart));
let myFridge = new Fridge('My Fridge', 'NORD-200', 2, new Temperature());
let myLamp = new Lamp('My Lamp', 'Xiaomi Yeelight', 3, new Brightness());


let myDevices = [myTv, myFridge, myLamp];

let id = 4;

console.dir(myDevices);

function render(){
	for(let i = 0; i < myDevices.length; i++){
		new View(myDevices[i], document.getElementById("app")).render();
	}
}

render();

let visibleDeviceType = () => {
	if(document.getElementById('deviceType').value !== 'tv'){
		document.getElementById('channelsSelect').style.display = 'none';
	}else{
		document.getElementById('channelsSelect').style.display = 'block';
	}
}
visibleDeviceType();
document.getElementById('deviceType').addEventListener("change", function(){
	visibleDeviceType();
})

/* ADD */
document.getElementById('addDevice').addEventListener("click", function(){

	let type = document.getElementById('deviceType');
	let typeVal = type.value;
	let name = document.getElementById('name').value;
	let model = document.getElementById('model').value;
	
	function getSelection(){
		let currentChannelsPackage = document.getElementById('currentChannelsPackage');
		let channelsList = [];
		for(let i = 0; i < currentChannelsPackage.options.length; i++){
			if(currentChannelsPackage.options[i].selected === true){
				channelsList = channelsList.concat(channelsPackage[currentChannelsPackage.options[i].value]);
			}
		}
		return channelsList;
	}

	let newDevice; 

	switch(typeVal) {
		case 'tv':
			if( name !== '' ){
				newDevice = new Tv( name, model, id, new Sound(), new Brightness(), new Channels( getSelection() ) );
			} else {
				throw new Error("Введите данные");
			}
			break;
		case 'fridge':
			if( name !== '' ){
				newDevice = new Fridge(name, model, id, new Temperature());
			} else {
				throw new Error("Введите данные");
			}
			break;
		case 'lamp':
			if( name !== '' ){
				newDevice = new Lamp(name, model, id, new Brightness());
			} else {
				throw new Error("Введите данные");
			}
			break;
	}

	myDevices.push(newDevice);
	new View(null, document.getElementById("app")).clear();
	render();
	deleteDevice();
	id++;
});

/* REMOVE */
function deleteDevice(){
	let btnDelete = document.getElementsByClassName('close');
	for(let i = 0; i < btnDelete.length; i++){
		btnDelete[i].addEventListener("click", function(){

			let dataId = Number(this.getAttribute("data-id"));

			function filterByID(obj) {
				if (obj._id !== dataId) {
					return true;
				} else {
					return false;
				}
			}

			myDevices = myDevices.filter(filterByID);

			new View(null, document.getElementById("app")).clear();
			render();
			deleteDevice();

		})
	}
}

deleteDevice();