"use strict"

var globalID

var Score = function (){
    this.playerScore = 0
}

Score.prototype.draw = function (ctx) {
	ctx.font = "32px Arial";
    ctx.fillStyle = 'black';
    ctx.fillText("Score: "+this.playerScore, 20, 350);
}

var Ball = function(x,y,radius,startAngle,endAngle,clockwise){
	this.x = x
	this.y = y
	this.radius = 50
	this.startAngle = 0
	this.endAngle = Math.PI*2
	this.xVel = 0
	this.yVel = 0
}

Ball.prototype.draw = function (ctx){
	//ball
	ctx.beginPath();
	ctx.arc(this.x,this.y,37.5,0,Math.PI*2,true);
	ctx.fillStyle = "orange";
	ctx.strokeStyle = "black";
	ctx.fill()
	ctx.closePath()

	// lines on ball
	ctx.lineWidth = 1.5
	ctx.beginPath()
	ctx.moveTo(this.x - 37, this.y)
	ctx.lineTo(this.x + 37, this.y)
	ctx.stroke()
	ctx.closePath()	
	ctx.lineWidth = 1.5
	ctx.beginPath()
	ctx.moveTo(this.x, this.y - 37)
	ctx.lineTo(this.x, this.y + 37)
	ctx.stroke()
	ctx.closePath()	
	ctx.lineWidth = 1.5
	ctx.beginPath()
	ctx.moveTo(this.x - 18, this.y - 30)
	ctx.lineTo(this.x - 18, this.y + 30)
	ctx.stroke()
	ctx.closePath()	
	ctx.lineWidth = 1.5
	ctx.beginPath()
	ctx.moveTo(this.x + 18, this.y - 30)
	ctx.lineTo(this.x + 18, this.y + 30)
	ctx.stroke()
	ctx.closePath()
}

Ball.prototype.shot = function (xVel,yVel){
	var self = this
	this.xVel = 19.65;
	this.yVel = -30;

	var timer = setInterval(function () {
		self.move(timer,newScore)

	},1000/90);
}

	    // debugger;
  		// if (self.x > 1065.5 && self.x < 1101.5 && self.y > 285 ) {
  		// 	$('#score-board').html(parseInt($('#score-board').html(), 10) + 1)
    // 		cancelAnimation(globalID)
  		// 	newGame.render()
    // 		console.log(self.x, self.y)
    // 		}
    // globalID = requestAnimationFrame(shotAnimation)

Ball.prototype.move = function(timeVar,score) {
    if(!this.collide(newHoop)){ //doesn't collide with any object	
		this.x+=this.xVel;
	    this.y+=this.yVel;
	    this.yVel+= 1; //gravity is 1
    } else {
    	score.playerScore++
    	this.reset(timeVar)
    }
}

Ball.prototype.collide = function(hoop) {
	// check to make sure newX and newY are on the board
	// if so change the x and y values of this
	if(this.x <= hoop.hoopX - 35 && this.x >= hoop.hoopX - 175 && this.y > hoop.hoopY + 130) {
		return true; //score!
	} else {
		return false
	}
};

Ball.prototype.reset = function(timeVar){
	this.x = 100
	this.y = 650
	clearInterval(timeVar)
}

//draws all pieces of the hoop
var Hoop = function (hoopX,hoopY,hoopEndX,hoopEndY) {
	this.hoopX = hoopX
	this.hoopY = hoopY
	this.hoopEndX = hoopEndX
	this.hoopEndY = hoopEndY
}

Hoop.prototype.draw = function (ctx) {
	//pole
	ctx.strokeStyle = 'black'
	ctx.lineWidth = 10
	ctx.lineCap = 'round'
	ctx.beginPath()
	ctx.moveTo(this.hoopX, this.hoopY)
	ctx.lineTo(this.hoopEndX, this.hoopEndY)
	ctx.stroke()
	ctx.closePath
	//support beam one
	ctx.strokeStyle = 'black'
	ctx.lineWidth = 5.5
	ctx.lineCap = 'round'
	ctx.beginPath()
	ctx.moveTo(this.hoopX, this.hoopY + 20)
	ctx.lineTo(this.hoopX - 50, this.hoopY + 50)
	ctx.stroke()
	ctx.closePath
	//support beam two
	ctx.strokeStyle = 'black'
	ctx.lineWidth = 5.5
	ctx.lineCap = 'round'
	ctx.beginPath()
	ctx.moveTo(this.hoopX, this.hoopY + 100)
	ctx.lineTo(this.hoopX - 50, this.hoopY + 50)
	ctx.stroke()
	ctx.closePath
	//backboard
	ctx.strokeStyle = 'black'
	ctx.lineWidth = 10
	ctx.lineCap = 'round'
	ctx.beginPath()
	ctx.moveTo(this.hoopX - 50, this.hoopY)
	ctx.lineTo(this.hoopX - 50, this.hoopY + 150)
	ctx.stroke()
	ctx.closePath
	//net
	let startX = this.hoopX - 190
	let startY = this.hoopY + 130
	let endX = this.hoopX - 176
	let endY = this.hoopY + 210
	for (let i = 0; i < 12; i++){
		ctx.strokeStyle = 'black'
		ctx.lineWidth = '3'
		ctx.lineCap = 'round'
		if(i % 2 == 0){
			ctx.beginPath()
			ctx.moveTo(startX, startY)
			ctx.lineTo(endX, endY)
			ctx.stroke()
			ctx.closePath
			startX += 10
			startY += 80
			endX += 10
			endY -= 80
		} else {
			ctx.beginPath()
			ctx.moveTo(startX, startY)
			ctx.lineTo(endX, endY)
			ctx.stroke()
			ctx.closePath
			startX += 10
			startY -= 80
			endX += 10
			endY += 80
			}
		}
	//hoop
	ctx.strokeStyle = 'orange'
	ctx.lineWidth = 8
	ctx.lineCap = 'round'
	ctx.beginPath()
	ctx.moveTo(this.hoopX - 50, this.hoopY + 130)
	ctx.lineTo(this.hoopX - 190, this.hoopY + 130)
	ctx.stroke()
	ctx.closePath
	//base
	ctx.beginPath()
	ctx.fillStyle = 'red'
	ctx.fillRect(this.hoopEndX - 50, this.hoopEndY - 175, 100, 180)
	ctx.closePath
}


// Ball.prototype.shot = function (hoop,ctx){
// 	var self = this;
// 	var t = 0;
// 	var curveX;
// 	var curveY;
	
// 	var timer = setInterval(function(){
// 		// ctx.strokeStyle = 'white';
// 		// ctx.beginPath()
// 		// ctx.moveTo(self.x,self.y)
// 		// ctx.bezierCurveTo(100,100,300,300,hoop.hoopX,hoop.hoopY)
// 		// ctx.stroke()

// 		curveX = (1 - t) * (1 - t) * self.x + 2 * (1 - t) * t * 550 + t * t * hoop.hoopEndX + 100;
// 		curveY = (1 - t) * (1 - t) * self.y + 2 * (1 - t) * t * 50 + t * t * hoop.hoopEndY;
// 	    self.x = curveX-20 // use .move() instead of changing self
// 	    self.y = curveY-20
// 	    // if(self.move())
// 	    t += 0.03
// 	    if(self.y > 780) {
// 	    	window.clearInterval(timer)
// 	    }
// 	    //
// 	},1000/30)
// }
