var Mario = {
    /** SPRITE CUTS **/
    SpriteCuts: {
        CreateBlackFont: function () {
            return new Engine.SpriteFont([], Engine.Resources.Images.font, 8, 8, this.GetCharArray(0));
        },
        CreateRedFont: function () {
            return new Engine.SpriteFont([], Engine.Resources.Images.font, 8, 8, this.GetCharArray(8));
        },
        CreateGreenFont: function () {
            return new Engine.SpriteFont([], Engine.Resources.Images.font, 8, 8, this.GetCharArray(16));
        },
        CreateBlueFont: function () {
            return new Engine.SpriteFont([], Engine.Resources.Images.font, 8, 8, this.GetCharArray(24));
        },
        CreateYellowFont: function () {
            return new Engine.SpriteFont([], Engine.Resources.Images.font, 8, 8, this.GetCharArray(32));
        },
        CreatePinkFont: function () {
            return new Engine.SpriteFont([], Engine.Resources.Images.font, 8, 8, this.GetCharArray(40));
        },
        CreateCyanFont: function () {
            return new Engine.SpriteFont([], Engine.Resources.Images.font, 8, 8, this.GetCharArray(48));
        },
        CreateWhiteFont: function () {
            return new Engine.SpriteFont([], Engine.Resources.Images.font, 8, 8, this.GetCharArray(56));
        },
        GetCharArray: function (a) {
            for (var b = [], c = 0, c = 32; c < 127; c++) b[c] = { X: (c - 32) * 8, Y: a };
            return b;
        },
        GetBackgroundSheet: function () {
            for (var a = [], b = 0, c = 0, e = Engine.Resources.Images.background.width / 32, d = Engine.Resources.Images.background.height / 32, b = 0; b < e; b++) {
                a[b] = [];
                for (c = 0; c < d; c++) a[b][c] = { X: b * 32, Y: c * 32, Width: 32, Height: 32 };
            }
            return a;
        },
        GetLevelSheet: function () {
            for (var a = [], b = 0, c = 0, e = Engine.Resources.Images.map.width / 16, d = Engine.Resources.Images.map.height / 16, b = 0; b < e; b++) {
                a[b] = [];
                for (c = 0; c < d; c++) a[b][c] = { X: b * 16, Y: c * 16, Width: 16, Height: 16 };
            }
            return a;
        },
    },

    /** LEVEL **/

    Tile: {
        BlockUpper: 1,
        BlockAll: 2,
        BlockLower: 4,
        Special: 8,
        Bumpable: 16,
        Breakable: 32,
        PickUpable: 64,
        Animated: 128,
        Behaviors: [],
        LoadBehaviors: function () {
            for (
                var a = [0, 20, 28, 0, 130, 130, 130, 130, 2, 2, 2, 2, 2, 0, 138, 0, 162, 146, 154, 162, 146, 146, 154, 146, 2, 0, 2, 2, 2, 0, 2, 0, 192, 192, 192, 192, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
                b = 0,
                b = 58;
                b < 128;
                b++
            )
                a[b] = 0;
            a[128] = 2;
            a[129] = 2;
            a[130] = 2;
            a[131] = 0;
            a[132] = 1;
            a[133] = 1;
            a[134] = 1;
            a[135] = 0;
            a[136] = 2;
            a[137] = 2;
            a[138] = 2;
            a[139] = 0;
            a[140] = 2;
            a[141] = 2;
            a[142] = 2;
            a[143] = 0;
            a[144] = 2;
            a[145] = 0;
            a[146] = 2;
            a[147] = 0;
            a[148] = 0;
            a[149] = 0;
            a[150] = 0;
            a[151] = 0;
            a[152] = 2;
            a[153] = 2;
            a[154] = 2;
            a[155] = 0;
            a[156] = 2;
            a[157] = 2;
            a[158] = 2;
            a[159] = 0;
            a[160] = 2;
            a[161] = 2;
            a[162] = 2;
            a[163] = 0;
            a[164] = 0;
            a[165] = 0;
            a[166] = 0;
            a[167] = 0;
            a[168] = 2;
            a[169] = 2;
            a[170] = 2;
            a[171] = 0;
            a[172] = 2;
            a[173] = 2;
            a[174] = 2;
            a[175] = 0;
            a[176] = 2;
            a[177] = 2;
            a[178] = 2;
            a[179] = 0;
            a[180] = 1;
            a[181] = 1;
            a[182] = 1;
            for (b = 183; b < 224; b++) a[b] = 0;
            a[224] = 1;
            a[225] = 1;
            a[226] = 1;
            for (b = 227; b < 256; b++) a[b] = 0;
            this.Behaviors = a;
        },
    },
    LevelType: { Overground: 0, Underground: 1, Castle: 2 },
    Odds: { Straight: 0, HillStraight: 1, Tubes: 2, Jump: 3, Cannons: 4 },
    Level: function (a, b) {
        this.Width = a;
        this.Height = b;
        this.ExitY = this.ExitX = 10;
        this.Map = [];
        this.Data = [];
        this.SpriteTemplates = [];
        for (var c = 0, e = 0, c = 0; c < this.Width; c++) {
            this.Map[c] = [];
            this.Data[c] = [];
            this.SpriteTemplates[c] = [];
            for (e = 0; e < this.Height; e++) (this.Map[c][e] = 0), (this.Data[c][e] = 0), (this.SpriteTemplates[c][e] = null);
        }
    },
};
Mario.Level.prototype = {
    Update: function () {
        for (var a = 0, b = 0, a = 0; a < this.Width; a++) for (b = 0; b < this.Height; b++) this.Data[a][b] > 0 && this.Data[a][b]--;
    },
    GetBlockCapped: function (a, b) {
        a < 0 && (a = 0);
        b < 0 && (b = 0);
        a >= this.Width && (a = this.Width - 1);
        b >= this.Height && (b = this.Height - 1);
        return this.Map[a][b];
    },
    GetBlock: function (a, b) {
        a < 0 && (a = 0);
        if (b < 0) return 0;
        a >= this.Width && (a = this.Width - 1);
        b >= this.Height && (b = this.Height - 1);
        return this.Map[a][b];
    },
    SetBlock: function (a, b, c) {
        a < 0 || b < 0 || a >= this.Width || b >= this.Height || (this.Map[a][b] = c);
    },
    SetBlockData: function (a, b, c) {
        a < 0 || b < 0 || a >= this.Width || b >= this.Height || (this.Data[a][b] = c);
    },
    IsBlocking: function (a, b, c, e) {
        a = this.GetBlock(a, b);
        b = (Mario.Tile.Behaviors[a & 255] & Mario.Tile.BlockAll) > 0;
        b |= e > 0 && (Mario.Tile.Behaviors[a & 255] & Mario.Tile.BlockUpper) > 0;
        b |= e < 0 && (Mario.Tile.Behaviors[a & 255] & Mario.Tile.BlockLower) > 0;
        return b;
    },
    GetSpriteTemplate: function (a, b) {
        if (a < 0) return null;
        if (b < 0) return null;
        if (a >= this.Width) return null;
        if (b >= this.Height) return null;
        return this.SpriteTemplates[a][b];
    },
    SetSpriteTemplate: function (a, b, c) {
        a < 0 || b < 0 || a >= this.Width || b >= this.Height || (this.SpriteTemplates[a][b] = c);
    },
};

/** BACKGROUND GENERATOR **/

Mario.BackgroundGenerator = function (a, b, c, e) {
    this.Width = a;
    this.Height = b;
    this.Distant = c;
    this.Type = e;
};
Mario.BackgroundGenerator.prototype = {
    SetValues: function (a, b, c, e) {
        this.Width = a;
        this.Height = b;
        this.Distant = c;
        this.Type = e;
    },
    CreateLevel: function () {
        var a = new Mario.Level(this.Width, this.Height);
        switch (this.Type) {
            case Mario.LevelType.Overground:
                this.GenerateOverground(a);
                break;
            case Mario.LevelType.Underground:
                this.GenerateUnderground(a);
                break;
            case Mario.LevelType.Castle:
                this.GenerateCastle(a);
        }
        return a;
    },
    GenerateOverground: function (a) {
        for (var b = this.Distant ? 4 : 6, c = this.Distant ? 2 : 1, e = Math.floor(Math.random() * b) + c, d = Math.floor(Math.random() * b) + c, f = 0, g = 0, h = 0, i = 0, i = 2, f = 0; f < this.Width; f++) {
            for (e = d; e === d;) d = Math.floor(Math.random() * b) + c;
            for (g = 0; g < this.Height; g++)
                (h = e < d ? e : d),
                    (i = e < d ? d : e),
                    g < h
                        ? this.Distant
                            ? ((i = 2), g < 2 && (i = g), a.SetBlock(f, g, 4 + i * 8))
                            : a.SetBlock(f, g, 5)
                        : g === h
                            ? ((i = h === d ? 0 : 1), (i += this.Distant ? 2 : 0), a.SetBlock(f, g, i))
                            : g === i
                                ? ((i = h === d ? 0 : 1), (i += this.Distant ? 2 : 0), a.SetBlock(f, g, i + 16))
                                : ((i = g > i ? 1 : 0), h === e && (i = 1 - i), (i += this.Distant ? 2 : 0), a.SetBlock(f, g, i + 8));
        }
    },
    GenerateUnderground: function (a) {
        var b = 0,
            c = 0,
            e = 0,
            d = 0;
        if (this.Distant)
            for (var f = 0, b = 0; b < this.Width; b++) {
                Math.random() < 0.75 && (f = 1 - f);
                for (c = 0; c < this.Height; c++) {
                    e = f;
                    d = c - 2;
                    if (d < 0 || d > 4) (d = 2), (e = 0);
                    a.SetBlock(b, c, 4 + e + (3 + d) * 8);
                }
            }
        else
            for (b = 0; b < this.Width; b++)
                for (c = 0; c < this.Height; c++) {
                    e = b % 2;
                    d = c - 1;
                    if (d < 0 || d > 7) (d = 7), (e = 0);
                    e === 0 && d > 1 && d < 5 && ((e = -1), (d = 0));
                    a.SetBlock(b, c, 6 + e + d * 8);
                }
    },
    GenerateCastle: function (a) {
        var b = 0,
            c = 0,
            e = 0,
            d = 0;
        if (this.Distant)
            for (b = 0; b < this.Width; b++)
                for (c = 0; c < this.Height; c++)
                    (e = b % 2),
                        (d = c - 1),
                        d > 2 && d < 5 ? (d = 2) : d >= 5 && (d -= 2),
                        d < 0 ? ((e = 0), (d = 5)) : d > 4 ? ((e = 1), (d = 5)) : e < 1 && d === 3 ? ((e = 0), (d = 3)) : e < 1 && d > 0 && d < 3 && ((e = 0), (d = 2)),
                        a.SetBlock(b, c, 1 + e + (d + 4) * 8);
        else
            for (b = 0; b < this.Width; b++)
                for (c = 0; c < this.Height; c++)
                    (e = b % 3),
                        (d = c - 1),
                        d > 2 && d < 5 ? (d = 2) : d >= 5 && (d -= 2),
                        d < 0 ? ((e = 1), (d = 5)) : d > 4 ? ((e = 2), (d = 5)) : e < 2 && d === 4 ? ((e = 2), (d = 4)) : e < 2 && d > 0 && d < 4 && ((e = 4), (d = -3)),
                        a.SetBlock(b, c, 1 + e + (d + 3) * 8);
    },
};

/** BACKGROUND RENDERER **/

Mario.BackgroundRenderer = function (a, b, c, e) {
    this.Level = a;
    this.Width = b;
    this.Distance = e;
    this.TilesY = ((c / 32) | 0) + 1;
    this.Background = Mario.SpriteCuts.GetBackgroundSheet();
};
Mario.BackgroundRenderer.prototype = new Engine.Drawable();
Mario.BackgroundRenderer.prototype.Draw = function (a, b) {
    for (var c = b.X / this.Distance, e = 0, d = 0, f = null, f = null, g = ((c + this.Width) / 32) | 0, e = (c / 32) | 0; e <= g; e++)
        for (d = 0; d < this.TilesY; d++)
            (f = this.Level.GetBlock(e, d) & 255), (f = this.Background[f % 8][(f / 8) | 0]), a.drawImage(Engine.Resources.Images.background, f.X, f.Y, f.Width, f.Height, ((e << 5) - c) | 0, (d << 5) | 0, f.Width, f.Height);
};

/** IMPROVED NOISE **/

Mario.ImprovedNoise = function (a) {
    this.P = [];
    this.Shuffle(a);
};
Mario.ImprovedNoise.prototype = {
    Shuffle: function () {
        for (var a = [], b = 0, c = 0, e = 0, b = 0; b < 256; b++) a[b] = b;
        for (b = 0; b < 256; b++) (c = ((Math.random() * 255) | 0) + b), (e = a[b]), (a[b] = a[c]), (a[c] = e), (this.P[b + 256] = this.P[b] = a[b]);
    },
    PerlinNoise: function (a, b) {
        for (var c = 0, e = 0, d = 0, c = 0; c < 8; c++) (d = 64 / (1 << c)), (e += this.Noise(a / d, b / d, 128) / (1 << c));
        return e;
    },
    Noise: function (a, b, c) {
        var e = (a | 0) & 255,
            d = (b | 0) & 255,
            f = (c | 0) & 255;
        a -= a | 0;
        b -= b | 0;
        c -= c | 0;
        var g = this.Fade(a),
            h = this.Fade(b),
            i = this.Fade(c),
            j = this.P[e] + d,
            k = this.P[j] + f,
            j = this.P[j + 1] + f,
            d = this.P[e + 1] + d,
            e = this.P[d] + f,
            f = this.P[d + 1] + f;
        return this.Lerp(
            i,
            this.Lerp(h, this.Lerp(g, this.Grad(this.P[k], a, b, c), this.Grad(this.P[e], a - 1, b, c)), this.Lerp(g, this.Grad(this.P[j], a, b - 1, c), this.Grad(this.P[f], a - 1, b - 1, c))),
            this.Lerp(h, this.Lerp(g, this.Grad(this.P[k + 1], a, b, c - 1), this.Grad(this.P[e + 1], a - 1, b, c - 1)), this.Lerp(g, this.Grad(this.P[j + 1], a, b - 1, c - 1), this.Grad(this.P[f + 1], a - 1, b - 1, c - 1)))
        );
    },
    Fade: function (a) {
        return a * a * a * (a * (a * 6 - 15) + 10);
    },
    Lerp: function (a, b, c) {
        return b + a * (c - b);
    },
    Grad: function (a, b, c, e) {
        a &= 15;
        var d = a < 8 ? b : c,
            b = a < 4 ? c : a === 12 || a === 14 ? b : e;
        return ((a & 1) === 0 ? d : -d) + ((a & 2) === 0 ? b : -b);
    },
};

/** NOTCH SPRITE **/

Mario.NotchSprite = function (a) {
    this.YPicO = this.XPicO = this.YPic = this.XPic = this.Ya = this.Xa = this.Y = this.X = this.YOld = this.XOld = 0;
    this.PicHeight = this.PicWidth = 32;
    this.YFlip = this.XFlip = !1;
    this.Visible = !0;
    this.Image = a;
    this.Delta = 0;
    this.SpriteTemplate = null;
    this.Layer = 1;
};
Mario.NotchSprite.prototype = new Engine.Drawable();
Mario.NotchSprite.prototype.Draw = function (a) {
    var b = 0,
        c = 0;
    this.Visible &&
        ((b = ((this.XOld + (this.X - this.XOld) * this.Delta) | 0) - this.XPicO),
            (c = ((this.YOld + (this.Y - this.YOld) * this.Delta) | 0) - this.YPicO),
            a.save(),
            a.scale(this.XFlip ? -1 : 1, this.YFlip ? -1 : 1),
            a.translate(this.XFlip ? -320 : 0, this.YFlip ? -240 : 0),
            a.drawImage(this.Image, this.XPic * this.PicWidth, this.YPic * this.PicHeight, this.PicWidth, this.PicHeight, this.XFlip ? 320 - b - this.PicWidth : b, this.YFlip ? 240 - c - this.PicHeight : c, this.PicWidth, this.PicHeight),
            a.restore());
};
Mario.NotchSprite.prototype.Update = function (a) {
    this.XOld = this.X;
    this.YOld = this.Y;
    this.Move();
    this.Delta = a;
};
Mario.NotchSprite.prototype.UpdateNoMove = function () {
    this.XOld = this.X;
    this.YOld = this.Y;
    this.Delta = 0;
};
Mario.NotchSprite.prototype.Move = function () {
    this.X += this.Xa;
    this.Y += this.Ya;
};
Mario.NotchSprite.prototype.GetX = function (a) {
    return ((this.XOld + (this.X - this.XOld) * a) | 0) - this.XPicO;
};
Mario.NotchSprite.prototype.GetY = function (a) {
    return ((this.YOld + (this.Y - this.YOld) * a) | 0) - this.YPicO;
};
Mario.NotchSprite.prototype.CollideCheck = function () { };
Mario.NotchSprite.prototype.BumpCheck = function () { };
Mario.NotchSprite.prototype.Release = function () { };
Mario.NotchSprite.prototype.ShellCollideCheck = function () {
    return !1;
};
Mario.NotchSprite.prototype.FireballCollideCheck = function () {
    return !1;
};

/** CHARACTER **/

class Character extends Mario.NotchSprite {
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
            this.World.AddSprite(new Mario.Fireball(this.World, this.X + this.Facing * 6, this.Y - 20, this.Facing));
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
            this.World.AddSprite(new Mario.Sparkle(this.World, ((this.X + Math.random() * 4 - 2) | 0) + this.Facing * 8,
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
                    this.World.AddSprite(new Mario.Sparkle(this.World, (this.X + Math.random() * 8 - 4) | 0, (this.Y + Math.random() * 4) | 0, Math.random() * 2 - 1, Math.random() * -1, 0, 1, 5));
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
                    this.World.AddSprite(new Mario.Sparkle(this.World, x * 16 + xx * 8 + ((Math.random() * 8) | 0), y * 16 + yy * 8 + ((Math.random() * 8) | 0), 0, 0, 0, 2, 5));
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

        if (object instanceof Mario.Enemy || object instanceof Mario.BulletBill) {
            Engine.Resources.PlaySound("kick");
            this.XJumpSpeed = 0;
            this.YJumpSpeed = -1.9;
            this.JumpTime = 8;
            this.Ya = this.JumpTime * this.YJumpSpeed;
            this.OnGround = false;
            this.Sliding = false;
            this.InvulnerableTime = 1;
        } else if (object instanceof Mario.Shell) {
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

/** LEVEL RENDERER **/

Mario.LevelRenderer = function (a, b, c) {
    this.Width = b;
    this.Height = c;
    this.Level = a;
    this.TilesY = ((c / 16) | 0) + 1;
    this.AnimTime = this.Bounce = this.Tick = this.Delta = 0;
    this.Background = Mario.SpriteCuts.GetLevelSheet();
};
Mario.LevelRenderer.prototype = new Engine.Drawable();
Mario.LevelRenderer.prototype.Update = function (a) {
    this.AnimTime += a;
    this.Tick = this.AnimTime | 0;
    this.Bounce += a * 30;
    this.Delta = a;
};
Mario.LevelRenderer.prototype.Draw = function (a, b) {
    this.DrawStatic(a, b);
    this.DrawDynamic(a, b);
};
Mario.LevelRenderer.prototype.DrawStatic = function (a, b) {
    for (var c = 0, e = 0, d = 0, d = null, f = ((b.X + this.Width) / 16) | 0, c = (b.X / 16) | 0; c < f + 1; c++)
        for (e = 0; e < this.TilesY; e++)
            (d = this.Level.GetBlock(c, e) & 255),
                (Mario.Tile.Behaviors[d] & Mario.Tile.Animated) === 0 &&
                ((d = this.Background[d % 16][(d / 16) | 0]), a.drawImage(Engine.Resources.Images.map, d.X, d.Y, d.Width, d.Height, ((c << 4) - b.X) | 0, (e << 4) | 0, d.Width, d.Height));
};
Mario.LevelRenderer.prototype.DrawDynamic = function (a, b) {
    for (var c = 0, e = 0, d = 0, f = 0, g = 0, d = null, c = (b.X / 16) | 0; (c <= (b.X + this.Width) / 16) | 0; c++)
        for (e = (b.Y / 16) | 0; (e <= (b.Y + this.Height) / 16) | 0; e++)
            (d = this.Level.GetBlock(c, e)),
                (Mario.Tile.Behaviors[d & 255] & Mario.Tile.Animated) > 0 &&
                ((f = ((this.Bounce / 3) | 0) % 4),
                    (((d % 16) / 4) | 0) === 0 && ((d / 16) | 0) === 1 && ((f = ((this.Bounce / 2 + (c + e) / 8) | 0) % 20), f > 3 && (f = 0)),
                    (((d % 16) / 4) | 0) === 3 && ((d / 16) | 0) === 0 && (f = 2),
                    (g = 0),
                    c >= 0 && e >= 0 && c < this.Level.Width && e < this.Level.Height && (g = this.Level.Data[c][e]),
                    g > 0 && (g = (Math.sin(((g - this.Delta) / 4) * Math.PI) * 8) | 0),
                    (d = this.Background[(((d % 16) / 4) | 0) * 4 + f][(d / 16) | 0]),
                    a.drawImage(Engine.Resources.Images.map, d.X, d.Y, d.Width, d.Height, (c << 4) - b.X, (e << 4) - b.Y - g, d.Width, d.Height));
};
Mario.LevelRenderer.prototype.DrawExit0 = function (a, b, c) {
    for (var e = 0, e = 0, d = null, e = this.Level.ExitY - 8; e < this.Level.ExitY; e++)
        (d = this.Background[12][e === this.Level.ExitY - 8 ? 4 : 5]), a.drawImage(Engine.Resources.Images.map, d.X, d.Y, d.Width, d.Height, (this.Level.ExitX << 4) - b.X - 16, (e << 4) - b.Y, d.Width, d.Height);
    c &&
        ((e = this.Level.ExitY * 16 - 48 - Math.sin(this.AnimTime) * 48 - 8),
            (d = this.Background[12][3]),
            a.drawImage(Engine.Resources.Images.map, d.X, d.Y, d.Width, d.Height, (this.Level.ExitX << 4) - b.X - 16, e - b.Y, d.Width, d.Height),
            (d = this.Background[13][3]),
            a.drawImage(Engine.Resources.Images.map, d.X, d.Y, d.Width, d.Height, (this.Level.ExitX << 4) - b.X, e - b.Y, d.Width, d.Height));
};
Mario.LevelRenderer.prototype.DrawExit1 = function (a, b) {
    for (var c = 0, e = null, c = this.Level.ExitY - 8; c < this.Level.ExitY; c++)
        (e = this.Background[13][c === this.Level.ExitY - 8 ? 4 : 5]), a.drawImage(Engine.Resources.Images.map, e.X, e.Y, e.Width, e.Height, (this.Level.ExitX << 4) - b.X + 16, (c << 4) - b.Y, e.Width, e.Height);
};

/** LEVEL GENERATOR **/

class LevelGenerator {
    constructor(width, height) {
        this.Width = width;
        this.Height = height;
        this.Odds = [];
        this.TotalOdds = 0;
        this.Difficulty = 0;
        this.Type = 0;
    }

    CreateLevel(type, difficulty) {
        let i = 0, length = 0, floor = 0, x = 0, y = 0, ceiling = 0, run = 0, level = null;

        this.Type = type;
        this.Difficulty = difficulty;
        this.Odds[Mario.Odds.Straight] = 20;
        this.Odds[Mario.Odds.HillStraight] = 10;
        this.Odds[Mario.Odds.Tubes] = 2 + difficulty;
        this.Odds[Mario.Odds.Jump] = 2 * difficulty;
        this.Odds[Mario.Odds.Cannon] = -10 + 5 * difficulty;

        if (this.Type !== Mario.LevelType.Overground) this.Odds[Mario.Odds.HillStraight] = 0;

        for (i = 0; i < this.Odds.length; i++) {
            if (this.Odds[i] < 0) this.Odds[i] = 0;

            this.TotalOdds += this.Odds[i];
            this.Odds[i] = this.TotalOdds - this.Odds[i];
        }

        level = new Mario.Level(this.Width, this.Height);
        length += this.BuildStraight(level, 0, level.Width, true);

        while (length < level.Width - 64) length += this.BuildZone(level, length, level.Width - length);

        floor = this.Height - 1 - (Math.random() * 4) | 0;
        level.ExitX = length + 8;
        level.ExitY = floor;

        for (x = length; x < level.Width; x++) {
            for (y = 0; y < this.Height; y++) {
                if (y >= floor) level.SetBlock(x, y, 1 + 9 * 16);
            }
        }

        if (type === Mario.LevelType.Castle || type === Mario.LevelType.Underground) {
            for (x = 0; x < level.Width; x++) {
                if (run-- <= 0 && x > 4) {
                    ceiling = (Math.random() * 4) | 0;
                    run = ((Math.random() * 4) | 0) + 4;
                }
                for (y = 0; y < level.Height; y++) {
                    if ((x > 4 && y <= ceiling) || x < 1) level.SetBlock(x, y, 1 + 9 * 16);
                }
            }
        }

        this.FixWalls(level);

        return level;
    }

    BuildZone(level, x, maxLength) {
        let t = (Math.random() * this.TotalOdds) | 0, type = 0, i = 0;
        for (i = 0; i < this.Odds.length; i++) {
            if (this.Odds[i] <= t) type = i;
        }

        switch (type) {
            case Mario.Odds.Straight: return this.BuildStraight(level, x, maxLength, false);
            case Mario.Odds.HillStraight: return this.BuildHillStraight(level, x, maxLength);
            case Mario.Odds.Tubes: return this.BuildTubes(level, x, maxLength);
            case Mario.Odds.Jump: return this.BuildJump(level, x, maxLength);
            case Mario.Odds.Cannons: return this.BuildCannons(level, x, maxLength);
        }
        return 0;
    }

    BuildJump(level, xo, maxLength) {
        let js = ((Math.random() * 4) | 0) + 2, jl = ((Math.random() * 2) | 0) + 2, length = js * 2 + jl, x = 0, y = 0,
            hasStairs = ((Math.random() * 3) | 0) === 0, floor = this.Height - 1 - ((Math.random() * 4) | 0);

        for (x = xo; x < xo + length; x++) {
            if (x < xo + js || x > xo + length - js - 1) {
                for (y = 0; y < this.Height; y++) {
                    if (y >= floor) level.SetBlock(x, y, 1 + 9 * 16);
                    else if (hasStairs && x < xo + js && y >= floor - (x - xo) + 1) level.SetBlock(x, y, 9);
                    else if (hasStairs && x >= xo + js && y >= floor - ((xo + length) - x) + 2) level.SetBlock(x, y, 9);
                }
            }
        }

        return length;
    }

    BuildCannons(level, xo, maxLength) {
        alert("cannons");
        let length = ((Math.random() * 10) | 0) + 2, floor = this.Height - 1 - (Math.random() * 4) | 0,
            xCannon = xo + 1 + (Math.random() * 4) | 0, x = 0, y = 0, cannonHeight = 0;

        if (length > maxLength) length = maxLength;

        for (x = xo; x < xo + length; x++) {
            if (x > xCannon) xCannon += 2 * (Math.random() * 4) | 0;

            if (xCannon === xo + length - 1) xCannon += 10;

            cannonHeight = floor - ((Math.random() * 4) | 0) - 1;

            for (y = 0; y < this.Height; y++) {
                if (y >= floor) {
                    level.SetBlock(x, y, 1 + 9 * 16);
                } else if (y < floor && x === xCannon && y >= cannonHeight) {
                    if (y === cannonHeight) {
                        level.SetBlock(x, y, 14);
                    } else if (y === cannonHeight + 1) {
                        level.SetBlock(x, y, 14 + 16);
                    } else {
                        level.SetBlock(x, y, 14 + 2 * 16);
                    }
                }
            }
        }

        return length;
    }

    BuildHillStraight(level, xo, maxLength) {
        let length = ((Math.random() * 10) | 0) + 10, floor = this.Height - 1 - (Math.random() * 4) | 0,
            x = 0, y = 0, h = floor, keepGoing = true, l = 0, xxo = 0, occupied = [], xx = 0, yy = 0;

        if (length > maxLength) length = maxLength;

        for (x = xo; x < xo + length; x++) {
            for (y = 0; y < this.Height; y++) {
                if (y >= floor) level.SetBlock(x, y, 1 + 9 * 16);
            }
        }

        this.AddEnemyLine(level, xo + 1, xo + length - 1, floor - 1);

        while (keepGoing) {
            h = h - 2 - (Math.random() * 3) | 0;
            if (h <= 0) {
                keepGoing = false;
            } else {
                l = ((Math.random() * 5) | 0) + 3;
                xxo = ((Math.random() * (length - l - 2)) | 0) + xo + 1;

                if (occupied[xxo - xo] || occupied[xxo - xo + l] || occupied[xxo - xo - 1] || occupied[xxo - xo + l + 1]) {
                    keepGoing = false;
                } else {
                    occupied[xxo - xo] = true;
                    occupied[xxo - xo + l] = true;
                    this.AddEnemyLine(level, xxo, xxo + l, h - 1);
                    if (((Math.random() * 4) | 0) === 0) {
                        this.Decorate(level, xxo - 1, xxo + l + 1, h);
                        keepGoing = false;
                    }

                    for (x = xxo; x < xxo + l; x++) {
                        for (y = h; y < floor; y++) {
                            xx = 5;
                            yy = 9;
                            if (x === xxo) xx = 4;

                            if (x === xxo + l - 1) xx = 6;

                            if (y === h) yy = 8;

                            if (level.GetBlock(x, y) === 0) {
                                level.SetBlock(x, y, xx + yy * 16);
                            } else {
                                if (level.GetBlock(x, y) === (4 + 8 * 16)) level.SetBlock(x, y, 4 + 11 * 16);

                                if (level.GetBlock(x, y) === (6 + 8 * 16)) level.SetBlock(x, y, 6 + 11 * 16);
                            }
                        }
                    }
                }
            }
        }

        return length;
    }

    AddEnemyLine(level, x0, x1, y) {
        let x = 0, type = 0;
        for (x = x0; x < x1; x++) {
            if (((Math.random() * 35) | 0) < this.Difficulty + 1) {
                type = (Math.random() * 4) | 0;
                if (this.Difficulty < 1) type = Mario.Enemy.Goomba;
                else if (this.Difficulty < 3) type = (Math.random() * 3) | 0;

                level.SetSpriteTemplate(x, y, new Mario.SpriteTemplate(type, ((Math.random() * 35) | 0) < this.Difficulty));
            }
        }
    }

    BuildTubes(level, xo, maxLength) {
        let length = ((Math.random() * 10) | 0) + 5, floor = this.Height - 1 - (Math.random() * 4) | 0,
            xTube = xo + 1 + (Math.random() * 4) | 0, tubeHeight = floor - ((Math.random() * 2) | 0) - 2,
            x = 0, y = 0, xPic = 0;

        if (length > maxLength) length = maxLength;

        for (x = xo; x < xo + length; x++) {
            if (x > xTube + 1) {
                xTube += 3 + ((Math.random() * 4) | 0);
                tubeHeight = floor - ((Math.random() * 2) | 0) - 2;
            }
            if (xTube >= xo + length - 2) xTube += 10;

            if (x === xTube && ((Math.random() * 11) | 0) < this.Difficulty + 1)
                level.SetSpriteTemplate(x, tubeHeight, new Mario.SpriteTemplate(Mario.Enemy.Flower, false));

            for (y = 0; y < this.Height; y++) {
                if (y >= floor) {
                    level.SetBlock(x, y, 1 + 9 * 16);
                } else if (y < floor && (x === xTube || x === xTube + 1) && y >= tubeHeight) {
                    xPic = 10 + x - xTube;
                    if (y === tubeHeight) level.SetBlock(x, y, xPic);
                    else level.SetBlock(x, y, xPic + 16);
                }
            }
        }

        return length;
    }

    BuildStraight(level, xo, maxLength, safe) {
        let length = ((Math.random() * 10) | 0) + 2, floor = this.Height - 1 - ((Math.random() * 4) | 0), x = 0, y = 0;

        if (safe) length = 10 + ((Math.random() * 5) | 0);
        
        if (length > maxLength) length = maxLength;

        for (x = xo; x < xo + length; x++) {
            for (y = 0; y < this.Height; y++) {
                if (y >= floor) level.SetBlock(x, y, 1 + 9 * 16);
            }
        }

        if (!safe && length > 5) this.Decorate(level, xo, xo + length, floor);

        return length;
    }

    Decorate(level, x0, x1, floor) {
        if (floor < 1) return;

        let rocks = true, s = (Math.random() * 4) | 0, e = (Math.random() * 4) | 0, x = 0;

        this.AddEnemyLine(level, x0 + 1, x1 - 1, floor - 1);

        if (floor - 2 > 0 && (x1 - 1 - e) - (x0 + 1 + s) > 1) {
            for (x = x0 + 1 + s; x < x1 - 1 - e; x++) {
                level.SetBlock(x, floor - 2, 2 + 2 * 16);
            }
        }

        s = (Math.random() * 4) | 0;
        e = (Math.random() * 4) | 0;

        if (floor - 4 > 0 && (x1 - 1 - e) - (x0 + 1 + s) > 2) {
            for (x = x0 + 1 + s; x < x1 - 1 - e; x++) {
                if (!rocks) continue;

                if (x !== x0 + 1 && x !== x1 - 2 && ((Math.random() * 3) | 0) === 0) {
                    if (((Math.random() * 4) | 0) === 0) {
                        level.SetBlock(x, floor - 4, 4 + 2 + 16);
                    } else {
                        level.SetBlock(x, floor - 4, 4 + 1 + 16);
                    }
                } else if (((Math.random() * 4) | 0) === 0) {
                    if (((Math.random() * 4) | 0) === 0) {
                        level.SetBlock(x, floor - 4, 2 + 16);
                    } else {
                        level.SetBlock(x, floor - 4, 1 + 16);
                    }
                } else {
                    level.SetBlock(x, floor - 4, 16);
                }
            }
        }
    }

    FixWalls(level) {
        let blockMap = [], x = 0, y = 0, xx = 0, yy = 0, blocks = 0;

        for (x = 0; x < this.Width + 1; x++) {
            blockMap[x] = [];

            for (y = 0; y < this.Height + 1; y++) {
                blocks = 0;
                for (xx = x - 1; xx < x + 1; xx++) {
                    for (yy = y - 1; yy < y + 1; yy++) {
                        if (level.GetBlockCapped(xx, yy) === (1 + 9 * 16)) blocks++;
                    }
                }
                blockMap[x][y] = blocks === 4;
            }
        }

        this.Blockify(level, blockMap, this.Width + 1, this.Height + 1);
    }

    Blockify(level, blocks, width, height) {
        let to = 0, b = [], x = 0, y = 0, xx = 0, yy = 0, i = 0, _xx = 0, _yy = 0;

        for (i = 0; i < 2; i++) b[i] = [];

        if (this.Type === Mario.LevelType.Castle) to = 8;
        else if (this.Type === Mario.LevelType.Underground) to = 12;

        for (x = 0; x < width; x++) {
            for (y = 0; y < height; y++) {
                for (xx = x; xx <= x + 1; xx++) {
                    for (yy = y; yy <= y + 1; yy++) {
                        _xx = xx;
                        _yy = yy;
                        if (_xx < 0) _xx = 0;

                        if (_yy < 0) _yy = 0;

                        if (_xx > width - 1) _xx = width - 1;

                        if (_yy > height - 1) _yy = height - 1;

                        b[xx - x][yy - y] = blocks[_xx][_yy];
                    }
                }

                if (b[0][0] === b[1][0] && b[0][1] === b[1][1]) {
                    if (b[0][0] === b[0][1]) {
                        if (b[0][0]) level.SetBlock(x, y, 1 + 9 * 16 + to);
                    } else {
                        if (b[0][0]) level.SetBlock(x, y, 1 + 10 * 16 + to);
                        else level.SetBlock(x, y, 1 + 8 * 16 + to);
                    }
                } else if (b[0][0] === b[0][1] && b[1][0] === b[1][1]) {
                    if (b[0][0]) level.SetBlock(x, y, 2 + 9 * 16 + to);
                    else level.SetBlock(x, y, 9 * 16 + to);
                } else if (b[0][0] === b[1][1] && b[0][1] === b[1][0]) {
                    level.SetBlock(x, y, 1 + 9 * 16 + to);
                } else if (b[0][0] === b[1][0]) {
                    if (b[0][0]) {
                        if (b[0][1]) level.SetBlock(x, y, 3 + 10 * 16 + to);
                        else level.SetBlock(x, y, 3 + 11 * 16 + to);
                    } else {
                        if (b[0][1]) level.SetBlock(x, y, 2 + 8 * 16 + to);
                        else level.SetBlock(x, y, 8 * 16 + to);
                    }
                } else if (b[0][1] === b[1][1]) {
                    if (b[0][1]) {
                        if (b[0][0]) level.SetBlock(x, y, 3 + 9 * 16 + to);
                        else level.SetBlock(x, y, 3 + 8 * 16 + to);
                    } else {
                        if (b[0][0]) level.SetBlock(x, y, 2 + 10 * 16 + to);
                        else level.SetBlock(x, y, 10 * 16 + to);
                    }
                } else {
                    level.SetBlock(x, y, 1 + 16 * to);
                }
            }
        }
    }
};

/** PREDEFINED LEVEL GENERATOR **/
class PredefinedLevelGenerator extends LevelGenerator {
    constructor(width, height) {
        super(width, height);
    }

    CreateLevel(type, difficulty) {
        let i = 0, length = 0, floor = 0, x = 0, y = 0, ceiling = 0, run = 0, level = null;

        this.Type = type;
        this.Difficulty = difficulty;
        this.Odds[Mario.Odds.Straight] = 20;
        this.Odds[Mario.Odds.HillStraight] = 10;
        this.Odds[Mario.Odds.Tubes] = 2 + difficulty;
        this.Odds[Mario.Odds.Jump] = 2 * difficulty;
        this.Odds[Mario.Odds.Cannon] = -10 + 5 * difficulty;

        if (this.Type !== Mario.LevelType.Overground) this.Odds[Mario.Odds.HillStraight] = 0;

        for (i = 0; i < this.Odds.length; i++) {
            if (this.Odds[i] < 0) this.Odds[i] = 0;

            this.TotalOdds += this.Odds[i];
            this.Odds[i] = this.TotalOdds - this.Odds[i];
        }

        level = new Mario.Level(this.Width, this.Height);
        length += this.BuildStraight(level, 0, level.Width, true);

        while (length < level.Width - 64) length += this.BuildZone(level, length, level.Width - length);

        floor = this.Height - 1 - (Math.random() * 4) | 0;
        level.ExitX = length + 8;
        level.ExitY = floor;

        for (x = length; x < level.Width; x++) {
            for (y = 0; y < this.Height; y++) {
                if (y >= floor) level.SetBlock(x, y, 1 + 9 * 16);
            }
        }

        if (type === Mario.LevelType.Castle || type === Mario.LevelType.Underground) {
            for (x = 0; x < level.Width; x++) {
                if (run-- <= 0 && x > 4) {
                    ceiling = (Math.random() * 4) | 0;
                    run = ((Math.random() * 4) | 0) + 4;
                }
                for (y = 0; y < level.Height; y++) {
                    if ((x > 4 && y <= ceiling) || x < 1) level.SetBlock(x, y, 1 + 9 * 16);
                }
            }
        }

        this.FixWalls(level);

        return level;
    }
};

/** SPRITE TEMPLATE **/

Mario.SpriteTemplate = function (a, b) {
    this.Type = a;
    this.Winged = b;
    this.LastVisibleTick = -1;
    this.IsDead = !1;
    this.Sprite = null;
};
Mario.SpriteTemplate.prototype = {
    Spawn: function (a, b, c, e) {
        if (!this.IsDead)
            (this.Sprite = this.Type === Mario.Enemy.Flower ? new Mario.FlowerEnemy(a, b * 16 + 15, c * 16 + 24) : new Mario.Enemy(a, b * 16 + 8, c * 16 + 15, e, this.Type, this.Winged)),
                (this.Sprite.SpriteTemplate = this),
                a.AddSprite(this.Sprite);
    },
};

/** ENEMY **/

Mario.Enemy = function (a, b, c, e, d, f) {
    this.AirInertia = this.GroundInertia = 0.89;
    this.RunTime = 0;
    this.MayJump = this.OnGround = !1;
    this.YJumpSpeed = this.XJumpSpeed = this.JumpTime = 0;
    this.Width = 4;
    this.Height = 24;
    this.DeadTime = 0;
    this.FlyDeath = !1;
    this.WingTime = 0;
    this.NoFireballDeath = !1;
    this.X = b;
    this.Y = c;
    this.World = a;
    this.Type = d;
    this.Winged = f;
    this.Image = Engine.Resources.Images.enemies;
    this.XPicO = 8;
    this.YPicO = 31;
    this.AvoidCliffs = this.Type === Mario.Enemy.RedKoopa;
    this.NoFireballDeath = this.Type === Mario.Enemy.Spiky;
    this.YPic = this.Type;
    if (this.YPic > 1) this.Height = 12;
    this.Facing = e;
    if (this.Facing === 0) this.Facing = 1;
    this.PicWidth = 16;
};
Mario.Enemy.prototype = new Mario.NotchSprite();
Mario.Enemy.prototype.CollideCheck = function () {
    if (this.DeadTime === 0) {
        var a = Mario.MarioCharacter.X - this.X,
            b = Mario.MarioCharacter.Y - this.Y;
        if (a > -this.Width * 2 - 4 && a < this.Width * 2 + 4 && b > -this.Height && b < Mario.MarioCharacter.Height)
            if (this.Type !== Mario.Enemy.Spiky && Mario.MarioCharacter.Ya > 0 && b <= 0 && (!Mario.MarioCharacter.OnGround || !Mario.MarioCharacter.WasOnGround))
                if ((Mario.MarioCharacter.Stomp(this), this.Winged)) (this.Winged = !1), (this.Ya = 0);
                else {
                    this.YPicO = 7;
                    this.PicHeight = 8;
                    if (this.SpriteTemplate !== null) this.SpriteTemplate.IsDead = !0;
                    this.DeadTime = 10;
                    this.Winged = !1;
                    this.Type === Mario.Enemy.RedKoopa ? this.World.AddSprite(new Mario.Shell(this.World, this.X, this.Y, 0)) : this.Type === Mario.Enemy.GreenKoopa && this.World.AddSprite(new Mario.Shell(this.World, this.X, this.Y, 1));
                }
            else Mario.MarioCharacter.GetHurt();
    }
};
Mario.Enemy.prototype.Move = function () {
    var a = 0,
        a = 0;
    this.WingTime++;
    if (this.DeadTime > 0) {
        this.DeadTime--;
        if (this.DeadTime === 0) {
            this.DeadTime = 1;
            for (a = 0; a < 8; a++) this.World.AddSprite(new Mario.Sparkle(this.World, ((this.X + Math.random() * 16 - 8) | 0) + 4, ((this.Y - Math.random() * 8) | 0) + 4, Math.random() * 2 - 1, Math.random() * -1, 0, 1, 5));
            this.World.RemoveSprite(this);
        }
        this.FlyDeath && ((this.X += this.Xa), (this.Y += this.Ya), (this.Ya *= 0.95), (this.Ya += 1));
    } else {
        if (this.Xa > 2) this.Facing = 1;
        if (this.Xa < -2) this.Facing = -1;
        this.Xa = this.Facing * 1.75;
        this.MayJump = this.OnGround;
        this.XFlip = this.Facing === -1;
        this.RunTime += Math.abs(this.Xa) + 5;
        a = ((this.RunTime / 20) | 0) % 2;
        this.OnGround || (a = 1);
        if (!this.SubMove(this.Xa, 0)) this.Facing = -this.Facing;
        this.OnGround = !1;
        this.SubMove(0, this.Ya);
        this.Ya *= this.Winged ? 0.95 : 0.85;
        this.Xa *= this.OnGround ? this.GroundInertia : this.AirInertia;
        if (this.OnGround) {
            if (this.Winged) this.Ya = -10;
        } else this.Ya += this.Winged ? 0.6 : 2;
        this.Winged && (a = ((this.WingTime / 4) | 0) % 2);
        this.XPic = a;
    }
};
Mario.Enemy.prototype.SubMove = function (a, b) {
    for (var c = !1; a > 8;) {
        if (!this.SubMove(8, 0)) return !1;
        a -= 8;
    }
    for (; a < -8;) {
        if (!this.SubMove(-8, 0)) return !1;
        a += 8;
    }
    for (; b > 8;) {
        if (!this.SubMove(0, 8)) return !1;
        b -= 8;
    }
    for (; b < -8;) {
        if (!this.SubMove(0, -8)) return !1;
        b += 8;
    }
    b > 0 &&
        (this.IsBlocking(this.X + a - this.Width, this.Y + b, a, 0)
            ? (c = !0)
            : this.IsBlocking(this.X + a + this.Width, this.Y + b, a, 0)
                ? (c = !0)
                : this.IsBlocking(this.X + a - this.Width, this.Y + b + 1, a, b)
                    ? (c = !0)
                    : this.IsBlocking(this.X + a + this.Width, this.Y + b + 1, a, b) && (c = !0));
    if (b < 0)
        if (this.IsBlocking(this.X + a, this.Y + b - this.Height, a, b)) c = !0;
        else if (c || this.IsBlocking(this.X + a - this.Width, this.Y + b - this.Height, a, b)) c = !0;
        else if (c || this.IsBlocking(this.X + a + this.Width, this.Y + b - this.Height, a, b)) c = !0;
    a > 0 &&
        (this.IsBlocking(this.X + a + this.Width, this.Y + b - this.Height, a, b) && (c = !0),
            this.IsBlocking(this.X + a + this.Width, this.Y + b - ((this.Height / 2) | 0), a, b) && (c = !0),
            this.IsBlocking(this.X + a + this.Width, this.Y + b, a, b) && (c = !0),
            this.AvoidCliffs && this.OnGround && !this.World.Level.IsBlocking(((this.X + this.Xa + this.Width) / 16) | 0, (this.Y / 16 + 1) | 0, this.Xa, 1) && (c = !0));
    a < 0 &&
        (this.IsBlocking(this.X + a - this.Width, this.Y + b - this.Height, a, b) && (c = !0),
            this.IsBlocking(this.X + a - this.Width, this.Y + b - ((this.Height / 2) | 0), a, b) && (c = !0),
            this.IsBlocking(this.X + a - this.Width, this.Y + b, a, b) && (c = !0),
            this.AvoidCliffs && this.OnGround && !this.World.Level.IsBlocking(((this.X + this.Xa - this.Width) / 16) | 0, (this.Y / 16 + 1) | 0, this.Xa, 1) && (c = !0));
    if (c) {
        if (a < 0) (this.X = (((this.X - this.Width) / 16) | 0) * 16 + this.Width), (this.Xa = 0);
        if (a > 0) (this.X = (((this.X + this.Width) / 16 + 1) | 0) * 16 - this.Width - 1), (this.Xa = 0);
        if (b < 0) (this.Y = (((this.Y - this.Height) / 16) | 0) * 16 + this.Height), (this.Ya = this.JumpTime = 0);
        if (b > 0) (this.Y = (((this.Y - 1) / 16 + 1) | 0) * 16 - 1), (this.OnGround = !0);
        return !1;
    } else return (this.X += a), (this.Y += b), !0;
};
Mario.Enemy.prototype.IsBlocking = function (a, b, c, e) {
    a = (a / 16) | 0;
    b = (b / 16) | 0;
    if ((a === this.X / 16) | 0 && (b === this.Y / 16) | 0) return !1;
    return this.World.Level.IsBlocking(a, b, c, e);
};
Mario.Enemy.prototype.ShellCollideCheck = function (a) {
    if (this.DeadTime !== 0) return !1;
    var b = a.X - this.X,
        c = a.Y - this.Y;
    if (b > -16 && b < 16 && c > -this.Height && c < a.Height) {
        Engine.Resources.PlaySound("kick");
        this.Xa = a.Facing * 2;
        this.Ya = -5;
        this.FlyDeath = !0;
        if (this.SpriteTemplate !== null) this.SpriteTemplate.IsDead = !0;
        this.DeadTime = 100;
        this.Winged = !1;
        return (this.YFlip = !0);
    }
    return !1;
};
Mario.Enemy.prototype.FireballCollideCheck = function (a) {
    if (this.DeadTime !== 0) return !1;
    var b = a.X - this.X,
        c = a.Y - this.Y;
    if (b > -16 && b < 16 && c > -this.Height && c < a.Height) {
        if (this.NoFireballDeath) return !0;
        Engine.Resources.PlaySound("kick");
        this.Xa = a.Facing * 2;
        this.Ya = -5;
        this.FlyDeath = !0;
        if (this.SpriteTemplate !== null) this.SpriteTemplate.IsDead = !0;
        this.DeadTime = 100;
        this.Winged = !1;
        return (this.YFlip = !0);
    }
};
Mario.Enemy.prototype.BumpCheck = function (a, b) {
    if (this.DeadTime === 0 && this.X + this.Width > a * 16 && this.X - this.Width < a * 16 + 16 && (b === (this.Y - 1) / 16) | 0) {
        Engine.Resources.PlaySound("kick");
        this.Xa = -Mario.MarioCharacter.Facing * 2;
        this.Ya = -5;
        this.FlyDeath = !0;
        if (this.SpriteTemplate !== null) this.SpriteTemplate.IsDead = !0;
        this.DeadTime = 100;
        this.Winged = !1;
        this.YFlip = !0;
    }
};
Mario.Enemy.prototype.SubDraw = Mario.NotchSprite.prototype.Draw;
Mario.Enemy.prototype.Draw = function (a, b) {
    var c = 0,
        e = 0;
    if (
        this.Winged &&
        ((c = ((this.XOld + (this.X - this.XOld) * this.Delta) | 0) - this.XPicO), (e = ((this.YOld + (this.Y - this.YOld) * this.Delta) | 0) - this.YPicO), this.Type !== Mario.Enemy.RedKoopa && this.Type !== Mario.Enemy.GreenKoopa)
    )
        (this.XFlip = !this.XFlip),
            a.save(),
            a.scale(this.XFlip ? -1 : 1, this.YFlip ? -1 : 1),
            a.translate(this.XFlip ? -320 : 0, this.YFlip ? -240 : 0),
            a.drawImage(this.Image, (((this.WingTime / 4) | 0) % 2) * 16, 128, 16, 32, this.XFlip ? 320 - c - 24 : c - 8, this.YFlip ? 240 - e - 32 : e - 8, 16, 32),
            a.restore(),
            (this.XFlip = !this.XFlip);
    this.SubDraw(a, b);
    this.Winged &&
        ((c = ((this.XOld + (this.X - this.XOld) * this.Delta) | 0) - this.XPicO),
            (e = ((this.YOld + (this.Y - this.YOld) * this.Delta) | 0) - this.YPicO),
            this.Type === Mario.Enemy.RedKoopa && this.Type === Mario.Enemy.GreenKoopa
                ? (a.save(),
                    a.scale(this.XFlip ? -1 : 1, this.YFlip ? -1 : 1),
                    a.translate(this.XFlip ? -320 : 0, this.YFlip ? -240 : 0),
                    a.drawImage(this.Image, (((this.WingTime / 4) | 0) % 2) * 16, 128, 16, 32, this.XFlip ? 320 - c - 24 : c - 8, this.YFlip ? 240 - e : e - 8, 16, 32))
                : (a.save(),
                    a.scale(this.XFlip ? -1 : 1, this.YFlip ? -1 : 1),
                    a.translate(this.XFlip ? -320 : 0, this.YFlip ? -240 : 0),
                    a.drawImage(this.Image, (((this.WingTime / 4) | 0) % 2) * 16, 128, 16, 32, this.XFlip ? 320 - c - 24 : c - 8, this.YFlip ? 240 - e - 32 : e - 8, 16, 32)),
            a.restore());
};
Mario.Enemy.RedKoopa = 0;
Mario.Enemy.GreenKoopa = 1;
Mario.Enemy.Goomba = 2;
Mario.Enemy.Spiky = 3;

/** FIREBALL **/

Mario.Enemy.Flower = 4;
Mario.Fireball = function (a, b, c, e) {
    this.AirInertia = this.GroundInertia = 0.89;
    this.Image = Engine.Resources.Images.particles;
    this.World = a;
    this.X = b;
    this.Y = c;
    this.Facing = e;
    this.YPicO = this.XPicO = 4;
    this.YPic = 3;
    this.XPic = 4;
    this.Height = 8;
    this.Width = 4;
    this.PicWidth = this.PicHeight = 8;
    this.Ya = 4;
    this.Dead = !1;
    this.Anim = this.DeadTime = 0;
    this.OnGround = !1;
};
Mario.Fireball.prototype = new Mario.NotchSprite();
Mario.Fireball.prototype.Move = function () {
    var a = 0;
    if (this.DeadTime > 0) {
        for (a = 0; a < 8; a++)
            this.World.AddSprite(new Mario.Sparkle(this.World, ((this.X + Math.random() * 8 - 4) | 0) + 4, ((this.Y + Math.random() * 8 - 4) | 0) + 2, Math.random() * 2 - 1 * this.Facing, Math.random() * 2 - 1, 0, 1, 5));
        this.World.RemoveSprite(this);
    } else {
        this.Facing != 0 && this.Anim++;
        if (this.Xa > 2) this.Facing = 1;
        if (this.Xa < -2) this.Facing = -1;
        this.Xa = this.Facing * 8;
        this.World.CheckFireballCollide(this);
        this.FlipX = this.Facing === -1;
        this.XPic = this.Anim % 4;
        this.SubMove(this.Xa, 0) || this.Die();
        this.OnGround = !1;
        this.SubMove(0, this.Ya);
        if (this.OnGround) this.Ya = -10;
        this.Ya *= 0.95;
        this.Xa *= this.OnGround ? this.GroundInertia : this.AirInertia;
        this.OnGround || (this.Ya += 1.5);
    }
};
Mario.Fireball.prototype.SubMove = function (a, b) {
    for (var c = !1; a > 8;) {
        if (!this.SubMove(8, 0)) return !1;
        a -= 8;
    }
    for (; a < -8;) {
        if (!this.SubMove(-8, 0)) return !1;
        a += 8;
    }
    for (; b > 8;) {
        if (!this.SubMove(0, 8)) return !1;
        b -= 8;
    }
    for (; b < -8;) {
        if (!this.SubMove(0, -8)) return !1;
        b += 8;
    }
    b > 0 &&
        (this.IsBlocking(this.X + a - this.Width, this.Y + b, a, 0)
            ? (c = !0)
            : this.IsBlocking(this.X + a + this.Width, this.Y + b, a, 0)
                ? (c = !0)
                : this.IsBlocking(this.X + a - this.Width, this.Y + b + 1, a, b)
                    ? (c = !0)
                    : this.IsBlocking(this.X + a + this.Width, this.Y + b + 1, a, b) && (c = !0));
    if (b < 0)
        if (this.IsBlocking(this.X + a, this.Y + b - this.Height, a, b)) c = !0;
        else if (c || this.IsBlocking(this.X + a - this.Width, this.Y + b - this.Height, a, b)) c = !0;
        else if (c || this.IsBlocking(this.X + a + this.Width, this.Y + b - this.Height, a, b)) c = !0;
    a > 0 &&
        (this.IsBlocking(this.X + a + this.Width, this.Y + b - this.Height, a, b) && (c = !0),
            this.IsBlocking(this.X + a + this.Width, this.Y + b - ((this.Height / 2) | 0), a, b) && (c = !0),
            this.IsBlocking(this.X + a + this.Width, this.Y + b, a, b) && (c = !0));
    a < 0 &&
        (this.IsBlocking(this.X + a - this.Width, this.Y + b - this.Height, a, b) && (c = !0),
            this.IsBlocking(this.X + a - this.Width, this.Y + b - ((this.Height / 2) | 0), a, b) && (c = !0),
            this.IsBlocking(this.X + a - this.Width, this.Y + b, a, b) && (c = !0));
    if (c) {
        if (a < 0) (this.X = (((this.X - this.Width) / 16) | 0) * 16 + this.Width), (this.Xa = 0);
        if (a > 0) (this.X = (((this.X + this.Width) / 16 + 1) | 0) * 16 - this.Width - 1), (this.Xa = 0);
        if (b < 0) (this.Y = (((this.Y - this.Height) / 16) | 0) * 16 + this.Height), (this.Ya = 0);
        if (b > 0) (this.Y = (((this.Y - 1) / 16 + 1) | 0) * 16 - 1), (this.OnGround = !0);
        return !1;
    } else return (this.X += a), (this.Y += b), !0;
};
Mario.Fireball.prototype.IsBlocking = function (a, b, c, e) {
    a = (a / 16) | 0;
    b = (b / 16) | 0;
    if ((a === this.X / 16) | 0 && (b === this.Y / 16) | 0) return !1;
    return this.World.Level.IsBlocking(a, b, c, e);
};
Mario.Fireball.prototype.Die = function () {
    this.Dead = !0;
    this.Xa = -this.Facing * 2;
    this.Ya = -5;
    this.DeadTime = 100;
};

/** SPARKLE **/

Mario.Sparkle = function (a, b, c, e, d) {
    this.World = a;
    this.X = b;
    this.Y = c;
    this.Xa = e;
    this.Ya = d;
    this.XPic = (Math.random() * 2) | 0;
    this.YPic = 0;
    this.Life = 10 + ((Math.random() * 5) | 0);
    this.XPicStart = this.XPic;
    this.YPicO = this.XPicO = 4;
    this.PicHeight = this.PicWidth = 8;
    this.Image = Engine.Resources.Images.particles;
};
Mario.Sparkle.prototype = new Mario.NotchSprite();
Mario.Sparkle.prototype.Move = function () {
    this.XPic = this.Life > 10 ? 7 : (this.XPicStart + (10 - this.Life) * 0.4) | 0;
    this.Life-- < 0 && this.World.RemoveSprite(this);
    this.X += this.Xa;
    this.Y += this.Ya;
};

/** COIN ANIM **/

Mario.CoinAnim = function (a, b, c) {
    this.World = a;
    this.Life = 10;
    this.Image = Engine.Resources.Images.map;
    this.PicWidth = this.PicHeight = 16;
    this.X = b * 16;
    this.Y = c * 16 - 16;
    this.Xa = 0;
    this.Ya = -6;
    this.XPic = 0;
    this.YPic = 2;
};
Mario.CoinAnim.prototype = new Mario.NotchSprite();
Mario.CoinAnim.prototype.Move = function () {
    var a = 0,
        b = 0;
    if (this.Life-- < 0) {
        this.World.RemoveSprite(this);
        for (a = 0; a < 2; a++) for (b = 0; b < 2; b++) this.World.AddSprite(new Mario.Sparkle(this.World, (this.X + a * 8 + Math.random() * 8) | 0, (this.Y + b * 8 + Math.random() * 8) | 0, 0, 0, 0, 2, 5));
    }
    this.XPic = this.Life & 3;
    this.X += this.Xa;
    this.Y += this.Ya;
    this.Ya += 1;
};

/** MUSHROOM **/

Mario.Mushroom = function (a, b, c) {
    this.RunTime = 0;
    this.AirInertia = this.GroundInertia = 0.89;
    this.OnGround = !1;
    this.Width = 4;
    this.Height = 24;
    this.World = a;
    this.X = b;
    this.Y = c;
    this.Image = Engine.Resources.Images.items;
    this.XPicO = 8;
    this.YPicO = 15;
    this.YPic = 0;
    this.Height = 12;
    this.Facing = 1;
    this.PicWidth = this.PicHeight = 16;
    this.Life = 0;
};
Mario.Mushroom.prototype = new Mario.NotchSprite();
Mario.Mushroom.prototype.CollideCheck = function () {
    var a = Mario.MarioCharacter.X - this.X,
        b = Mario.MarioCharacter.Y - this.Y;
    a > -16 && a < 16 && b > -this.Height && b < Mario.MarioCharacter.Height && (Mario.MarioCharacter.GetMushroom(), this.World.RemoveSprite(this));
};
Mario.Mushroom.prototype.Move = function () {
    if (this.Life < 9) (this.Layer = 0), this.Y--, this.Life++;
    else {
        this.Layer = 1;
        if (this.Xa > 2) this.Facing = 1;
        if (this.Xa < -2) this.Facing = -1;
        this.Xa = this.Facing * 1.75;
        this.XFlip = this.Facing === -1;
        this.RunTime += Math.abs(this.Xa) + 5;
        if (!this.SubMove(this.Xa, 0)) this.Facing = -this.Facing;
        this.OnGround = !1;
        this.SubMove(0, this.Ya);
        this.Ya *= 0.85;
        this.Xa *= this.OnGround ? this.GroundInertia : this.AirInertia;
        this.OnGround || (this.Ya += 2);
    }
};
Mario.Mushroom.prototype.SubMove = function (a, b) {
    for (var c = !1; a > 8;) {
        if (!this.SubMove(8, 0)) return !1;
        a -= 8;
    }
    for (; a < -8;) {
        if (!this.SubMove(-8, 0)) return !1;
        a += 8;
    }
    for (; b > 8;) {
        if (!this.SubMove(0, 8)) return !1;
        b -= 8;
    }
    for (; b < -8;) {
        if (!this.SubMove(0, -8)) return !1;
        b += 8;
    }
    b > 0 &&
        (this.IsBlocking(this.X + a - this.Width, this.Y + b, a, 0)
            ? (c = !0)
            : this.IsBlocking(this.X + a + this.Width, this.Y + b, a, 0)
                ? (c = !0)
                : this.IsBlocking(this.X + a - this.Width, this.Y + b + 1, a, b)
                    ? (c = !0)
                    : this.IsBlocking(this.X + a + this.Width, this.Y + b + 1, a, b) && (c = !0));
    if (b < 0)
        if (this.IsBlocking(this.X + a, this.Y + b - this.Height, a, b)) c = !0;
        else if (c || this.IsBlocking(this.X + a - this.Width, this.Y + b - this.Height, a, b)) c = !0;
        else if (c || this.IsBlocking(this.X + a + this.Width, this.Y + b - this.Height, a, b)) c = !0;
    a > 0 &&
        (this.IsBlocking(this.X + a + this.Width, this.Y + b - this.Height, a, b) && (c = !0),
            this.IsBlocking(this.X + a + this.Width, this.Y + b - ((this.Height / 2) | 0), a, b) && (c = !0),
            this.IsBlocking(this.X + a + this.Width, this.Y + b, a, b) && (c = !0));
    a < 0 &&
        (this.IsBlocking(this.X + a - this.Width, this.Y + b - this.Height, a, b) && (c = !0),
            this.IsBlocking(this.X + a - this.Width, this.Y + b - ((this.Height / 2) | 0), a, b) && (c = !0),
            this.IsBlocking(this.X + a - this.Width, this.Y + b, a, b) && (c = !0));
    if (c) {
        if (a < 0) (this.X = (((this.X - this.Width) / 16) | 0) * 16 + this.Width), (this.Xa = 0);
        if (a > 0) (this.X = (((this.X + this.Width) / 16 + 1) | 0) * 16 - this.Width - 1), (this.Xa = 0);
        if (b < 0) (this.Y = (((this.Y - this.Height) / 16) | 0) * 16 + this.Height), (this.Ya = this.JumpTime = 0);
        if (b > 0) (this.Y = (((this.Y - 1) / 16 + 1) | 0) * 16 - 1), (this.OnGround = !0);
        return !1;
    } else return (this.X += a), (this.Y += b), !0;
};
Mario.Mushroom.prototype.IsBlocking = function (a, b, c, e) {
    a = (a / 16) | 0;
    b = (b / 16) | 0;
    if ((a === this.X / 16) | 0 && (b === this.Y / 16) | 0) return !1;
    return this.World.Level.IsBlocking(a, b, c, e);
};
Mario.Mushroom.prototype.BumpCheck = function (a, b) {
    if (this.X + this.Width > a * 16 && this.X - this.Width < a * 16 - 16 && (b === (b - 1) / 16) | 0) (this.Facing = -Mario.MarioCharacter.Facing), (this.Ya = -10);
};

/** PARTICLE **/

Mario.Particle = function (a, b, c, e, d) {
    this.World = a;
    this.X = b;
    this.Y = c;
    this.Xa = e;
    this.Ya = d;
    this.XPic = (Math.random() * 2) | 0;
    this.YPic = 0;
    this.YPicO = this.XPicO = 4;
    this.PicHeight = this.PicWidth = 8;
    this.Life = 10;
    this.Image = Engine.Resources.Images.particles;
};
Mario.Particle.prototype = new Mario.NotchSprite();
Mario.Particle.prototype.Move = function () {
    this.Life - this.Delta < 0 && this.World.RemoveSprite(this);
    this.Life -= this.Delta;
    this.X += this.Xa;
    this.Y += this.Ya;
    this.Ya *= 0.95;
    this.Ya += 3;
};

/** FIRE FLOWER **/

Mario.FireFlower = function (a, b, c) {
    this.Width = 4;
    this.Height = 24;
    this.World = a;
    this.X = b;
    this.Y = c;
    this.Image = Engine.Resources.Images.items;
    this.XPicO = 8;
    this.YPicO = 15;
    this.XPic = 1;
    this.YPic = 0;
    this.Height = 12;
    this.Facing = 1;
    this.PicWidth = this.PicHeight = 16;
    this.Life = 0;
};
Mario.FireFlower.prototype = new Mario.NotchSprite();
Mario.FireFlower.prototype.CollideCheck = function () {
    var a = Mario.MarioCharacter.X - this.X,
        b = Mario.MarioCharacter.Y - this.Y;
    a > -16 && a < 16 && b > -this.Height && b < Mario.MarioCharacter.Height && (Mario.MarioCharacter.GetFlower(), this.World.RemoveSprite(this));
};
Mario.FireFlower.prototype.Move = function () {
    if (this.Life < 9) (this.Layer = 0), this.Y--, this.Life++;
};

/** BULLET BILL **/

Mario.BulletBill = function (a, b, c, e) {
    this.Image = Engine.Resources.Images.enemies;
    this.World = a;
    this.X = b;
    this.Y = c;
    this.Facing = e;
    this.XPicO = 8;
    this.YPicO = 31;
    this.Height = 12;
    this.Width = 4;
    this.PicWidth = 16;
    this.YPic = 5;
    this.XPic = 0;
    this.Ya = -5;
    this.DeadTime = 0;
    this.Dead = !1;
    this.Anim = 0;
};
Mario.BulletBill.prototype = new Mario.NotchSprite();
Mario.BulletBill.prototype.CollideCheck = function () {
    if (!this.Dead) {
        var a = Mario.MarioCharacter.X - this.X,
            b = Mario.MarioCharacter.Y - this.Y;
        if (a > -16 && a < 16 && b > -this.Height && b < this.World.Mario.Height)
            Mario.MarioCharacter.Y > 0 && b <= 0 && (!Mario.MarioCharacter.OnGround || !Mario.MarioCharacter.WasOnGround)
                ? (Mario.MarioCharacter.Stomp(this), (this.Dead = !0), (this.Xa = 0), (this.Ya = 1), (this.DeadTime = 100))
                : Mario.MarioCharacter.GetHurt();
    }
};
Mario.BulletBill.prototype.Move = function () {
    var a = 0;
    if (this.DeadTime > 0) {
        this.DeadTime--;
        if (this.DeadTime === 0) {
            this.DeadTime = 1;
            for (a = 0; a < 8; a++) this.World.AddSprite(new Mario.Sparkle(((this.X + Math.random() * 16 - 8) | 0) + 4, ((this.Y + Math.random() * 8) | 0) + 4, Math.random() * 2 - 1, Math.random() * -1, 0, 1, 5));
            this.World.RemoveSprite(this);
        }
        this.X += this.Xa;
        this.Y += this.Ya;
        this.Ya *= 0.95;
        this.Ya += 1;
    } else (this.Xa = this.Facing * 4), (this.XFlip = this.Facing === -1), this.Move(this.Xa, 0);
};
Mario.BulletBill.prototype.SubMove = function (a) {
    this.X += a;
    return !0;
};
Mario.BulletBill.prototype.FireballCollideCheck = function (a) {
    if (this.DeadTime !== 0) return !1;
    var b = a.X - this.X,
        c = a.Y - this.Y;
    if (b > -16 && b < 16 && c > -this.Height && c < a.Height) return !0;
    return !1;
};
Mario.BulletBill.prototype.ShellCollideCheck = function (a) {
    if (this.DeadTime !== 0) return !1;
    var b = a.X - this.X,
        c = a.Y - this.Y;
    if (b > -16 && b < 16 && c > -this.Height && c < a.Height) return Engine.Resources.PlaySound("kick"), (this.Dead = !0), (this.Xa = 0), (this.Ya = 1), (this.DeadTime = 100), !0;
    return !1;
};

/** FLOWER ENEMY **/

Mario.FlowerEnemy = function (a, b, c) {
    this.Image = Engine.Resources.Images.enemies;
    this.World = a;
    this.X = b;
    this.Y = c;
    this.Facing = 1;
    this.Type = Mario.Enemy.Spiky;
    this.NoFireballDeath = this.Winged = !1;
    this.XPic = 0;
    this.YPic = 6;
    this.YPicO = 24;
    this.Height = 12;
    this.Width = 2;
    this.YStart = c;
    this.Ya = -8;
    this.Y -= 1;
    for (a = a = this.Tick = this.JumpTime = this.Layer = 0; a < 4; a++) this.Move();
};
Mario.FlowerEnemy.prototype = new Mario.Enemy();
Mario.FlowerEnemy.prototype.Move = function () {
    var a = 0,
        a = 0;
    if (this.DeadTime > 0) {
        this.DeadTime--;
        if (this.DeadTime === 0) {
            this.DeadTime = 1;
            for (a = 0; a < 8; a++) this.World.AddSprite(new Mario.Sparkle(((this.X + Math.random() * 16 - 8) | 0) + 4, ((this.Y + Math.random() * 8) | 0) + 4, Math.random() * 2 - 1, Math.random() * -1, 0, 1, 5));
            this.World.RemoveSprite(this);
        }
        this.X += this.Xa;
        this.Y += this.Ya;
        this.Ya *= 0.95;
        this.Ya += 1;
    } else
        this.Tick++,
            this.Y >= this.YStart ? ((this.YStart = this.Y), (a = Math.abs(Mario.MarioCharacter.X - this.X) | 0), this.JumpTime++, (this.Ya = this.JumpTime > 40 && a > 24 ? -8 : 0)) : (this.JumpTime = 0),
            (this.Y += this.Ya),
            (this.Ya *= 0.9),
            (this.Ya += 0.1),
            (this.XPic = (((this.Tick / 2) | 0) & 1) * 2 + (((this.Tick / 6) | 0) & 1));
};

/** SHELL **/

Mario.Shell = function (a, b, c, e) {
    this.World = a;
    this.X = b;
    this.Y = c;
    this.YPic = e;
    this.Image = Engine.Resources.Images.enemies;
    this.XPicO = 8;
    this.YPicO = 31;
    this.Width = 4;
    this.Height = 12;
    this.Facing = 0;
    this.PicWidth = 16;
    this.XPic = 4;
    this.Ya = -5;
    this.Dead = !1;
    this.DeadTime = 0;
    this.Carried = !1;
    this.AirInertia = this.GroundInertia = 0.89;
    this.OnGround = !1;
    this.Anim = 0;
};
Mario.Shell.prototype = new Mario.NotchSprite();
Mario.Shell.prototype.FireballCollideCheck = function (a) {
    if (this.DeadTime !== 0) return !1;
    var b = a.X - this.X,
        c = a.Y - this.Y;
    if (b > -16 && b < 16 && c > -this.Height && c < a.Height) {
        if (this.Facing !== 0) return !0;
        Engine.Resources.PlaySound("kick");
        this.Xa = a.Facing * 2;
        this.Ya = -5;
        if (this.SpriteTemplate !== null) this.SpriteTemplate.IsDead = !0;
        this.DeadTime = 100;
        return (this.YFlip = !0);
    }
    return !1;
};
Mario.Shell.prototype.CollideCheck = function () {
    if (!this.Carried && !(this.Dead || this.DeadTime > 0)) {
        var a = Mario.MarioCharacter.X - this.X,
            b = Mario.MarioCharacter.Y - this.Y;
        if (a > -16 && a < 16 && b > -this.Height && b < Mario.MarioCharacter.Height)
            Mario.MarioCharacter.Ya > 0 && b <= 0 && (!Mario.MarioCharacter.OnGround || !Mario.MarioCharacter.WasOnGround)
                ? (Mario.MarioCharacter.Stomp(this), (this.Facing = this.Facing !== 0 ? (this.Xa = 0) : Mario.MarioCharacter.Facing))
                : this.Facing !== 0
                    ? Mario.MarioCharacter.GetHurt()
                    : (Mario.MarioCharacter.Kick(this), (this.Facing = Mario.MarioCharacter.Facing));
    }
};
Mario.Shell.prototype.Move = function () {
    var a = 0;
    if (this.Carried) this.World.CheckShellCollide(this);
    else if (this.DeadTime > 0) {
        this.DeadTime--;
        if (this.DeadTime === 0) {
            this.DeadTime = 1;
            for (a = 0; a < 8; a++) this.World.AddSprite(new Mario.Sparkle(((this.X + Math.random() * 16 - 8) | 0) + 4, ((this.Y + Math.random() * 8) | 0) + 4, Math.random() * 2 - 1, Math.random() * -1, 0, 1, 5));
            this.World.RemoveSprite(this);
        }
        this.X += this.Xa;
        this.Y += this.Ya;
        this.Ya *= 0.95;
        this.Ya += 1;
    } else {
        this.Facing !== 0 && this.Anim++;
        if (this.Xa > 2) this.Facing = 1;
        if (this.Xa < -2) this.Facing = -1;
        this.Xa = this.Facing * 11;
        this.Facing !== 0 && this.World.CheckShellCollide(this);
        this.XFlip = this.Facing === -1;
        this.XPic = (((this.Anim / 2) | 0) % 4) + 3;
        if (!this.SubMove(this.Xa, 0)) Engine.Resources.PlaySound("bump"), (this.Facing = -this.Facing);
        this.OnGround = !1;
        this.SubMove(0, this.Ya);
        this.Ya *= 0.85;
        this.Xa *= this.OnGround ? this.GroundInertia : this.AirInertia;
        this.OnGround || (this.Ya += 2);
    }
};
Mario.Shell.prototype.SubMove = function (a, b) {
    for (var c = !1; a > 8;) {
        if (!this.SubMove(8, 0)) return !1;
        a -= 8;
    }
    for (; a < -8;) {
        if (!this.SubMove(-8, 0)) return !1;
        a += 8;
    }
    for (; b > 8;) {
        if (!this.SubMove(0, 8)) return !1;
        b -= 8;
    }
    for (; b < -8;) {
        if (!this.SubMove(0, -8)) return !1;
        b += 8;
    }
    b > 0 &&
        (this.IsBlocking(this.X + a - this.Width, this.Y + b, a, 0)
            ? (c = !0)
            : this.IsBlocking(this.X + a + this.Width, this.Y + b, a, 0)
                ? (c = !0)
                : this.IsBlocking(this.X + a - this.Width, this.Y + b + 1, a, b)
                    ? (c = !0)
                    : this.IsBlocking(this.X + a + this.Width, this.Y + b + 1, a, b) && (c = !0));
    if (b < 0)
        if (this.IsBlocking(this.X + a, this.Y + b - this.Height, a, b)) c = !0;
        else if (c || this.IsBlocking(this.X + a - this.Width, this.Y + b - this.Height, a, b)) c = !0;
        else if (c || this.IsBlocking(this.X + a + this.Width, this.Y + b - this.Height, a, b)) c = !0;
    a > 0 &&
        (this.IsBlocking(this.X + a + this.Width, this.Y + b - this.Height, a, b) && (c = !0),
            this.IsBlocking(this.X + a + this.Width, this.Y + b - ((this.Height / 2) | 0), a, b) && (c = !0),
            this.IsBlocking(this.X + a + this.Width, this.Y + b, a, b) && (c = !0));
    a < 0 &&
        (this.IsBlocking(this.X + a - this.Width, this.Y + b - this.Height, a, b) && (c = !0),
            this.IsBlocking(this.X + a - this.Width, this.Y + b - ((this.Height / 2) | 0), a, b) && (c = !0),
            this.IsBlocking(this.X + a - this.Width, this.Y + b, a, b) && (c = !0));
    if (c) {
        if (a < 0) (this.X = (((this.X - this.Width) / 16) | 0) * 16 + this.Width), (this.Xa = 0);
        if (a > 0) (this.X = (((this.X + this.Width) / 16 + 1) | 0) * 16 - this.Width - 1), (this.Xa = 0);
        if (b < 0) (this.Y = (((this.Y - this.Height) / 16) | 0) * 16 + this.Height), (this.Ya = 0);
        if (b > 0) (this.Y = (((this.Y - 1) / 16 + 1) | 0) * 16 - 1), (this.OnGround = !0);
        return !1;
    } else return (this.X += a), (this.Y += b), !0;
};
Mario.Shell.prototype.IsBlocking = function (a, b, c, e) {
    a = (a / 16) | 0;
    b = (b / 16) | 0;
    if (a === ((this.X / 16) | 0) && b === ((this.Y / 16) | 0)) return !1;
    var d = this.World.Level.IsBlocking(a, b, c, e);
    d && e === 0 && c !== 0 && this.World.Bump(a, b, !0);
    return d;
};
Mario.Shell.prototype.BumpCheck = function (a, b) {
    if (this.X + this.Width > a * 16 && this.X - this.Width < a * 16 + 16 && b === (((this.Y - 1) / 16) | 0)) (this.Facing = -Mario.MarioCharacter.Facing), (this.Ya = -10);
};
Mario.Shell.prototype.Die = function () {
    this.Dead = !0;
    this.Carried = !1;
    this.Xa = -this.Facing * 2;
    this.Ya = -5;
    this.DeadTime = 100;
};
Mario.Shell.prototype.ShellCollideCheck = function (a) {
    if (this.DeadTime !== 0) return !1;
    var b = a.X - this.X,
        c = a.Y - this.Y;
    if (b > -16 && b < 16 && c > -this.Height && c < a.Height) {
        Engine.Resources.PlaySound("kick");
        if (Mario.MarioCharacter.Carried === a || Mario.MarioCharacter.Carried === this) Mario.MarioCharacter.Carried = null;
        this.Die();
        a.Die();
        return !0;
    }
    return !1;
};
Mario.Shell.prototype.Release = function () {
    this.Carried = !1;
    this.Facing = Mario.MarioCharacter.Facing;
    this.X += this.Facing * 8;
};

/** TITLE STATE **/

class TitleState extends Engine.GameState {
    constructor() {
        super();

        this.drawManager = null;
        this.camera = null;
        this.logoY = null;
        this.bounce = null;
        this.font = null;
    }

    Enter() {
        this.drawManager = new Engine.DrawableManager();
        this.camera = new Engine.Camera();
    
        let bgGenerator = new Mario.BackgroundGenerator(2048, 15, true, Mario.LevelType.Overground);
        let bgLayer0 = new Mario.BackgroundRenderer(bgGenerator.CreateLevel(), 320, 240, 2);
        bgGenerator.SetValues(2048, 15, false, Mario.LevelType.Overground);
        let bgLayer1 = new Mario.BackgroundRenderer(bgGenerator.CreateLevel(), 320, 240, 1);
    
        this.title = new Engine.Sprite();
        this.title.Image = Engine.Resources.Images["title"];
        this.title.X = 0, this.title.Y = 120;
    
        this.logo = new Engine.Sprite();
        this.logo.Image = Engine.Resources.Images["logo"];
        this.logo.X = 0, this.logo.Y = 0;
    
        this.font = Mario.SpriteCuts.CreateRedFont();
        this.font.Strings[0] = { String: "Press S to Start", X: 96, Y: 120 };
    
        this.logoY = 20;
    
        this.drawManager.Add(bgLayer0);
        this.drawManager.Add(bgLayer1);
    
        this.bounce = 0;
    
        Mario.GlobalMapState = new Mario.MapState();
        //set up the global main character variable
        Mario.MarioCharacter = new Character();
        Mario.MarioCharacter.Image = Engine.Resources.Images["smallMario"];
    
        //Mario.PlayTitleMusic();
    }

    Exit() {
        //Mario.StopMusic();
    
        this.drawManager.Clear();
        delete this.drawManager;
        delete this.camera;
        delete this.font;
    }

    Update(delta) {
        this.bounce += delta * 2;
        this.logoY = 20 + Math.sin(this.bounce) * 10;
    
        this.camera.X += delta * 25;
    
        this.drawManager.Update(delta);
    }

    Draw(context) {
        this.drawManager.Draw(context, this.camera);
    
        context.drawImage(Engine.Resources.Images["title"], 0, 120);
        context.drawImage(Engine.Resources.Images["logo"], 0, this.logoY);
    
        this.font.Draw(context, this.Camera);
    }

    CheckForChange(context) {
        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) context.ChangeState(new PredefinedLevelState(1, 0));// Mario.GlobalMapState);
    }
};

/** LOADING STATE **/

Mario.LoadingState = function () {
    this.Images = [];
    this.ImagesLoaded = !1;
    this.ScreenColor = 0;
    this.ColorDirection = 1;
    this.SoundIndex = this.ImageIndex = 0;
};
Mario.LoadingState.prototype = new Engine.GameState();
Mario.LoadingState.prototype.Enter = function () {
    for (var a = 0, a = 0; a < 15; a++) this.Images[a] = {};
    this.Images[0].name = "background";
    this.Images[1].name = "endScene";
    this.Images[2].name = "enemies";
    this.Images[3].name = "fireMario";
    this.Images[4].name = "font";
    this.Images[5].name = "gameOverGhost";
    this.Images[6].name = "items";
    this.Images[7].name = "logo";
    this.Images[8].name = "map";
    this.Images[9].name = "mario";
    this.Images[10].name = "particles";
    this.Images[11].name = "racoonMario";
    this.Images[12].name = "smallMario";
    this.Images[13].name = "title";
    this.Images[14].name = "worldMap";
    this.Images[0].src = "images/bgsheet.png";
    this.Images[1].src = "images/endscene.gif";
    this.Images[2].src = "images/enemysheet.png";
    this.Images[3].src = "images/firemariosheet.png";
    this.Images[4].src = "images/font.gif";
    this.Images[5].src = "images/gameovergost.gif";
    this.Images[6].src = "images/itemsheet.png";
    this.Images[7].src = "images/logo.gif";
    this.Images[8].src = "images/mapsheet.png";
    this.Images[9].src = "images/mariosheet.png";
    this.Images[10].src = "images/particlesheet.png";
    this.Images[11].src = "images/racoonmariosheet.png";
    this.Images[12].src = "images/smallmariosheet.png";
    this.Images[13].src = "images/title.gif";
    this.Images[14].src = "images/worldmap.png";
    Engine.Resources.AddImages(this.Images);
    new Audio().canPlayType("audio/mp3")
        ? Engine.Resources.AddSound("1up", "sounds/1-up.mp3", 1)
            .AddSound("breakblock", "sounds/breakblock.mp3")
            .AddSound("bump", "sounds/bump.mp3", 4)
            .AddSound("cannon", "sounds/cannon.mp3")
            .AddSound("coin", "sounds/coin.mp3", 5)
            .AddSound("death", "sounds/death.mp3", 1)
            .AddSound("exit", "sounds/exit.mp3", 1)
            .AddSound("fireball", "sounds/fireball.mp3", 1)
            .AddSound("jump", "sounds/jump.mp3")
            .AddSound("kick", "sounds/kick.mp3")
            .AddSound("pipe", "sounds/pipe.mp3", 1)
            .AddSound("powerdown", "sounds/powerdown.mp3", 1)
            .AddSound("powerup", "sounds/powerup.mp3", 1)
            .AddSound("sprout", "sounds/sprout.mp3", 1)
            .AddSound("stagestart", "sounds/stagestart.mp3", 1)
            .AddSound("stomp", "sounds/stomp.mp3", 2)
        : Engine.Resources.AddSound("1up", "sounds/1-up.wav", 1)
            .AddSound("breakblock", "sounds/breakblock.wav")
            .AddSound("bump", "sounds/bump.wav", 2)
            .AddSound("cannon", "sounds/cannon.wav")
            .AddSound("coin", "sounds/coin.wav", 5)
            .AddSound("death", "sounds/death.wav", 1)
            .AddSound("exit", "sounds/exit.wav", 1)
            .AddSound("fireball", "sounds/fireball.wav", 1)
            .AddSound("jump", "sounds/jump.wav", 1)
            .AddSound("kick", "sounds/kick.wav", 1)
            .AddSound("message", "sounds/message.wav", 1)
            .AddSound("pipe", "sounds/pipe.wav", 1)
            .AddSound("powerdown", "sounds/powerdown.wav", 1)
            .AddSound("powerup", "sounds/powerup.wav", 1)
            .AddSound("sprout", "sounds/sprout.wav", 1)
            .AddSound("stagestart", "sounds/stagestart.wav", 1)
            .AddSound("stomp", "sounds/stomp.wav", 1);
    Mario.Tile.LoadBehaviors();
};
Mario.LoadingState.prototype.Exit = function () {
    delete this.Images;
};
Mario.LoadingState.prototype.Update = function (a) {
    if (!this.ImagesLoaded) {
        this.ImagesLoaded = !0;
        for (var b = 0, b = 0; b < this.Images.length; b++)
            if (Engine.Resources.Images[this.Images[b].name].complete !== !0) {
                this.ImagesLoaded = !1;
                break;
            }
    }
    this.ScreenColor += this.ColorDirection * 255 * a;
    if (this.ScreenColor > 255) (this.ScreenColor = 255), (this.ColorDirection = -1);
    else if (this.ScreenColor < 0) (this.ScreenColor = 0), (this.ColorDirection = 1);
};
Mario.LoadingState.prototype.Draw = function (a) {
    if (this.ImagesLoaded) a.fillStyle = "rgb(0, 0, 0)";
    else {
        var b = parseInt(this.ScreenColor, 10);
        a.fillStyle = "rgb(" + b + "," + b + "," + b + ")";
    }
    a.fillRect(0, 0, 640, 480);
};
Mario.LoadingState.prototype.CheckForChange = function (a) {
    if (this.ImagesLoaded) (Mario.GlobalMapState = new Mario.MapState()), a.ChangeState(new TitleState());
};

/** LOSE STATE **/

Mario.LoseState = function () {
    this.font = this.gameOver = this.camera = this.drawManager = null;
    this.wasKeyDown = !1;
};
Mario.LoseState.prototype = new Engine.GameState();
Mario.LoseState.prototype.Enter = function () {
    this.drawManager = new Engine.DrawableManager();
    this.camera = new Engine.Camera();
    this.gameOver = new Engine.AnimatedSprite();
    this.gameOver.Image = Engine.Resources.Images.gameOverGhost;
    this.gameOver.SetColumnCount(9);
    this.gameOver.SetRowCount(1);
    this.gameOver.AddNewSequence("turnLoop", 0, 0, 0, 8);
    this.gameOver.PlaySequence("turnLoop", !0);
    this.gameOver.FramesPerSecond = 1 / 15;
    this.gameOver.X = 112;
    this.gameOver.Y = 68;
    this.font = Mario.SpriteCuts.CreateBlackFont();
    this.font.Strings[0] = { String: "Game over!", X: 116, Y: 160 };
    this.drawManager.Add(this.font);
    this.drawManager.Add(this.gameOver);
};
Mario.LoseState.prototype.Exit = function () {
    this.drawManager.Clear();
    delete this.drawManager;
    delete this.camera;
    delete this.gameOver;
    delete this.font;
};
Mario.LoseState.prototype.Update = function (a) {
    this.drawManager.Update(a);
    if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) this.wasKeyDown = !0;
};
Mario.LoseState.prototype.Draw = function (a) {
    this.drawManager.Draw(a, this.camera);
};
Mario.LoseState.prototype.CheckForChange = function (a) {
    this.wasKeyDown && !Engine.KeyboardInput.IsKeyDown(Engine.Keys.S) && a.ChangeState(new TitleState());
};

/** WIN STATE **/

Mario.WinState = function () {
    this.waitTime = 2;
    this.kissing = this.font = this.camera = this.drawManager = null;
    this.wasKeyDown = !1;
};
Mario.WinState.prototype = new Engine.GameState();
Mario.WinState.prototype.Enter = function () {
    this.drawManager = new Engine.DrawableManager();
    this.camera = new Engine.Camera();
    this.font = Mario.SpriteCuts.CreateBlackFont();
    this.font.Strings[0] = { String: "Thank you for saving me, Mario!", X: 36, Y: 160 };
    this.kissing = new Engine.AnimatedSprite();
    this.kissing.Image = Engine.Resources.Images.endScene;
    this.kissing.X = 112;
    this.kissing.Y = 52;
    this.kissing.SetColumnCount(2);
    this.kissing.SetRowCount(1);
    this.kissing.AddNewSequence("loop", 0, 0, 0, 1);
    this.kissing.PlaySequence("loop", !0);
    this.kissing.FramesPerSecond = 0.5;
    this.waitTime = 2;
    this.drawManager.Add(this.font);
    this.drawManager.Add(this.kissing);
};
Mario.WinState.prototype.Exit = function () {
    this.drawManager.Clear();
    delete this.drawManager;
    delete this.camera;
};
Mario.WinState.prototype.Update = function (a) {
    this.drawManager.Update(a);
    if (this.waitTime > 0) this.waitTime -= a;
    else if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) this.wasKeyDown = !0;
};
Mario.WinState.prototype.Draw = function (a) {
    this.drawManager.Draw(a, this.camera);
};
Mario.WinState.prototype.CheckForChange = function (a) {
    this.waitTime <= 0 && this.wasKeyDown && !Engine.KeyboardInput.IsKeyDown(Engine.Keys.S) && a.ChangeState(new TitleState());
};

/** MAP STATE **/

Mario.MapTile = { Grass: 0, Water: 1, Level: 2, Road: 3, Decoration: 4 };
Mario.MapState = function () {
    this.camera = new Engine.Camera();
    this.Level = [];
    this.Data = [];
    this.YFarthestCap = this.XFarthestCap = this.Farthest = this.LevelId = this.MoveTime = this.YMarioA = this.XMarioA = this.YMario = this.XMario = 0;
    this.MapImage = document.createElement("canvas");
    this.MapImage.width = 320;
    this.MapImage.height = 240;
    this.MapContext = this.MapImage.getContext("2d");
    this.EnterLevel = this.CanEnterLevel = !1;
    this.LevelType = this.LevelDifficulty = 0;
    this.WorldNumber = -1;
    this.NextWorld();
};
Mario.MapState.prototype = new Engine.GameState();
Mario.MapState.prototype.Enter = function () {
    this.WaterSprite = new Engine.AnimatedSprite();
    this.WaterSprite.Image = Engine.Resources.Images.worldMap;
    this.WaterSprite.SetColumnCount(16);
    this.WaterSprite.SetRowCount(16);
    this.WaterSprite.AddNewSequence("loop", 14, 0, 14, 3);
    this.WaterSprite.FramesPerSecond = 1 / 3;
    this.WaterSprite.PlaySequence("loop", !0);
    this.WaterSprite.X = 0;
    this.WaterSprite.Y = 0;
    this.DecoSprite = new Engine.AnimatedSprite();
    this.DecoSprite.Image = Engine.Resources.Images.worldMap;
    this.DecoSprite.SetColumnCount(16);
    this.DecoSprite.SetRowCount(16);
    this.DecoSprite.AddNewSequence("world0", 10, 0, 10, 3);
    this.DecoSprite.AddNewSequence("world1", 11, 0, 11, 3);
    this.DecoSprite.AddNewSequence("world2", 12, 0, 12, 3);
    this.DecoSprite.AddNewSequence("world3", 13, 0, 13, 3);
    this.DecoSprite.FramesPerSecond = 1 / 3;
    this.DecoSprite.PlaySequence("world0", !0);
    this.DecoSprite.X = 0;
    this.DecoSprite.Y = 0;
    this.HelpSprite = new Engine.AnimatedSprite();
    this.HelpSprite.Image = Engine.Resources.Images.worldMap;
    this.HelpSprite.SetColumnCount(16);
    this.HelpSprite.SetRowCount(16);
    this.HelpSprite.AddNewSequence("help", 7, 3, 7, 5);
    this.HelpSprite.FramesPerSecond = 0.5;
    this.HelpSprite.PlaySequence("help", !0);
    this.HelpSprite.X = 0;
    this.HelpSprite.Y = 0;
    this.SmallMario = new Engine.AnimatedSprite();
    this.SmallMario.Image = Engine.Resources.Images.worldMap;
    this.SmallMario.SetColumnCount(16);
    this.SmallMario.SetRowCount(16);
    this.SmallMario.AddNewSequence("small", 1, 0, 1, 1);
    this.SmallMario.FramesPerSecond = 1 / 3;
    this.SmallMario.PlaySequence("small", !0);
    this.SmallMario.X = 0;
    this.SmallMario.Y = 0;
    this.LargeMario = new Engine.AnimatedSprite();
    this.LargeMario.Image = Engine.Resources.Images.worldMap;
    this.LargeMario.SetColumnCount(16);
    this.LargeMario.SetRowCount(8);
    this.LargeMario.AddNewSequence("large", 0, 2, 0, 3);
    this.LargeMario.AddNewSequence("fire", 0, 4, 0, 5);
    this.LargeMario.FramesPerSecond = 1 / 3;
    this.LargeMario.PlaySequence("large", !0);
    this.LargeMario.X = 0;
    this.LargeMario.Y = 0;
    this.FontShadow = Mario.SpriteCuts.CreateBlackFont();
    this.Font = Mario.SpriteCuts.CreateWhiteFont();
    this.DecoSprite.PlaySequence("world" + (this.WorldNumber % 4), !0);
    Mario.MarioCharacter.Fire ? this.LargeMario.PlaySequence("fire", !0) : this.LargeMario.PlaySequence("large", !0);
    this.EnterLevel = !1;
    this.LevelType = this.LevelDifficulty = 0;
};
Mario.MapState.prototype.Exit = function () {
    delete this.WaterSprite;
    delete this.DecoSprite;
    delete this.HelpSprite;
    delete this.SmallMario;
    delete this.LargeMario;
    delete this.FontShadow;
    delete this.Font;
};
Mario.MapState.prototype.NextWorld = function () {
    var a = !1;
    this.WorldNumber++;
    if (this.WorldNumber !== 8) {
        for (this.YFarthestCap = this.XFarthestCap = this.Farthest = this.LevelId = this.MoveTime = 0; !a;) a = this.GenerateLevel();
        this.RenderStatic();
    }
};
Mario.MapState.prototype.GenerateLevel = function () {
    var a = 0,
        b = 0,
        c = 0,
        e = 0,
        c = (c = 0),
        d = new Mario.ImprovedNoise((Math.random() * 9223372036854775e3) | 0),
        f = new Mario.ImprovedNoise((Math.random() * 9223372036854775e3) | 0),
        g = new Mario.ImprovedNoise((Math.random() * 9223372036854775e3) | 0);
    this.Level = [];
    this.Data = [];
    for (var h = Math.random() * 512, i = Math.random() * 512, j = Math.random() * 512, k = Math.random() * 512, a = 0; a < 21; a++) {
        this.Level[a] = [];
        this.Data[a] = [];
        for (b = 0; b < 16; b++) (c = d.PerlinNoise(a * 10 + h, b * 10 + i)), (e = f.PerlinNoise(a * 10 + j, b * 10 + k)), (c -= e), (c *= 2), (this.Level[a][b] = c > 0 ? Mario.MapTile.Water : Mario.MapTile.Grass);
    }
    f = d = 9999;
    for (j = c = j = 0; j < 100 && c < 12; j++)
        if (((a = ((Math.random() * ((20 / 3) | 0)) | 0) * 3 + 2), (b = ((Math.random() * 5) | 0) * 3 + 1), this.Level[a][b] === Mario.MapTile.Grass))
            a < d && ((d = a), (f = b)), (this.Level[a][b] = Mario.MapTile.Level), (this.Data[a][b] = -1), c++;
    this.Data[d][f] = -2;
    for (a = !0; a;) a = this.FindConnection(21, 16);
    this.FindCaps(21, 16);
    if (this.XFarthestCap === 0) return !1;
    this.Data[this.XFarthestCap][this.YFarthestCap] = -2;
    this.Data[(this.XMario / 16) | 0][(this.YMario / 16) | 0] = -11;
    for (a = 0; a < 21; a++)
        for (b = 0; b < 16; b++)
            if (this.Level[a][b] === Mario.MapTile.Grass && (a !== this.XFarthestCap || b !== this.YFarthestCap - 1)) if (((c = g.PerlinNoise(a * 10 + h, b * 10 + i)), c > 0)) this.Level[a][b] = Mario.MapTile.Decoration;
    return !0;
};
Mario.MapState.prototype.FindConnection = function (a, b) {
    for (var c = 0, e = 0, c = 0; c < a; c++) for (e = 0; e < b; e++) if (this.Level[c][e] === Mario.MapTile.Level && this.Data[c][e] === -1) return this.Connect(c, e, a, b), !0;
    return !1;
};
Mario.MapState.prototype.Connect = function (a, b, c, e) {
    for (var d = 1e4, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, h = (j = 0); h < c; h++)
        for (i = 0; i < e; i++) this.Level[h][i] === Mario.MapTile.Level && this.Data[h][i] === -2 && ((j = Math.abs(a - h) | 0), (k = Math.abs(b - i) | 0), (j = j * j + k * k), j < d && ((f = h), (g = i), (d = j)));
    this.DrawRoad(a, b, f, g);
    this.Level[a][b] = Mario.MapTile.Level;
    this.Data[a][b] = -2;
};
Mario.MapState.prototype.DrawRoad = function (a, b, c, e) {
    var d = !1;
    Math.random() > 0.5 && (d = !0);
    if (d) {
        for (; a > c;) (this.Data[a][b] = 0), (this.Level[a--][b] = Mario.MapTile.Road);
        for (; a < c;) (this.Data[a][b] = 0), (this.Level[a++][b] = Mario.MapTile.Road);
    }
    for (; b > e;) (this.Data[a][b] = 0), (this.Level[a][b--] = Mario.MapTile.Road);
    for (; b < e;) (this.Data[a][b] = 0), (this.Level[a][b++] = Mario.MapTile.Road);
    if (!d) {
        for (; a > c;) (this.Data[a][b] = 0), (this.Level[a--][b] = Mario.MapTile.Road);
        for (; a < c;) (this.Data[a][b] = 0), (this.Level[a++][b] = Mario.MapTile.Road);
    }
};
Mario.MapState.prototype.FindCaps = function (a, b) {
    for (var c = 0, e = 0, d = -1, f = -1, g = 0, h = 0, i = 0, c = 0; c < a; c++)
        for (e = 0; e < b; e++)
            if (this.Level[c][e] === Mario.MapTile.Level) {
                g = 0;
                for (h = c - 1; h <= c + 1; h++) for (i = e - 1; i <= e + 1; i++) this.Level[h][i] === Mario.MapTile.Road && g++;
                g === 1 ? (d === -1 && ((d = c), (f = e)), (this.Data[c][e] = 0)) : (this.Data[c][e] = 1);
            }
    this.XMario = d * 16;
    this.YMario = f * 16;
    this.Travel(d, f, -1, 0);
};
Mario.MapState.prototype.Travel = function (a, b, c, e) {
    if (!(this.Level[a][b] !== Mario.MapTile.Road && this.Level[a][b] !== Mario.MapTile.Level)) {
        if (this.Level[a][b] === Mario.MapTile.Road)
            if (this.Data[a][b] === 1) return;
            else this.Data[a][b] = 1;
        if (this.Level[a][b] === Mario.MapTile.Level)
            if (this.Data[a][b] > 0) this.Data[a][b] = this.LevelId !== 0 && ((Math.random() * 4) | 0) === 0 ? -3 : ++this.LevelId;
            else if (e > 0 && ((this.Data[a][b] = -1), e > this.Farthest)) (this.Farthest = e), (this.XFarthestCap = a), (this.YFarthestCap = b);
        c !== 2 && this.Travel(a - 1, b, 0, e++);
        c !== 3 && this.Travel(a, b - 1, 1, e++);
        c !== 0 && this.Travel(a + 1, b, 2, e++);
        c !== 1 && this.Travel(a, b + 1, 3, e++);
    }
};
Mario.MapState.prototype.RenderStatic = function () {
    for (var a = 0, b = 0, c = 0, e = 0, d = 0, f = 0, g = (c = 0), h = 0, i = Engine.Resources.Images.worldMap, a = (g = 0); a < 20; a++)
        for (b = 0; b < 15; b++)
            if ((this.MapContext.drawImage(i, ((this.WorldNumber / 4) | 0) * 16, 0, 16, 16, a * 16, b * 16, 16, 16), this.Level[a][b] === Mario.MapTile.Level))
                (g = this.Data[a][b]),
                    g === 0
                        ? this.MapContext.drawImage(i, 0, 112, 16, 16, a * 16, b * 16, 16, 16)
                        : g === -1
                            ? this.MapContext.drawImage(i, 48, 128, 16, 16, a * 16, b * 16, 16, 16)
                            : g === -3
                                ? this.MapContext.drawImage(i, 0, 128, 16, 16, a * 16, b * 16, 16, 16)
                                : g === -10
                                    ? this.MapContext.drawImage(i, 16, 128, 16, 16, a * 16, b * 16, 16, 16)
                                    : g === -11
                                        ? this.MapContext.drawImage(i, 16, 112, 16, 16, a * 16, b * 16, 16, 16)
                                        : g === -2
                                            ? (this.MapContext.drawImage(i, 32, 112, 16, 16, a * 16, (b - 1) * 16, 16, 16), this.MapContext.drawImage(i, 32, 128, 16, 16, a * 16, b * 16, 16, 16))
                                            : this.MapContext.drawImage(i, (g - 1) * 16, 96, 16, 16, a * 16, b * 16, 16, 16);
            else if (this.Level[a][b] === Mario.MapTile.Road)
                (c = this.IsRoad(a - 1, b) ? 1 : 0),
                    (e = this.IsRoad(a, b - 1) ? 1 : 0),
                    (d = this.IsRoad(a + 1, b) ? 1 : 0),
                    (f = this.IsRoad(a, b + 1) ? 1 : 0),
                    (c = c + e * 2 + d * 4 + f * 8),
                    this.MapContext.drawImage(i, c * 16, 32, 16, 16, a * 16, b * 16, 16, 16);
            else if (this.Level[a][b] === Mario.MapTile.Water)
                for (g = 0; g < 2; g++)
                    for (h = 0; h < 2; h++)
                        (c = this.IsWater(a * 2 + (g - 1), b * 2 + (h - 1)) ? 0 : 1),
                            (e = this.IsWater(a * 2 + g, b * 2 + (h - 1)) ? 0 : 1),
                            (d = this.IsWater(a * 2 + (g - 1), b * 2 + h) ? 0 : 1),
                            (f = this.IsWater(a * 2 + g, b * 2 + h) ? 0 : 1),
                            (c = c + e * 2 + d * 4 + f * 8 - 1),
                            c >= 0 && c <= 14 && this.MapContext.drawImage(i, c * 16, (4 + ((g + h) & 1)) * 16, 16, 16, a * 16 + g * 8, b * 16 + h * 8, 16, 16);
};
Mario.MapState.prototype.IsRoad = function (a, b) {
    a < 0 && (a = 0);
    b < 0 && (b = 0);
    if (this.Level[a][b] === Mario.MapTile.Road) return !0;
    if (this.Level[a][b] === Mario.MapTile.Level) return !0;
    return !1;
};
Mario.MapState.prototype.IsWater = function (a, b) {
    var c = 0,
        e = 0;
    a < 0 && (a = 0);
    b < 0 && (b = 0);
    for (c = 0; c < 2; c++) for (e = 0; e < 2; e++) if (this.Level[((a + c) / 2) | 0][((b + e) / 2) | 0] !== Mario.MapTile.Water) return !1;
    return !0;
};
Mario.MapState.prototype.Update = function (a) {
    var b = 0,
        c = 0,
        e = 0,
        d = 0;
    if (this.WorldNumber !== 8) {
        this.XMario += this.XMarioA;
        this.YMario += this.YMarioA;
        b = (this.XMario / 16) | 0;
        c = (this.YMario / 16) | 0;
        this.Level[b][c] === Mario.MapTile.Road && (this.Data[b][c] = 0);
        if (this.MoveTime > 0) this.MoveTime--;
        else {
            this.YMarioA = this.XMarioA = 0;
            if (
                this.CanEnterLevel &&
                Engine.KeyboardInput.IsKeyDown(Engine.Keys.S) &&
                this.Level[b][c] === Mario.MapTile.Level &&
                this.Data[b][c] !== -11 &&
                this.Level[b][c] === Mario.MapTile.Level &&
                this.Data[b][c] !== 0 &&
                this.Data[b][c] > -10
            ) {
                e = this.WorldNumber + 1;
                Mario.MarioCharacter.LevelString = e + "-";
                d = Mario.LevelType.Overground;
                if (this.Data[b][c] > 1 && ((Math.random() * 3) | 0) === 0) d = Mario.LevelType.Underground;
                this.Data[b][c] < 0
                    ? (this.Data[b][c] === -2 ? ((Mario.MarioCharacter.LevelString += "X"), (e += 2)) : this.Data[b][c] === -1 ? (Mario.MarioCharacter.LevelString += "?") : ((Mario.MarioCharacter.LevelString += "#"), (e += 1)),
                        (d = Mario.LevelType.Castle))
                    : (Mario.MarioCharacter.LevelString += this.Data[b][c]);
                this.EnterLevel = !0;
                this.LevelDifficulty = e;
                this.LevelType = d;
            }
            this.CanEnterLevel = !Engine.KeyboardInput.IsKeyDown(Engine.Keys.S);
            Engine.KeyboardInput.IsKeyDown(Engine.Keys.Left) && this.TryWalking(-1, 0);
            Engine.KeyboardInput.IsKeyDown(Engine.Keys.Right) && this.TryWalking(1, 0);
            Engine.KeyboardInput.IsKeyDown(Engine.Keys.Up) && this.TryWalking(0, -1);
            Engine.KeyboardInput.IsKeyDown(Engine.Keys.Down) && this.TryWalking(0, 1);
        }
        this.WaterSprite.Update(a);
        this.DecoSprite.Update(a);
        this.HelpSprite.Update(a);
        Mario.MarioCharacter.Large
            ? ((this.LargeMario.X = (this.XMario + this.XMarioA * a) | 0), (this.LargeMario.Y = this.YMario + ((this.YMarioA * a) | 0) - 22), this.LargeMario.Update(a))
            : ((this.SmallMario.X = (this.XMario + this.XMarioA * a) | 0), (this.SmallMario.Y = this.YMario + ((this.YMarioA * a) | 0) - 6), this.SmallMario.Update(a));
    }
};
Mario.MapState.prototype.TryWalking = function (a, b) {
    var c = (this.XMario / 16) | 0,
        e = (this.YMario / 16) | 0,
        d = c + a,
        f = e + b;
    if ((this.Level[d][f] === Mario.MapTile.Road || this.Level[d][f] === Mario.MapTile.Level) && !(this.Level[d][f] === Mario.MapTile.Road && this.Data[d][f] !== 0 && this.Data[c][e] !== 0 && this.Data[c][e] > -10))
        (this.XMarioA = a * 8), (this.YMarioA = b * 8), (this.MoveTime = this.CalcDistance(c, e, a, b) * 2 + 1);
};
Mario.MapState.prototype.CalcDistance = function (a, b, c, e) {
    for (var d = 0; ;) {
        a += c;
        b += e;
        if (this.Level[a][b] !== Mario.MapTile.Road) return d;
        if (this.Level[a - e][b + c] === Mario.MapTile.Road) return d;
        if (this.Level[a + e][b - c] === Mario.MapTile.Road) return d;
        d++;
    }
};
Mario.MapState.prototype.Draw = function (a) {
    var b = 0,
        c = 0;
    if (this.WorldNumber !== 8) {
        a.drawImage(this.MapImage, 0, 0);
        for (c = 0; c <= 15; c++)
            for (b = 20; b >= 0; b--)
                if (this.Level[b][c] === Mario.MapTile.Water) {
                    if (this.IsWater(b * 2 - 1, c * 2 - 1)) (this.WaterSprite.X = b * 16 - 8), (this.WaterSprite.Y = c * 16 - 8), this.WaterSprite.Draw(a, this.camera);
                } else if (this.Level[b][c] === Mario.MapTile.Decoration) (this.DecoSprite.X = b * 16), (this.DecoSprite.Y = c * 16), this.DecoSprite.Draw(a, this.camera);
                else if (this.Level[b][c] === Mario.MapTile.Level && this.Data[b][c] === -2) (this.HelpSprite.X = b * 16 + 16), (this.HelpSprite.Y = c * 16 - 16), this.HelpSprite.Draw(a, this.camera);
        Mario.MarioCharacter.Large ? this.LargeMario.Draw(a, this.camera) : this.SmallMario.Draw(a, this.camera);
        this.Font.Strings[0] = { String: "MARIO " + Mario.MarioCharacter.Lives, X: 4, Y: 4 };
        this.FontShadow.Strings[0] = { String: "MARIO " + Mario.MarioCharacter.Lives, X: 5, Y: 5 };
        this.Font.Strings[1] = { String: "WORLD " + (this.WorldNumber + 1), X: 256, Y: 4 };
        this.FontShadow.Strings[1] = { String: "WORLD " + (this.WorldNumber + 1), X: 257, Y: 5 };
        this.FontShadow.Draw(a, this.camera);
        this.Font.Draw(a, this.camera);
    }
};
Mario.MapState.prototype.LevelWon = function () {
    var a = this.XMario / 16,
        b = this.YMario / 16;
    this.Data[a][b] === -2 ? this.NextWorld() : ((this.Data[a][b] = this.Data[a][b] !== -3 ? 0 : -10), this.RenderStatic());
};
Mario.MapState.prototype.GetX = function () {
    return 160;
};
Mario.MapState.prototype.GetY = function () {
    return 120;
};
Mario.MapState.prototype.CheckForChange = function (a) {
    this.WorldNumber === 8 && a.ChangeState(new Mario.WinState());
    this.EnterLevel && a.ChangeState(new LevelState(this.LevelDifficulty, this.LevelType));
};

/** LEVEL STATE **/

class LevelState extends Engine.GameState {
    constructor(difficulty, type) {
        super();
        this.LevelDifficulty = difficulty;
        this.LevelType = type;
        this.Level = null;
        this.Layer = null;
        this.BgLayer = [];

        this.Paused = false;
        this.Sprites = null;
        this.SpritesToAdd = null;
        this.SpritesToRemove = null;
        this.Camera = null;
        this.ShellsToCheck = null;
        this.FireballsToCheck = null;

        this.FontShadow = null;
        this.Font = null;

        this.TimeLeft = 0;
        this.StartTime = 0;
        this.FireballsOnScreen = 0;
        this.Tick = 0;

        this.Delta = 0;

        this.GotoMapState = false;
        this.GotoLoseState = false;
    }

    Enter() {
        let levelGenerator = new LevelGenerator(320, 15), i = 0, scrollSpeed = 0, w = 0, h = 0, bgLevelGenerator = null;
        this.Level = levelGenerator.CreateLevel(this.LevelType, this.LevelDifficulty);

        //play music here
        //if (this.LevelType === Mario.LevelType.Overground) {
        //Mario.PlayOvergroundMusic();
        //} else if (this.LevelType === Mario.LevelType.Underground) {
        //Mario.PlayUndergroundMusic();
        //} else if (this.LevelType === Mario.LevelType.Castle) {
        //Mario.PlayCastleMusic();
        //}

        this.Paused = false;
        this.Layer = new Mario.LevelRenderer(this.Level, 320, 240);
        this.Sprites = new Engine.DrawableManager();
        this.Camera = new Engine.Camera();
        this.Tick = 0;

        this.ShellsToCheck = [];
        this.FireballsToCheck = [];
        this.SpritesToAdd = [];
        this.SpritesToRemove = [];

        this.FontShadow = Mario.SpriteCuts.CreateBlackFont();
        this.Font = Mario.SpriteCuts.CreateWhiteFont();

        for (i = 0; i < 2; i++) {
            scrollSpeed = 4 >> i;
            w = ((((this.Level.Width * 16) - 320) / scrollSpeed) | 0) + 320;
            h = ((((this.Level.Height * 16) - 240) / scrollSpeed) | 0) + 240;
            bgLevelGenerator = new Mario.BackgroundGenerator(w / 32 + 1, h / 32 + 1, i === 0, this.LevelType);
            this.BgLayer[i] = new Mario.BackgroundRenderer(bgLevelGenerator.CreateLevel(), 320, 240, scrollSpeed);
        }

        Mario.MarioCharacter.Initialize(this);

        this.Sprites.Add(Mario.MarioCharacter);
        this.StartTime = 1;
        this.TimeLeft = 200;

        this.GotoMapState = false;
        this.GotoLoseState = false;
    };

    Exit() {

        delete this.Level;
        delete this.Layer;
        delete this.BgLayer;
        delete this.Sprites;
        delete this.Camera;
        delete this.ShellsToCheck;
        delete this.FireballsToCheck;
        delete this.FontShadow;
        delete this.Font;
    };

    CheckShellCollide(shell) {
        this.ShellsToCheck.push(shell);
    };

    CheckFireballCollide(fireball) {
        this.FireballsToCheck.push(fireball);
    };

    Update(delta) {
        let i = 0, j = 0, xd = 0, yd = 0, sprite = null, hasShotCannon = false, xCannon = 0, x = 0, y = 0,
            dir = 0, st = null, b = 0;

        this.Delta = delta;

        this.TimeLeft -= delta;
        if ((this.TimeLeft | 0) === 0) {
            Mario.MarioCharacter.Die();
        }

        if (this.StartTime > 0) {
            this.StartTime++;
        }

        this.Camera.X = Mario.MarioCharacter.X - 160;
        if (this.Camera.X < 0) {
            this.Camera.X = 0;
        }
        if (this.Camera.X > this.Level.Width * 16 - 320) {
            this.Camera.X = this.Level.Width * 16 - 320;
        }

        this.FireballsOnScreen = 0;

        for (i = 0; i < this.Sprites.Objects.length; i++) {
            sprite = this.Sprites.Objects[i];
            if (sprite !== Mario.MarioCharacter) {
                xd = sprite.X - this.Camera.X;
                yd = sprite.Y - this.Camera.Y;
                if (xd < -64 || xd > 320 + 64 || yd < -64 || yd > 240 + 64) {
                    this.Sprites.RemoveAt(i);
                } else {
                    if (sprite instanceof Mario.Fireball) {
                        this.FireballsOnScreen++;
                    }
                }
            }
        }

        if (this.Paused) {
            for (i = 0; i < this.Sprites.Objects.length; i++) {
                if (this.Sprites.Objects[i] === Mario.MarioCharacter) {
                    this.Sprites.Objects[i].Update(delta);
                } else {
                    this.Sprites.Objects[i].UpdateNoMove(delta);
                }
            }
        } else {
            this.Layer.Update(delta);
            this.Level.Update();

            hasShotCannon = false;
            xCannon = 0;
            this.Tick++;

            for (x = ((this.Camera.X / 16) | 0) - 1; x <= (((this.Camera.X + this.Layer.Width) / 16) | 0) + 1; x++) {
                for (y = ((this.Camera.Y / 16) | 0) - 1; y <= (((this.Camera.Y + this.Layer.Height) / 16) | 0) + 1; y++) {
                    dir = 0;

                    if (x * 16 + 8 > Mario.MarioCharacter.X + 16) {
                        dir = -1;
                    }
                    if (x * 16 + 8 < Mario.MarioCharacter.X - 16) {
                        dir = 1;
                    }

                    st = this.Level.GetSpriteTemplate(x, y);

                    if (st !== null) {
                        if (st.LastVisibleTick !== this.Tick - 1) {
                            if (st.Sprite === null || !this.Sprites.Contains(st.Sprite)) {
                                st.Spawn(this, x, y, dir);
                            }
                        }

                        st.LastVisibleTick = this.Tick;
                    }

                    if (dir !== 0) {
                        b = this.Level.GetBlock(x, y);
                        if (((Mario.Tile.Behaviors[b & 0xff]) & Mario.Tile.Animated) > 0) {
                            if ((((b % 16) / 4) | 0) === 3 && ((b / 16) | 0) === 0) {
                                if ((this.Tick - x * 2) % 100 === 0) {
                                    xCannon = x;
                                    for (i = 0; i < 8; i++) {
                                        this.AddSprite(new Mario.Sparkle(this, x * 16 + 8, y * 16 + ((Math.random() * 16) | 0), Math.random() * dir, 0, 0, 1, 5));
                                    }
                                    this.AddSprite(new Mario.BulletBill(this, x * 16 + 8 + dir * 8, y * 16 + 15, dir));
                                    hasShotCannon = true;
                                }
                            }
                        }
                    }
                }
            }

            if (hasShotCannon) {
                Engine.Resources.PlaySound("cannon");
            }

            for (i = 0; i < this.Sprites.Objects.length; i++) {
                this.Sprites.Objects[i].Update(delta);
            }

            for (i = 0; i < this.Sprites.Objects.length; i++) {
                this.Sprites.Objects[i].CollideCheck();
            }

            for (i = 0; i < this.ShellsToCheck.length; i++) {
                for (j = 0; j < this.Sprites.Objects.length; j++) {
                    if (this.Sprites.Objects[j] !== this.ShellsToCheck[i] && !this.ShellsToCheck[i].Dead) {
                        if (this.Sprites.Objects[j].ShellCollideCheck(this.ShellsToCheck[i])) {
                            if (Mario.MarioCharacter.Carried === this.ShellsToCheck[i] && !this.ShellsToCheck[i].Dead) {
                                Mario.MarioCharacter.Carried = null;
                                this.ShellsToCheck[i].Die();
                            }
                        }
                    }
                }
            }
            this.ShellsToCheck.length = 0;

            for (i = 0; i < this.FireballsToCheck.length; i++) {
                for (j = 0; j < this.Sprites.Objects.length; j++) {
                    if (this.Sprites.Objects[j] !== this.FireballsToCheck[i] && !this.FireballsToCheck[i].Dead) {
                        if (this.Sprites.Objects[j].FireballCollideCheck(this.FireballsToCheck[i])) {
                            this.FireballsToCheck[i].Die();
                        }
                    }
                }
            }

            this.FireballsToCheck.length = 0;
        }

        this.Sprites.AddRange(this.SpritesToAdd);
        this.Sprites.RemoveList(this.SpritesToRemove);
        this.SpritesToAdd.length = 0;
        this.SpritesToRemove.length = 0;

        this.Camera.X = (Mario.MarioCharacter.XOld + (Mario.MarioCharacter.X - Mario.MarioCharacter.XOld) * delta) - 160;
        this.Camera.Y = (Mario.MarioCharacter.YOld + (Mario.MarioCharacter.Y - Mario.MarioCharacter.YOld) * delta) - 120;
    };

    LevelWon() {
        Mario.GlobalMapState.LevelWon();
        this.GotoMapState = true;
    }

    Draw(context) {
        let i = 0, t = 0;

        if (this.Camera.X < 0) {
            this.Camera.X = 0;
        }
        if (this.Camera.Y < 0) {
            this.Camera.Y = 0;
        }
        if (this.Camera.X > this.Level.Width * 16 - 320) {
            this.Camera.X = this.Level.Width * 16 - 320;
        }
        if (this.Camera.Y > this.Level.Height * 16 - 240) {
            this.Camera.Y = this.Level.Height * 16 - 240;
        }

        for (i = 0; i < 2; i++) {
            this.BgLayer[i].Draw(context, this.Camera);
        }

        context.save();
        context.translate(-this.Camera.X, -this.Camera.Y);
        for (i = 0; i < this.Sprites.Objects.length; i++) {
            if (this.Sprites.Objects[i].Layer === 0) {
                this.Sprites.Objects[i].Draw(context, this.Camera);
            }
        }
        context.restore();

        this.Layer.Draw(context, this.Camera);
        this.Layer.DrawExit0(context, this.Camera, Mario.MarioCharacter.WinTime === 0);

        context.save();
        context.translate(-this.Camera.X, -this.Camera.Y);
        for (i = 0; i < this.Sprites.Objects.length; i++) {
            if (this.Sprites.Objects[i].Layer === 1) {
                this.Sprites.Objects[i].Draw(context, this.Camera);
            }
        }
        context.restore();

        this.Layer.DrawExit1(context, this.Camera);

        this.DrawUI(context);

        if (this.StartTime > 0) {
            t = this.StartTime + this.Delta - 2;
            t = t * t * 0.6;
            this.RenderBlackout(context, 160, 120, t | 0);
        }

        if (Mario.MarioCharacter.WinTime > 0) {
            //Mario.StopMusic();
            t = Mario.MarioCharacter.WinTime + this.Delta;
            t = t * t * 0.2;

            if (t > 900) this.LevelWon();

            this.RenderBlackout(context, ((Mario.MarioCharacter.XDeathPos - this.Camera.X) | 0), ((Mario.MarioCharacter.YDeathPos - this.Camera.Y) | 0), (320 - t) | 0);
        }

        if (Mario.MarioCharacter.DeathTime > 0) {
            //Mario.StopMusic();
            t = Mario.MarioCharacter.DeathTime + this.Delta;
            t = t * t * 0.1;

            if (t > 900) {
                //TODO: goto map with level lost
                Mario.MarioCharacter.Lives--;
                this.GotoMapState = true;
                if (Mario.MarioCharacter.Lives <= 0) {
                    this.GotoLoseState = true;
                }
            }

            this.RenderBlackout(context, ((Mario.MarioCharacter.XDeathPos - this.Camera.X) | 0), ((Mario.MarioCharacter.YDeathPos - this.Camera.Y) | 0), (320 - t) | 0);
        }
    };

    DrawUI(context) {
        this.DrawStringShadow(context, "MARIO " + Mario.MarioCharacter.Lives, 0, 0);
        this.DrawStringShadow(context, "00000000", 0, 1);
        this.DrawStringShadow(context, "COIN", 14, 0);
        this.DrawStringShadow(context, " " + Mario.MarioCharacter.Coins, 14, 1);
        this.DrawStringShadow(context, "WORLD", 24, 0);
        this.DrawStringShadow(context, " " + Mario.MarioCharacter.LevelString, 24, 1);
        this.DrawStringShadow(context, "TIME", 34, 0);

        let time = this.TimeLeft | 0;
        if (time < 0) time = 0;
        
        this.DrawStringShadow(context, " " + time, 34, 1);
    }

    DrawStringShadow(context, string, x, y) {
        this.Font.Strings[0] = { String: string, X: x * 8 + 4, Y: y * 8 + 4 };
        this.FontShadow.Strings[0] = { String: string, X: x * 8 + 5, Y: y * 8 + 5 };
        this.FontShadow.Draw(context, this.Camera);
        this.Font.Draw(context, this.Camera);
    };

    RenderBlackout(context, x, y, radius) {
        if (radius > 320) {
            return;
        }

        let xp = [], yp = [], i = 0;
        for (i = 0; i < 16; i++) {
            xp[i] = x + (Math.cos(i * Math.PI / 15) * radius) | 0;
            yp[i] = y + (Math.sin(i * Math.PI / 15) * radius) | 0;
        }
        xp[16] = 0;
        yp[16] = y;
        xp[17] = 0;
        yp[17] = 240;
        xp[18] = 320;
        yp[18] = 240;
        xp[19] = 320;
        yp[19] = y;

        context.fillStyle = "#000";
        context.beginPath();
        context.moveTo(xp[19], yp[19]);
        for (i = 18; i >= 0; i--) {
            context.lineTo(xp[i], yp[i]);
        }
        context.closePath();
        context.fill();

        for (i = 0; i < 16; i++) {
            xp[i] = x - (Math.cos(i * Math.PI / 15) * radius) | 0;
            yp[i] = y - (Math.sin(i * Math.PI / 15) * radius) | 0;
        }
        //cure a strange problem where the circle gets cut
        yp[15] += 5;

        xp[16] = 320;
        yp[16] = y;
        xp[17] = 320;
        yp[17] = 0;
        xp[18] = 0;
        yp[18] = 0;
        xp[19] = 0;
        yp[19] = y;

        context.fillStyle = "#000";
        context.beginPath();
        context.moveTo(xp[0], yp[0]);
        for (i = 0; i <= xp.length - 1; i++) {
            context.lineTo(xp[i], yp[i]);
        }
        context.closePath();
        context.fill();
    };

    AddSprite(sprite) {
        this.Sprites.Add(sprite);
    };

    RemoveSprite(sprite) {
        this.Sprites.Remove(sprite);
    };

    Bump(x, y, canBreakBricks) {
        let block = this.Level.GetBlock(x, y), xx = 0, yy = 0;

        if ((Mario.Tile.Behaviors[block & 0xff] & Mario.Tile.Bumpable) > 0) {
            this.BumpInto(x, y - 1);
            this.Level.SetBlock(x, y, 4);
            this.Level.SetBlockData(x, y, 4);

            if ((Mario.Tile.Behaviors[block & 0xff] & Mario.Tile.Special) > 0) {
                Engine.Resources.PlaySound("sprout");
                if (!Mario.MarioCharacter.Large) {
                    this.AddSprite(new Mario.Mushroom(this, x * 16 + 8, y * 16 + 8));
                } else {
                    this.AddSprite(new Mario.FireFlower(this, x * 16 + 8, y * 16 + 8));
                }
            } else {
                Mario.MarioCharacter.GetCoin();
                Engine.Resources.PlaySound("coin");
                this.AddSprite(new Mario.CoinAnim(this, x, y));
            }
        }

        if ((Mario.Tile.Behaviors[block & 0xff] & Mario.Tile.Breakable) > 0) {
            this.BumpInto(x, y - 1);
            if (canBreakBricks) {
                Engine.Resources.PlaySound("breakblock");
                this.Level.SetBlock(x, y, 0);
                for (xx = 0; xx < 2; xx++) {
                    for (yy = 0; yy < 2; yy++) {
                        this.AddSprite(new Mario.Particle(this, x * 16 + xx * 8 + 4, y * 16 + yy * 8 + 4, (xx * 2 - 1) * 4, (yy * 2 - 1) * 4 - 8));
                    }
                }
            }
        }
    };

    BumpInto(x, y) {
        let block = this.Level.GetBlock(x, y), i = 0;
        if (((Mario.Tile.Behaviors[block & 0xff]) & Mario.Tile.PickUpable) > 0) {
            Mario.MarioCharacter.GetCoin();
            Engine.Resources.PlaySound("coin");
            this.Level.SetBlock(x, y, 0);
            this.AddSprite(new Mario.CoinAnim(x, y + 1));
        }

        for (i = 0; i < this.Sprites.Objects.length; i++) {
            this.Sprites.Objects[i].BumpCheck(x, y);
        }
    };

    CheckForChange(context) {
        if (this.GotoLoseState) {
            context.ChangeState(new Mario.LoseState());
        }
        else {
            if (this.GotoMapState) {
                context.ChangeState(Mario.GlobalMapState);
            }
        }
    };
};

/** PREDEFINED LEVEL STATE **/

class PredefinedLevelState extends LevelState {
    constructor(difficulty, type) {
        super(difficulty, type);
        
        this.NextLevel = false;
    }

    Enter() {
        super.Enter();
        this.NextLevel = false;
    }

    CheckForChange(context) {
        if (this.GotoLoseState || this.NextLevel) {
            console.log(Mario.MarioCharacter.gameplayMetrics.noJumps);
            context.ChangeState(new PredefinedLevelState(1, 0)); // TODO Count Number os Losses
        /*}
        else if (this.NextLevel) {
            context.ChangeState(new PredefinedLevelState(1, 0)); // TODO Next Predefined Level (Store state elsewhere) 
        }*/
        }
    }
    
    LevelWon() {
        Mario.GlobalMapState.LevelWon();
        this.NextLevel = true;
    }

    DrawUI(context) {
        this.DrawStringShadow(context, "MARIO " + Mario.MarioCharacter.Lives, 0, 0);
        this.DrawStringShadow(context, "00000000", 0, 1);
        this.DrawStringShadow(context, "COIN", 14, 0);
        this.DrawStringShadow(context, " " + Mario.MarioCharacter.Coins, 14, 1);
        this.DrawStringShadow(context, "WORLD", 24, 0);
        this.DrawStringShadow(context, " TBD", 24, 1);
        this.DrawStringShadow(context, "TIME", 34, 0);

        let time = this.TimeLeft | 0;
        if (time < 0) time = 0;
        
        this.DrawStringShadow(context, " " + time, 34, 1);
    }
};

/** Gameplay Metrics **/

class GameplayMetrics {
    constructor() {
        this.noJumps = 0;
    }

    registerJump() {
        this.noJumps++;
    }
};