/**
	Represents a fire powerup.
	Adapted from Rob Kleffner, 2011.
	Code by Pedro Esteves, 2022.
*/

class FireFlower extends Mario.NotchSprite {
	constructor(world, x, y) {
		super();
		this.Width = 4;
		this.Height = 24;

		this.World = world;
		this.X = x;
		this.Y = y;
		this.Image = Engine.Resources.Images["items"];

		this.XPicO = 8;
		this.YPicO = 15;
		this.XPic = 1;
		this.YPic = 0;
		this.Height = 12;
		this.Facing = 1;
		this.PicWidth = this.PicHeight = 16;

		this.Life = 0;
	}

	CollideCheck() {
		let xMarioD = Mario.MarioCharacter.X - this.X, yMarioD = Mario.MarioCharacter.Y - this.Y;
		if (xMarioD > -16 && xMarioD < 16 && yMarioD > -this.Height && yMarioD < Mario.MarioCharacter.Height) {
			Mario.MarioCharacter.GetFlower();
			this.World.RemoveSprite(this);
		}
	}

	Move() {
		if (this.Life >= 9) return;

		this.Layer = 0;
		this.Y--;
		this.Life++;
	}
};