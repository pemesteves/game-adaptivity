/**
	Represents a simple static sprite.
	Code by Rob Kleffner, 2011
*/

Engine.Sprite = function() {
	this.X = 0;
	this.Y = 0;
	this.Image = null;
};

Engine.Sprite.prototype = new Engine.Drawable();

Engine.Sprite.prototype.Draw = function(context, camera) {
	context.drawImage(this.Image, this.X - camera.X, this.Y - camera.Y);
};