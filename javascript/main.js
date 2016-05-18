"use strict"

var Game = function(canvasId){
	this.canvas = document.getElementById(canvasId);
	this.ctx = this.canvas.getContext('2d');
	this.entities = [];
}

Game.prototype.addEntity = function(entity){
	this.entities.push(entity);
}

Game.prototype.render = function () {
  //erase the page
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (var i = 0; i < this.entities.length; i++) {
    this.entities[i].draw(this.ctx);
  }  
};