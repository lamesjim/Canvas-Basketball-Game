"use strict";

var canvas2 = document.getElementById('backCanvas');
var ctx2 = canvas2.getContext('2d');
var drawCourt = function(){
	ctx2.beginPath();
	ctx2.fillStyle = 'hsla(224, 53%, 33%, 1)';
	ctx2.fillRect(0, 500, canvas2.width, 500);
	ctx2.closePath();
	ctx2.strokeStyle = 'white';
	ctx2.lineWidth = 3.5;
	ctx2.beginPath();
	ctx2.moveTo(980,730);
	ctx2.lineTo(700,730);
	ctx2.stroke();
	ctx2.closePath();
	ctx2.beginPath();
	ctx2.moveTo(980,590);
	ctx2.lineTo(700,590);
	ctx2.stroke();
	ctx2.closePath();
	ctx2.beginPath();
	ctx2.moveTo(700,730);
	ctx2.lineTo(700,590);
	ctx2.stroke();
	ctx2.closePath();
	ctx2.beginPath();
	// ctx2.moveTo(700,730)
	ctx2.arc(700,660,70,0,Math.PI*2);
	ctx2.stroke();
	ctx2.closePath();
};

drawCourt();

var parkImg = new Image();
parkImg.onload = function (){
	ctx2.drawImage(parkImg, 0, 0 , canvas2.width, 500);
};
parkImg.src = './images/park.jpg';
