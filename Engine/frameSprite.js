/**
    For sprites that are only a portion of an image.
    Code by Rob Kleffner, 2011
*/

Engine.FrameSprite = function () {
    this.FrameX = 0;
    this.FrameY = 0;
    this.FrameWidth = 0;
    this.FrameHeight = 0;
};

Engine.FrameSprite.prototype = new Engine.Sprite();

Engine.FrameSprite.prototype.Draw = function (context, camera) {
    context.drawImage(this.Image, this.FrameX, this.FrameY, this.FrameWidth, this.FrameHeight, this.X - camera.X, this.Y - camera.Y, this.FrameWidth, this.FrameHeight);
};