"use strict";

let myTv = new Tv('My TV 1', 'LG');
let myTvView = new View(myTv, document.getElementById("app"));
myTvView.render();