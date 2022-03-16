/**
    Global representation of the mario character.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
*/

class Character extends NotchSprite {
    constructor() {
        super(null);
        //these are static in Notch's code... here it doesn't seem necessary
        this.Large = false;
        this.Fire = false;
        this.Coins = 0;
        this.Lives = 3;
        this.LevelString = "none";
        this.GroundInertia = 0.89;
        this.AirInertia = 0.89;

        //non static variables in Notch's code
        this.RunTime = 0;
        this.WasOnGround = false;
        this.OnGround = false;
        this.MayJump = false;
        this.Ducking = false;
        this.Sliding = false;
        this.JumpTime = 0;
        this.XJumpSpeed = 0;
        this.YJumpSpeed = 0;
        this.CanShoot = false;

        this.Width = 4;
        this.Height = 24;

        //Level scene
        this.World = null;
        this.Facing = 0;
        this.PowerUpTime = 0;

        this.XDeathPos = 0; this.YDeathPos = 0;
        this.DeathTime = 0;
        this.WinTime = 0;
        this.InvulnerableTime = 0;

        //Sprite
        this.Carried = null;

        this.LastLarge = false;
        this.LastFire = false;
        this.NewLarge = false;
        this.NewFire = false;

        this.gameplayMetrics = new GameplayMetrics(); // To store character gameplay metrics
    }

    Initialize(world) {
        this.World = world;
        this.X = 32;
        this.Y = 0;
        this.PowerUpTime = 0;

        //non static variables in Notch's code
        this.RunTime = 0;
        this.WasOnGround = false;
        this.OnGround = false;
        this.MayJump = false;
        this.Ducking = false;
        this.Sliding = false;
        this.JumpTime = 0;
        this.XJumpSpeed = 0;
        this.YJumpSpeed = 0;
        this.CanShoot = false;

        this.Width = 4;
        this.Height = 24;

        //Level scene
        this.World = world;
        this.Facing = 0;
        this.PowerUpTime = 0;

        this.XDeathPos = 0; this.YDeathPos = 0;
        this.DeathTime = 0;
        this.WinTime = 0;
        this.InvulnerableTime = 0;

        //Sprite
        this.Carried = null;

        this.SetLarge(this.Large, this.Fire);
    }

    SetLarge(large, fire) {
        if (fire) large = true;

        if (!large) fire = false;

        this.LastLarge = this.Large;
        this.LastFire = this.Fire;
        this.Large = large;
        this.Fire = fire;
        this.NewLarge = this.Large;
        this.NewFire = this.Fire;

        this.Blink(true);
    }

    Blink(on) {
        this.Large = on ? this.NewLarge : this.LastLarge;
        this.Fire = on ? this.NewFire : this.LastFire;

        if (this.Large) {
            this.Image = Engine.Resources.Images[this.Fire ? "fireMario" : "mario"];
            this.XPicO = 16;
            this.YPicO = 31;
            this.PicWidth = this.PicHeight = 32;
        } else {
            this.Image = Engine.Resources.Images["smallMario"];
            this.XPicO = 8;
            this.YPicO = 15;
            this.PicWidth = this.PicHeight = 16;
        }
    }

