/**
    Represents a life-giving mushroom.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

class Mushroom extends Mario.NotchSprite {
    constructor(world, x, y) {
        super();
        this.RunTime = 0;
        this.GroundInertia = 0.89;
        this.AirInertia = 0.89;
        this.OnGround = false;
        this.Width = 4;
        this.Height = 24;
        this.World = world;
        this.X = x;
        this.Y = y;
        this.Image = Engine.Resources.Images["items"];
        this.XPicO = 8;
        this.YPicO = 15;
        this.YPic = 0;
        this.Height = 12;
        this.Facing = 1;
        this.PicWidth = this.PicHeight = 16;
        this.Life = 0;
    }

    CollideCheck() {
        let xMarioD = Mario.MarioCharacter.X - this.X, yMarioD = Mario.MarioCharacter.Y - this.Y;
        if (xMarioD > -16 && xMarioD < 16 && yMarioD > -this.Height && yMarioD < Mario.MarioCharacter.Height) {
            Mario.MarioCharacter.GetMushroom();
            this.World.RemoveSprite(this);
        }
    }

    Move() {
        if (this.Life < 9) {
            this.Layer = 0;
            this.Y--;
            this.Life++;
            return;
        }

        let sideWaysSpeed = 1.75;
        this.Layer = 1;

        if (this.Xa > 2) this.Facing = 1;
        if (this.Xa < -2) this.Facing = -1;

        this.Xa = this.Facing * sideWaysSpeed;

        this.XFlip = this.Facing === -1;
        this.RunTime += Math.abs(this.Xa) + 5;

        if (!this.SubMove(this.Xa, 0)) this.Facing = -this.Facing;
        this.OnGround = false;
        this.SubMove(0, this.Ya);

        this.Ya *= 0.85;
        if (this.OnGround) this.Xa *= this.GroundInertia;
        else this.Xa *= this.AirInertia;

        if (!this.OnGround) this.Ya += 2;
    }

    SubMove(xa, ya) {
        let collide = false;

        while (xa > 8) {
            if (!this.SubMove(8, 0)) return false;
            xa -= 8;
        }
        while (xa < -8) {
            if (!this.SubMove(-8, 0)) return false;
            xa += 8;
        }
        while (ya > 8) {
            if (!this.SubMove(0, 8)) return false;
            ya -= 8;
        }
        while (ya < -8) {
            if (!this.SubMove(0, -8)) return false;
            ya += 8;
        }

        if ((ya > 0 && (this.IsBlocking(this.X + xa - this.Width, this.Y + ya, xa, 0)
            || this.IsBlocking(this.X + xa + this.Width, this.Y + ya, xa, 0)
            || this.IsBlocking(this.X + xa - this.Width, this.Y + ya + 1, xa, ya)
            || this.IsBlocking(this.X + xa + this.Width, this.Y + ya + 1, xa, ya)))
            || (ya < 0 && (this.IsBlocking(this.X + xa, this.Y + ya - this.Height, xa, ya)
                || this.IsBlocking(this.X + xa - this.Width, this.Y + ya - this.Height, xa, ya)
                || this.IsBlocking(this.X + xa + this.Width, this.Y + ya - this.Height, xa, ya)))) {
            collide = true;
        }

        if ((xa > 0 && (this.IsBlocking(this.X + xa + this.Width, this.Y + ya - this.Height, xa, ya)
            || this.IsBlocking(this.X + xa + this.Width, this.Y + ya - ((this.Height / 2) | 0), xa, ya)
            || this.IsBlocking(this.X + xa + this.Width, this.Y + ya, xa, ya)))
            || (xa < 0 && (this.IsBlocking(this.X + xa - this.Width, this.Y + ya - this.Height, xa, ya)
                || this.IsBlocking(this.X + xa - this.Width, this.Y + ya - ((this.Height / 2) | 0), xa, ya)
                || this.IsBlocking(this.X + xa - this.Width, this.Y + ya, xa, ya)))) {
            collide = true;
        }

        if (collide) {
            if (xa < 0) {
                this.X = (((this.X - this.Width) / 16) | 0) * 16 + this.Width;
                this.Xa = 0;
            }
            if (xa > 0) {
                this.X = (((this.X + this.Width) / 16 + 1) | 0) * 16 - this.Width - 1;
                this.Xa = 0;
            }
            if (ya < 0) {
                this.Y = (((this.Y - this.Height) / 16) | 0) * 16 + this.Height;
                this.JumpTime = 0;
                this.Ya = 0;
            }
            if (ya > 0) {
                this.Y = (((this.Y - 1) / 16 + 1) | 0) * 16 - 1;
                this.OnGround = true;
            }

            return false;
        }
        this.X += xa;
        this.Y += ya;
        return true;
    }

    IsBlocking(x, y, xa, ya) {
        x = (x / 16) | 0;
        y = (y / 16) | 0;

        if (x === (this.X / 16) | 0 && y === (this.Y / 16) | 0) return false;

        return this.World.Level.IsBlocking(x, y, xa, ya);
    }

    BumpCheck(x, y) {
        if (this.X + this.Width > x * 16 && this.X - this.Width < x * 16 - 16 && y === ((y - 1) / 16) | 0) {
            this.Facing = -Mario.MarioCharacter.Facing;
            this.Ya = -10;
        }
    }
};