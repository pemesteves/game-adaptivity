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
            for (e = d; e === d; ) d = Math.floor(Math.random() * b) + c;
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
Mario.NotchSprite.prototype.CollideCheck = function () {};
Mario.NotchSprite.prototype.BumpCheck = function () {};
Mario.NotchSprite.prototype.Release = function () {};
Mario.NotchSprite.prototype.ShellCollideCheck = function () {
    return !1;
};
Mario.NotchSprite.prototype.FireballCollideCheck = function () {
    return !1;
};

/** CHARACTER **/

Mario.Character = function () {
    this.Fire = this.Large = !1;
    this.Coins = 0;
    this.Lives = 3;
    this.LevelString = "none";
    this.AirInertia = this.GroundInertia = 0.89;
    this.RunTime = 0;
    this.Sliding = this.Ducking = this.MayJump = this.OnGround = this.WasOnGround = !1;
    this.YJumpSpeed = this.XJumpSpeed = this.JumpTime = 0;
    this.CanShoot = !1;
    this.Width = 4;
    this.Height = 24;
    this.World = null;
    this.InvulnerableTime = this.WinTime = this.DeathTime = this.YDeathPos = this.XDeathPos = this.PowerUpTime = this.Facing = 0;
    this.Carried = null;
    this.NewFire = this.NewLarge = this.LastFire = this.LastLarge = !1;
};
Mario.Character.prototype = new Mario.NotchSprite(null);
Mario.Character.prototype.Initialize = function (a) {
    this.World = a;
    this.X = 32;
    this.RunTime = this.PowerUpTime = this.Y = 0;
    this.Sliding = this.Ducking = this.MayJump = this.OnGround = this.WasOnGround = !1;
    this.YJumpSpeed = this.XJumpSpeed = this.JumpTime = 0;
    this.CanShoot = !1;
    this.Width = 4;
    this.Height = 24;
    this.World = a;
    this.InvulnerableTime = this.WinTime = this.DeathTime = this.YDeathPos = this.XDeathPos = this.PowerUpTime = this.Facing = 0;
    this.Carried = null;
    this.SetLarge(this.Large, this.Fire);
};
Mario.Character.prototype.SetLarge = function (a, b) {
    b && (a = !0);
    a || (b = !1);
    this.LastLarge = this.Large;
    this.LastFire = this.Fire;
    this.Large = a;
    this.Fire = b;
    this.NewLarge = this.Large;
    this.NewFire = this.Fire;
    this.Blink(!0);
};
Mario.Character.prototype.Blink = function (a) {
    this.Large = a ? this.NewLarge : this.LastLarge;
    this.Fire = a ? this.NewFire : this.LastFire;
    this.Large
        ? ((this.Image = this.Fire ? Engine.Resources.Images.fireMario : Engine.Resources.Images.mario), (this.XPicO = 16), (this.YPicO = 31), (this.PicWidth = this.PicHeight = 32))
        : ((this.Image = Engine.Resources.Images.smallMario), (this.XPicO = 8), (this.YPicO = 15), (this.PicWidth = this.PicHeight = 16));
};
Mario.Character.prototype.Move = function () {
    if (this.WinTime > 0) this.WinTime++, (this.Ya = this.Xa = 0);
    else if (this.DeathTime > 0) this.DeathTime++, this.DeathTime < 11 ? (this.Ya = this.Xa = 0) : this.DeathTime === 11 ? (this.Ya = -15) : (this.Ya += 2), (this.X += this.Xa), (this.Y += this.Ya);
    else if (this.PowerUpTime !== 0) {
        this.PowerUpTime > 0 ? (this.PowerUpTime--, this.Blink((((this.PowerUpTime / 3) | 0) & 1) === 0)) : (this.PowerUpTime++, this.Blink((((-this.PowerUpTime / 3) | 0) & 1) === 0));
        if (this.PowerUpTime === 0) this.World.Paused = !1;
        this.CalcPic();
    } else {
        this.InvulnerableTime > 0 && this.InvulnerableTime--;
        this.Visible = (((this.InvulerableTime / 2) | 0) & 1) === 0;
        this.WasOnGround = this.OnGround;
        var a = Engine.KeyboardInput.IsKeyDown(Engine.Keys.A) ? 1.2 : 0.6;
        if (this.OnGround) this.Ducking = Engine.KeyboardInput.IsKeyDown(Engine.Keys.Down) && this.Large ? !0 : !1;
        if (this.Xa > 2) this.Facing = 1;
        if (this.Xa < -2) this.Facing = -1;
        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S) || (this.JumpTime < 0 && !this.OnGround && !this.Sliding))
            if (this.JumpTime < 0) (this.Xa = this.XJumpSpeed), (this.Ya = -this.JumpTime * this.YJumpSpeed), this.JumpTime++;
            else if (this.OnGround && this.MayJump) Engine.Resources.PlaySound("jump"), (this.XJumpSpeed = 0), (this.YJumpSpeed = -1.9), (this.JumpTime = 7), (this.Ya = this.JumpTime * this.YJumpSpeed), (this.Sliding = this.OnGround = !1);
            else if (this.Sliding && this.MayJump)
                Engine.Resources.PlaySound("jump"),
                    (this.XJumpSpeed = -this.Facing * 6),
                    (this.YJumpSpeed = -2),
                    (this.JumpTime = -6),
                    (this.Xa = this.XJumpSpeed),
                    (this.Ya = -this.JumpTime * this.YJumpSpeed),
                    (this.Sliding = this.OnGround = !1),
                    (this.Facing = -this.Facing);
            else {
                if (this.JumpTime > 0) (this.Xa += this.XJumpSpeed), (this.Ya = this.JumpTime * this.YJumpSpeed), this.JumpTime--;
            }
        else this.JumpTime = 0;
        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.Left) && !this.Ducking) {
            if (this.Facing === 1) this.Sliding = !1;
            this.Xa -= a;
            if (this.JumpTime >= 0) this.Facing = -1;
        }
        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.Right) && !this.Ducking) {
            if (this.Facing === -1) this.Sliding = !1;
            this.Xa += a;
            if (this.JumpTime >= 0) this.Facing = 1;
        }
        if ((!Engine.KeyboardInput.IsKeyDown(Engine.Keys.Left) && !Engine.KeyboardInput.IsKeyDown(Engine.Keys.Right)) || this.Ducking || this.Ya < 0 || this.OnGround) this.Sliding = !1;
        Engine.KeyboardInput.IsKeyDown(Engine.Keys.A) &&
            this.CanShoot &&
            this.Fire &&
            this.World.FireballsOnScreen < 2 &&
            (Engine.Resources.PlaySound("fireball"), this.World.AddSprite(new Mario.Fireball(this.World, this.X + this.Facing * 6, this.Y - 20, this.Facing)));
        this.CanShoot = !Engine.KeyboardInput.IsKeyDown(Engine.Keys.A);
        this.MayJump = (this.OnGround || this.Sliding) && !Engine.KeyboardInput.IsKeyDown(Engine.Keys.S);
        this.XFlip = this.Facing === -1;
        this.RunTime += Math.abs(this.Xa) + 5;
        if (Math.abs(this.Xa) < 0.5) this.Xa = this.RunTime = 0;
        this.CalcPic();
        this.Sliding &&
            (this.World.AddSprite(new Mario.Sparkle(this.World, ((this.X + Math.random() * 4 - 2) | 0) + this.Facing * 8, ((this.Y + Math.random() * 4) | 0) - 24, Math.random() * 2 - 1, Math.random(), 0, 1, 5)), (this.Ya *= 0.5));
        this.OnGround = !1;
        this.SubMove(this.Xa, 0);
        this.SubMove(0, this.Ya);
        this.Y > this.World.Level.Height * 16 + 16 && this.Die();
        if (this.X < 0) this.Xa = this.X = 0;
        this.X > this.World.Level.ExitX * 16 && this.Win();
        if (this.X > this.World.Level.Width * 16) (this.X = this.World.Level.Width * 16), (this.Xa = 0);
        this.Ya *= 0.85;
        this.Xa *= this.OnGround ? this.GroundInertia : this.AirInertia;
        this.OnGround || (this.Ya += 3);
        if (this.Carried !== null && ((this.Carried.X *= this.X + this.Facing * 8), (this.Carried.Y *= this.Y - 2), !Engine.KeyboardInput.IsKeyDown(Engine.Keys.A))) this.Carried.Release(this), (this.Carried = null);
    }
};
Mario.Character.prototype.CalcPic = function () {
    var a = 0,
        b = 0;
    this.Large
        ? ((a = ((this.RunTime / 20) | 0) % 4),
          a === 3 && (a = 1),
          this.Carried === null && Math.abs(this.Xa) > 10 && (a += 3),
          this.Carried !== null && (a += 10),
          this.OnGround || (a = this.Carried !== null ? 12 : Math.abs(this.Xa) > 10 ? 7 : 6))
        : ((a = ((this.RunTime / 20) | 0) % 2), this.Carried === null && Math.abs(this.Xa) > 10 && (a += 2), this.Carried !== null && (a += 8), this.OnGround || (a = this.Carried !== null ? 9 : Math.abs(this.Xa) > 10 ? 5 : 4));
    if (this.OnGround && ((this.Facing === -1 && this.Xa > 0) || (this.Facing === 1 && this.Xa < 0))) {
        if (this.Xa > 1 || this.Xa < -1) a = this.Large ? 9 : 7;
        if (this.Xa > 3 || this.Xa < -3)
            for (b = 0; b < 3; b++) this.World.AddSprite(new Mario.Sparkle(this.World, (this.X + Math.random() * 8 - 4) | 0, (this.Y + Math.random() * 4) | 0, Math.random() * 2 - 1, Math.random() * -1, 0, 1, 5));
    }
    this.Large ? (this.Ducking && (a = 14), (this.Height = this.Ducking ? 12 : 24)) : (this.Height = 12);
    this.XPic = a;
};
Mario.Character.prototype.SubMove = function (a, b) {
    for (var c = !1; a > 8; ) {
        if (!this.SubMove(8, 0)) return !1;
        a -= 8;
    }
    for (; a < -8; ) {
        if (!this.SubMove(-8, 0)) return !1;
        a += 8;
    }
    for (; b > 8; ) {
        if (!this.SubMove(0, 8)) return !1;
        b -= 8;
    }
    for (; b < -8; ) {
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
    if (a > 0)
        (this.Sliding = !0),
            this.IsBlocking(this.X + a + this.Width, this.Y + b - this.Height, a, b) ? (c = !0) : (this.Sliding = !1),
            this.IsBlocking(this.X + a + this.Width, this.Y + b - ((this.Height / 2) | 0), a, b) ? (c = !0) : (this.Sliding = !1),
            this.IsBlocking(this.X + a + this.Width, this.Y + b, a, b) ? (c = !0) : (this.Sliding = !1);
    if (a < 0)
        (this.Sliding = !0),
            this.IsBlocking(this.X + a - this.Width, this.Y + b - this.Height, a, b) ? (c = !0) : (this.Sliding = !1),
            this.IsBlocking(this.X + a - this.Width, this.Y + b - ((this.Height / 2) | 0), a, b) ? (c = !0) : (this.Sliding = !1),
            this.IsBlocking(this.X + a - this.Width, this.Y + b, a, b) ? (c = !0) : (this.Sliding = !1);
    if (c) {
        if (a < 0) (this.X = (((this.X - this.Width) / 16) | 0) * 16 + this.Width), (this.Xa = 0);
        if (a > 0) (this.X = (((this.X + this.Width) / 16 + 1) | 0) * 16 - this.Width - 1), (this.Xa = 0);
        if (b < 0) (this.Y = (((this.Y - this.Height) / 16) | 0) * 16 + this.Height), (this.Ya = this.JumpTime = 0);
        if (b > 0) (this.Y = (((this.Y - 1) / 16 + 1) | 0) * 16 - 1), (this.OnGround = !0);
        return !1;
    } else return (this.X += a), (this.Y += b), !0;
};
Mario.Character.prototype.IsBlocking = function (a, b, c, e) {
    var d = !1,
        f = (d = d = 0),
        a = (a / 16) | 0,
        b = (b / 16) | 0;
    if (a === ((this.X / 16) | 0) && b === ((this.Y / 16) | 0)) return !1;
    d = this.World.Level.GetBlock(a, b);
    if ((Mario.Tile.Behaviors[d & 255] & Mario.Tile.PickUpable) > 0) {
        this.GetCoin();
        Engine.Resources.PlaySound("coin");
        this.World.Level.SetBlock(a, b, 0);
        for (d = 0; d < 2; d++) for (f = 0; f < 2; f++) this.World.AddSprite(new Mario.Sparkle(this.World, a * 16 + d * 8 + ((Math.random() * 8) | 0), b * 16 + f * 8 + ((Math.random() * 8) | 0), 0, 0, 0, 2, 5));
    }
    (d = this.World.Level.IsBlocking(a, b, c, e)) && e < 0 && this.World.Bump(a, b, this.Large);
    return d;
};
Mario.Character.prototype.Stomp = function (a) {
    var b = 0;
    if (!(this.DeathTime > 0 || this.World.Paused))
        if (((b = a.Y - a.Height / 2), this.SubMove(0, b - this.Y), a instanceof Mario.Enemy || a instanceof Mario.BulletBill))
            Engine.Resources.PlaySound("kick"), (this.XJumpSpeed = 0), (this.YJumpSpeed = -1.9), (this.JumpTime = 8), (this.Ya = this.JumpTime * this.YJumpSpeed), (this.Sliding = this.OnGround = !1), (this.InvulnerableTime = 1);
        else if (a instanceof Mario.Shell)
            Engine.KeyboardInput.IsKeyDown(Engine.Keys.A) && a.Facing === 0
                ? ((this.Carried = a), (a.Carried = !0))
                : (Engine.Resources.PlaySound("kick"), (this.XJumpSpeed = 0), (this.YJumpSpeed = -1.9), (this.JumpTime = 8), (this.Ya = this.JumpTime * this.YJumpSpeed), (this.Sliding = this.OnGround = !1), (this.InvulnerableTime = 1));
};
Mario.Character.prototype.GetHurt = function () {
    if (!(this.DeathTime > 0 || this.World.Paused) && !(this.InvulnerableTime > 0))
        this.Large ? ((this.World.Paused = !0), (this.PowerUpTime = -18), Engine.Resources.PlaySound("powerdown"), this.Fire ? this.SetLarge(!0, !1) : this.SetLarge(!1, !1), (this.InvulnerableTime = 32)) : this.Die();
};
Mario.Character.prototype.Win = function () {
    this.XDeathPos = this.X | 0;
    this.YDeathPos = this.Y | 0;
    this.World.Paused = !0;
    this.WinTime = 1;
    Engine.Resources.PlaySound("exit");
};
Mario.Character.prototype.Die = function () {
    this.XDeathPos = this.X | 0;
    this.YDeathPos = this.Y | 0;
    this.World.Paused = !0;
    this.DeathTime = 1;
    Engine.Resources.PlaySound("death");
    this.SetLarge(!1, !1);
};
Mario.Character.prototype.GetFlower = function () {
    if (!(this.DeathTime > 0 && this.World.Paused)) this.Fire ? (this.GetCoin(), Engine.Resources.PlaySound("coin")) : ((this.World.Paused = !0), (this.PowerUpTime = 18), Engine.Resources.PlaySound("powerup"), this.SetLarge(!0, !0));
};
Mario.Character.prototype.GetMushroom = function () {
    if (!(this.DeathTime > 0 && this.World.Paused)) this.Large ? (this.GetCoin(), Engine.Resources.PlaySound("coin")) : ((this.World.Paused = !0), (this.PowerUpTime = 18), Engine.Resources.PlaySound("powerup"), this.SetLarge(!0, !1));
};
Mario.Character.prototype.Kick = function (a) {
    if (!(this.DeathTime > 0 && this.World.Paused)) Engine.KeyboardInput.IsKeyDown(Engine.Keys.A) ? ((this.Carried = a), (a.Carried = !0)) : (Engine.Resources.PlaySound("kick"), (this.InvulnerableTime = 1));
};
Mario.Character.prototype.Get1Up = function () {
    Engine.Resources.PlaySound("1up");
    this.Lives++;
    if (this.Lives === 99) this.Lives = 99;
};
Mario.Character.prototype.GetCoin = function () {
    this.Coins++;
    if (this.Coins === 100) (this.Coins = 0), this.Get1Up();
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

Mario.LevelGenerator = function (a, b) {
    this.Width = a;
    this.Height = b;
    this.Odds = [];
    this.Type = this.Difficulty = this.TotalOdds = 0;
};
Mario.LevelGenerator.prototype = {
    CreateLevel: function (a, b) {
        var c = 0,
            e = 0,
            d = (c = 0),
            f = 0,
            g = 0,
            h = 0,
            i = null;
        this.Type = a;
        this.Difficulty = b;
        this.Odds[Mario.Odds.Straight] = 20;
        this.Odds[Mario.Odds.HillStraight] = 10;
        this.Odds[Mario.Odds.Tubes] = 2 + b;
        this.Odds[Mario.Odds.Jump] = 2 * b;
        this.Odds[Mario.Odds.Cannon] = -10 + 5 * b;
        this.Type !== Mario.LevelType.Overground && (this.Odds[Mario.Odds.HillStraight] = 0);
        for (c = 0; c < this.Odds.length; c++) this.Odds[c] < 0 && (this.Odds[c] = 0), (this.TotalOdds += this.Odds[c]), (this.Odds[c] = this.TotalOdds - this.Odds[c]);
        i = new Mario.Level(this.Width, this.Height);
        for (e += this.BuildStraight(i, 0, i.Width, !0); e < i.Width - 64; ) e += this.BuildZone(i, e, i.Width - e);
        c = (this.Height - 1 - Math.random() * 4) | 0;
        i.ExitX = e + 8;
        i.ExitY = c;
        for (d = e; d < i.Width; d++) for (f = 0; f < this.Height; f++) f >= c && i.SetBlock(d, f, 145);
        if (a === Mario.LevelType.Castle || a === Mario.LevelType.Underground)
            for (d = 0; d < i.Width; d++) {
                h-- <= 0 && d > 4 && ((g = (Math.random() * 4) | 0), (h = ((Math.random() * 4) | 0) + 4));
                for (f = 0; f < i.Height; f++) ((d > 4 && f <= g) || d < 1) && i.SetBlock(d, f, 145);
            }
        this.FixWalls(i);
        return i;
    },
    BuildZone: function (a, b, c) {
        for (var e = (Math.random() * this.TotalOdds) | 0, d = 0, f = 0, f = 0; f < this.Odds.length; f++) this.Odds[f] <= e && (d = f);
        switch (d) {
            case Mario.Odds.Straight:
                return this.BuildStraight(a, b, c, !1);
            case Mario.Odds.HillStraight:
                return this.BuildHillStraight(a, b, c);
            case Mario.Odds.Tubes:
                return this.BuildTubes(a, b, c);
            case Mario.Odds.Jump:
                return this.BuildJump(a, b, c);
            case Mario.Odds.Cannons:
                return this.BuildCannons(a, b, c);
        }
        return 0;
    },
    BuildJump: function (a, b) {
        for (var c = ((Math.random() * 4) | 0) + 2, e = c * 2 + (((Math.random() * 2) | 0) + 2), d = 0, f = 0, g = ((Math.random() * 3) | 0) === 0, h = this.Height - 1 - ((Math.random() * 4) | 0), d = b; d < b + e; d++)
            if (d < b + c || d > b + e - c - 1) for (f = 0; f < this.Height; f++) f >= h ? a.SetBlock(d, f, 145) : g && (d < b + c ? f >= h - (d - b) + 1 && a.SetBlock(d, f, 9) : f >= h - (b + e - d) + 2 && a.SetBlock(d, f, 9));
        return e;
    },
    BuildCannons: function (a, b, c) {
        alert("cannons");
        var e = ((Math.random() * 10) | 0) + 2,
            d = (this.Height - 1 - Math.random() * 4) | 0,
            f = (b + 1 + Math.random() * 4) | 0,
            g = 0,
            h = 0,
            i = 0;
        e > c && (e = c);
        for (g = b; g < b + e; g++) {
            g > f && (f += (2 * Math.random() * 4) | 0);
            f === b + e - 1 && (f += 10);
            i = d - ((Math.random() * 4) | 0) - 1;
            for (h = 0; h < this.Height; h++) h >= d ? a.SetBlock(g, h, 145) : g === f && h >= i && (h === i ? a.SetBlock(g, h, 14) : h === i + 1 ? a.SetBlock(g, h, 30) : a.SetBlock(g, h, 46));
        }
        return e;
    },
    BuildHillStraight: function (a, b, c) {
        var e = ((Math.random() * 10) | 0) + 10,
            d = (this.Height - 1 - Math.random() * 4) | 0,
            f = 0,
            g = 0,
            h = d,
            i = !0,
            j = 0,
            k = 0,
            l = [],
            m = 0,
            n = 0;
        e > c && (e = c);
        for (f = b; f < b + e; f++) for (g = 0; g < this.Height; g++) g >= d && a.SetBlock(f, g, 145);
        for (this.AddEnemyLine(a, b + 1, b + e - 1, d - 1); i; )
            if (((h = (h - 2 - Math.random() * 3) | 0), h <= 0)) i = !1;
            else if (((j = ((Math.random() * 5) | 0) + 3), (k = ((Math.random() * (e - j - 2)) | 0) + b + 1), l[k - b] || l[k - b + j] || l[k - b - 1] || l[k - b + j + 1])) i = !1;
            else {
                l[k - b] = !0;
                l[k - b + j] = !0;
                this.AddEnemyLine(a, k, k + j, h - 1);
                ((Math.random() * 4) | 0) === 0 && (this.Decorate(a, k - 1, k + j + 1, h), (i = !1));
                for (f = k; f < k + j; f++)
                    for (g = h; g < d; g++)
                        (m = 5),
                            (n = 9),
                            f === k && (m = 4),
                            f === k + j - 1 && (m = 6),
                            g === h && (n = 8),
                            a.GetBlock(f, g) === 0 ? a.SetBlock(f, g, m + n * 16) : (a.GetBlock(f, g) === 132 && a.SetBlock(f, g, 180), a.GetBlock(f, g) === 134 && a.SetBlock(f, g, 182));
            }
        return e;
    },
    AddEnemyLine: function (a, b, c, e) {
        for (var d = 0, f = 0, d = b; d < c; d++)
            if (((Math.random() * 35) | 0) < this.Difficulty + 1)
                (f = (Math.random() * 4) | 0),
                    this.Difficulty < 1 ? (f = Mario.Enemy.Goomba) : this.Difficulty < 3 && (f = (Math.random() * 3) | 0),
                    a.SetSpriteTemplate(d, e, new Mario.SpriteTemplate(f, ((Math.random() * 35) | 0) < this.Difficulty));
    },
    BuildTubes: function (a, b, c) {
        var e = ((Math.random() * 10) | 0) + 5,
            d = (this.Height - 1 - Math.random() * 4) | 0,
            f = (b + 1 + Math.random() * 4) | 0,
            g = d - ((Math.random() * 2) | 0) - 2,
            h = 0,
            i = 0,
            j = 0;
        e > c && (e = c);
        for (h = b; h < b + e; h++) {
            h > f + 1 && ((f += 3 + ((Math.random() * 4) | 0)), (g = d - ((Math.random() * 2) | 0) - 2));
            f >= b + e - 2 && (f += 10);
            h === f && ((Math.random() * 11) | 0) < this.Difficulty + 1 && a.SetSpriteTemplate(h, g, new Mario.SpriteTemplate(Mario.Enemy.Flower, !1));
            for (i = 0; i < this.Height; i++)
                if (i >= d) a.SetBlock(h, i, 145);
                else if ((h === f || h === f + 1) && i >= g) (j = 10 + h - f), i === g ? a.SetBlock(h, i, j) : a.SetBlock(h, i, j + 16);
        }
        return e;
    },
    BuildStraight: function (a, b, c, e) {
        var d = ((Math.random() * 10) | 0) + 2,
            f = this.Height - 1 - ((Math.random() * 4) | 0),
            g = 0,
            h = 0;
        e && (d = 10 + ((Math.random() * 5) | 0));
        d > c && (d = c);
        for (g = b; g < b + d; g++) for (h = 0; h < this.Height; h++) h >= f && a.SetBlock(g, h, 145);
        e || (d > 5 && this.Decorate(a, b, b + d, f));
        return d;
    },
    Decorate: function (a, b, c, e) {
        if (!(e < 1)) {
            var d = (Math.random() * 4) | 0,
                f = (Math.random() * 4) | 0,
                g = 0;
            this.AddEnemyLine(a, b + 1, c - 1, e - 1);
            if (e - 2 > 0 && c - 1 - f - (b + 1 + d) > 1) for (g = b + 1 + d; g < c - 1 - f; g++) a.SetBlock(g, e - 2, 34);
            d = (Math.random() * 4) | 0;
            f = (Math.random() * 4) | 0;
            if (e - 4 > 0 && c - 1 - f - (b + 1 + d) > 2)
                for (g = b + 1 + d; g < c - 1 - f; g++)
                    g !== b + 1 && g !== c - 2 && ((Math.random() * 3) | 0) === 0
                        ? ((Math.random() * 4) | 0) === 0
                            ? a.SetBlock(g, e - 4, 22)
                            : a.SetBlock(g, e - 4, 21)
                        : ((Math.random() * 4) | 0) === 0
                        ? ((Math.random() * 4) | 0) === 0
                            ? a.SetBlock(g, e - 4, 18)
                            : a.SetBlock(g, e - 4, 17)
                        : a.SetBlock(g, e - 4, 16);
        }
    },
    FixWalls: function (a) {
        for (var b = [], c = 0, e = 0, d = 0, f = 0, g = 0, c = 0; c < this.Width + 1; c++) {
            b[c] = [];
            for (e = 0; e < this.Height + 1; e++) {
                g = 0;
                for (d = c - 1; d < c + 1; d++) for (f = e - 1; f < e + 1; f++) a.GetBlockCapped(d, f) === 145 && g++;
                b[c][e] = g === 4;
            }
        }
        this.Blockify(a, b, this.Width + 1, this.Height + 1);
    },
    Blockify: function (a, b, c, e) {
        for (var d = 0, f = [], g = 0, h = 0, i = 0, j = 0, k = (g = 0), l = 0, g = 0; g < 2; g++) f[g] = [];
        this.Type === Mario.LevelType.Castle ? (d = 8) : this.Type === Mario.LevelType.Underground && (d = 12);
        for (g = 0; g < c; g++)
            for (h = 0; h < e; h++) {
                for (i = g; i <= g + 1; i++) for (j = h; j <= h + 1; j++) (k = i), (l = j), k < 0 && (k = 0), l < 0 && (l = 0), k > c - 1 && (k = c - 1), l > e - 1 && (l = e - 1), (f[i - g][j - h] = b[k][l]);
                f[0][0] === f[1][0] && f[0][1] === f[1][1]
                    ? f[0][0] === f[0][1]
                        ? f[0][0] && a.SetBlock(g, h, 145 + d)
                        : f[0][0]
                        ? a.SetBlock(g, h, 161 + d)
                        : a.SetBlock(g, h, 129 + d)
                    : f[0][0] === f[0][1] && f[1][0] === f[1][1]
                    ? f[0][0]
                        ? a.SetBlock(g, h, 146 + d)
                        : a.SetBlock(g, h, 144 + d)
                    : f[0][0] === f[1][1] && f[0][1] === f[1][0]
                    ? a.SetBlock(g, h, 145 + d)
                    : f[0][0] === f[1][0]
                    ? f[0][0]
                        ? f[0][1]
                            ? a.SetBlock(g, h, 163 + d)
                            : a.SetBlock(g, h, 179 + d)
                        : f[0][1]
                        ? a.SetBlock(g, h, 130 + d)
                        : a.SetBlock(g, h, 128 + d)
                    : f[0][1] === f[1][1]
                    ? f[0][1]
                        ? f[0][0]
                            ? a.SetBlock(g, h, 147 + d)
                            : a.SetBlock(g, h, 131 + d)
                        : f[0][0]
                        ? a.SetBlock(g, h, 162 + d)
                        : a.SetBlock(g, h, 160 + d)
                    : a.SetBlock(g, h, 1 + 16 * d);
            }
    },
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
    for (var c = !1; a > 8; ) {
        if (!this.SubMove(8, 0)) return !1;
        a -= 8;
    }
    for (; a < -8; ) {
        if (!this.SubMove(-8, 0)) return !1;
        a += 8;
    }
    for (; b > 8; ) {
        if (!this.SubMove(0, 8)) return !1;
        b -= 8;
    }
    for (; b < -8; ) {
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
    for (var c = !1; a > 8; ) {
        if (!this.SubMove(8, 0)) return !1;
        a -= 8;
    }
    for (; a < -8; ) {
        if (!this.SubMove(-8, 0)) return !1;
        a += 8;
    }
    for (; b > 8; ) {
        if (!this.SubMove(0, 8)) return !1;
        b -= 8;
    }
    for (; b < -8; ) {
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
    for (var c = !1; a > 8; ) {
        if (!this.SubMove(8, 0)) return !1;
        a -= 8;
    }
    for (; a < -8; ) {
        if (!this.SubMove(-8, 0)) return !1;
        a += 8;
    }
    for (; b > 8; ) {
        if (!this.SubMove(0, 8)) return !1;
        b -= 8;
    }
    for (; b < -8; ) {
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
    for (var c = !1; a > 8; ) {
        if (!this.SubMove(8, 0)) return !1;
        a -= 8;
    }
    for (; a < -8; ) {
        if (!this.SubMove(-8, 0)) return !1;
        a += 8;
    }
    for (; b > 8; ) {
        if (!this.SubMove(0, 8)) return !1;
        b -= 8;
    }
    for (; b < -8; ) {
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

Mario.TitleState = function () {
    this.font = this.bounce = this.logoY = this.camera = this.drawManager = null;
};
Mario.TitleState.prototype = new Engine.GameState();
Mario.TitleState.prototype.Enter = function () {
    this.drawManager = new Engine.DrawableManager();
    this.camera = new Engine.Camera();
    var a = new Mario.BackgroundGenerator(2048, 15, !0, Mario.LevelType.Overground),
        b = new Mario.BackgroundRenderer(a.CreateLevel(), 320, 240, 2);
    a.SetValues(2048, 15, !1, Mario.LevelType.Overground);
    a = new Mario.BackgroundRenderer(a.CreateLevel(), 320, 240, 1);
    this.title = new Engine.Sprite();
    this.title.Image = Engine.Resources.Images.title;
    this.title.X = 0;
    this.title.Y = 120;
    this.logo = new Engine.Sprite();
    this.logo.Image = Engine.Resources.Images.logo;
    this.logo.X = 0;
    this.logo.Y = 0;
    this.font = Mario.SpriteCuts.CreateRedFont();
    this.font.Strings[0] = { String: "Press S to Start", X: 96, Y: 120 };
    this.logoY = 20;
    this.drawManager.Add(b);
    this.drawManager.Add(a);
    this.bounce = 0;
    Mario.GlobalMapState = new Mario.MapState();
    Mario.MarioCharacter = new Mario.Character();
    Mario.MarioCharacter.Image = Engine.Resources.Images.smallMario;
};
Mario.TitleState.prototype.Exit = function () {
    this.drawManager.Clear();
    delete this.drawManager;
    delete this.camera;
    delete this.font;
};
Mario.TitleState.prototype.Update = function (a) {
    this.bounce += a * 2;
    this.logoY = 20 + Math.sin(this.bounce) * 10;
    this.camera.X += a * 25;
    this.drawManager.Update(a);
};
Mario.TitleState.prototype.Draw = function (a) {
    this.drawManager.Draw(a, this.camera);
    a.drawImage(Engine.Resources.Images.title, 0, 120);
    a.drawImage(Engine.Resources.Images.logo, 0, this.logoY);
    this.font.Draw(a, this.Camera);
};
Mario.TitleState.prototype.CheckForChange = function (a) {
    Engine.KeyboardInput.IsKeyDown(Engine.Keys.S) && a.ChangeState(new Mario.PredefinedLevelState(0, 0)); //Mario.GlobalMapState);
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
    if (this.ImagesLoaded) (Mario.GlobalMapState = new Mario.MapState()), a.ChangeState(new Mario.TitleState());
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
    this.wasKeyDown && !Engine.KeyboardInput.IsKeyDown(Engine.Keys.S) && a.ChangeState(new Mario.TitleState());
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
    this.waitTime <= 0 && this.wasKeyDown && !Engine.KeyboardInput.IsKeyDown(Engine.Keys.S) && a.ChangeState(new Mario.TitleState());
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
        for (this.YFarthestCap = this.XFarthestCap = this.Farthest = this.LevelId = this.MoveTime = 0; !a; ) a = this.GenerateLevel();
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
    for (a = !0; a; ) a = this.FindConnection(21, 16);
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
        for (; a > c; ) (this.Data[a][b] = 0), (this.Level[a--][b] = Mario.MapTile.Road);
        for (; a < c; ) (this.Data[a][b] = 0), (this.Level[a++][b] = Mario.MapTile.Road);
    }
    for (; b > e; ) (this.Data[a][b] = 0), (this.Level[a][b--] = Mario.MapTile.Road);
    for (; b < e; ) (this.Data[a][b] = 0), (this.Level[a][b++] = Mario.MapTile.Road);
    if (!d) {
        for (; a > c; ) (this.Data[a][b] = 0), (this.Level[a--][b] = Mario.MapTile.Road);
        for (; a < c; ) (this.Data[a][b] = 0), (this.Level[a++][b] = Mario.MapTile.Road);
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
    for (var d = 0; ; ) {
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
    this.EnterLevel && a.ChangeState(new Mario.LevelState(this.LevelDifficulty, this.LevelType));
};

/** LEVEL STATE **/

Mario.LevelState = function (a, b) {
    this.LevelDifficulty = a;
    this.LevelType = b;
    this.Layer = this.Level = null;
    this.BgLayer = [];
    this.Paused = !1;
    this.Font = this.FontShadow = this.FireballsToCheck = this.ShellsToCheck = this.Camera = this.SpritesToRemove = this.SpritesToAdd = this.Sprites = null;
    this.Delta = this.Tick = this.FireballsOnScreen = this.StartTime = this.TimeLeft = 0;
    this.GotoLoseState = this.GotoMapState = !1;
};
Mario.LevelState.prototype = new Engine.GameState();
Mario.LevelState.prototype.Enter = function () {
    var a = 0,
        b = 0,
        c = 0,
        e = 0,
        c = null;
    this.Level = new Mario.LevelGenerator(320, 15).CreateLevel(this.LevelType, this.LevelDifficulty);
    this.Paused = !1;
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
    for (a = 0; a < 2; a++)
        (b = 4 >> a),
            (c = (((this.Level.Width * 16 - 320) / b) | 0) + 320),
            (e = (((this.Level.Height * 16 - 240) / b) | 0) + 240),
            (c = new Mario.BackgroundGenerator(c / 32 + 1, e / 32 + 1, a === 0, this.LevelType)),
            (this.BgLayer[a] = new Mario.BackgroundRenderer(c.CreateLevel(), 320, 240, b));
    Mario.MarioCharacter.Initialize(this);
    this.Sprites.Add(Mario.MarioCharacter);
    this.StartTime = 1;
    this.TimeLeft = 200;
    this.GotoLoseState = this.GotoMapState = !1;
};
Mario.LevelState.prototype.Exit = function () {
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
Mario.LevelState.prototype.CheckShellCollide = function (a) {
    this.ShellsToCheck.push(a);
};
Mario.LevelState.prototype.CheckFireballCollide = function (a) {
    this.FireballsToCheck.push(a);
};
Mario.LevelState.prototype.Update = function (a) {
    var b = 0,
        c = 0,
        e = (c = 0),
        d = null,
        b = !1,
        d = (e = c = 0),
        f = null,
        f = 0;
    this.Delta = a;
    this.TimeLeft -= a;
    (this.TimeLeft | 0) === 0 && Mario.MarioCharacter.Die();
    this.StartTime > 0 && this.StartTime++;
    this.Camera.X = Mario.MarioCharacter.X - 160;
    if (this.Camera.X < 0) this.Camera.X = 0;
    if (this.Camera.X > this.Level.Width * 16 - 320) this.Camera.X = this.Level.Width * 16 - 320;
    for (b = this.FireballsOnScreen = 0; b < this.Sprites.Objects.length; b++)
        (d = this.Sprites.Objects[b]),
            d !== Mario.MarioCharacter && ((c = d.X - this.Camera.X), (e = d.Y - this.Camera.Y), c < -64 || c > 384 || e < -64 || e > 304 ? this.Sprites.RemoveAt(b) : d instanceof Mario.Fireball && this.FireballsOnScreen++);
    if (this.Paused) for (b = 0; b < this.Sprites.Objects.length; b++) this.Sprites.Objects[b] === Mario.MarioCharacter ? this.Sprites.Objects[b].Update(a) : this.Sprites.Objects[b].UpdateNoMove(a);
    else {
        this.Layer.Update(a);
        this.Level.Update();
        b = !1;
        this.Tick++;
        for (c = ((this.Camera.X / 16) | 0) - 1; c <= (((this.Camera.X + this.Layer.Width) / 16) | 0) + 1; c++)
            for (e = ((this.Camera.Y / 16) | 0) - 1; e <= (((this.Camera.Y + this.Layer.Height) / 16) | 0) + 1; e++) {
                d = 0;
                c * 16 + 8 > Mario.MarioCharacter.X + 16 && (d = -1);
                c * 16 + 8 < Mario.MarioCharacter.X - 16 && (d = 1);
                f = this.Level.GetSpriteTemplate(c, e);
                if (f !== null) f.LastVisibleTick !== this.Tick - 1 && (f.Sprite === null || !this.Sprites.Contains(f.Sprite)) && f.Spawn(this, c, e, d), (f.LastVisibleTick = this.Tick);
                if (d !== 0 && ((f = this.Level.GetBlock(c, e)), (Mario.Tile.Behaviors[f & 255] & Mario.Tile.Animated) > 0 && (((f % 16) / 4) | 0) === 3 && ((f / 16) | 0) === 0 && (this.Tick - c * 2) % 100 === 0)) {
                    for (b = 0; b < 8; b++) this.AddSprite(new Mario.Sparkle(this, c * 16 + 8, e * 16 + ((Math.random() * 16) | 0), Math.random() * d, 0, 0, 1, 5));
                    this.AddSprite(new Mario.BulletBill(this, c * 16 + 8 + d * 8, e * 16 + 15, d));
                    b = !0;
                }
            }
        b && Engine.Resources.PlaySound("cannon");
        for (b = 0; b < this.Sprites.Objects.length; b++) this.Sprites.Objects[b].Update(a);
        for (b = 0; b < this.Sprites.Objects.length; b++) this.Sprites.Objects[b].CollideCheck();
        for (b = 0; b < this.ShellsToCheck.length; b++)
            for (c = 0; c < this.Sprites.Objects.length; c++)
                if (
                    this.Sprites.Objects[c] !== this.ShellsToCheck[b] &&
                    !this.ShellsToCheck[b].Dead &&
                    this.Sprites.Objects[c].ShellCollideCheck(this.ShellsToCheck[b]) &&
                    Mario.MarioCharacter.Carried === this.ShellsToCheck[b] &&
                    !this.ShellsToCheck[b].Dead
                )
                    (Mario.MarioCharacter.Carried = null), this.ShellsToCheck[b].Die();
        for (b = this.ShellsToCheck.length = 0; b < this.FireballsToCheck.length; b++)
            for (c = 0; c < this.Sprites.Objects.length; c++)
                this.Sprites.Objects[c] !== this.FireballsToCheck[b] && !this.FireballsToCheck[b].Dead && this.Sprites.Objects[c].FireballCollideCheck(this.FireballsToCheck[b]) && this.FireballsToCheck[b].Die();
        this.FireballsToCheck.length = 0;
    }
    this.Sprites.AddRange(this.SpritesToAdd);
    this.Sprites.RemoveList(this.SpritesToRemove);
    this.SpritesToAdd.length = 0;
    this.SpritesToRemove.length = 0;
    this.Camera.X = Mario.MarioCharacter.XOld + (Mario.MarioCharacter.X - Mario.MarioCharacter.XOld) * a - 160;
    this.Camera.Y = Mario.MarioCharacter.YOld + (Mario.MarioCharacter.Y - Mario.MarioCharacter.YOld) * a - 120;
};
Mario.LevelState.prototype.Draw = function (a) {
    var b = 0,
        b = (b = 0);
    if (this.Camera.X < 0) this.Camera.X = 0;
    if (this.Camera.Y < 0) this.Camera.Y = 0;
    if (this.Camera.X > this.Level.Width * 16 - 320) this.Camera.X = this.Level.Width * 16 - 320;
    if (this.Camera.Y > this.Level.Height * 16 - 240) this.Camera.Y = this.Level.Height * 16 - 240;
    for (b = 0; b < 2; b++) this.BgLayer[b].Draw(a, this.Camera);
    a.save();
    a.translate(-this.Camera.X, -this.Camera.Y);
    for (b = 0; b < this.Sprites.Objects.length; b++) this.Sprites.Objects[b].Layer === 0 && this.Sprites.Objects[b].Draw(a, this.Camera);
    a.restore();
    this.Layer.Draw(a, this.Camera);
    this.Layer.DrawExit0(a, this.Camera, Mario.MarioCharacter.WinTime === 0);
    a.save();
    a.translate(-this.Camera.X, -this.Camera.Y);
    for (b = 0; b < this.Sprites.Objects.length; b++) this.Sprites.Objects[b].Layer === 1 && this.Sprites.Objects[b].Draw(a, this.Camera);
    a.restore();
    this.Layer.DrawExit1(a, this.Camera);
    this.DrawStringShadow(a, "MARIO " + Mario.MarioCharacter.Lives, 0, 0);
    this.DrawStringShadow(a, "00000000", 0, 1);
    this.DrawStringShadow(a, "COIN", 14, 0);
    this.DrawStringShadow(a, " " + Mario.MarioCharacter.Coins, 14, 1);
    this.DrawStringShadow(a, "WORLD", 24, 0);
    this.DrawStringShadow(a, " " + Mario.MarioCharacter.LevelString, 24, 1);
    this.DrawStringShadow(a, "TIME", 34, 0);
    b = this.TimeLeft | 0;
    b < 0 && (b = 0);
    this.DrawStringShadow(a, " " + b, 34, 1);
    this.StartTime > 0 && ((b = this.StartTime + this.Delta - 2), this.RenderBlackout(a, 160, 120, (b * b * 0.6) | 0));
    if (Mario.MarioCharacter.WinTime > 0) {
        b = Mario.MarioCharacter.WinTime + this.Delta;
        b = b * b * 0.2;
        if (b > 900) Mario.GlobalMapState.LevelWon(), (this.GotoMapState = !0);
        this.RenderBlackout(a, (Mario.MarioCharacter.XDeathPos - this.Camera.X) | 0, (Mario.MarioCharacter.YDeathPos - this.Camera.Y) | 0, (320 - b) | 0);
    }
    if (Mario.MarioCharacter.DeathTime > 0) {
        b = Mario.MarioCharacter.DeathTime + this.Delta;
        b = b * b * 0.1;
        if (b > 900 && (Mario.MarioCharacter.Lives--, (this.GotoMapState = !0), Mario.MarioCharacter.Lives <= 0)) this.GotoLoseState = !0;
        this.RenderBlackout(a, (Mario.MarioCharacter.XDeathPos - this.Camera.X) | 0, (Mario.MarioCharacter.YDeathPos - this.Camera.Y) | 0, (320 - b) | 0);
    }
};
Mario.LevelState.prototype.DrawStringShadow = function (a, b, c, e) {
    this.Font.Strings[0] = { String: b, X: c * 8 + 4, Y: e * 8 + 4 };
    this.FontShadow.Strings[0] = { String: b, X: c * 8 + 5, Y: e * 8 + 5 };
    this.FontShadow.Draw(a, this.Camera);
    this.Font.Draw(a, this.Camera);
};
Mario.LevelState.prototype.RenderBlackout = function (a, b, c, e) {
    if (!(e > 320)) {
        for (var d = [], f = [], g = 0, g = 0; g < 16; g++) (d[g] = (b + Math.cos((g * Math.PI) / 15) * e) | 0), (f[g] = (c + Math.sin((g * Math.PI) / 15) * e) | 0);
        d[16] = 0;
        f[16] = c;
        d[17] = 0;
        f[17] = 240;
        d[18] = 320;
        f[18] = 240;
        d[19] = 320;
        f[19] = c;
        a.fillStyle = "#000";
        a.beginPath();
        a.moveTo(d[19], f[19]);
        for (g = 18; g >= 0; g--) a.lineTo(d[g], f[g]);
        a.closePath();
        a.fill();
        for (g = 0; g < 16; g++) (d[g] = (b - Math.cos((g * Math.PI) / 15) * e) | 0), (f[g] = (c - Math.sin((g * Math.PI) / 15) * e) | 0);
        f[15] += 5;
        d[16] = 320;
        f[16] = c;
        d[17] = 320;
        f[17] = 0;
        d[18] = 0;
        f[18] = 0;
        d[19] = 0;
        f[19] = c;
        a.fillStyle = "#000";
        a.beginPath();
        a.moveTo(d[0], f[0]);
        for (g = 0; g <= d.length - 1; g++) a.lineTo(d[g], f[g]);
        a.closePath();
        a.fill();
    }
};
Mario.LevelState.prototype.AddSprite = function (a) {
    this.Sprites.Add(a);
};
Mario.LevelState.prototype.RemoveSprite = function (a) {
    this.Sprites.Remove(a);
};
Mario.LevelState.prototype.Bump = function (a, b, c) {
    var e = this.Level.GetBlock(a, b),
        d = 0,
        f = 0;
    (Mario.Tile.Behaviors[e & 255] & Mario.Tile.Bumpable) > 0 &&
        (this.BumpInto(a, b - 1),
        this.Level.SetBlock(a, b, 4),
        this.Level.SetBlockData(a, b, 4),
        (Mario.Tile.Behaviors[e & 255] & Mario.Tile.Special) > 0
            ? (Engine.Resources.PlaySound("sprout"), Mario.MarioCharacter.Large ? this.AddSprite(new Mario.FireFlower(this, a * 16 + 8, b * 16 + 8)) : this.AddSprite(new Mario.Mushroom(this, a * 16 + 8, b * 16 + 8)))
            : (Mario.MarioCharacter.GetCoin(), Engine.Resources.PlaySound("coin"), this.AddSprite(new Mario.CoinAnim(this, a, b))));
    if ((Mario.Tile.Behaviors[e & 255] & Mario.Tile.Breakable) > 0 && (this.BumpInto(a, b - 1), c)) {
        Engine.Resources.PlaySound("breakblock");
        this.Level.SetBlock(a, b, 0);
        for (d = 0; d < 2; d++) for (f = 0; f < 2; f++) this.AddSprite(new Mario.Particle(this, a * 16 + d * 8 + 4, b * 16 + f * 8 + 4, (d * 2 - 1) * 4, (f * 2 - 1) * 4 - 8));
    }
};
Mario.LevelState.prototype.BumpInto = function (a, b) {
    var c = this.Level.GetBlock(a, b),
        e = 0;
    (Mario.Tile.Behaviors[c & 255] & Mario.Tile.PickUpable) > 0 && (Mario.MarioCharacter.GetCoin(), Engine.Resources.PlaySound("coin"), this.Level.SetBlock(a, b, 0), this.AddSprite(new Mario.CoinAnim(a, b + 1)));
    for (e = 0; e < this.Sprites.Objects.length; e++) this.Sprites.Objects[e].BumpCheck(a, b);
};
Mario.LevelState.prototype.CheckForChange = function (a) {
    this.GotoLoseState ? a.ChangeState(new Mario.LoseState()) : this.GotoMapState && a.ChangeState(Mario.GlobalMapState);
};

/** PREDEFINED LEVEL STATE **/

Mario.PredefinedLevelState = function (difficulty, type) {
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

    this.GotoLoseState = false;
    this.NextLevel = false;
};

Mario.PredefinedLevelState.prototype = new Engine.GameState();

Mario.PredefinedLevelState.prototype.Enter = function () {
    var levelGenerator = new Mario.LevelGenerator(320, 15), i = 0, scrollSpeed = 0, w = 0, h = 0, bgLevelGenerator = null;
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

    this.GotoLoseState = false;
    this.NextLevel = false;
};

Mario.PredefinedLevelState.prototype.Exit = function () {

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

Mario.PredefinedLevelState.prototype.CheckShellCollide = function (shell) {
    this.ShellsToCheck.push(shell);
};

Mario.PredefinedLevelState.prototype.CheckFireballCollide = function (fireball) {
    this.FireballsToCheck.push(fireball);
};

Mario.PredefinedLevelState.prototype.Update = function (delta) {
    var i = 0, j = 0, xd = 0, yd = 0, sprite = null, hasShotCannon = false, xCannon = 0, x = 0, y = 0,
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

Mario.PredefinedLevelState.prototype.Draw = function (context) {
    var i = 0, time = 0, t = 0;

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

    this.DrawStringShadow(context, "MARIO " + Mario.MarioCharacter.Lives, 0, 0);
    this.DrawStringShadow(context, "00000000", 0, 1);
    this.DrawStringShadow(context, "COIN", 14, 0);
    this.DrawStringShadow(context, " " + Mario.MarioCharacter.Coins, 14, 1);
    this.DrawStringShadow(context, "WORLD", 24, 0);
    this.DrawStringShadow(context, " " + Mario.MarioCharacter.LevelString, 24, 1);
    this.DrawStringShadow(context, "TIME", 34, 0);
    time = this.TimeLeft | 0;
    if (time < 0) {
        time = 0;
    }
    this.DrawStringShadow(context, " " + time, 34, 1);

    if (this.StartTime > 0) {
        t = this.StartTime + this.Delta - 2;
        t = t * t * 0.6;
        this.RenderBlackout(context, 160, 120, t | 0);
    }

    if (Mario.MarioCharacter.WinTime > 0) {
        //Mario.StopMusic();
        t = Mario.MarioCharacter.WinTime + this.Delta;
        t = t * t * 0.2;

        if (t > 900) {
            //TODO: goto map state with level won
            Mario.GlobalMapState.LevelWon();
            this.NextLevel = true;
        }

        this.RenderBlackout(context, ((Mario.MarioCharacter.XDeathPos - this.Camera.X) | 0), ((Mario.MarioCharacter.YDeathPos - this.Camera.Y) | 0), (320 - t) | 0);
    }

    if (Mario.MarioCharacter.DeathTime > 0) {
        //Mario.StopMusic();
        t = Mario.MarioCharacter.DeathTime + this.Delta;
        t = t * t * 0.1;

        if (t > 900) {
            //TODO: goto map with level lost
            Mario.MarioCharacter.Lives--;
            if (Mario.MarioCharacter.Lives <= 0) {
                this.GotoLoseState = true;
            }
        }

        this.RenderBlackout(context, ((Mario.MarioCharacter.XDeathPos - this.Camera.X) | 0), ((Mario.MarioCharacter.YDeathPos - this.Camera.Y) | 0), (320 - t) | 0);
    }
};

Mario.PredefinedLevelState.prototype.DrawStringShadow = function (context, string, x, y) {
    this.Font.Strings[0] = { String: string, X: x * 8 + 4, Y: y * 8 + 4 };
    this.FontShadow.Strings[0] = { String: string, X: x * 8 + 5, Y: y * 8 + 5 };
    this.FontShadow.Draw(context, this.Camera);
    this.Font.Draw(context, this.Camera);
};

Mario.PredefinedLevelState.prototype.RenderBlackout = function (context, x, y, radius) {
    if (radius > 320) {
        return;
    }

    var xp = [], yp = [], i = 0;
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

Mario.PredefinedLevelState.prototype.AddSprite = function (sprite) {
    this.Sprites.Add(sprite);
};

Mario.PredefinedLevelState.prototype.RemoveSprite = function (sprite) {
    this.Sprites.Remove(sprite);
};

Mario.PredefinedLevelState.prototype.Bump = function (x, y, canBreakBricks) {
    var block = this.Level.GetBlock(x, y), xx = 0, yy = 0;

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

Mario.PredefinedLevelState.prototype.BumpInto = function (x, y) {
    var block = this.Level.GetBlock(x, y), i = 0;
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

Mario.PredefinedLevelState.prototype.CheckForChange = function (context) {
    if (this.GotoLoseState) {
        context.ChangeState(new Mario.PredefinedLevelState(1, 0)); // TODO Count Number os Losses 
    }
    else if (this.NextLevel) {
        context.ChangeState(new Mario.PredefinedLevelState(1, 0)); // TODO Next Predefined Level (Store state elsewhere) 
    }
};