    Move() {
        if (this.WinTime > 0) {
            this.WinTime++;
            this.Xa = 0;
            this.Ya = 0;
            return;
        }

        if (this.DeathTime > 0) {
            this.DeathTime++;
            if (this.DeathTime < 11) {
                this.Xa = 0;
                this.Ya = 0;
            } else if (this.DeathTime === 11) {
                this.Ya = -15;
            } else {
                this.Ya += 2;
            }
            this.X += this.Xa;
            this.Y += this.Ya;
            return;
        }

        if (this.PowerUpTime !== 0) {
            if (this.PowerUpTime > 0) {
                this.PowerUpTime--;
                this.Blink((((this.PowerUpTime / 3) | 0) & 1) === 0);
            } else {
                this.PowerUpTime++;
                this.Blink((((-this.PowerUpTime / 3) | 0) & 1) === 0);
            }

            if (this.PowerUpTime === 0) this.World.Paused = false;

            this.CalcPic();
            return;
        }

        if (this.InvulnerableTime > 0) this.InvulnerableTime--;

        this.Visible = (((this.InvulerableTime / 2) | 0) & 1) === 0;

        this.WasOnGround = this.OnGround;
        let sideWaysSpeed = Engine.KeyboardInput.IsKeyDown(Engine.Keys.A) ? 1.2 : 0.6;

        if (this.OnGround) {
            if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.Down) && this.Large) this.Ducking = true;
            else this.Ducking = false;
        }

        if (this.Xa > 2) this.Facing = 1;

        if (this.Xa < -2) this.Facing = -1;

        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S) || (this.JumpTime < 0 && !this.OnGround && !this.Sliding)) {
            if (this.JumpTime < 0) {
                this.Xa = this.XJumpSpeed;
                this.Ya = -this.JumpTime * this.YJumpSpeed;
                this.JumpTime++;
            } else if (this.OnGround && this.MayJump) {
                Engine.Resources.PlaySound("jump");
                this.XJumpSpeed = 0;
                this.YJumpSpeed = -1.9;
                this.JumpTime = 7;
                this.Ya = this.JumpTime * this.YJumpSpeed;
                this.OnGround = false;
                this.Sliding = false;
                this.gameplayMetrics.registerJump();
            } else if (this.Sliding && this.MayJump) {
                Engine.Resources.PlaySound("jump");
                this.XJumpSpeed = -this.Facing * 6;
                this.YJumpSpeed = -2;
                this.JumpTime = -6;
                this.Xa = this.XJumpSpeed;
                this.Ya = -this.JumpTime * this.YJumpSpeed;
                this.OnGround = false;
                this.Sliding = false;
                this.Facing = -this.Facing;
                this.gameplayMetrics.registerJump();
            } else if (this.JumpTime > 0) {
                this.Xa += this.XJumpSpeed;
                this.Ya = this.JumpTime * this.YJumpSpeed;
                this.JumpTime--;
            }
        } else {
            this.JumpTime = 0;
        }

        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.Left) && !this.Ducking) {
            if (this.Facing === 1) this.Sliding = false;

            this.Xa -= sideWaysSpeed;
            if (this.JumpTime >= 0) this.Facing = -1;
        }

        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.Right) && !this.Ducking) {
            if (this.Facing === -1) this.Sliding = false;

            this.Xa += sideWaysSpeed;
            if (this.JumpTime >= 0) this.Facing = 1;
        }

        if ((!Engine.KeyboardInput.IsKeyDown(Engine.Keys.Left) && !Engine.KeyboardInput.IsKeyDown(Engine.Keys.Right)) || this.Ducking || this.Ya < 0 || this.OnGround)
            this.Sliding = false;

        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.A) && this.CanShoot && this.Fire && this.World.FireballsOnScreen < 2) {
            Engine.Resources.PlaySound("fireball");
            this.World.AddSprite(new Fireball(this.World, this.X + this.Facing * 6, this.Y - 20, this.Facing));
        }

        this.CanShoot = !Engine.KeyboardInput.IsKeyDown(Engine.Keys.A);
        this.MayJump = (this.OnGround || this.Sliding) && !Engine.KeyboardInput.IsKeyDown(Engine.Keys.S);
        this.XFlip = (this.Facing === -1);
        this.RunTime += Math.abs(this.Xa) + 5;

        if (Math.abs(this.Xa) < 0.5) {
            this.RunTime = 0;
            this.Xa = 0;
        }

        this.CalcPic();

        if (this.Sliding) {
            this.World.AddSprite(new Sparkle(this.World, ((this.X + Math.random() * 4 - 2) | 0) + this.Facing * 8,
                ((this.Y + Math.random() * 4) | 0) - 24, Math.random() * 2 - 1, Math.random(), 0, 1, 5));
            this.Ya *= 0.5;
        }

        this.OnGround = false;
        this.SubMove(this.Xa, 0);
        this.SubMove(0, this.Ya);
        if (this.Y > this.World.Level.Height * 16 + 16) this.Die();

        if (this.X < 0) {
            this.X = 0;
            this.Xa = 0;
        }

        if (this.X > this.World.Level.ExitX * 16) this.Win();

        if (this.X > this.World.Level.Width * 16) {
            this.X = this.World.Level.Width * 16;
            this.Xa = 0;
        }

        this.Ya *= 0.85;
        if (this.OnGround) this.Xa *= this.GroundInertia;
        else this.Xa *= this.AirInertia;

        if (!this.OnGround) this.Ya += 3;

        if (this.Carried !== null) {
            this.Carried.X *= this.X + this.Facing * 8;
            this.Carried.Y *= this.Y - 2;
            if (!Engine.KeyboardInput.IsKeyDown(Engine.Keys.A)) {
                this.Carried.Release(this);
                this.Carried = null;
            }
        }
    }

    CalcPic() {
        let runFrame = 0, i = 0;

        if (this.Large) {
            runFrame = ((this.RunTime / 20) | 0) % 4;
            if (runFrame === 3) runFrame = 1;

            if (this.Carried === null && Math.abs(this.Xa) > 10) runFrame += 3;

            if (this.Carried !== null) runFrame += 10;

            if (!this.OnGround) {
                if (this.Carried !== null) runFrame = 12;
                else if (Math.abs(this.Xa) > 10) runFrame = 7;
                else runFrame = 6;
            }
        } else {
            runFrame = ((this.RunTime / 20) | 0) % 2;
            if (this.Carried === null && Math.abs(this.Xa) > 10) runFrame += 2;

            if (this.Carried !== null) runFrame += 8;

            if (!this.OnGround) {
                if (this.Carried !== null) runFrame = 9;
                else if (Math.abs(this.Xa) > 10) runFrame = 5;
                else runFrame = 4;
            }
        }

        if (this.OnGround && ((this.Facing === -1 && this.Xa > 0) || (this.Facing === 1 && this.Xa < 0))) {
            if (this.Xa > 1 || this.Xa < -1) runFrame = this.Large ? 9 : 7;

            if (this.Xa > 3 || this.Xa < -3) {
                for (i = 0; i < 3; i++) {
                    this.World.AddSprite(new Sparkle(this.World, (this.X + Math.random() * 8 - 4) | 0, (this.Y + Math.random() * 4) | 0, Math.random() * 2 - 1, Math.random() * -1, 0, 1, 5));
                }
            }
        }

        if (this.Large) {
            if (this.Ducking) runFrame = 14;

            this.Height = this.Ducking ? 12 : 24;
        } else {
            this.Height = 12;
        }

        this.XPic = runFrame;
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

        if ((ya > 0 && (this.IsBlocking(this.X + xa - this.Width, this.Y + ya, xa, 0) ||
            this.IsBlocking(this.X + xa + this.Width, this.Y + ya, xa, 0) ||
            this.IsBlocking(this.X + xa - this.Width, this.Y + ya + 1, xa, ya) ||
            this.IsBlocking(this.X + xa + this.Width, this.Y + ya + 1, xa, ya)))
            || (ya < 0 && (this.IsBlocking(this.X + xa, this.Y + ya - this.Height, xa, ya) ||
                this.IsBlocking(this.X + xa - this.Width, this.Y + ya - this.Height, xa, ya) ||
                this.IsBlocking(this.X + xa + this.Width, this.Y + ya - this.Height, xa, ya))))
            collide = true;

        if (xa > 0) {
            if (this.IsBlocking(this.X + xa + this.Width, this.Y + ya - this.Height, xa, ya)
                || this.IsBlocking(this.X + xa + this.Width, this.Y + ya - ((this.Height / 2) | 0), xa, ya)
                || this.IsBlocking(this.X + xa + this.Width, this.Y + ya, xa, ya)) {
                this.Sliding = true;
                collide = true;
            }
            else this.Sliding = false;
        }

        if (xa < 0) {
            this.Sliding = true;
            if (this.IsBlocking(this.X + xa - this.Width, this.Y + ya - this.Height, xa, ya)
                || this.IsBlocking(this.X + xa - this.Width, this.Y + ya - ((this.Height / 2) | 0), xa, ya)
                || this.IsBlocking(this.X + xa - this.Width, this.Y + ya, xa, ya)) {
                this.Sliding = true;
                collide = true;
            } else this.Sliding = false;
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
        } else {
            this.X += xa;
            this.Y += ya;
            return true;
        }
    }

    IsBlocking(x, y, xa, ya) {
        let blocking = false, block = 0, xx = 0, yy = 0;

        x = (x / 16) | 0;
        y = (y / 16) | 0;
        if (x === ((this.X / 16) | 0) && y === ((this.Y / 16) | 0)) return false;

        block = this.World.Level.GetBlock(x, y);

        if (((Mario.Tile.Behaviors[block & 0xff]) & Mario.Tile.PickUpable) > 0) {
            this.GetCoin();
            Engine.Resources.PlaySound("coin");
            this.World.Level.SetBlock(x, y, 0);
            for (xx = 0; xx < 2; xx++) {
                for (yy = 0; yy < 2; yy++) {
                    this.World.AddSprite(new Sparkle(this.World, x * 16 + xx * 8 + ((Math.random() * 8) | 0), y * 16 + yy * 8 + ((Math.random() * 8) | 0), 0, 0, 0, 2, 5));
                }
            }
        }

        blocking = this.World.Level.IsBlocking(x, y, xa, ya);
        if (blocking && ya < 0) this.World.Bump(x, y, this.Large);

        return blocking;
    }

    Stomp(object) {
        let targetY = 0;

        if (this.DeathTime > 0 || this.World.Paused) return;

        targetY = object.Y - object.Height / 2;
        this.SubMove(0, targetY - this.Y);

        if (object instanceof Enemy || object instanceof BulletBill) {
            Engine.Resources.PlaySound("kick");
            this.XJumpSpeed = 0;
            this.YJumpSpeed = -1.9;
            this.JumpTime = 8;
            this.Ya = this.JumpTime * this.YJumpSpeed;
            this.OnGround = false;
            this.Sliding = false;
            this.InvulnerableTime = 1;
        } else if (object instanceof Shell) {
            if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.A) && object.Facing === 0) {
                this.Carried = object;
                object.Carried = true;
            } else {
                Engine.Resources.PlaySound("kick");
                this.XJumpSpeed = 0;
                this.YJumpSpeed = -1.9;
                this.JumpTime = 8;
                this.Ya = this.JumpTime * this.YJumpSpeed;
                this.OnGround = false;
                this.Sliding = false;
                this.InvulnerableTime = 1;
            }
        }
    }

    GetHurt() {
        if (this.DeathTime > 0 || this.World.Paused) return;

        if (this.InvulnerableTime > 0) return;

        if (this.Large) {
            this.World.Paused = true;
            this.PowerUpTime = -18;
            Engine.Resources.PlaySound("powerdown");

            this.SetLarge(this.Fire, false);

            this.InvulnerableTime = 32;
        }
        else this.Die();
    }

    Win() {
        this.XDeathPos = this.X | 0;
        this.YDeathPos = this.Y | 0;
        this.World.Paused = true;
        this.WinTime = 1;
        Engine.Resources.PlaySound("exit");
    }

    Die() {
        this.XDeathPos = this.X | 0;
        this.YDeathPos = this.Y | 0;
        this.World.Paused = true;
        this.DeathTime = 1;
        Engine.Resources.PlaySound("death");
        this.SetLarge(false, false);
    }

    GetFlower() {
        if (this.DeathTime > 0 && this.World.Paused) return;

        if (!this.Fire) {
            this.World.Paused = true;
            this.PowerUpTime = 18;
            Engine.Resources.PlaySound("powerup");
            this.SetLarge(true, true);
        } else {
            this.GetCoin();
            Engine.Resources.PlaySound("coin");
        }
    }

    GetMushroom() {
        if (this.DeathTime > 0 && this.World.Paused) return;

        if (!this.Large) {
            this.World.Paused = true;
            this.PowerUpTime = 18;
            Engine.Resources.PlaySound("powerup");
            this.SetLarge(true, false);
        } else {
            this.GetCoin();
            Engine.Resources.PlaySound("coin");
        }
    }

    Kick(shell) {
        if (this.DeathTime > 0 && this.World.Paused) return;

        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.A)) {
            this.Carried = shell;
            shell.Carried = true;
        } else {
            Engine.Resources.PlaySound("kick");
            this.InvulnerableTime = 1;
        }
    }

    Get1Up() {
        Engine.Resources.PlaySound("1up");
        this.Lives++;
        if (this.Lives === 99) this.Lives = 99;
    }

    GetCoin() {
        this.Coins++;
        if (this.Coins === 100) {
            this.Coins = 0;
            this.Get1Up();
        }
    }
};