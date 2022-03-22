class Mario {
    static MarioCharacter;
    static GlobalMapState;
};

class SpriteCuts {
    /*********************
     * Font related
     ********************/
    static CreateBlackFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(0));
    }

    static CreateRedFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(8));
    }

    static CreateGreenFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(16));
    }

    static CreateBlueFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(24));
    }

    static CreateYellowFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(32));
    }

    static CreatePinkFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(40));
    }

    static CreateCyanFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(48));
    }

    static CreateWhiteFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(56));
    }

    static GetCharArray(y) {
        let letters = [];
        for (let i = 32; i < 127; i++) letters[i] = { X: (i - 32) * 8, Y: y };
        return letters;
    }

    /*********************
     * Spritesheet related
     ********************/
    static GetBackgroundSheet() {
        return this.GetSheet("background", 32);
    }

    static GetLevelSheet() {
        return this.GetSheet("map", 16);
    }

    static GetSheet(name, size) {
        let sheet = [];
        const width = Engine.Resources.Images[name].width / size, height = Engine.Resources.Images[name].height / size;

        for (let x = 0; x < width; x++) {
            sheet[x] = [];

            for (let y = 0; y < height; y++) sheet[x][y] = { X: x * size, Y: y * size, Width: size, Height: size };
        }
        return sheet;
    }
};

class Tile {
    static BlockUpper = 1 << 0;
    static BlockAll = 1 << 1;
    static BlockLower = 1 << 2;
    static Special = 1 << 3;
    static Bumpable = 1 << 4;
    static Breakable = 1 << 5;
    static PickUpable = 1 << 6;
    static Animated = 1 << 7;
    static Behaviors = [];

    static AddValueToArr(arr, val, quant) {
        for (let i = 0; i < quant; i++) arr.push(val);
        return arr;
    }

    static LoadBehaviors() {
        let b = [];
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 20, 1);
        b = this.AddValueToArr(b, 28, 1);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 130, 4);
        b = this.AddValueToArr(b, 2, 5);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 138, 1);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 162, 1);
        b = this.AddValueToArr(b, 146, 1);
        b = this.AddValueToArr(b, 154, 1);
        b = this.AddValueToArr(b, 162, 1);
        b = this.AddValueToArr(b, 146, 2);
        b = this.AddValueToArr(b, 154, 1);
        b = this.AddValueToArr(b, 146, 1);
        b = this.AddValueToArr(b, 2, 1);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 2, 3);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 2, 1);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 192, 4);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 0, 4);
        b = this.AddValueToArr(b, 2, 2);
        b = this.AddValueToArr(b, 0, 4);
        b = this.AddValueToArr(b, 2, 1);
        b = this.AddValueToArr(b, 0, 9);
        b = this.AddValueToArr(b, 2, 1);
        b = this.AddValueToArr(b, 0, 70);
        b = this.AddValueToArr(b, 2, 3);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 1, 3);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 2, 3);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 2, 3);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 2, 1);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 2, 1);
        b = this.AddValueToArr(b, 0, 5);
        b = this.AddValueToArr(b, 2, 3);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 2, 3);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 2, 3);
        b = this.AddValueToArr(b, 0, 5);
        b = this.AddValueToArr(b, 2, 3);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 2, 3);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 2, 3);
        b = this.AddValueToArr(b, 0, 1);
        b = this.AddValueToArr(b, 1, 3);
        b = this.AddValueToArr(b, 0, 41);
        b = this.AddValueToArr(b, 1, 3);
        b = this.AddValueToArr(b, 0, 29);

        this.Behaviors = b;
    }
};

class Odds {
    static Straight = 0;
    static HillStraight = 1;
    static Tubes = 2;
    static Jump = 3;
    static Cannons = 4;
};

class LevelType {
    static Overground = 0;
    static Underground = 1;
    static Castle = 2;
};

class Level {
    constructor(width, height) {
        this.Width = width;
        this.Height = height;
        this.ExitX = 10;
        this.ExitY = 10;

        this.Map = [];
        this.Data = [];
        this.SpriteTemplates = [];

        for (let x = 0; x < this.Width; x++) {
            this.Map[x] = [];
            this.Data[x] = [];
            this.SpriteTemplates[x] = [];

            for (let y = 0; y < this.Height; y++) {
                this.Map[x][y] = 0;
                this.Data[x][y] = 0;
                this.SpriteTemplates[x][y] = null;
            }
        }
    }

    Update() {
        for (let x = 0; x < this.Width; x++) {
            for (let y = 0; y < this.Height; y++) {
                if (this.Data[x][y] > 0) this.Data[x][y]--;
            }
        }
    }

    GetBlockCapped(x, y) {
        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x >= this.Width) x = this.Width - 1;
        if (y >= this.Height) y = this.Height - 1;
        return this.Map[x][y];
    }

    GetBlock(x, y) {
        if (x < 0) x = 0;
        if (y < 0) return 0;

        if (x >= this.Width) x = this.Width - 1;
        if (y >= this.Height) y = this.Height - 1;
        return this.Map[x][y];
    }

    SetBlock(x, y, block) {
        if (this.IsOutsideBoundaries(x, y)) return;
        this.Map[x][y] = block;
    }

    SetBlockData(x, y, data) {
        if (this.IsOutsideBoundaries(x, y)) return;
        this.Data[x][y] = data;
    }

    IsBlocking(x, y, xa, ya) {
        let block = this.GetBlock(x, y);
        let blocking = ((Tile.Behaviors[block & 0xff]) & Tile.BlockAll) > 0;
        blocking |= (ya > 0) && ((Tile.Behaviors[block & 0xff]) & Tile.BlockUpper) > 0;
        blocking |= (ya < 0) && ((Tile.Behaviors[block & 0xff]) & Tile.BlockLower) > 0;

        return blocking;
    }

    GetSpriteTemplate(x, y) {
        if (this.IsOutsideBoundaries(x, y)) return null;
        return this.SpriteTemplates[x][y];
    }

    SetSpriteTemplate(x, y, template) {
        if (this.IsOutsideBoundaries(x, y)) return;
        this.SpriteTemplates[x][y] = template;
    }

    IsOutsideBoundaries(x, y) {
        return x < 0 || y < 0 || x >= this.Width || y >= this.Height;
    }

    SetMap(map) {
        this.Map = map;
    }

    SetData(data) {
        this.Data = data;
    }

    SetExit(x, y) {
        this.ExitX = x;
        this.ExitY = y;
    }

    SetSpriteTemplates(tmp) {
        for (let i = 0; i < tmp.length; i++) {
            const tmp_line = tmp[i];
            for (let j = 0; j < tmp_line.length; j++) {
                if (tmp_line[j] === null) continue;

                this.SetSpriteTemplate(i, j, new SpriteTemplate(tmp_line[j].Type, tmp_line[j].Winged));
            }
        }
    }
};

/** BACKGROUND GENERATOR **/

class BackgroundGenerator {
    constructor(width, height, distant, type) {
        this.Width = width;
        this.Height = height;
        this.Distant = distant;
        this.Type = type;
    }

    SetValues(width, height, distant, type) {
        this.Width = width;
        this.Height = height;
        this.Distant = distant;
        this.Type = type;
    }

    CreateLevel() {
        let level = new Level(this.Width, this.Height);
        switch (this.Type) {
            case LevelType.Overground:
                this.GenerateOverground(level);
                break;
            case LevelType.Underground:
                this.GenerateUnderground(level);
                break;
            case LevelType.Castle:
                this.GenerateCastle(level);
                break;
        }
        return level;
    }

    GenerateOverground(level) {
        const range = this.Distant ? 4 : 6;
        const offs = this.Distant ? 2 : 1;
        let oh = Math.floor(Math.random() * range) + offs;
        let h = Math.floor(Math.random() * range) + offs;

        let x = 0, y = 0, h0 = 0, h1 = 0, s = 2;
        for (x = 0; x < this.Width; x++) {
            oh = h;
            while (oh === h) h = Math.floor(Math.random() * range) + offs;

            for (y = 0; y < this.Height; y++) {
                h0 = (oh < h) ? oh : h;
                h1 = (oh < h) ? h : oh;
                s = 2;
                if (y < h0 && this.Distant) {
                    s = 2;
                    if (y < 2) { s = y; }
                    level.SetBlock(x, y, 4 + s * 8);
                } else if (y < h0) {
                    level.SetBlock(x, y, 5);
                } else if (y === h0) {
                    s = h0 === h ? 0 : 1;
                    s += this.Distant ? 2 : 0;
                    level.SetBlock(x, y, s);
                } else if (y === h1) {
                    s = h0 === h ? 0 : 1;
                    s += this.Distant ? 2 : 0;
                    level.SetBlock(x, y, s + 16);
                } else {
                    s = (y > h1) ? 1 : 0;
                    if (h0 === oh) { s = 1 - s; }
                    s += this.Distant ? 2 : 0;
                    level.SetBlock(x, y, s + 8);
                }
            }
        }
    }

    GenerateUnderground(level) {
        let x = 0, y = 0, t = 0, yy = 0;
        if (this.Distant) {
            let tt = 0;
            for (x = 0; x < this.Width; x++) {
                if (Math.random() < 0.75) { tt = 1 - tt; }

                for (y = 0; y < this.Height; y++) {
                    t = tt;
                    yy = y - 2;

                    if (yy < 0 || yy > 4) {
                        yy = 2;
                        t = 0;
                    }
                    level.SetBlock(x, y, (4 + t + (3 + yy) * 8));
                }
            }
        } else {
            for (x = 0; x < this.Width; x++) {
                for (y = 0; y < this.Height; y++) {
                    t = x % 2;
                    yy = y - 1;
                    if (yy < 0 || yy > 7) {
                        yy = 7;
                        t = 0;
                    }
                    if (t === 0 && yy > 1 && yy < 5) {
                        t = -1;
                        yy = 0;
                    }

                    level.SetBlock(x, y, (6 + t + yy * 8));
                }
            }
        }
    }

    GenerateCastle(level) {
        let x = 0, y = 0, t = 0, yy = 0;
        if (this.Distant) {
            for (x = 0; x < this.Width; x++) {
                for (y = 0; y < this.Height; y++) {
                    t = x % 2;
                    yy = y - 1;

                    if (yy > 2 && yy < 5) {
                        yy = 2;
                    } else if (yy >= 5) {
                        yy -= 2;
                    }

                    if (yy < 0) {
                        t = 0;
                        yy = 5;
                    } else if (yy > 4) {
                        t = 1;
                        yy = 5;
                    } else if (t < 1 && yy === 3) {
                        t = 0;
                        yy = 3;
                    } else if (t < 1 && yy > 0 && yy < 3) {
                        t = 0;
                        yy = 2;
                    }

                    level.SetBlock(x, y, (1 + t + (yy + 4) * 8));
                }
            }
        } else {
            for (x = 0; x < this.Width; x++) {
                for (y = 0; y < this.Height; y++) {
                    t = x % 3;
                    yy = y - 1;

                    if (yy > 2 && yy < 5) {
                        yy = 2;
                    } else if (yy >= 5) {
                        yy -= 2;
                    }

                    if (yy < 0) {
                        t = 1;
                        yy = 5;
                    } else if (yy > 4) {
                        t = 2;
                        yy = 5;
                    } else if (t < 2 && yy === 4) {
                        t = 2;
                        yy = 4;
                    } else if (t < 2 && yy > 0 && yy < 4) {
                        t = 4;
                        yy = -3;
                    }

                    level.SetBlock(x, y, (1 + t + (yy + 3) * 8));
                }
            }
        }
    }
};

/** BACKGROUND RENDERER **/

class BackgroundRenderer extends Engine.Drawable {
    constructor(level, width, height, distance) {
        super();
        this.Level = level;
        this.Width = width;
        this.Distance = distance;
        this.TilesY = ((height / 32) | 0) + 1;

        this.Background = SpriteCuts.GetBackgroundSheet();
    }

    Draw = function (context, camera) {
        let xCam = camera.X / this.Distance;
        let x = 0, y = 0, b = null, frame = null;

        //the OR truncates the decimal, quicker than Math.floor
        let xTileStart = (xCam / 32) | 0;
        //the +1 makes sure the right edge tiles get drawn
        let xTileEnd = (((xCam + this.Width) / 32) | 0);

        for (x = xTileStart; x <= xTileEnd; x++) {
            for (y = 0; y < this.TilesY; y++) {
                b = this.Level.GetBlock(x, y) & 0xff;
                frame = this.Background[b % 8][(b / 8) | 0];

                //bitshifting by five is the same as multiplying by 32
                context.drawImage(Engine.Resources.Images["background"], frame.X, frame.Y, frame.Width, frame.Height, ((x << 5) - xCam) | 0, (y << 5) | 0, frame.Width, frame.Height);
            }
        }
    }
};

/** IMPROVED NOISE **/

class ImprovedNoise {
    constructor(seed) {
        this.P = [];
        this.Shuffle(seed);
    }

    Shuffle(seed) {
        let permutation = [];
        let i = 0, j = 0, tmp = 0;

        for (i = 0; i < 256; i++) permutation[i] = i;

        for (i = 0; i < 256; i++) {
            j = ((Math.random() * (256 - 1)) | 0) + i;
            tmp = permutation[i];
            permutation[i] = permutation[j];
            permutation[j] = tmp;
            this.P[i + 256] = this.P[i] = permutation[i];
        }
    }

    PerlinNoise(x, y) {
        let i = 0, n = 0, stepSize = 0;

        for (i = 0; i < 8; i++) {
            stepSize = 64 / (1 << i);
            n += this.Noise(x / stepSize, y / stepSize, 128) / (1 << i);
        }

        return n;
    }

    Noise(x, y, z) {
        let nx = (x | 0) & 255, ny = (y | 0) & 255, nz = (z | 0) & 255;
        x -= (x | 0);
        y -= (y | 0);
        z -= (z | 0);

        let u = this.Fade(x), v = this.Fade(y), w = this.Fade(z);
        let A = this.P[nx] + ny, AA = this.P[A] + nz, AB = this.P[A + 1] + nz,
            B = this.P[nx + 1] + ny, BA = this.P[B] + nz, BB = this.P[B + 1] + nz;

        return this.Lerp(w, this.Lerp(v, this.Lerp(u, this.Grad(this.P[AA], x, y, z),
            this.Grad(this.P[BA], x - 1, y, z)),
            this.Lerp(u, this.Grad(this.P[AB], x, y - 1, z),
                this.Grad(this.P[BB], x - 1, y - 1, z))),
            this.Lerp(v, this.Lerp(u, this.Grad(this.P[AA + 1], x, y, z - 1),
                this.Grad(this.P[BA + 1], x - 1, y, z - 1)),
                this.Lerp(u, this.Grad(this.P[AB + 1], x, y - 1, z - 1), this.Grad(this.P[BB + 1], x - 1, y - 1, z - 1))));
    }

    Fade(t) {
        return t * t * t * (t * (t * 6 - 15) + 10);
    }

    Lerp(t, x, y) {
        return x + t * (y - x);
    }

    Grad(hash, x, y, z) {
        let h = hash & 15, u = h < 8 ? x : y, v = h < 4 ? y : (h === 12 || h === 14) ? x : z;
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    }
};

/** NOTCH SPRITE **/

class NotchSprite extends Engine.Drawable {
    constructor(image) {
        super();
        this.XOld = 0; this.YOld = 0;
        this.X = 0; this.Y = 0;
        this.Xa = 0; this.Ya = 0;
        this.XPic = 0; this.YPic = 0;
        this.XPicO = 0; this.YPicO = 0;
        this.PicWidth = 32; this.PicHeight = 32;
        this.XFlip = false; this.YFlip = false;
        this.Visible = true;
        this.Image = image;
        this.Delta = 0;
        this.SpriteTemplate = null;
        this.Layer = 1;
    }

    Draw(context, camera) {
        let xPixel = 0, yPixel = 0;
        if (!this.Visible) return;

        xPixel = ((this.XOld + (this.X - this.XOld) * this.Delta) | 0) - this.XPicO;
        yPixel = ((this.YOld + (this.Y - this.YOld) * this.Delta) | 0) - this.YPicO;

        context.save();
        context.scale(this.XFlip ? -1 : 1, this.YFlip ? -1 : 1);
        context.translate(this.XFlip ? -320 : 0, this.YFlip ? -240 : 0);
        context.drawImage(this.Image, this.XPic * this.PicWidth, this.YPic * this.PicHeight, this.PicWidth, this.PicHeight,
            this.XFlip ? (320 - xPixel - this.PicWidth) : xPixel, this.YFlip ? (240 - yPixel - this.PicHeight) : yPixel, this.PicWidth, this.PicHeight);
        context.restore();
    }

    Update(delta) {
        this.XOld = this.X;
        this.YOld = this.Y;
        this.Move();
        this.Delta = delta;
    }

    UpdateNoMove(delta) {
        this.XOld = this.X;
        this.YOld = this.Y;
        this.Delta = 0;
    }

    Move() {
        this.X += this.Xa;
        this.Y += this.Ya;
    }

    GetX(delta) {
        return ((this.XOld + (this.X - this.XOld) * delta) | 0) - this.XPicO;
    }

    GetY(delta) {
        return ((this.YOld + (this.Y - this.YOld) * delta) | 0) - this.YPicO;
    }

    CollideCheck() { }
    BumpCheck(xTile, yTile) { };
    Release(mario) { };

    ShellCollideCheck(shell) {
        return false;
    }

    FireballCollideCheck(fireball) {
        return false;
    }
};

/** CHARACTER **/

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

        if (((Tile.Behaviors[block & 0xff]) & Tile.PickUpable) > 0) {
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

/** LEVEL RENDERER **/

class LevelRenderer extends Engine.Drawable {
    constructor(level, width, height) {
        super();
        this.Width = width;
        this.Height = height;
        this.Level = level;
        this.TilesY = ((height / 16) | 0) + 1;
        this.Delta = 0;
        this.Tick = 0;
        this.Bounce = 0;
        this.AnimTime = 0;

        this.Background = SpriteCuts.GetLevelSheet();
    }

    Update(delta) {
        this.AnimTime += delta;
        this.Tick = this.AnimTime | 0;
        this.Bounce += delta * 30;
        this.Delta = delta;
    }

    Draw(context, camera) {
        this.DrawStatic(context, camera);
        this.DrawDynamic(context, camera);
    }

    DrawStatic(context, camera) {
        let x = 0, y = 0, b = 0, frame = null, xTileStart = (camera.X / 16) | 0, xTileEnd = ((camera.X + this.Width) / 16) | 0;

        for (x = xTileStart; x < xTileEnd + 1; x++) {
            for (y = 0; y < this.TilesY; y++) {
                b = this.Level.GetBlock(x, y) & 0xff;
                if ((Tile.Behaviors[b] & Tile.Animated) === 0) {
                    frame = this.Background[b % 16][(b / 16) | 0];
                    context.drawImage(Engine.Resources.Images["map"], frame.X, frame.Y, frame.Width, frame.Height, ((x << 4) - camera.X) | 0, (y << 4) | 0, frame.Width, frame.Height);
                }
            }
        }
    }

    DrawDynamic(context, camera) {
        let x = 0, y = 0, b = 0, animTime = 0, yo = 0, frame = null;
        for (x = (camera.X / 16) | 0; x <= ((camera.X + this.Width) / 16) | 0; x++) {
            for (y = (camera.Y / 16) | 0; y <= ((camera.Y + this.Height) / 16) | 0; y++) {
                b = this.Level.GetBlock(x, y);

                if (((Tile.Behaviors[b & 0xff]) & Tile.Animated) > 0) {
                    animTime = ((this.Bounce / 3) | 0) % 4;
                    if ((((b % 16) / 4) | 0) === 0 && ((b / 16) | 0) === 1) {
                        animTime = ((this.Bounce / 2 + (x + y) / 8) | 0) % 20;
                        if (animTime > 3) animTime = 0;
                    }
                    if ((((b % 16) / 4) | 0) === 3 && ((b / 16) | 0) === 0) animTime = 2;
                    yo = 0;
                    if (x >= 0 && y >= 0 && x < this.Level.Width && y < this.Level.Height) yo = this.Level.Data[x][y];
                    if (yo > 0) yo = (Math.sin((yo - this.Delta) / 4 * Math.PI) * 8) | 0;
                    frame = this.Background[(((b % 16) / 4) | 0) * 4 + animTime][(b / 16) | 0];
                    context.drawImage(Engine.Resources.Images["map"], frame.X, frame.Y, frame.Width, frame.Height, (x << 4) - camera.X, (y << 4) - camera.Y - yo, frame.Width, frame.Height);
                }
            }
        }
    }

    DrawExit0(context, camera, bar) {
        let y = 0, yh = 0, frame = null;
        for (y = this.Level.ExitY - 8; y < this.Level.ExitY; y++) {
            frame = this.Background[12][y === this.Level.ExitY - 8 ? 4 : 5];
            context.drawImage(Engine.Resources.Images["map"], frame.X, frame.Y, frame.Width, frame.Height, (this.Level.ExitX << 4) - camera.X - 16, (y << 4) - camera.Y, frame.Width, frame.Height);
        }

        if (!bar) return;

        yh = this.Level.ExitY * 16 - (3 * 16) - (Math.sin(this.AnimTime) * 3 * 16) - 8;// - ((Math.sin(((this.Bounce + this.Delta) / 20) * 0.5 + 0.5) * 7 * 16) | 0) - 8;
        frame = this.Background[12][3];
        context.drawImage(Engine.Resources.Images["map"], frame.X, frame.Y, frame.Width, frame.Height, (this.Level.ExitX << 4) - camera.X - 16, yh - camera.Y, frame.Width, frame.Height);
        frame = this.Background[13][3];
        context.drawImage(Engine.Resources.Images["map"], frame.X, frame.Y, frame.Width, frame.Height, (this.Level.ExitX << 4) - camera.X, yh - camera.Y, frame.Width, frame.Height);
    }

    DrawExit1(context, camera) {
        let y = 0, frame = null;
        for (y = this.Level.ExitY - 8; y < this.Level.ExitY; y++) {
            frame = this.Background[13][y === this.Level.ExitY - 8 ? 4 : 5];
            context.drawImage(Engine.Resources.Images["map"], frame.X, frame.Y, frame.Width, frame.Height, (this.Level.ExitX << 4) - camera.X + 16, (y << 4) - camera.Y, frame.Width, frame.Height);
        }
    }
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
        this.Odds[Odds.Straight] = 20;
        this.Odds[Odds.HillStraight] = 10;
        this.Odds[Odds.Tubes] = 2 + difficulty;
        this.Odds[Odds.Jump] = 2 * difficulty;
        this.Odds[Odds.Cannon] = -10 + 5 * difficulty;

        if (this.Type !== LevelType.Overground) this.Odds[Odds.HillStraight] = 0;

        for (i = 0; i < this.Odds.length; i++) {
            if (this.Odds[i] < 0) this.Odds[i] = 0;

            this.TotalOdds += this.Odds[i];
            this.Odds[i] = this.TotalOdds - this.Odds[i];
        }

        level = new Level(this.Width, this.Height);
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

        if (type === LevelType.Castle || type === LevelType.Underground) {
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
            case Odds.Straight: return this.BuildStraight(level, x, maxLength, false);
            case Odds.HillStraight: return this.BuildHillStraight(level, x, maxLength);
            case Odds.Tubes: return this.BuildTubes(level, x, maxLength);
            case Odds.Jump: return this.BuildJump(level, x, maxLength);
            case Odds.Cannons: return this.BuildCannons(level, x, maxLength);
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
                if (this.Difficulty < 1) type = Enemy.Goomba;
                else if (this.Difficulty < 3) type = (Math.random() * 3) | 0;

                level.SetSpriteTemplate(x, y, new SpriteTemplate(type, ((Math.random() * 35) | 0) < this.Difficulty));
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
                level.SetSpriteTemplate(x, tubeHeight, new SpriteTemplate(Enemy.Flower, false));

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

        if (this.Type === LevelType.Castle) to = 8;
        else if (this.Type === LevelType.Underground) to = 12;

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

class PredefinedLevelGenerator {
    constructor(level) {
        this.level = level;
    }

    CreateLevel() {
        let lvl = new Level(this.level.Width, this.level.Height);
        lvl.SetExit(this.level.ExitX, this.level.ExitY);
        lvl.SetMap(this.level.Map);
        lvl.SetData(this.level.Data);
        lvl.SetSpriteTemplates(this.level.SpriteTemplates);

        return lvl;
    }
};

/** SPRITE TEMPLATE **/

class SpriteTemplate {
    constructor(type, winged) {
        this.Type = type;
        this.Winged = winged;
        this.LastVisibleTick = -1;
        this.IsDead = false;
        this.Sprite = null;
    }

    Spawn(world, x, y, dir) {
        if (this.IsDead) return;

        if (this.Type === Enemy.Flower) this.Sprite = new FlowerEnemy(world, x * 16 + 15, y * 16 + 24);
        else this.Sprite = new Enemy(world, x * 16 + 8, y * 16 + 15, dir, this.Type, this.Winged);

        this.Sprite.SpriteTemplate = this;
        world.AddSprite(this.Sprite);
    }
};

/** ENEMY **/

class Enemy extends NotchSprite {
    //Static variables
    static RedKoopa = 0;
    static GreenKoopa = 1;
    static Goomba = 2;
    static Spiky = 3;
    static Flower = 4;

    constructor(world, x, y, dir, type, winged) {
        super();
        this.GroundInertia = 0.89;
        this.AirInertia = 0.89;
        this.RunTime = 0;
        this.OnGround = false;
        this.MayJump = false;
        this.JumpTime = 0;
        this.XJumpSpeed = 0;
        this.YJumpSpeed = 0;
        this.Width = 4;
        this.Height = 24;
        this.DeadTime = 0;
        this.FlyDeath = false;
        this.WingTime = 0;
        this.NoFireballDeath = false;

        this.X = x;
        this.Y = y;
        this.World = world;

        this.Type = type;
        this.Winged = winged;

        this.Image = Engine.Resources.Images["enemies"];

        this.XPicO = 8;
        this.YPicO = 31;
        this.AvoidCliffs = this.Type === Enemy.RedKoopa;
        this.NoFireballDeath = this.Type === Enemy.Spiky;

        this.YPic = this.Type;
        if (this.YPic > 1) this.Height = 12;

        this.Facing = dir;
        if (this.Facing === 0) this.Facing = 1;

        this.PicWidth = 16;
    }

    CollideCheck() {
        if (this.DeadTime !== 0) return;

        let xMarioD = Mario.MarioCharacter.X - this.X, yMarioD = Mario.MarioCharacter.Y - this.Y;

        if (xMarioD > -this.Width * 2 - 4 && xMarioD < this.Width * 2 + 4) {
            if (yMarioD > -this.Height && yMarioD < Mario.MarioCharacter.Height) {
                if (this.Type !== Enemy.Spiky && Mario.MarioCharacter.Ya > 0 && yMarioD <= 0 && (!Mario.MarioCharacter.OnGround || !Mario.MarioCharacter.WasOnGround)) {
                    Mario.MarioCharacter.Stomp(this);
                    if (this.Winged) {
                        this.Winged = false;
                        this.Ya = 0;
                    } else {
                        this.YPicO = 31 - (32 - 8);
                        this.PicHeight = 8;

                        if (this.SpriteTemplate !== null) this.SpriteTemplate.IsDead = true;

                        this.DeadTime = 10;
                        this.Winged = false;

                        if (this.Type === Enemy.RedKoopa) this.World.AddSprite(new Shell(this.World, this.X, this.Y, 0));
                        else if (this.Type === Enemy.GreenKoopa) this.World.AddSprite(new Shell(this.World, this.X, this.Y, 1));
                    }
                }
                else Mario.MarioCharacter.GetHurt();
            }
        }
    }

    Move() {
        let i = 0, sideWaysSpeed = 1.75, runFrame = 0;

        this.WingTime++;
        if (this.DeadTime > 0) {
            this.DeadTime--;

            if (this.DeadTime === 0) {
                this.DeadTime = 1;
                for (i = 0; i < 8; i++) {
                    this.World.AddSprite(new Sparkle(this.World, ((this.X + Math.random() * 16 - 8) | 0) + 4, ((this.Y - Math.random() * 8) | 0) + 4, Math.random() * 2 - 1, Math.random() * -1, 0, 1, 5));
                }
                this.World.RemoveSprite(this);
            }

            if (this.FlyDeath) {
                this.X += this.Xa;
                this.Y += this.Ya;
                this.Ya *= 0.95;
                this.Ya += 1;
            }
            return;
        }

        if (this.Xa > 2) this.Facing = 1;

        if (this.Xa < -2) this.Facing = -1;

        this.Xa = this.Facing * sideWaysSpeed;

        this.MayJump = this.OnGround;

        this.XFlip = this.Facing === -1;

        this.RunTime += Math.abs(this.Xa) + 5;

        runFrame = ((this.RunTime / 20) | 0) % 2;

        if (!this.OnGround) runFrame = 1;

        if (!this.SubMove(this.Xa, 0)) this.Facing = -this.Facing;

        this.OnGround = false;
        this.SubMove(0, this.Ya);

        this.Ya *= this.Winged ? 0.95 : 0.85;
        if (this.OnGround) this.Xa *= this.GroundInertia;
        else this.Xa *= this.AirInertia;

        if (!this.OnGround && this.Winged) this.Ya += 0.6;
        else if (!this.OnGround) this.Ya += 2;
        else if (this.Winged) this.Ya = -10;

        if (this.Winged) runFrame = ((this.WingTime / 4) | 0) % 2;

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

        if ((xa > 0 && (this.IsBlocking(this.X + xa + this.Width, this.Y + ya - this.Height, xa, ya)
            || this.IsBlocking(this.X + xa + this.Width, this.Y + ya - ((this.Height / 2) | 0), xa, ya)
            || this.IsBlocking(this.X + xa + this.Width, this.Y + ya, xa, ya)
            || (this.AvoidCliffs && this.OnGround && !this.World.Level.IsBlocking(((this.X + this.Xa + this.Width) / 16) | 0, ((this.Y / 16) + 1) | 0, this.Xa, 1))))
            || (xa < 0 && (this.IsBlocking(this.X + xa - this.Width, this.Y + ya - this.Height, xa, ya)
                || this.IsBlocking(this.X + xa - this.Width, this.Y + ya - ((this.Height / 2) | 0), xa, ya)
                || this.IsBlocking(this.X + xa - this.Width, this.Y + ya, xa, ya)
                || (this.AvoidCliffs && this.OnGround && !this.World.Level.IsBlocking(((this.X + this.Xa - this.Width) / 16) | 0, ((this.Y / 16) + 1) | 0, this.Xa, 1)))))
            collide = true;

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
        x = (x / 16) | 0;
        y = (y / 16) | 0;

        if (x === (this.X / 16) | 0 && y === (this.Y / 16) | 0) return false;

        return this.World.Level.IsBlocking(x, y, xa, ya);
    }

    ShellCollideCheck(shell) {
        if (this.DeadTime !== 0) return false;

        let xd = shell.X - this.X, yd = shell.Y - this.Y;
        if (xd > -16 && xd < 16 && yd > -this.Height && yd < shell.Height) {
            Engine.Resources.PlaySound("kick");

            this.Xa = shell.Facing * 2;
            this.Ya = -5;
            this.FlyDeath = true;
            if (this.SpriteTemplate !== null) this.SpriteTemplate.IsDead = true;

            this.DeadTime = 100;
            this.Winged = false;
            this.YFlip = true;
            return true;
        }
        return false;
    }

    FireballCollideCheck(fireball) {
        if (this.DeadTime !== 0) return false;

        let xd = fireball.X - this.X, yd = fireball.Y - this.Y;
        if (xd > -16 && xd < 16 && yd > -this.Height && yd < fireball.Height) {
            if (this.NoFireballDeath) return true;

            Engine.Resources.PlaySound("kick");

            this.Xa = fireball.Facing * 2;
            this.Ya = -5;
            this.FlyDeath = true;
            if (this.SpriteTemplate !== null) this.SpriteTemplate.IsDead = true;
            this.DeadTime = 100;
            this.Winged = false;
            this.YFlip = true;
            return true;
        }
    }

    BumpCheck(xTile, yTile) {
        if (this.DeadTime !== 0) return;

        if (this.X + this.Width > xTile * 16 && this.X - this.Width < xTile * 16 + 16 && yTile === ((this.Y - 1) / 16) | 0) {
            Engine.Resources.PlaySound("kick");

            this.Xa = -Mario.MarioCharacter.Facing * 2;
            this.Ya = -5;
            this.FlyDeath = true;
            if (this.SpriteTemplate !== null) this.SpriteTemplate.IsDead = true;

            this.DeadTime = 100;
            this.Winged = false;
            this.YFlip = true;
        }
    }

    Draw(context, camera) {
        let xPixel = 0, yPixel = 0;

        if (this.Winged) {
            xPixel = ((this.XOld + (this.X - this.XOld) * this.Delta) | 0) - this.XPicO;
            yPixel = ((this.YOld + (this.Y - this.YOld) * this.Delta) | 0) - this.YPicO;

            if (this.Type !== Enemy.RedKoopa && this.Type !== Enemy.GreenKoopa) {
                this.XFlip = !this.XFlip;
                context.save();
                context.scale(this.XFlip ? -1 : 1, this.YFlip ? -1 : 1);
                context.translate(this.XFlip ? -320 : 0, this.YFlip ? -240 : 0);
                context.drawImage(this.Image, (((this.WingTime / 4) | 0) % 2) * 16, 4 * 32, 16, 32,
                    this.XFlip ? (320 - xPixel - 24) : xPixel - 8, this.YFlip ? (240 - yPixel - 32) : yPixel - 8, 16, 32);
                context.restore();
                this.XFlip = !this.XFlip;
            }
        }

        super.Draw(context, camera);

        if (this.Winged) {
            xPixel = ((this.XOld + (this.X - this.XOld) * this.Delta) | 0) - this.XPicO;
            yPixel = ((this.YOld + (this.Y - this.YOld) * this.Delta) | 0) - this.YPicO;

            if (this.Type === Enemy.RedKoopa && this.Type === Enemy.GreenKoopa) {
                context.save();
                context.scale(this.XFlip ? -1 : 1, this.YFlip ? -1 : 1);
                context.translate(this.XFlip ? -320 : 0, this.YFlip ? -240 : 0);
                context.drawImage(this.Image, (((this.WingTime / 4) | 0) % 2) * 16, 4 * 32, 16, 32,
                    this.XFlip ? (320 - xPixel - 24) : xPixel - 8, this.YFlip ? (240 - yPixel) : yPixel - 8, 16, 32);
                context.restore();
            } else {
                context.save();
                context.scale(this.XFlip ? -1 : 1, this.YFlip ? -1 : 1);
                context.translate(this.XFlip ? -320 : 0, this.YFlip ? -240 : 0);
                context.drawImage(this.Image, (((this.WingTime / 4) | 0) % 2) * 16, 4 * 32, 16, 32,
                    this.XFlip ? (320 - xPixel - 24) : xPixel - 8, this.YFlip ? (240 - yPixel - 32) : yPixel - 8, 16, 32);
                context.restore();
            }
        }
    }
};

/** FIREBALL **/

class Fireball extends NotchSprite {
    constructor(world, x, y, facing) {
        super();
        this.GroundInertia = 0.89;
        this.AirInertia = 0.89;

        this.Image = Engine.Resources.Images["particles"];

        this.World = world;
        this.X = x;
        this.Y = y;
        this.Facing = facing || 1;

        this.XPicO = 4;
        this.YPicO = 4;
        this.YPic = 3;
        this.XPic = 4;
        this.Height = 8;
        this.Width = 4;
        this.PicWidth = this.PicHeight = 8;
        this.Ya = 4;
        this.Dead = false;
        this.DeadTime = 0;
        this.Anim = 0;
        this.OnGround = false;
    }

    Move() {
        let i = 0, sideWaysSpeed = 8;

        if (this.DeadTime > 0) {
            for (i = 0; i < 8; i++) {
                this.World.AddSprite(new Sparkle(this.World, ((this.X + Math.random() * 8 - 4) | 0) + 4, ((this.Y + Math.random() * 8 - 4) | 0) + 2, Math.random() * 2 - 1 * this.Facing, Math.random() * 2 - 1, 0, 1, 5));
            }
            this.World.RemoveSprite(this);
            return;
        }

        if (this.Facing != 0) this.Anim++;

        if (this.Xa > 2) this.Facing = 1;
        if (this.Xa < -2) this.Facing = -1;

        this.Xa = this.Facing * sideWaysSpeed;

        this.World.CheckFireballCollide(this);

        this.FlipX = this.Facing === -1;

        this.XPic = this.Anim % 4;

        if (!this.SubMove(this.Xa, 0)) this.Die();

        this.OnGround = false;
        this.SubMove(0, this.Ya);
        if (this.OnGround) this.Ya = -10;

        this.Ya *= 0.95;
        if (this.OnGround) this.Xa *= this.GroundInertia;
        else this.Xa *= this.AirInertia;

        if (!this.OnGround) this.Ya += 1.5;
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
                || this.IsBlocking(this.X + xa + this.Width, this.Y + ya - this.Height, xa, ya))))
            collide = true;

        if ((xa > 0 && (this.IsBlocking(this.X + xa + this.Width, this.Y + ya - this.Height, xa, ya)
            || this.IsBlocking(this.X + xa + this.Width, this.Y + ya - ((this.Height / 2) | 0), xa, ya)
            || this.IsBlocking(this.X + xa + this.Width, this.Y + ya, xa, ya)))
            || (xa < 0 && (this.IsBlocking(this.X + xa - this.Width, this.Y + ya - this.Height, xa, ya)
                || this.IsBlocking(this.X + xa - this.Width, this.Y + ya - ((this.Height / 2) | 0), xa, ya)
                || this.IsBlocking(this.X + xa - this.Width, this.Y + ya, xa, ya))))
            collide = true;

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

    Die() {
        this.Dead = true;
        this.Xa = -this.Facing * 2;
        this.Ya = -5;
        this.DeadTime = 100;
    }
};

/** SPARKLE **/

class Sparkle extends NotchSprite {
    constructor(world, x, y, xa, ya) {
        super();
        this.World = world;
        this.X = x;
        this.Y = y;
        this.Xa = xa;
        this.Ya = ya;
        this.XPic = (Math.random() * 2) | 0;
        this.YPic = 0;

        this.Life = 10 + ((Math.random() * 5) | 0);
        this.XPicStart = this.XPic;
        this.XPicO = 4;
        this.YPicO = 4;

        this.PicWidth = 8;
        this.PicHeight = 8;
        this.Image = Engine.Resources.Images["particles"];
    }

    Move() {
        if (this.Life > 10) this.XPic = 7;
        else this.XPic = (this.XPicStart + (10 - this.Life) * 0.4) | 0;

        if (this.Life-- < 0) this.World.RemoveSprite(this);

        this.X += this.Xa;
        this.Y += this.Ya;
    }
};

/** COIN ANIM **/

class CoinAnim extends NotchSprite {
    constructor(world, x, y) {
        super();
        this.World = world;
        this.Life = 10;
        this.Image = Engine.Resources.Images["map"];
        this.PicWidth = this.PicHeight = 16;
        this.X = x * 16;
        this.Y = y * 16 - 16;
        this.Xa = 0;
        this.Ya = -6;
        this.XPic = 0;
        this.YPic = 2;
    }

    Move() {
        let x = 0, y = 0;
        if (this.Life-- < 0) {
            this.World.RemoveSprite(this);
            for (x = 0; x < 2; x++) {
                for (y = 0; y < 2; y++) {
                    this.World.AddSprite(new Sparkle(this.World, (this.X + x * 8 + Math.random() * 8) | 0, (this.Y + y * 8 + Math.random() * 8) | 0, 0, 0, 0, 2, 5));
                }
            }
        }

        this.XPic = this.Life & 3;
        this.X += this.Xa;
        this.Y += this.Ya;
        this.Ya += 1;
    }
};

/** MUSHROOM **/

class Mushroom extends NotchSprite {
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
/** PARTICLE **/

class Particle extends NotchSprite {
    constructor(world, x, y, xa, ya, xPic, yPic) {
        super();
        this.World = world;
        this.X = x;
        this.Y = y;
        this.Xa = xa;
        this.Ya = ya;
        this.XPic = (Math.random() * 2) | 0;
        this.YPic = 0;
        this.XPicO = 4;
        this.YPicO = 4;

        this.PicWidth = 8;
        this.PicHeight = 8;
        this.Life = 10;

        this.Image = Engine.Resources.Images["particles"];
    }

    Move() {
        if (this.Life - this.Delta < 0) this.World.RemoveSprite(this);

        this.Life -= this.Delta;

        this.X += this.Xa;
        this.Y += this.Ya;
        this.Ya *= 0.95;
        this.Ya += 3;
    }
};

/** FIRE FLOWER **/

class FireFlower extends NotchSprite {
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

/** BULLET BILL **/

class BulletBill extends NotchSprite {
    constructor(world, x, y, dir) {
        this.Image = Engine.Resources.Images["enemies"];
        this.World = world;
        this.X = x;
        this.Y = y;
        this.Facing = dir;

        this.XPicO = 8;
        this.YPicO = 31;
        this.Height = 12;
        this.Width = 4;
        this.PicWidth = 16;
        this.YPic = 5;
        this.XPic = 0;
        this.Ya = -5;
        this.DeadTime = 0;
        this.Dead = false;
        this.Anim = 0;

        console.log("BULLET BILL");
    }

    CollideCheck() {
        if (this.Dead) return;

        let xMarioD = Mario.MarioCharacter.X - this.X, yMarioD = Mario.MarioCharacter.Y - this.Y;
        if (xMarioD > -16 && xMarioD < 16 && yMarioD > -this.Height && yMarioD < this.World.Mario.Height) {
            if (Mario.MarioCharacter.Y > 0 && yMarioD <= 0 && (!Mario.MarioCharacter.OnGround || !Mario.MarioCharacter.WasOnGround)) {
                Mario.MarioCharacter.Stomp(this);
                this.Dead = true;

                this.Xa = 0;
                this.Ya = 1;
                this.DeadTime = 100;
            } else {
                Mario.MarioCharacter.GetHurt();
            }
        }
    }

    Move() {
        let i = 0, sideWaysSpeed = 4;
        if (this.DeadTime > 0) {
            this.DeadTime--;

            if (this.DeadTime === 0) {
                this.DeadTime = 1;
                for (i = 0; i < 8; i++) {
                    this.World.AddSprite(new Sparkle(((this.X + Math.random() * 16 - 8) | 0) + 4, ((this.Y + Math.random() * 8) | 0) + 4, Math.random() * 2 - 1, Math.random() * -1, 0, 1, 5));
                }
                this.World.RemoveSprite(this);
            }

            this.X += this.Xa;
            this.Y += this.Ya;
            this.Ya *= 0.95;
            this.Ya += 1;

            return;
        }

        this.Xa = this.Facing * sideWaysSpeed;
        this.XFlip = this.Facing === -1;
        this.SubMove(this.Xa, 0); // TODO Move or SubMove ?
    }

    SubMove(xa, ya) {
        console.log("BULLET BILL SUB MOVE")
        this.X += xa;
        return true;
    }

    FireballCollideCheck(fireball) {
        if (this.DeadTime !== 0) return false;

        let xD = fireball.X - this.X, yD = fireball.Y - this.Y;
        if (xD > -16 && xD < 16 && yD > -this.Height && yD < fireball.Height) return true;
        return false;
    }

    ShellCollideCheck(shell) {
        if (this.DeadTime !== 0) return false;

        let xD = shell.X - this.X, yD = shell.Y - this.Y;
        if (xD > -16 && xD < 16 && yD > -this.Height && yD < shell.Height) {
            Engine.Resources.PlaySound("kick");
            this.Dead = true;
            this.Xa = 0;
            this.Ya = 1;
            this.DeadTime = 100;
            return true;
        }
        return false;
    }
};

/** FLOWER ENEMY **/

class FlowerEnemy extends Enemy {
    constructor(world, x, y) {
        super();
        this.Image = Engine.Resources.Images["enemies"];
        this.World = world;
        this.X = x;
        this.Y = y;
        this.Facing = 1;
        this.Type = Enemy.Spiky;
        this.Winged = false;
        this.NoFireballDeath = false;
        this.XPic = 0;
        this.YPic = 6;
        this.YPicO = 24;
        this.Height = 12;
        this.Width = 2;
        this.YStart = y;
        this.Ya = -8;
        this.Y -= 1;
        this.Layer = 0;
        this.JumpTime = 0;
        this.Tick = 0;

        for (let i = 0; i < 4; i++) this.Move();
    }

    Move() {
        let i = 0, xd = 0;
        if (this.DeadTime > 0) {
            this.DeadTime--;

            if (this.DeadTime === 0) {
                this.DeadTime = 1;
                for (i = 0; i < 8; i++)
                    this.World.AddSprite(new Sparkle(((this.X + Math.random() * 16 - 8) | 0) + 4, ((this.Y + Math.random() * 8) | 0) + 4, Math.random() * 2 - 1, Math.random() * -1, 0, 1, 5));

                this.World.RemoveSprite(this);
            }

            this.X += this.Xa;
            this.Y += this.Ya;
            this.Ya *= 0.95;
            this.Ya += 1;

            return;
        }

        this.Tick++;

        if (this.Y >= this.YStart) {
            this.YStart = this.Y;
            xd = Math.abs(Mario.MarioCharacter.X - this.X) | 0;
            this.JumpTime++;
            if (this.JumpTime > 40 && xd > 24) this.Ya = -8;
            else this.Ya = 0;
        }
        else this.JumpTime = 0;

        this.Y += this.Ya;
        this.Ya *= 0.9;
        this.Ya += 0.1;

        this.XPic = (((this.Tick / 2) | 0) & 1) * 2 + (((this.Tick / 6) | 0) & 1);
    }
};

/** SHELL **/

class Shell extends NotchSprite {
    constructor(world, x, y, type) {
        super();
        this.World = world;
        this.X = x;
        this.Y = y;

        this.YPic = type;
        this.Image = Engine.Resources.Images["enemies"];

        this.XPicO = 8;
        this.YPicO = 31;
        this.Width = 4;
        this.Height = 12;
        this.Facing = 0;
        this.PicWidth = 16;
        this.XPic = 4;
        this.Ya = -5;

        this.Dead = false;
        this.DeadTime = 0;
        this.Carried = false;

        this.GroundInertia = 0.89;
        this.AirInertia = 0.89;
        this.OnGround = false;
        this.Anim = 0;
    }

    FireballCollideCheck(fireball) {
        if (this.DeadTime !== 0) return false;

        let xD = fireball.X - this.X, yD = fireball.Y - this.Y;
        if (xD > -16 && xD < 16 && yD > -this.Height && yD < fireball.Height) {
            if (this.Facing !== 0) return true;

            Engine.Resources.PlaySound("kick");

            this.Xa = fireball.Facing * 2;
            this.Ya = -5;
            if (this.SpriteTemplate !== null) this.SpriteTemplate.IsDead = true;

            this.DeadTime = 100;
            this.YFlip = true;

            return true;
        }
        return false;
    }

    CollideCheck() {
        if (this.Carried || this.Dead || this.DeadTime > 0) return;

        let xMarioD = Mario.MarioCharacter.X - this.X, yMarioD = Mario.MarioCharacter.Y - this.Y;
        if (xMarioD > -16 && xMarioD < 16 && yMarioD > -this.Height && yMarioD < Mario.MarioCharacter.Height) {
            if (Mario.MarioCharacter.Ya > 0 && yMarioD <= 0 && (!Mario.MarioCharacter.OnGround || !Mario.MarioCharacter.WasOnGround)) {
                Mario.MarioCharacter.Stomp(this);
                if (this.Facing !== 0) {
                    this.Xa = 0;
                    this.Facing = 0;
                }
                else this.Facing = Mario.MarioCharacter.Facing;
            }
            else if (this.Facing !== 0) Mario.MarioCharacter.GetHurt();
            else {
                Mario.MarioCharacter.Kick(this);
                this.Facing = Mario.MarioCharacter.Facing;
            }
        }
    }

    Move() {
        let sideWaysSpeed = 11, i = 0;
        if (this.Carried) {
            this.World.CheckShellCollide(this);
            return;
        }

        if (this.DeadTime > 0) {
            this.DeadTime--;

            if (this.DeadTime === 0) {
                this.DeadTime = 1;
                for (i = 0; i < 8; i++) this.World.AddSprite(new Sparkle(((this.X + Math.random() * 16 - 8) | 0) + 4, ((this.Y + Math.random() * 8) | 0) + 4, Math.random() * 2 - 1, Math.random() * -1, 0, 1, 5));

                this.World.RemoveSprite(this);
            }

            this.X += this.Xa;
            this.Y += this.Ya;
            this.Ya *= 0.95;
            this.Ya += 1;
            return;
        }

        if (this.Facing !== 0) this.Anim++;

        if (this.Xa > 2) this.Facing = 1;
        if (this.Xa < -2) this.Facing = -1;

        this.Xa = this.Facing * sideWaysSpeed;

        if (this.Facing !== 0) this.World.CheckShellCollide(this);

        this.XFlip = this.Facing === -1;

        this.XPic = ((this.Anim / 2) | 0) % 4 + 3;

        if (!this.SubMove(this.Xa, 0)) {
            Engine.Resources.PlaySound("bump");
            this.Facing = -this.Facing;
        }
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
                || this.IsBlocking(this.X + xa + this.Width, this.Y + ya - this.Height, xa, ya)))
            || (xa > 0 && (this.IsBlocking(this.X + xa + this.Width, this.Y + ya - this.Height, xa, ya)
                || this.IsBlocking(this.X + xa + this.Width, this.Y + ya - ((this.Height / 2) | 0), xa, ya)
                || this.IsBlocking(this.X + xa + this.Width, this.Y + ya, xa, ya)))
            || (xa < 0 && (this.IsBlocking(this.X + xa - this.Width, this.Y + ya - this.Height, xa, ya)
                || this.IsBlocking(this.X + xa - this.Width, this.Y + ya - ((this.Height / 2) | 0), xa, ya)
                || this.IsBlocking(this.X + xa - this.Width, this.Y + ya, xa, ya))))
            collide = true;

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

        if (x === ((this.X / 16) | 0) && y === ((this.Y / 16) | 0)) return false;

        let blocking = this.World.Level.IsBlocking(x, y, xa, ya);

        if (blocking && ya === 0 && xa !== 0) this.World.Bump(x, y, true);
        return blocking;
    }

    BumpCheck(x, y) {
        if (this.X + this.Width > x * 16 && this.X - this.Width < x * 16 + 16 && y === (((this.Y - 1) / 16) | 0)) {
            this.Facing = -Mario.MarioCharacter.Facing;
            this.Ya = -10;
        }
    }

    Die() {
        this.Dead = true;
        this.Carried = false;
        this.Xa = -this.Facing * 2;
        this.Ya = -5;
        this.DeadTime = 100;
    }

    ShellCollideCheck(shell) {
        if (this.DeadTime !== 0) return false;

        let xD = shell.X - this.X, yD = shell.Y - this.Y;
        if (xD > -16 && xD < 16 && yD > -this.Height && yD < shell.Height) {
            Engine.Resources.PlaySound("kick");
            if (Mario.MarioCharacter.Carried === shell || Mario.MarioCharacter.Carried === this) Mario.MarioCharacter.Carried = null;

            this.Die();
            shell.Die();
            return true;
        }
        return false;
    }

    Release(mario) {
        this.Carried = false;
        this.Facing = Mario.MarioCharacter.Facing;
        this.X += this.Facing * 8;
    }
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

        let bgGenerator = new BackgroundGenerator(2048, 15, true, LevelType.Overground);
        let bgLayer0 = new BackgroundRenderer(bgGenerator.CreateLevel(), 320, 240, 2);
        bgGenerator.SetValues(2048, 15, false, LevelType.Overground);
        let bgLayer1 = new BackgroundRenderer(bgGenerator.CreateLevel(), 320, 240, 1);

        this.title = new Engine.Sprite();
        this.title.Image = Engine.Resources.Images["title"];
        this.title.X = 0, this.title.Y = 120;

        this.logo = new Engine.Sprite();
        this.logo.Image = Engine.Resources.Images["logo"];
        this.logo.X = 0, this.logo.Y = 0;

        this.font = SpriteCuts.CreateRedFont();
        this.font.Strings[0] = { String: "Press S to Start", X: 96, Y: 120 };

        this.logoY = 20;

        this.drawManager.Add(bgLayer0);
        this.drawManager.Add(bgLayer1);

        this.bounce = 0;

        Mario.GlobalMapState = new MapState();
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
        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) context.ChangeState(Mario.GlobalMapState);
    }
};

/** LOADING STATE **/

class LoadingState extends Engine.GameState {
    constructor() {
        super();
        this.Images = [];
        this.ImagesLoaded = false;
        this.ScreenColor = 0;
        this.ColorDirection = 1;
        this.ImageIndex = 0;
        this.SoundIndex = 0;
    }

    Enter() {
        this.Images = [
            { "name": "background", "src": "images/bgsheet.png" },
            { "name": "endScene", "src": "images/endscene.gif" },
            { "name": "enemies", "src": "images/enemysheet.png" },
            { "name": "fireMario", "src": "images/firemariosheet.png" },
            { "name": "font", "src": "images/font.gif" },
            { "name": "gameOverGhost", "src": "images/gameovergost.gif" },
            { "name": "items", "src": "images/itemsheet.png" },
            { "name": "logo", "src": "images/logo.gif" },
            { "name": "map", "src": "images/mapsheet.png" },
            { "name": "mario", "src": "images/mariosheet.png" },
            { "name": "particles", "src": "images/particlesheet.png" },
            { "name": "racoonMario", "src": "images/racoonmariosheet.png" },
            { "name": "smallMario", "src": "images/smallmariosheet.png" },
            { "name": "title", "src": "images/title.gif" },
            { "name": "worldMap", "src": "images/worldmap.png" },
        ];

        Engine.Resources.AddImages(this.Images);

        let testAudio = new Audio();

        if (testAudio.canPlayType("audio/mp3")) {
            Engine.Resources.AddSound("1up", "sounds/1-up.mp3", 1)
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
                .AddSound("stomp", "sounds/stomp.mp3", 2);
        } else {
            Engine.Resources.AddSound("1up", "sounds/1-up.wav", 1)
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
        }

        //load the array of tile behaviors
        Tile.LoadBehaviors();
    }

    Exit() {
        delete this.Images;
    }

    Update(delta) {
        if (!this.ImagesLoaded) {
            this.ImagesLoaded = true;
            let i = 0;
            for (i = 0; i < this.Images.length; i++) {
                if (Engine.Resources.Images[this.Images[i].name].complete !== true) {
                    this.ImagesLoaded = false;
                    break;
                }
            }
        }

        this.ScreenColor += this.ColorDirection * 255 * delta;
        if (this.ScreenColor > 255) {
            this.ScreenColor = 255;
            this.ColorDirection = -1;
        } else if (this.ScreenColor < 0) {
            this.ScreenColor = 0;
            this.ColorDirection = 1;
        }
    }

    Draw(context) {
        if (!this.ImagesLoaded) {
            var color = parseInt(this.ScreenColor, 10);
            context.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
            context.fillRect(0, 0, 640, 480);
        } else {
            context.fillStyle = "rgb(0, 0, 0)";
            context.fillRect(0, 0, 640, 480);
        }
    }

    CheckForChange(context) {
        if (this.ImagesLoaded) {
            //set up the global map state variable
            Mario.GlobalMapState = new MapState();

            context.ChangeState(new PredefinedTitleState());
        }
    }
};

/** LOSE STATE **/

class LoseState extends Engine.GameState {
    constructor() {
        super();
        this.drawManager = null;
        this.camera = null;
        this.gameOver = null;
        this.font = null;
        this.wasKeyDown = false;
    }

    Enter() {
        this.drawManager = new Engine.DrawableManager();
        this.camera = new Engine.Camera();

        this.gameOver = new Engine.AnimatedSprite();
        this.gameOver.Image = Engine.Resources.Images["gameOverGhost"];
        this.gameOver.SetColumnCount(9);
        this.gameOver.SetRowCount(1);
        this.gameOver.AddNewSequence("turnLoop", 0, 0, 0, 8);
        this.gameOver.PlaySequence("turnLoop", true);
        this.gameOver.FramesPerSecond = 1 / 15;
        this.gameOver.X = 112;
        this.gameOver.Y = 68;

        this.font = SpriteCuts.CreateBlackFont();
        this.font.Strings[0] = { String: "Game over!", X: 116, Y: 160 };

        this.drawManager.Add(this.font);
        this.drawManager.Add(this.gameOver);
    }

    Exit() {
        this.drawManager.Clear();
        delete this.drawManager;
        delete this.camera;
        delete this.gameOver;
        delete this.font;
    }

    Update(delta) {
        this.drawManager.Update(delta);
        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) this.wasKeyDown = true;
    }

    Draw(context) {
        this.drawManager.Draw(context, this.camera);
    }

    CheckForChange(context) {
        if (this.wasKeyDown && !Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) context.ChangeState(new PredefinedTitleState());
    }
};

/** WIN STATE **/

class WinState extends Engine.GameState {
    constructor() {
        super();
        this.waitTime = 2;
        this.drawManager = null;
        this.camera = null;
        this.font = null;
        this.kissing = null;
        this.wasKeyDown = false;
    }

    Enter() {
        this.drawManager = new Engine.DrawableManager();
        this.camera = new Engine.Camera();

        this.font = SpriteCuts.CreateBlackFont();
        this.font.Strings[0] = { String: "Thank you for saving me, Mario!", X: 36, Y: 160 };

        this.kissing = new Engine.AnimatedSprite();
        this.kissing.Image = Engine.Resources.Images["endScene"];
        this.kissing.X = 112;
        this.kissing.Y = 52;
        this.kissing.SetColumnCount(2);
        this.kissing.SetRowCount(1);
        this.kissing.AddNewSequence("loop", 0, 0, 0, 1);
        this.kissing.PlaySequence("loop", true);
        this.kissing.FramesPerSecond = 1 / 2;

        this.waitTime = 2;

        this.drawManager.Add(this.font);
        this.drawManager.Add(this.kissing);
    }

    Exit() {
        this.drawManager.Clear();
        delete this.drawManager;
        delete this.camera;
    }

    Update(delta) {
        this.drawManager.Update(delta);

        if (this.waitTime > 0) this.waitTime -= delta;
        else if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) this.wasKeyDown = true;
    }

    Draw(context) {
        this.drawManager.Draw(context, this.camera);
    }

    CheckForChange = function (context) {
        if (this.waitTime <= 0 && this.wasKeyDown && !Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) {
            context.ChangeState(new PredefinedTitleState());
        }
    }
};

/** MAP STATE **/

class MapTile {
    static Grass = 0;
    static Water = 1;
    static Level = 2;
    static Road = 3;
    static Decoration = 4;
};

class MapState extends Engine.GameState {
    constructor() {
        super();
        this.camera = new Engine.Camera();

        this.Level = [];
        this.Data = [];
        this.XMario = 0; this.YMario = 0;
        this.XMarioA = 0; this.YMarioA = 0;
        this.MoveTime = 0;
        this.LevelId = 0;
        this.Farthest = 0;
        this.XFarthestCap = 0;
        this.YFarthestCap = 0;
        this.MapImage = document.createElement("canvas");
        this.MapImage.width = 320;
        this.MapImage.height = 240;
        this.MapContext = this.MapImage.getContext("2d");
        this.CanEnterLevel = false;
        this.EnterLevel = false;
        this.LevelDifficulty = 0;
        this.LevelType = 0;

        this.WorldNumber = -1;
        this.NextWorld();
    }

    CreateAnimatedSprite(imageName, columnCount, rowCount, sequencesArr, fps, sequenceName, x, y) {
        let sprite = new Engine.AnimatedSprite();
        sprite.Image = Engine.Resources.Images[imageName];
        sprite.SetColumnCount(columnCount);
        sprite.SetRowCount(rowCount);
        for (let i = 0; i < sequencesArr.length; i++)
            sprite.AddNewSequence(sequencesArr[i].name, sequencesArr[i].sRow, sequencesArr[i].sCol, sequencesArr[i].eRow, sequencesArr[i].eCol);
        sprite.FramesPerSecond = fps;
        sprite.PlaySequence(sequenceName, true);
        sprite.X = x;
        sprite.Y = y;
        return sprite;
    }

    Enter() {
        this.WaterSprite = this.CreateAnimatedSprite("worldMap", 16, 16, [{ "name": "loop", "sRow": 14, "sCol": 0, "eRow": 14, "eCol": 3 }], 1 / 3, "loop", 0, 0);

        this.DecoSprite = this.CreateAnimatedSprite("worldMap", 16, 16, [
            { "name": "world0", "sRow": 10, "sCol": 0, "eRow": 10, "eCol": 3 },
            { "name": "world1", "sRow": 11, "sCol": 0, "eRow": 11, "eCol": 3 },
            { "name": "world2", "sRow": 12, "sCol": 0, "eRow": 12, "eCol": 3 },
            { "name": "world3", "sRow": 13, "sCol": 0, "eRow": 13, "eCol": 3 },
        ], 1 / 3, "world0", 0, 0);

        this.HelpSprite = this.CreateAnimatedSprite("worldMap", 16, 16, [{ "name": "help", "sRow": 7, "sCol": 3, "eRow": 7, "eCol": 5 }], 1 / 2, "help", 0, 0);

        this.SmallMario = this.CreateAnimatedSprite("worldMap", 16, 16, [{ "name": "small", "sRow": 1, "sCol": 0, "eRow": 1, "eCol": 1 }], 1 / 3, "small", 0, 0);

        this.LargeMario = this.CreateAnimatedSprite("worldMap", 16, 8, [
            { "name": "large", "sRow": 0, "sCol": 2, "eRow": 0, "eCol": 3 },
            { "name": "fire", "sRow": 0, "sCol": 4, "eRow": 0, "eCol": 5 }
        ], 1 / 3, "large", 0, 0);

        this.FontShadow = SpriteCuts.CreateBlackFont();
        this.Font = SpriteCuts.CreateWhiteFont();

        //get the correct world decoration
        this.DecoSprite.PlaySequence("world" + (this.WorldNumber % 4), true);
        this.LargeMario.PlaySequence(Mario.MarioCharacter.Fire ? "fire" : "large", true);

        this.EnterLevel = false;
        this.LevelDifficulty = 0;
        this.LevelType = 0;
        //Mario.PlayMapMusic();
    }

    Exit() {
        //Mario.StopMusic();

        delete this.WaterSprite;
        delete this.DecoSprite;
        delete this.HelpSprite;
        delete this.SmallMario;
        delete this.LargeMario;
        delete this.FontShadow;
        delete this.Font;
    }

    NextWorld() {
        let generated = false;
        this.WorldNumber++;

        //The player has won, wait for CheckForChange to get called
        if (this.WorldNumber === 8) return;

        this.MoveTime = 0;
        this.LevelId = 0;
        this.Farthest = 0;
        this.XFarthestCap = 0;
        this.YFarthestCap = 0;

        while (!generated) generated = this.GenerateLevel();

        this.RenderStatic();
    }

    GenerateLevel() {
        let x = 0, y = 0, t0 = 0, t1 = 0, td = 0, t = 0;

        let n0 = new ImprovedNoise((Math.random() * 9223372036854775807) | 0);
        let n1 = new ImprovedNoise((Math.random() * 9223372036854775807) | 0);
        let dec = new ImprovedNoise((Math.random() * 9223372036854775807) | 0);

        let width = 320 / 16 + 1, height = 240 / 16 + 1;
        this.Level = [];
        this.Data = [];

        let xo0 = Math.random() * 512, yo0 = Math.random() * 512, xo1 = Math.random() * 512, yo1 = Math.random() * 512;

        for (x = 0; x < width; x++) {
            this.Level[x] = [];
            this.Data[x] = [];

            for (y = 0; y < height; y++) {

                t0 = n0.PerlinNoise(x * 10 + xo0, y * 10 + yo0);
                t1 = n1.PerlinNoise(x * 10 + xo1, y * 10 + yo1);
                td = t0 - t1;
                t = td * 2;

                this.Level[x][y] = t > 0 ? MapTile.Water : MapTile.Grass;
            }
        }

        let lowestX = 9999, lowestY = 9999, i = 0;
        t = 0;

        for (i = 0; i < 100 && t < 12; i++) {
            x = ((Math.random() * (((width - 1) / 3) | 0)) | 0) * 3 + 2;
            y = ((Math.random() * (((height - 1) / 3) | 0)) | 0) * 3 + 1;
            if (this.Level[x][y] === MapTile.Grass) {
                if (x < lowestX) {
                    lowestX = x;
                    lowestY = y;
                }
                this.Level[x][y] = MapTile.Level;
                this.Data[x][y] = -1;
                t++;
            }
        }

        this.Data[lowestX][lowestY] = -2;

        let connection = true;
        while (connection) connection = this.FindConnection(width, height);
        this.FindCaps(width, height);

        if (this.XFarthestCap === 0) return false;

        this.Data[this.XFarthestCap][this.YFarthestCap] = -2;
        this.Data[(this.XMario / 16) | 0][(this.YMario / 16) | 0] = -11;

        for (x = 0; x < width; x++) {
            for (y = 0; y < height; y++) {
                if (this.Level[x][y] === MapTile.Grass && (x !== this.XFarthestCap || y !== this.YFarthestCap - 1)) {
                    t0 = dec.PerlinNoise(x * 10 + xo0, y * 10 + yo0);

                    if (t0 > 0) this.Level[x][y] = MapTile.Decoration;
                }
            }
        }

        return true;
    }

    FindConnection(width, height) {
        let x = 0, y = 0;
        for (x = 0; x < width; x++) {
            for (y = 0; y < height; y++) {
                if (this.Level[x][y] === MapTile.Level && this.Data[x][y] === -1) {
                    this.Connect(x, y, width, height);
                    return true;
                }
            }
        }
        return false;
    }

    Connect(xSource, ySource, width, height) {
        let maxDistance = 10000, xTarget = 0, yTarget = 0, x = 0, y = 0, xd = 0, yd = 0, d = 0;

        for (x = 0; x < width; x++) {
            for (y = 0; y < height; y++) {
                if (this.Level[x][y] === MapTile.Level && this.Data[x][y] === -2) {
                    xd = Math.abs(xSource - x) | 0;
                    yd = Math.abs(ySource - y) | 0;
                    d = xd * xd + yd * yd;
                    if (d < maxDistance) {
                        xTarget = x;
                        yTarget = y;
                        maxDistance = d;
                    }
                }
            }
        }

        this.DrawRoad(xSource, ySource, xTarget, yTarget);
        this.Level[xSource][ySource] = MapTile.Level;
        this.Data[xSource][ySource] = -2;
        return;
    }

    DrawRoad(x0, y0, x1, y1) {
        let xFirst = false;
        if (Math.random() > 0.5) xFirst = true;

        if (xFirst) {
            while (x0 > x1) {
                this.Data[x0][y0] = 0;
                this.Level[x0--][y0] = MapTile.Road;
            }
            while (x0 < x1) {
                this.Data[x0][y0] = 0;
                this.Level[x0++][y0] = MapTile.Road;
            }
        }

        while (y0 > y1) {
            this.Data[x0][y0] = 0;
            this.Level[x0][y0--] = MapTile.Road;
        }
        while (y0 < y1) {
            this.Data[x0][y0] = 0;
            this.Level[x0][y0++] = MapTile.Road;
        }

        if (!xFirst) {
            while (x0 > x1) {
                this.Data[x0][y0] = 0;
                this.Level[x0--][y0] = MapTile.Road;
            }
            while (x0 < x1) {
                this.Data[x0][y0] = 0;
                this.Level[x0++][y0] = MapTile.Road;
            }
        }
    }

    FindCaps(width, height) {
        let x = 0, y = 0, xCap = -1, yCap = -1, roads = 0, xx = 0, yy = 0;

        for (x = 0; x < width; x++) {
            for (y = 0; y < height; y++) {
                if (this.Level[x][y] !== MapTile.Level) continue;
                roads = 0;

                for (xx = x - 1; xx <= x + 1; xx++) {
                    for (yy = y - 1; yy <= y + 1; yy++) {
                        if (this.Level[xx][yy] === MapTile.Road) roads++;
                    }
                }

                if (roads === 1) {
                    if (xCap === -1) {
                        xCap = x;
                        yCap = y;
                    }
                    this.Data[x][y] = 0;
                } else {
                    this.Data[x][y] = 1;
                }
            }
        }

        this.XMario = xCap * 16;
        this.YMario = yCap * 16;

        this.Travel(xCap, yCap, -1, 0);
    }

    Travel(x, y, dir, depth) {
        if (this.Level[x][y] !== MapTile.Road && this.Level[x][y] !== MapTile.Level) return;

        if (this.Level[x][y] === MapTile.Road) {
            if (this.Data[x][y] === 1) return;

            this.Data[x][y] = 1;
        }

        if (this.Level[x][y] === MapTile.Level) {
            if (this.Data[x][y] > 0) {
                if (this.LevelId !== 0 && ((Math.random() * 4) | 0) === 0) this.Data[x][y] = -3;
                else this.Data[x][y] = ++this.LevelId;
            } else if (depth > 0) {
                this.Data[x][y] = -1;
                if (depth > this.Farthest) {
                    this.Farthest = depth;
                    this.XFarthestCap = x;
                    this.YFarthestCap = y;
                }
            }
        }

        if (dir !== 2) this.Travel(x - 1, y, 0, depth++);
        if (dir !== 3) this.Travel(x, y - 1, 1, depth++);
        if (dir !== 0) this.Travel(x + 1, y, 2, depth++);
        if (dir !== 1) this.Travel(x, y + 1, 3, depth++);
    }

    RenderStatic() {
        let x = 0, y = 0, p0 = 0, p1 = 0, p2 = 0, p3 = 0, s = 0, xx = 0, yy = 0, image = Engine.Resources.Images["worldMap"], type = 0;

        //320 / 16 = 20
        for (x = 0; x < 20; x++) {
            //240 / 16 = 15
            for (y = 0; y < 15; y++) {
                this.MapContext.drawImage(image, ((this.WorldNumber / 4) | 0) * 16, 0, 16, 16, x * 16, y * 16, 16, 16);

                if (this.Level[x][y] === MapTile.Level) {
                    type = this.Data[x][y];
                    if (type === 0) this.MapContext.drawImage(image, 0, 7 * 16, 16, 16, x * 16, y * 16, 16, 16);
                    else if (type === -1) this.MapContext.drawImage(image, 3 * 16, 8 * 16, 16, 16, x * 16, y * 16, 16, 16);
                    else if (type === -3) this.MapContext.drawImage(image, 0, 8 * 16, 16, 16, x * 16, y * 16, 16, 16);
                    else if (type === -10) this.MapContext.drawImage(image, 16, 8 * 16, 16, 16, x * 16, y * 16, 16, 16);
                    else if (type === -11) this.MapContext.drawImage(image, 16, 7 * 16, 16, 16, x * 16, y * 16, 16, 16);
                    else if (type === -2) {
                        this.MapContext.drawImage(image, 2 * 16, 7 * 16, 16, 16, x * 16, (y - 1) * 16, 16, 16);
                        this.MapContext.drawImage(image, 2 * 16, 8 * 16, 16, 16, x * 16, y * 16, 16, 16);
                    } else this.MapContext.drawImage(image, (type - 1) * 16, 6 * 16, 16, 16, x * 16, y * 16, 16, 16);
                } else if (this.Level[x][y] === MapTile.Road) {
                    p0 = this.IsRoad(x - 1, y) ? 1 : 0;
                    p1 = this.IsRoad(x, y - 1) ? 1 : 0;
                    p2 = this.IsRoad(x + 1, y) ? 1 : 0;
                    p3 = this.IsRoad(x, y + 1) ? 1 : 0;
                    s = p0 + (p1 * 2) + (p2 * 4) + (p3 * 8);
                    this.MapContext.drawImage(image, s * 16, 32, 16, 16, x * 16, y * 16, 16, 16);
                } else if (this.Level[x][y] === MapTile.Water) {
                    for (xx = 0; xx < 2; xx++) {
                        for (yy = 0; yy < 2; yy++) {
                            p0 = this.IsWater(x * 2 + (xx - 1), y * 2 + (yy - 1)) ? 0 : 1;
                            p1 = this.IsWater(x * 2 + xx, y * 2 + (yy - 1)) ? 0 : 1;
                            p2 = this.IsWater(x * 2 + (xx - 1), y * 2 + yy) ? 0 : 1;
                            p3 = this.IsWater(x * 2 + xx, y * 2 + yy) ? 0 : 1;
                            s = p0 + (p1 * 2) + (p2 * 4) + (p3 * 8) - 1;
                            if (s >= 0 && s <= 14) this.MapContext.drawImage(image, s * 16, (4 + ((xx + yy) & 1)) * 16, 16, 16, x * 16 + xx * 8, y * 16 + yy * 8, 16, 16);
                        }
                    }
                }
            }
        }
    }

    IsRoad(x, y) {
        if (x < 0) x = 0;
        if (y < 0) y = 0;

        if (this.Level[x][y] === MapTile.Road || this.Level[x][y] === MapTile.Level) return true;

        return false;
    }

    IsWater(x, y) {
        if (x < 0) x = 0;
        if (y < 0) y = 0;

        for (let xx = 0; xx < 2; xx++) {
            for (let yy = 0; yy < 2; yy++) {
                if (this.Level[((x + xx) / 2) | 0][((y + yy) / 2) | 0] !== MapTile.Water) return false;
            }
        }

        return true;
    }

    Update(delta) {
        if (this.WorldNumber === 8) return;

        this.XMario += this.XMarioA;
        this.YMario += this.YMarioA;

        let x = (this.XMario / 16) | 0, y = (this.YMario / 16) | 0, difficulty = 0, type = 0;

        if (this.Level[x][y] === MapTile.Road) this.Data[x][y] = 0;

        if (this.MoveTime > 0) this.MoveTime--;
        else {
            this.XMarioA = 0;
            this.YMarioA = 0;

            if (this.CanEnterLevel && Engine.KeyboardInput.IsKeyDown(Engine.Keys.S) && this.Level[x][y] === MapTile.Level && this.Data[x][y] !== -11
                && this.Level[x][y] === MapTile.Level && this.Data[x][y] !== 0 && this.Data[x][y] > -10) {
                difficulty = this.WorldNumber + 1;
                Mario.MarioCharacter.LevelString = difficulty + "-";
                type = LevelType.Overground;

                if (this.Data[x][y] > 1 && ((Math.random() * 3) | 0) === 0) type = LevelType.Underground;

                if (this.Data[x][y] < 0) {
                    if (this.Data[x][y] === -2) {
                        Mario.MarioCharacter.LevelString += "X";
                        difficulty += 2;
                    } else if (this.Data[x][y] === -1) {
                        Mario.MarioCharacter.LevelString += "?";
                    } else {
                        Mario.MarioCharacter.LevelString += "#";
                        difficulty += 1;
                    }

                    type = LevelType.Castle;
                }
                else Mario.MarioCharacter.LevelString += this.Data[x][y];

                //TODO: stop music here
                this.EnterLevel = true;
                this.LevelDifficulty = difficulty;
                this.LevelType = type;
            }

            this.CanEnterLevel = !Engine.KeyboardInput.IsKeyDown(Engine.Keys.S);

            if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.Left)) this.TryWalking(-1, 0);
            if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.Right)) this.TryWalking(1, 0);
            if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.Up)) this.TryWalking(0, -1);
            if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.Down)) this.TryWalking(0, 1);
        }

        this.WaterSprite.Update(delta);
        this.DecoSprite.Update(delta);
        this.HelpSprite.Update(delta);
        if (!Mario.MarioCharacter.Large) {
            this.SmallMario.X = this.XMario + (this.XMarioA * delta) | 0;
            this.SmallMario.Y = this.YMario + ((this.YMarioA * delta) | 0) - 6;
            this.SmallMario.Update(delta);
        } else {
            this.LargeMario.X = this.XMario + (this.XMarioA * delta) | 0;
            this.LargeMario.Y = this.YMario + ((this.YMarioA * delta) | 0) - 22;
            this.LargeMario.Update(delta);
        }
    }

    TryWalking(xd, yd) {
        let x = (this.XMario / 16) | 0, y = (this.YMario / 16) | 0, xt = x + xd, yt = y + yd;

        if (this.Level[xt][yt] === MapTile.Road || this.Level[xt][yt] === MapTile.Level) {
            if (this.Level[xt][yt] === MapTile.Road && (this.Data[xt][yt] !== 0) && (this.Data[x][y] !== 0 && this.Data[x][y] > -10)) return;

            this.XMarioA = xd * 8;
            this.YMarioA = yd * 8;
            this.MoveTime = this.CalcDistance(x, y, xd, yd) * 2 + 1;
        }
    }

    CalcDistance(x, y, xa, ya) {
        let distance = 0;
        while (true) {
            x += xa;
            y += ya;
            if (this.Level[x][y] !== MapTile.Road) return distance;
            if (this.Level[x - ya][y + xa] === MapTile.Road) return distance;
            if (this.Level[x + ya][y - xa] === MapTile.Road) return distance;

            distance++;
        }
    }

    Draw(context) {
        let x = 0, y = 0;

        if (this.WorldNumber === 8) return;

        context.drawImage(this.MapImage, 0, 0);

        for (y = 0; y <= 15; y++) {
            for (x = 20; x >= 0; x--) {
                if (this.Level[x][y] === MapTile.Water && this.IsWater(x * 2 - 1, y * 2 - 1)) {
                    this.WaterSprite.X = x * 16 - 8;
                    this.WaterSprite.Y = y * 16 - 8;
                    this.WaterSprite.Draw(context, this.camera);
                } else if (this.Level[x][y] === MapTile.Decoration) {
                    this.DecoSprite.X = x * 16;
                    this.DecoSprite.Y = y * 16;
                    this.DecoSprite.Draw(context, this.camera);
                } else if (this.Level[x][y] === MapTile.Level && this.Data[x][y] === -2) {
                    this.HelpSprite.X = x * 16 + 16;
                    this.HelpSprite.Y = y * 16 - 16;
                    this.HelpSprite.Draw(context, this.camera);
                }
            }
        }

        if (!Mario.MarioCharacter.Large) this.SmallMario.Draw(context, this.camera);
        else this.LargeMario.Draw(context, this.camera);

        this.Font.Strings[0] = { String: "MARIO " + Mario.MarioCharacter.Lives, X: 4, Y: 4 };
        this.FontShadow.Strings[0] = { String: "MARIO " + Mario.MarioCharacter.Lives, X: 5, Y: 5 };
        this.Font.Strings[1] = { String: "WORLD " + (this.WorldNumber + 1), X: 256, Y: 4 };
        this.FontShadow.Strings[1] = { String: "WORLD " + (this.WorldNumber + 1), X: 257, Y: 5 };

        this.FontShadow.Draw(context, this.camera);
        this.Font.Draw(context, this.camera);
    }

    LevelWon() {
        let x = this.XMario / 16, y = this.YMario / 16;
        if (this.Data[x][y] === -2) {
            this.NextWorld();
            return;
        }

        if (this.Data[x][y] !== -3) this.Data[x][y] = 0;
        else this.Data[x][y] = -10;

        this.RenderStatic();
    }

    GetX() {
        return 160;
    }

    GetY() {
        return 120;
    }

    CheckForChange(context) {
        if (this.WorldNumber === 8) context.ChangeState(new WinState());
        if (this.EnterLevel) context.ChangeState(new LevelState(this.LevelDifficulty, this.LevelType));
    }
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

    GetLevel() {
        return new LevelGenerator(320, 15).CreateLevel(this.LevelType, this.LevelDifficulty);
    }

    Enter() {
        this.Level = this.GetLevel();
        //play music here
        //if (this.LevelType === LevelType.Overground) {
        //Mario.PlayOvergroundMusic();
        //} else if (this.LevelType === LevelType.Underground) {
        //Mario.PlayUndergroundMusic();
        //} else if (this.LevelType === LevelType.Castle) {
        //Mario.PlayCastleMusic();
        //}

        this.Paused = false;
        this.Layer = new LevelRenderer(this.Level, 320, 240);
        this.Sprites = new Engine.DrawableManager();
        this.Camera = new Engine.Camera();
        this.Tick = 0;

        this.ShellsToCheck = [];
        this.FireballsToCheck = [];
        this.SpritesToAdd = [];
        this.SpritesToRemove = [];

        this.FontShadow = SpriteCuts.CreateBlackFont();
        this.Font = SpriteCuts.CreateWhiteFont();

        let scrollSpeed = 0, w = 0, h = 0;
        for (let i = 0; i < 2; i++) {
            scrollSpeed = 4 >> i;
            w = ((((this.Level.Width * 16) - 320) / scrollSpeed) | 0) + 320;
            h = ((((this.Level.Height * 16) - 240) / scrollSpeed) | 0) + 240;
            this.BgLayer[i] = new BackgroundRenderer(new BackgroundGenerator(w / 32 + 1, h / 32 + 1, i === 0, this.LevelType).CreateLevel(), 320, 240, scrollSpeed);
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
        if ((this.TimeLeft | 0) === 0) Mario.MarioCharacter.Die();

        if (this.StartTime > 0) this.StartTime++;

        this.Camera.X = Mario.MarioCharacter.X - 160;
        if (this.Camera.X < 0) this.Camera.X = 0;

        if (this.Camera.X > this.Level.Width * 16 - 320) this.Camera.X = this.Level.Width * 16 - 320;

        this.FireballsOnScreen = 0;

        for (i = 0; i < this.Sprites.Objects.length; i++) {
            sprite = this.Sprites.Objects[i];
            if (sprite !== Mario.MarioCharacter) {
                xd = sprite.X - this.Camera.X;
                yd = sprite.Y - this.Camera.Y;
                if (xd < -64 || xd > 320 + 64 || yd < -64 || yd > 240 + 64) this.Sprites.RemoveAt(i);
                else if (sprite instanceof Fireball) this.FireballsOnScreen++;
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

                    if (x * 16 + 8 > Mario.MarioCharacter.X + 16) dir = -1;
                    if (x * 16 + 8 < Mario.MarioCharacter.X - 16) dir = 1;

                    st = this.Level.GetSpriteTemplate(x, y);

                    if (st !== null) {
                        if (st.LastVisibleTick !== this.Tick - 1 && (st.Sprite === null || !this.Sprites.Contains(st.Sprite)))
                            st.Spawn(this, x, y, dir);

                        st.LastVisibleTick = this.Tick;
                    }

                    if (dir !== 0) {
                        b = this.Level.GetBlock(x, y);
                        if (((Tile.Behaviors[b & 0xff]) & Tile.Animated) > 0 && (((b % 16) / 4) | 0) === 3 && ((b / 16) | 0) === 0 && (this.Tick - x * 2) % 100 === 0) {
                            xCannon = x;
                            for (i = 0; i < 8; i++) {
                                this.AddSprite(new Sparkle(this, x * 16 + 8, y * 16 + ((Math.random() * 16) | 0), Math.random() * dir, 0, 0, 1, 5));
                            }
                            this.AddSprite(new BulletBill(this, x * 16 + 8 + dir * 8, y * 16 + 15, dir));
                            hasShotCannon = true;
                        }
                    }
                }
            }

            if (hasShotCannon) Engine.Resources.PlaySound("cannon");

            for (i = 0; i < this.Sprites.Objects.length; i++) this.Sprites.Objects[i].Update(delta);

            for (i = 0; i < this.Sprites.Objects.length; i++) this.Sprites.Objects[i].CollideCheck();

            for (i = 0; i < this.ShellsToCheck.length; i++) {
                for (j = 0; j < this.Sprites.Objects.length; j++) {
                    if (this.Sprites.Objects[j] !== this.ShellsToCheck[i] && !this.ShellsToCheck[i].Dead
                        && this.Sprites.Objects[j].ShellCollideCheck(this.ShellsToCheck[i])
                        && Mario.MarioCharacter.Carried === this.ShellsToCheck[i] && !this.ShellsToCheck[i].Dead) {
                        Mario.MarioCharacter.Carried = null;
                        this.ShellsToCheck[i].Die();
                    }
                }
            }
            this.ShellsToCheck.length = 0;

            for (i = 0; i < this.FireballsToCheck.length; i++) {
                for (j = 0; j < this.Sprites.Objects.length; j++) {
                    if (this.Sprites.Objects[j] !== this.FireballsToCheck[i] && !this.FireballsToCheck[i].Dead && this.Sprites.Objects[j].FireballCollideCheck(this.FireballsToCheck[i])) {
                        this.FireballsToCheck[i].Die();
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

        if (this.Camera.X < 0) this.Camera.X = 0;
        else if (this.Camera.Y < 0) this.Camera.Y = 0;

        if (this.Camera.X > this.Level.Width * 16 - 320) this.Camera.X = this.Level.Width * 16 - 320;
        if (this.Camera.Y > this.Level.Height * 16 - 240) this.Camera.Y = this.Level.Height * 16 - 240;

        for (i = 0; i < 2; i++) this.BgLayer[i].Draw(context, this.Camera);

        context.save();
        context.translate(-this.Camera.X, -this.Camera.Y);
        for (i = 0; i < this.Sprites.Objects.length; i++) {
            if (this.Sprites.Objects[i].Layer === 0) this.Sprites.Objects[i].Draw(context, this.Camera);
        }
        context.restore();

        this.Layer.Draw(context, this.Camera);
        this.Layer.DrawExit0(context, this.Camera, Mario.MarioCharacter.WinTime === 0);

        context.save();
        context.translate(-this.Camera.X, -this.Camera.Y);
        for (i = 0; i < this.Sprites.Objects.length; i++) {
            if (this.Sprites.Objects[i].Layer === 1) this.Sprites.Objects[i].Draw(context, this.Camera);
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
                if (Mario.MarioCharacter.Lives <= 0) this.GotoLoseState = true;
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
        if (radius > 320) return;

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
        for (i = 18; i >= 0; i--) context.lineTo(xp[i], yp[i]);
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
        for (i = 0; i <= xp.length - 1; i++) context.lineTo(xp[i], yp[i]);
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

        if ((Tile.Behaviors[block & 0xff] & Tile.Bumpable) > 0) {
            this.BumpInto(x, y - 1);
            this.Level.SetBlock(x, y, 4);
            this.Level.SetBlockData(x, y, 4);

            if ((Tile.Behaviors[block & 0xff] & Tile.Special) > 0) {
                Engine.Resources.PlaySound("sprout");
                if (!Mario.MarioCharacter.Large) {
                    this.AddSprite(new Mushroom(this, x * 16 + 8, y * 16 + 8));
                } else {
                    this.AddSprite(new FireFlower(this, x * 16 + 8, y * 16 + 8));
                }
            } else {
                Mario.MarioCharacter.GetCoin();
                Engine.Resources.PlaySound("coin");
                this.AddSprite(new CoinAnim(this, x, y));
            }
        }

        if ((Tile.Behaviors[block & 0xff] & Tile.Breakable) > 0) {
            this.BumpInto(x, y - 1);
            if (canBreakBricks) {
                Engine.Resources.PlaySound("breakblock");
                this.Level.SetBlock(x, y, 0);
                for (xx = 0; xx < 2; xx++) {
                    for (yy = 0; yy < 2; yy++) {
                        this.AddSprite(new Particle(this, x * 16 + xx * 8 + 4, y * 16 + yy * 8 + 4, (xx * 2 - 1) * 4, (yy * 2 - 1) * 4 - 8));
                    }
                }
            }
        }
    };

    BumpInto(x, y) {
        let block = this.Level.GetBlock(x, y), i = 0;
        if (((Tile.Behaviors[block & 0xff]) & Tile.PickUpable) > 0) {
            Mario.MarioCharacter.GetCoin();
            Engine.Resources.PlaySound("coin");
            this.Level.SetBlock(x, y, 0);
            this.AddSprite(new CoinAnim(x, y + 1));
        }

        for (i = 0; i < this.Sprites.Objects.length; i++) {
            this.Sprites.Objects[i].BumpCheck(x, y);
        }
    };

    CheckForChange(context) {
        if (this.GotoLoseState) context.ChangeState(new LoseState());
        else if (this.GotoMapState) context.ChangeState(Mario.GlobalMapState);
    };
};

/** PREDEFINED LEVEL STATE **/

class PredefinedLevelState extends LevelState {
    constructor(difficulty, type) {
        super(difficulty, type);

        this.NextLevel = false;
        this.agent = new /*PlayerAgent(); /*/ AIAgent([{"time":0.066,"ticks":2,"keycode":83,"event":"keyup"},{"time":0.8250000000000003,"ticks":25,"keycode":39,"event":"keydown"},{"time":1.354,"ticks":41,"keycode":39,"event":"keydown"},{"time":1.3860000000000001,"ticks":42,"keycode":39,"event":"keydown"},{"time":1.3860000000000001,"ticks":42,"keycode":39,"event":"keydown"},{"time":1.4220000000000002,"ticks":43,"keycode":39,"event":"keydown"},{"time":1.4860000000000002,"ticks":45,"keycode":39,"event":"keydown"},{"time":1.4860000000000002,"ticks":45,"keycode":39,"event":"keydown"},{"time":1.5180000000000002,"ticks":46,"keycode":39,"event":"keydown"},{"time":1.5630000000000002,"ticks":47,"keycode":39,"event":"keydown"},{"time":1.584,"ticks":48,"keycode":39,"event":"keydown"},{"time":1.627,"ticks":49,"keycode":39,"event":"keydown"},{"time":1.651,"ticks":50,"keycode":39,"event":"keydown"},{"time":1.69,"ticks":51,"keycode":39,"event":"keydown"},{"time":1.716,"ticks":52,"keycode":39,"event":"keydown"},{"time":1.751,"ticks":53,"keycode":39,"event":"keydown"},{"time":1.7819999999999998,"ticks":54,"keycode":39,"event":"keydown"},{"time":1.7819999999999998,"ticks":54,"keycode":39,"event":"keydown"},{"time":1.8279999999999998,"ticks":55,"keycode":39,"event":"keydown"},{"time":1.8479999999999999,"ticks":56,"keycode":39,"event":"keydown"},{"time":1.89,"ticks":57,"keycode":39,"event":"keydown"},{"time":1.9149999999999998,"ticks":58,"keycode":39,"event":"keyup"},{"time":2.0469999999999997,"ticks":62,"keycode":83,"event":"keydown"},{"time":2.2109999999999994,"ticks":67,"keycode":83,"event":"keyup"},{"time":2.4519999999999995,"ticks":74,"keycode":39,"event":"keydown"},{"time":2.5409999999999995,"ticks":77,"keycode":83,"event":"keydown"},{"time":2.5759999999999996,"ticks":78,"keycode":39,"event":"keyup"},{"time":2.654,"ticks":80,"keycode":83,"event":"keyup"},{"time":2.9379999999999997,"ticks":89,"keycode":39,"event":"keydown"},{"time":2.9699999999999998,"ticks":90,"keycode":83,"event":"keydown"},{"time":3.0359999999999996,"ticks":92,"keycode":39,"event":"keyup"},{"time":3.0749999999999997,"ticks":93,"keycode":83,"event":"keyup"},{"time":3.2739999999999996,"ticks":99,"keycode":39,"event":"keydown"},{"time":3.3659999999999997,"ticks":102,"keycode":83,"event":"keydown"},{"time":3.465,"ticks":105,"keycode":83,"event":"keyup"},{"time":3.8949999999999987,"ticks":118,"keycode":83,"event":"keydown"},{"time":4.289999999999999,"ticks":130,"keycode":83,"event":"keyup"},{"time":4.8180000000000005,"ticks":146,"keycode":65,"event":"keydown"},{"time":4.896000000000001,"ticks":148,"keycode":83,"event":"keydown"},{"time":5.280000000000002,"ticks":160,"keycode":83,"event":"keyup"},{"time":5.511000000000002,"ticks":167,"keycode":39,"event":"keyup"},{"time":5.846000000000004,"ticks":177,"keycode":65,"event":"keyup"},{"time":5.8750000000000036,"ticks":178,"keycode":39,"event":"keydown"},{"time":5.940000000000004,"ticks":180,"keycode":65,"event":"keydown"},{"time":5.973000000000004,"ticks":181,"keycode":83,"event":"keydown"},{"time":6.185000000000004,"ticks":187,"keycode":39,"event":"keyup"},{"time":6.404000000000005,"ticks":194,"keycode":37,"event":"keydown"},{"time":6.601000000000004,"ticks":200,"keycode":37,"event":"keyup"},{"time":6.7980000000000045,"ticks":206,"keycode":39,"event":"keydown"},{"time":7.326000000000006,"ticks":222,"keycode":39,"event":"keydown"},{"time":7.326000000000006,"ticks":222,"keycode":39,"event":"keyup"},{"time":7.326000000000006,"ticks":222,"keycode":65,"event":"keyup"},{"time":7.326000000000006,"ticks":222,"keycode":83,"event":"keyup"},{"time":7.4340000000000055,"ticks":225,"keycode":39,"event":"keydown"},{"time":7.459000000000006,"ticks":226,"keycode":83,"event":"keydown"},{"time":7.524000000000005,"ticks":228,"keycode":83,"event":"keyup"},{"time":7.7880000000000065,"ticks":236,"keycode":65,"event":"keydown"},{"time":7.7880000000000065,"ticks":236,"keycode":83,"event":"keydown"},{"time":8.185000000000006,"ticks":248,"keycode":39,"event":"keyup"},{"time":8.254000000000007,"ticks":250,"keycode":65,"event":"keyup"},{"time":8.284000000000006,"ticks":251,"keycode":83,"event":"keyup"},{"time":8.382000000000007,"ticks":254,"keycode":39,"event":"keydown"},{"time":8.910000000000005,"ticks":270,"keycode":39,"event":"keydown"},{"time":8.910000000000005,"ticks":270,"keycode":39,"event":"keydown"},{"time":8.946000000000005,"ticks":271,"keycode":39,"event":"keydown"},{"time":8.976000000000004,"ticks":272,"keycode":39,"event":"keydown"},{"time":9.021000000000004,"ticks":273,"keycode":39,"event":"keydown"},{"time":9.043000000000005,"ticks":274,"keycode":39,"event":"keydown"},{"time":9.075000000000005,"ticks":275,"keycode":39,"event":"keydown"},{"time":9.114000000000004,"ticks":276,"keycode":39,"event":"keydown"},{"time":9.141000000000004,"ticks":277,"keycode":39,"event":"keydown"},{"time":9.178000000000004,"ticks":278,"keycode":39,"event":"keydown"},{"time":9.207000000000004,"ticks":279,"keycode":39,"event":"keydown"},{"time":9.240000000000004,"ticks":280,"keycode":39,"event":"keydown"},{"time":9.240000000000004,"ticks":280,"keycode":39,"event":"keydown"},{"time":9.306000000000004,"ticks":282,"keycode":39,"event":"keydown"},{"time":9.306000000000004,"ticks":282,"keycode":39,"event":"keydown"},{"time":9.348000000000004,"ticks":283,"keycode":39,"event":"keydown"},{"time":9.372000000000003,"ticks":284,"keycode":39,"event":"keydown"},{"time":9.409000000000004,"ticks":285,"keycode":39,"event":"keydown"},{"time":9.439000000000004,"ticks":286,"keycode":39,"event":"keydown"},{"time":9.472000000000003,"ticks":287,"keycode":39,"event":"keydown"},{"time":9.505000000000003,"ticks":288,"keycode":39,"event":"keydown"},{"time":9.538000000000002,"ticks":289,"keycode":39,"event":"keydown"},{"time":9.570000000000002,"ticks":290,"keycode":39,"event":"keydown"},{"time":9.604000000000003,"ticks":291,"keycode":39,"event":"keydown"},{"time":9.637000000000002,"ticks":292,"keycode":39,"event":"keydown"},{"time":9.670000000000002,"ticks":293,"keycode":39,"event":"keydown"},{"time":9.702000000000002,"ticks":294,"keycode":39,"event":"keydown"},{"time":9.702000000000002,"ticks":294,"keycode":39,"event":"keydown"},{"time":9.737000000000002,"ticks":295,"keycode":39,"event":"keydown"},{"time":9.768000000000002,"ticks":296,"keycode":39,"event":"keydown"},{"time":9.815000000000003,"ticks":297,"keycode":39,"event":"keydown"},{"time":9.835000000000003,"ticks":298,"keycode":39,"event":"keydown"},{"time":9.868000000000002,"ticks":299,"keycode":39,"event":"keydown"},{"time":9.901000000000002,"ticks":300,"keycode":39,"event":"keydown"},{"time":9.933000000000002,"ticks":301,"keycode":39,"event":"keydown"},{"time":9.966000000000001,"ticks":302,"keycode":39,"event":"keydown"},{"time":10.002,"ticks":303,"keycode":39,"event":"keydown"},{"time":10.032,"ticks":304,"keycode":39,"event":"keydown"},{"time":10.032,"ticks":304,"keycode":39,"event":"keydown"},{"time":10.08,"ticks":305,"keycode":39,"event":"keydown"},{"time":10.099,"ticks":306,"keycode":39,"event":"keydown"},{"time":10.132,"ticks":307,"keycode":39,"event":"keydown"},{"time":10.164,"ticks":308,"keycode":39,"event":"keydown"},{"time":10.203999999999999,"ticks":309,"keycode":39,"event":"keydown"},{"time":10.230999999999998,"ticks":310,"keycode":39,"event":"keydown"},{"time":10.262999999999998,"ticks":311,"keycode":39,"event":"keydown"},{"time":10.296999999999999,"ticks":312,"keycode":39,"event":"keydown"},{"time":10.328999999999999,"ticks":313,"keycode":39,"event":"keydown"},{"time":10.328999999999999,"ticks":313,"keycode":39,"event":"keydown"},{"time":10.361999999999998,"ticks":314,"keycode":39,"event":"keyup"},{"time":10.593,"ticks":321,"keycode":83,"event":"keydown"},{"time":10.829,"ticks":328,"keycode":83,"event":"keyup"},{"time":10.989,"ticks":333,"keycode":37,"event":"keydown"},{"time":11.22,"ticks":340,"keycode":37,"event":"keyup"},{"time":11.266,"ticks":341,"keycode":37,"event":"keydown"},{"time":11.319,"ticks":343,"keycode":37,"event":"keyup"},{"time":11.385,"ticks":345,"keycode":37,"event":"keydown"},{"time":11.484,"ticks":348,"keycode":37,"event":"keyup"},{"time":11.583,"ticks":351,"keycode":39,"event":"keydown"},{"time":11.912999999999998,"ticks":361,"keycode":65,"event":"keydown"},{"time":12.242999999999997,"ticks":371,"keycode":65,"event":"keyup"},{"time":12.374999999999996,"ticks":375,"keycode":39,"event":"keyup"},{"time":12.572999999999995,"ticks":381,"keycode":83,"event":"keydown"},{"time":12.638999999999994,"ticks":383,"keycode":83,"event":"keyup"},{"time":12.869999999999996,"ticks":390,"keycode":83,"event":"keydown"},{"time":12.968999999999994,"ticks":393,"keycode":83,"event":"keyup"},{"time":13.343999999999992,"ticks":404,"keycode":39,"event":"keydown"},{"time":13.463999999999993,"ticks":408,"keycode":83,"event":"keydown"},{"time":13.694999999999993,"ticks":415,"keycode":39,"event":"keyup"},{"time":13.694999999999993,"ticks":415,"keycode":83,"event":"keyup"},{"time":14.136999999999993,"ticks":428,"keycode":37,"event":"keydown"},{"time":14.325999999999992,"ticks":434,"keycode":83,"event":"keydown"},{"time":14.354999999999992,"ticks":435,"keycode":37,"event":"keyup"},{"time":14.387999999999991,"ticks":436,"keycode":39,"event":"keydown"},{"time":14.486999999999991,"ticks":439,"keycode":83,"event":"keyup"},{"time":14.652999999999992,"ticks":444,"keycode":39,"event":"keyup"},{"time":14.717999999999991,"ticks":446,"keycode":37,"event":"keydown"},{"time":15.04899999999999,"ticks":456,"keycode":83,"event":"keydown"},{"time":15.04899999999999,"ticks":456,"keycode":37,"event":"keyup"},{"time":15.08199999999999,"ticks":457,"keycode":39,"event":"keydown"},{"time":15.212999999999989,"ticks":461,"keycode":83,"event":"keyup"},{"time":15.575999999999986,"ticks":472,"keycode":39,"event":"keydown"},{"time":15.613999999999987,"ticks":473,"keycode":39,"event":"keydown"},{"time":15.642999999999986,"ticks":474,"keycode":39,"event":"keydown"},{"time":15.674999999999986,"ticks":475,"keycode":39,"event":"keydown"},{"time":15.714999999999986,"ticks":476,"keycode":39,"event":"keydown"},{"time":15.714999999999986,"ticks":476,"keycode":39,"event":"keyup"},{"time":15.807999999999986,"ticks":479,"keycode":83,"event":"keydown"},{"time":15.906999999999986,"ticks":482,"keycode":37,"event":"keydown"},{"time":16.171999999999986,"ticks":490,"keycode":37,"event":"keyup"},{"time":16.235999999999986,"ticks":492,"keycode":83,"event":"keyup"},{"time":16.338999999999988,"ticks":495,"keycode":39,"event":"keydown"},{"time":16.69899999999999,"ticks":506,"keycode":39,"event":"keyup"},{"time":16.895999999999994,"ticks":512,"keycode":37,"event":"keydown"},{"time":17.093999999999998,"ticks":518,"keycode":83,"event":"keydown"},{"time":17.159999999999997,"ticks":520,"keycode":37,"event":"keyup"},{"time":17.193999999999996,"ticks":521,"keycode":83,"event":"keyup"},{"time":17.258999999999997,"ticks":523,"keycode":37,"event":"keydown"},{"time":17.325999999999997,"ticks":525,"keycode":83,"event":"keydown"},{"time":17.357999999999997,"ticks":526,"keycode":37,"event":"keyup"},{"time":17.424999999999997,"ticks":528,"keycode":83,"event":"keyup"},{"time":17.631999999999998,"ticks":534,"keycode":37,"event":"keydown"},{"time":17.82,"ticks":540,"keycode":37,"event":"keyup"},{"time":17.82,"ticks":540,"keycode":83,"event":"keydown"},{"time":17.887,"ticks":542,"keycode":39,"event":"keydown"},{"time":17.985000000000003,"ticks":545,"keycode":83,"event":"keyup"},{"time":18.382000000000005,"ticks":557,"keycode":39,"event":"keydown"},{"time":18.382000000000005,"ticks":557,"keycode":83,"event":"keydown"},{"time":18.480000000000008,"ticks":560,"keycode":83,"event":"keyup"},{"time":18.645000000000003,"ticks":565,"keycode":83,"event":"keydown"},{"time":18.810000000000006,"ticks":570,"keycode":83,"event":"keyup"},{"time":19.122000000000003,"ticks":579,"keycode":65,"event":"keydown"},{"time":19.503,"ticks":591,"keycode":65,"event":"keyup"},{"time":19.536,"ticks":592,"keycode":39,"event":"keyup"},{"time":19.701000000000004,"ticks":597,"keycode":39,"event":"keydown"},{"time":19.93200000000001,"ticks":604,"keycode":39,"event":"keyup"},{"time":20.072000000000006,"ticks":608,"keycode":83,"event":"keydown"},{"time":20.243000000000006,"ticks":613,"keycode":83,"event":"keyup"},{"time":20.329000000000004,"ticks":616,"keycode":83,"event":"keydown"},{"time":20.427000000000003,"ticks":619,"keycode":83,"event":"keyup"},{"time":20.539,"ticks":622,"keycode":39,"event":"keydown"},{"time":20.692,"ticks":627,"keycode":83,"event":"keydown"},{"time":20.724,"ticks":628,"keycode":39,"event":"keyup"},{"time":20.79,"ticks":630,"keycode":83,"event":"keyup"},{"time":20.93,"ticks":634,"keycode":83,"event":"keydown"},{"time":21.020999999999997,"ticks":637,"keycode":83,"event":"keyup"},{"time":21.186,"ticks":642,"keycode":37,"event":"keydown"},{"time":21.491,"ticks":651,"keycode":37,"event":"keyup"},{"time":21.549,"ticks":653,"keycode":83,"event":"keydown"},{"time":21.583,"ticks":654,"keycode":39,"event":"keydown"},{"time":21.662999999999997,"ticks":656,"keycode":83,"event":"keyup"},{"time":22.010999999999996,"ticks":667,"keycode":39,"event":"keyup"},{"time":22.010999999999996,"ticks":667,"keycode":83,"event":"keydown"},{"time":22.111999999999995,"ticks":670,"keycode":83,"event":"keyup"},{"time":22.274999999999995,"ticks":675,"keycode":83,"event":"keydown"},{"time":22.407999999999994,"ticks":679,"keycode":39,"event":"keydown"},{"time":22.407999999999994,"ticks":679,"keycode":83,"event":"keyup"},{"time":22.515999999999995,"ticks":682,"keycode":83,"event":"keydown"},{"time":22.539999999999996,"ticks":683,"keycode":39,"event":"keyup"},{"time":22.637999999999995,"ticks":686,"keycode":83,"event":"keyup"},{"time":22.968999999999994,"ticks":696,"keycode":83,"event":"keydown"},{"time":23.034999999999997,"ticks":698,"keycode":37,"event":"keydown"},{"time":23.066999999999997,"ticks":699,"keycode":65,"event":"keydown"},{"time":23.561999999999994,"ticks":714,"keycode":65,"event":"keydown"},{"time":23.594999999999995,"ticks":715,"keycode":65,"event":"keydown"},{"time":23.639999999999997,"ticks":716,"keycode":65,"event":"keydown"},{"time":23.660999999999998,"ticks":717,"keycode":65,"event":"keydown"},{"time":23.703999999999997,"ticks":718,"keycode":65,"event":"keydown"},{"time":23.726999999999997,"ticks":719,"keycode":65,"event":"keydown"},{"time":23.766,"ticks":720,"keycode":65,"event":"keydown"},{"time":23.793,"ticks":721,"keycode":65,"event":"keydown"},{"time":23.83,"ticks":722,"keycode":65,"event":"keydown"},{"time":23.86,"ticks":723,"keycode":65,"event":"keydown"},{"time":23.893,"ticks":724,"keycode":65,"event":"keydown"},{"time":23.893,"ticks":724,"keycode":65,"event":"keydown"},{"time":23.926000000000002,"ticks":725,"keycode":65,"event":"keydown"},{"time":23.958000000000002,"ticks":726,"keycode":65,"event":"keyup"},{"time":23.958000000000002,"ticks":726,"keycode":83,"event":"keyup"},{"time":24.024,"ticks":728,"keycode":37,"event":"keyup"},{"time":24.299000000000003,"ticks":736,"keycode":37,"event":"keydown"},{"time":24.322000000000003,"ticks":737,"keycode":37,"event":"keyup"},{"time":24.354000000000003,"ticks":738,"keycode":39,"event":"keydown"},{"time":24.862,"ticks":753,"keycode":39,"event":"keydown"},{"time":24.883,"ticks":754,"keycode":39,"event":"keydown"},{"time":24.916,"ticks":755,"keycode":39,"event":"keydown"},{"time":24.948,"ticks":756,"keycode":39,"event":"keydown"},{"time":24.987000000000002,"ticks":757,"keycode":39,"event":"keydown"},{"time":25.015,"ticks":758,"keycode":39,"event":"keydown"},{"time":25.047,"ticks":759,"keycode":39,"event":"keydown"},{"time":25.047,"ticks":759,"keycode":39,"event":"keydown"},{"time":25.113,"ticks":761,"keycode":39,"event":"keydown"},{"time":25.113,"ticks":761,"keycode":39,"event":"keydown"},{"time":25.158,"ticks":762,"keycode":39,"event":"keydown"},{"time":25.179000000000002,"ticks":763,"keycode":39,"event":"keydown"},{"time":25.221000000000004,"ticks":764,"keycode":39,"event":"keydown"},{"time":25.246000000000002,"ticks":765,"keycode":39,"event":"keydown"},{"time":25.279000000000003,"ticks":766,"keycode":39,"event":"keyup"},{"time":25.476000000000003,"ticks":772,"keycode":83,"event":"keydown"},{"time":25.576,"ticks":775,"keycode":83,"event":"keyup"},{"time":25.740000000000002,"ticks":780,"keycode":39,"event":"keydown"},{"time":25.839000000000002,"ticks":783,"keycode":39,"event":"keyup"},{"time":25.839000000000002,"ticks":783,"keycode":83,"event":"keydown"},{"time":25.938000000000002,"ticks":786,"keycode":83,"event":"keyup"},{"time":26.14200000000001,"ticks":792,"keycode":83,"event":"keydown"},{"time":26.14200000000001,"ticks":792,"keycode":39,"event":"keydown"},{"time":26.268000000000008,"ticks":796,"keycode":39,"event":"keyup"},{"time":26.268000000000008,"ticks":796,"keycode":83,"event":"keyup"},{"time":26.63100000000001,"ticks":807,"keycode":39,"event":"keydown"},{"time":26.63100000000001,"ticks":807,"keycode":65,"event":"keydown"},{"time":26.73000000000001,"ticks":810,"keycode":65,"event":"keyup"},{"time":26.73000000000001,"ticks":810,"keycode":39,"event":"keyup"},{"time":26.79700000000001,"ticks":812,"keycode":65,"event":"keydown"},{"time":26.862000000000013,"ticks":814,"keycode":65,"event":"keyup"},{"time":26.961000000000013,"ticks":817,"keycode":83,"event":"keydown"},{"time":27.100000000000012,"ticks":821,"keycode":83,"event":"keyup"},{"time":27.192000000000014,"ticks":824,"keycode":37,"event":"keydown"},{"time":27.52300000000002,"ticks":834,"keycode":37,"event":"keyup"},{"time":27.556000000000022,"ticks":835,"keycode":83,"event":"keydown"},{"time":27.588000000000022,"ticks":836,"keycode":39,"event":"keydown"},{"time":27.65400000000002,"ticks":838,"keycode":83,"event":"keyup"},{"time":27.819000000000024,"ticks":843,"keycode":39,"event":"keyup"},{"time":27.862000000000023,"ticks":844,"keycode":83,"event":"keydown"},{"time":27.951000000000022,"ticks":847,"keycode":83,"event":"keyup"},{"time":28.117000000000026,"ticks":852,"keycode":39,"event":"keydown"},{"time":28.394000000000023,"ticks":860,"keycode":39,"event":"keyup"},{"time":28.490000000000023,"ticks":863,"keycode":83,"event":"keydown"},{"time":28.51200000000002,"ticks":864,"keycode":37,"event":"keydown"},{"time":28.842000000000024,"ticks":874,"keycode":83,"event":"keyup"},{"time":28.877000000000024,"ticks":875,"keycode":37,"event":"keyup"},{"time":28.943000000000023,"ticks":877,"keycode":39,"event":"keydown"},{"time":29.021000000000022,"ticks":879,"keycode":65,"event":"keydown"},{"time":29.13900000000002,"ticks":883,"keycode":65,"event":"keyup"},{"time":29.20600000000002,"ticks":885,"keycode":65,"event":"keydown"},{"time":29.30500000000002,"ticks":888,"keycode":65,"event":"keyup"},{"time":29.37800000000002,"ticks":890,"keycode":65,"event":"keydown"},{"time":29.40300000000002,"ticks":891,"keycode":39,"event":"keyup"},{"time":29.46900000000002,"ticks":893,"keycode":65,"event":"keyup"},{"time":29.547000000000022,"ticks":895,"keycode":65,"event":"keydown"},{"time":29.635000000000023,"ticks":898,"keycode":65,"event":"keyup"},{"time":29.799000000000024,"ticks":903,"keycode":65,"event":"keydown"},{"time":29.908000000000026,"ticks":906,"keycode":65,"event":"keyup"},{"time":29.998000000000026,"ticks":909,"keycode":65,"event":"keydown"},{"time":30.09600000000003,"ticks":912,"keycode":65,"event":"keyup"},{"time":30.09600000000003,"ticks":912,"keycode":39,"event":"keydown"},{"time":30.360000000000028,"ticks":920,"keycode":39,"event":"keyup"},{"time":30.55800000000003,"ticks":926,"keycode":39,"event":"keydown"},{"time":30.757000000000026,"ticks":932,"keycode":65,"event":"keydown"},{"time":30.822000000000028,"ticks":934,"keycode":83,"event":"keydown"},{"time":30.987000000000027,"ticks":939,"keycode":65,"event":"keyup"},{"time":31.023000000000028,"ticks":940,"keycode":83,"event":"keyup"},{"time":31.25200000000003,"ticks":947,"keycode":39,"event":"keyup"},{"time":31.28400000000003,"ticks":948,"keycode":39,"event":"keydown"},{"time":31.812000000000037,"ticks":964,"keycode":39,"event":"keydown"},{"time":31.845000000000038,"ticks":965,"keycode":39,"event":"keydown"},{"time":31.845000000000038,"ticks":965,"keycode":39,"event":"keydown"},{"time":31.87800000000004,"ticks":966,"keycode":39,"event":"keydown"},{"time":31.91500000000004,"ticks":967,"keycode":39,"event":"keydown"},{"time":31.944000000000038,"ticks":968,"keycode":39,"event":"keydown"},{"time":31.97900000000004,"ticks":969,"keycode":39,"event":"keydown"},{"time":32.01000000000004,"ticks":970,"keycode":39,"event":"keydown"},{"time":32.05700000000004,"ticks":971,"keycode":39,"event":"keydown"},{"time":32.07700000000004,"ticks":972,"keycode":39,"event":"keydown"},{"time":32.11000000000004,"ticks":973,"keycode":39,"event":"keydown"},{"time":32.14200000000004,"ticks":974,"keycode":39,"event":"keydown"},{"time":32.14200000000004,"ticks":974,"keycode":39,"event":"keydown"},{"time":32.20800000000004,"ticks":976,"keycode":39,"event":"keydown"},{"time":32.20800000000004,"ticks":976,"keycode":39,"event":"keyup"},{"time":32.24500000000004,"ticks":977,"keycode":65,"event":"keydown"},{"time":32.40700000000004,"ticks":982,"keycode":65,"event":"keyup"},{"time":32.47800000000004,"ticks":984,"keycode":65,"event":"keydown"},{"time":32.60500000000003,"ticks":988,"keycode":65,"event":"keyup"},{"time":32.70300000000003,"ticks":991,"keycode":65,"event":"keydown"},{"time":32.80800000000003,"ticks":994,"keycode":65,"event":"keyup"},{"time":32.86800000000002,"ticks":996,"keycode":39,"event":"keydown"},{"time":32.901000000000025,"ticks":997,"keycode":65,"event":"keydown"},{"time":32.96700000000003,"ticks":999,"keycode":65,"event":"keyup"},{"time":33.071000000000026,"ticks":1002,"keycode":83,"event":"keydown"},{"time":33.166000000000025,"ticks":1005,"keycode":83,"event":"keyup"},{"time":33.368000000000016,"ticks":1011,"keycode":39,"event":"keyup"},{"time":33.561000000000014,"ticks":1017,"keycode":83,"event":"keydown"},{"time":33.664000000000016,"ticks":1020,"keycode":83,"event":"keyup"},{"time":33.75900000000002,"ticks":1023,"keycode":65,"event":"keydown"},{"time":33.85900000000002,"ticks":1026,"keycode":65,"event":"keyup"},{"time":33.97000000000002,"ticks":1029,"keycode":65,"event":"keydown"},{"time":34.06500000000002,"ticks":1032,"keycode":65,"event":"keyup"},{"time":34.189000000000014,"ticks":1036,"keycode":83,"event":"keydown"},{"time":34.299000000000014,"ticks":1039,"keycode":83,"event":"keyup"},{"time":34.387000000000015,"ticks":1042,"keycode":39,"event":"keydown"},{"time":34.62700000000001,"ticks":1049,"keycode":83,"event":"keydown"},{"time":34.689000000000014,"ticks":1051,"keycode":39,"event":"keyup"},{"time":34.689000000000014,"ticks":1051,"keycode":83,"event":"keyup"},{"time":34.848000000000006,"ticks":1056,"keycode":83,"event":"keydown"},{"time":34.947,"ticks":1059,"keycode":83,"event":"keyup"},{"time":35.14699999999999,"ticks":1065,"keycode":83,"event":"keydown"},{"time":35.17799999999999,"ticks":1066,"keycode":39,"event":"keydown"},{"time":35.21799999999999,"ticks":1067,"keycode":83,"event":"keyup"},{"time":35.409,"ticks":1073,"keycode":83,"event":"keydown"},{"time":35.544999999999995,"ticks":1077,"keycode":83,"event":"keyup"},{"time":35.74,"ticks":1083,"keycode":39,"event":"keyup"},{"time":35.871,"ticks":1087,"keycode":83,"event":"keydown"},{"time":35.98,"ticks":1090,"keycode":83,"event":"keyup"},{"time":36.035999999999994,"ticks":1092,"keycode":39,"event":"keydown"},{"time":36.16799999999999,"ticks":1096,"keycode":39,"event":"keyup"},{"time":36.16799999999999,"ticks":1096,"keycode":83,"event":"keydown"},{"time":36.29999999999999,"ticks":1100,"keycode":83,"event":"keyup"},{"time":36.464999999999996,"ticks":1105,"keycode":83,"event":"keydown"},{"time":36.504999999999995,"ticks":1106,"keycode":39,"event":"keydown"},{"time":36.56399999999999,"ticks":1108,"keycode":83,"event":"keyup"},{"time":36.59899999999999,"ticks":1109,"keycode":39,"event":"keyup"},{"time":36.86099999999998,"ticks":1117,"keycode":39,"event":"keydown"},{"time":36.92699999999998,"ticks":1119,"keycode":83,"event":"keydown"},{"time":36.970999999999975,"ticks":1120,"keycode":39,"event":"keyup"},{"time":37.064999999999976,"ticks":1123,"keycode":83,"event":"keyup"},{"time":37.25699999999997,"ticks":1129,"keycode":83,"event":"keydown"},{"time":37.25699999999997,"ticks":1129,"keycode":39,"event":"keydown"},{"time":37.35899999999997,"ticks":1132,"keycode":83,"event":"keyup"},{"time":37.421999999999976,"ticks":1134,"keycode":39,"event":"keyup"},{"time":37.55499999999998,"ticks":1138,"keycode":83,"event":"keydown"},{"time":37.65299999999998,"ticks":1141,"keycode":39,"event":"keydown"},{"time":37.68599999999998,"ticks":1142,"keycode":83,"event":"keyup"},{"time":37.75199999999998,"ticks":1144,"keycode":39,"event":"keyup"},{"time":37.85099999999998,"ticks":1147,"keycode":83,"event":"keydown"},{"time":37.949999999999974,"ticks":1150,"keycode":83,"event":"keyup"},{"time":38.08199999999997,"ticks":1154,"keycode":39,"event":"keydown"},{"time":38.181999999999974,"ticks":1157,"keycode":83,"event":"keydown"},{"time":38.21399999999997,"ticks":1158,"keycode":39,"event":"keyup"},{"time":38.313999999999965,"ticks":1161,"keycode":83,"event":"keyup"},{"time":38.346999999999966,"ticks":1162,"keycode":39,"event":"keydown"},{"time":38.54399999999996,"ticks":1168,"keycode":65,"event":"keydown"},{"time":38.57699999999996,"ticks":1169,"keycode":83,"event":"keydown"},{"time":38.78099999999996,"ticks":1175,"keycode":83,"event":"keyup"},{"time":38.80899999999996,"ticks":1176,"keycode":65,"event":"keyup"},{"time":38.84099999999996,"ticks":1177,"keycode":39,"event":"keyup"},{"time":38.94199999999996,"ticks":1180,"keycode":65,"event":"keydown"},{"time":39.04199999999995,"ticks":1183,"keycode":65,"event":"keyup"},{"time":39.119999999999955,"ticks":1185,"keycode":65,"event":"keydown"},{"time":39.20399999999996,"ticks":1188,"keycode":65,"event":"keyup"},{"time":39.20399999999996,"ticks":1188,"keycode":39,"event":"keydown"},{"time":39.30399999999996,"ticks":1191,"keycode":65,"event":"keydown"},{"time":39.40199999999996,"ticks":1194,"keycode":65,"event":"keyup"},{"time":39.46799999999996,"ticks":1196,"keycode":65,"event":"keydown"},{"time":39.57499999999995,"ticks":1199,"keycode":65,"event":"keyup"},{"time":39.60099999999996,"ticks":1200,"keycode":39,"event":"keyup"},{"time":39.86499999999995,"ticks":1208,"keycode":39,"event":"keydown"},{"time":39.934999999999945,"ticks":1210,"keycode":65,"event":"keydown"},{"time":39.962999999999944,"ticks":1211,"keycode":65,"event":"keyup"},{"time":40.07499999999994,"ticks":1214,"keycode":39,"event":"keyup"},{"time":40.09499999999994,"ticks":1215,"keycode":65,"event":"keydown"},{"time":40.160999999999945,"ticks":1217,"keycode":65,"event":"keyup"},{"time":40.227999999999945,"ticks":1219,"keycode":39,"event":"keydown"},{"time":40.25999999999994,"ticks":1220,"keycode":65,"event":"keydown"},{"time":40.39199999999993,"ticks":1224,"keycode":65,"event":"keyup"},{"time":40.498999999999924,"ticks":1227,"keycode":65,"event":"keydown"},{"time":40.589999999999925,"ticks":1230,"keycode":83,"event":"keydown"},{"time":40.656999999999925,"ticks":1232,"keycode":39,"event":"keyup"},{"time":40.73299999999992,"ticks":1234,"keycode":65,"event":"keyup"},{"time":40.75499999999992,"ticks":1235,"keycode":83,"event":"keyup"},{"time":41.12299999999991,"ticks":1246,"keycode":39,"event":"keydown"},{"time":41.38199999999991,"ticks":1254,"keycode":39,"event":"keyup"},{"time":41.38199999999991,"ticks":1254,"keycode":83,"event":"keydown"},{"time":41.51399999999991,"ticks":1258,"keycode":83,"event":"keyup"},{"time":41.64599999999991,"ticks":1262,"keycode":83,"event":"keydown"},{"time":41.74799999999991,"ticks":1265,"keycode":39,"event":"keydown"},{"time":41.74799999999991,"ticks":1265,"keycode":83,"event":"keyup"},{"time":41.88799999999991,"ticks":1269,"keycode":83,"event":"keydown"},{"time":41.910999999999916,"ticks":1270,"keycode":39,"event":"keyup"},{"time":42.008999999999915,"ticks":1273,"keycode":83,"event":"keyup"},{"time":42.045999999999914,"ticks":1274,"keycode":39,"event":"keydown"},{"time":42.50399999999991,"ticks":1288,"keycode":65,"event":"keydown"},{"time":42.50399999999991,"ticks":1288,"keycode":83,"event":"keydown"},{"time":42.70599999999991,"ticks":1294,"keycode":83,"event":"keyup"},{"time":42.70599999999991,"ticks":1294,"keycode":65,"event":"keyup"},{"time":42.76799999999991,"ticks":1296,"keycode":39,"event":"keyup"},{"time":42.9999999999999,"ticks":1303,"keycode":65,"event":"keydown"},{"time":42.9999999999999,"ticks":1303,"keycode":83,"event":"keydown"},{"time":42.9999999999999,"ticks":1303,"keycode":65,"event":"keyup"},{"time":43.09799999999989,"ticks":1306,"keycode":83,"event":"keyup"},{"time":43.362999999999886,"ticks":1314,"keycode":39,"event":"keydown"},{"time":43.49399999999988,"ticks":1318,"keycode":65,"event":"keydown"},{"time":43.534999999999876,"ticks":1319,"keycode":39,"event":"keyup"},{"time":43.592999999999876,"ticks":1321,"keycode":65,"event":"keyup"},{"time":43.69199999999987,"ticks":1324,"keycode":83,"event":"keydown"},{"time":43.79099999999987,"ticks":1327,"keycode":83,"event":"keyup"},{"time":43.95799999999987,"ticks":1332,"keycode":39,"event":"keydown"},{"time":44.05599999999987,"ticks":1335,"keycode":83,"event":"keydown"},{"time":44.087999999999866,"ticks":1336,"keycode":39,"event":"keyup"},{"time":44.15399999999986,"ticks":1338,"keycode":83,"event":"keyup"},{"time":44.318999999999846,"ticks":1343,"keycode":83,"event":"keydown"},{"time":44.38499999999985,"ticks":1345,"keycode":39,"event":"keydown"},{"time":44.42399999999985,"ticks":1346,"keycode":83,"event":"keyup"},{"time":44.48699999999985,"ticks":1348,"keycode":39,"event":"keyup"},{"time":44.59799999999985,"ticks":1351,"keycode":83,"event":"keydown"},{"time":44.71599999999985,"ticks":1355,"keycode":83,"event":"keyup"},{"time":44.92699999999984,"ticks":1361,"keycode":37,"event":"keydown"},{"time":45.14499999999983,"ticks":1368,"keycode":37,"event":"keyup"},{"time":45.20999999999983,"ticks":1370,"keycode":83,"event":"keydown"},{"time":45.407999999999824,"ticks":1376,"keycode":83,"event":"keyup"},{"time":45.608999999999824,"ticks":1382,"keycode":39,"event":"keydown"},{"time":45.638999999999825,"ticks":1383,"keycode":39,"event":"keyup"},{"time":45.705999999999825,"ticks":1385,"keycode":37,"event":"keydown"},{"time":45.90299999999982,"ticks":1391,"keycode":37,"event":"keyup"},{"time":45.93599999999982,"ticks":1392,"keycode":39,"event":"keydown"},{"time":45.93599999999982,"ticks":1392,"keycode":83,"event":"keydown"},{"time":46.19999999999982,"ticks":1400,"keycode":83,"event":"keyup"},{"time":47.78399999999975,"ticks":1448,"keycode":83,"event":"keydown"},{"time":47.851999999999755,"ticks":1450,"keycode":83,"event":"keyup"},{"time":48.27899999999975,"ticks":1463,"keycode":65,"event":"keydown"},{"time":48.37899999999975,"ticks":1466,"keycode":83,"event":"keydown"},{"time":48.41199999999975,"ticks":1467,"keycode":65,"event":"keyup"},{"time":48.50999999999974,"ticks":1470,"keycode":83,"event":"keyup"},{"time":48.97199999999974,"ticks":1484,"keycode":83,"event":"keydown"},{"time":48.97199999999974,"ticks":1484,"keycode":39,"event":"keyup"},{"time":49.104999999999734,"ticks":1488,"keycode":83,"event":"keyup"},{"time":49.30299999999973,"ticks":1494,"keycode":83,"event":"keydown"},{"time":49.400999999999726,"ticks":1497,"keycode":83,"event":"keyup"},{"time":49.50599999999973,"ticks":1500,"keycode":39,"event":"keydown"},{"time":49.598999999999734,"ticks":1503,"keycode":39,"event":"keyup"},{"time":49.598999999999734,"ticks":1503,"keycode":83,"event":"keydown"},{"time":49.730999999999725,"ticks":1507,"keycode":83,"event":"keyup"},{"time":49.730999999999725,"ticks":1507,"keycode":39,"event":"keydown"},{"time":49.86399999999973,"ticks":1511,"keycode":65,"event":"keydown"},{"time":49.928999999999725,"ticks":1513,"keycode":83,"event":"keydown"},{"time":50.06099999999972,"ticks":1517,"keycode":83,"event":"keyup"},{"time":50.15999999999973,"ticks":1520,"keycode":65,"event":"keyup"},{"time":50.23799999999973,"ticks":1522,"keycode":65,"event":"keydown"},{"time":50.35799999999973,"ticks":1526,"keycode":65,"event":"keyup"},{"time":50.42399999999973,"ticks":1528,"keycode":65,"event":"keydown"},{"time":50.52399999999973,"ticks":1531,"keycode":65,"event":"keyup"},{"time":50.55699999999973,"ticks":1532,"keycode":39,"event":"keyup"},{"time":50.58899999999973,"ticks":1533,"keycode":65,"event":"keydown"},{"time":50.65499999999973,"ticks":1535,"keycode":83,"event":"keydown"},{"time":50.72199999999973,"ticks":1537,"keycode":83,"event":"keyup"},{"time":50.72199999999973,"ticks":1537,"keycode":65,"event":"keyup"},{"time":50.91899999999973,"ticks":1543,"keycode":65,"event":"keydown"},{"time":50.95799999999973,"ticks":1544,"keycode":39,"event":"keydown"},{"time":51.019999999999726,"ticks":1546,"keycode":65,"event":"keyup"},{"time":51.281999999999734,"ticks":1554,"keycode":83,"event":"keydown"},{"time":51.281999999999734,"ticks":1554,"keycode":39,"event":"keyup"},{"time":51.38099999999974,"ticks":1557,"keycode":83,"event":"keyup"},{"time":51.54799999999973,"ticks":1562,"keycode":83,"event":"keydown"},{"time":51.62499999999973,"ticks":1564,"keycode":83,"event":"keyup"},{"time":51.74399999999973,"ticks":1568,"keycode":83,"event":"keydown"},{"time":51.809999999999725,"ticks":1570,"keycode":39,"event":"keydown"},{"time":51.84899999999973,"ticks":1571,"keycode":83,"event":"keyup"},{"time":51.98199999999973,"ticks":1575,"keycode":83,"event":"keydown"},{"time":52.00799999999973,"ticks":1576,"keycode":39,"event":"keyup"},{"time":52.074999999999726,"ticks":1578,"keycode":83,"event":"keyup"},{"time":52.214999999999726,"ticks":1582,"keycode":83,"event":"keydown"},{"time":52.273999999999724,"ticks":1584,"keycode":83,"event":"keyup"},{"time":52.40399999999972,"ticks":1588,"keycode":37,"event":"keydown"},{"time":52.734999999999715,"ticks":1598,"keycode":37,"event":"keyup"},{"time":52.76799999999972,"ticks":1599,"keycode":83,"event":"keydown"},{"time":52.865999999999715,"ticks":1602,"keycode":39,"event":"keydown"},{"time":52.865999999999715,"ticks":1602,"keycode":83,"event":"keyup"},{"time":53.29999999999969,"ticks":1615,"keycode":65,"event":"keydown"},{"time":53.39399999999969,"ticks":1618,"keycode":65,"event":"keyup"},{"time":53.46099999999969,"ticks":1620,"keycode":65,"event":"keydown"},{"time":53.52599999999969,"ticks":1622,"keycode":39,"event":"keyup"},{"time":53.56599999999969,"ticks":1623,"keycode":65,"event":"keyup"},{"time":53.79899999999969,"ticks":1630,"keycode":83,"event":"keydown"},{"time":53.88899999999968,"ticks":1633,"keycode":83,"event":"keyup"},{"time":53.92399999999968,"ticks":1634,"keycode":39,"event":"keydown"},{"time":54.02999999999968,"ticks":1637,"keycode":39,"event":"keyup"},{"time":54.25199999999968,"ticks":1644,"keycode":39,"event":"keydown"},{"time":54.317999999999685,"ticks":1646,"keycode":83,"event":"keydown"},{"time":54.384999999999685,"ticks":1648,"keycode":39,"event":"keyup"},{"time":54.41699999999968,"ticks":1649,"keycode":83,"event":"keyup"},{"time":54.55899999999968,"ticks":1653,"keycode":83,"event":"keydown"},{"time":54.58199999999968,"ticks":1654,"keycode":39,"event":"keydown"},{"time":54.647999999999676,"ticks":1656,"keycode":83,"event":"keyup"},{"time":54.74699999999968,"ticks":1659,"keycode":39,"event":"keyup"},{"time":54.79499999999968,"ticks":1660,"keycode":83,"event":"keydown"},{"time":54.87999999999968,"ticks":1663,"keycode":83,"event":"keyup"},{"time":54.98399999999968,"ticks":1666,"keycode":83,"event":"keydown"},{"time":55.04399999999968,"ticks":1668,"keycode":83,"event":"keyup"},{"time":55.175999999999675,"ticks":1672,"keycode":39,"event":"keydown"},{"time":55.175999999999675,"ticks":1672,"keycode":83,"event":"keydown"},{"time":55.27499999999967,"ticks":1675,"keycode":83,"event":"keyup"},{"time":55.340999999999674,"ticks":1677,"keycode":39,"event":"keyup"},{"time":55.40699999999967,"ticks":1679,"keycode":83,"event":"keydown"},{"time":55.51599999999967,"ticks":1682,"keycode":83,"event":"keyup"},{"time":55.73799999999968,"ticks":1689,"keycode":37,"event":"keydown"},{"time":55.902999999999665,"ticks":1694,"keycode":83,"event":"keydown"},{"time":56.16699999999966,"ticks":1702,"keycode":83,"event":"keyup"},{"time":56.19899999999966,"ticks":1703,"keycode":37,"event":"keyup"},{"time":56.19899999999966,"ticks":1703,"keycode":39,"event":"keydown"},{"time":56.364999999999654,"ticks":1708,"keycode":65,"event":"keydown"},{"time":56.46399999999965,"ticks":1711,"keycode":65,"event":"keyup"},{"time":56.52899999999965,"ticks":1713,"keycode":65,"event":"keydown"},{"time":56.62799999999965,"ticks":1716,"keycode":65,"event":"keyup"},{"time":56.72699999999965,"ticks":1719,"keycode":65,"event":"keydown"},{"time":56.79299999999965,"ticks":1721,"keycode":65,"event":"keyup"},{"time":56.95799999999966,"ticks":1726,"keycode":65,"event":"keydown"},{"time":57.068999999999654,"ticks":1729,"keycode":65,"event":"keyup"},{"time":57.16299999999965,"ticks":1732,"keycode":65,"event":"keydown"},{"time":57.25499999999965,"ticks":1735,"keycode":65,"event":"keyup"},{"time":57.518999999999636,"ticks":1743,"keycode":65,"event":"keydown"},{"time":57.518999999999636,"ticks":1743,"keycode":83,"event":"keydown"},{"time":57.71699999999963,"ticks":1749,"keycode":65,"event":"keyup"},{"time":57.75099999999963,"ticks":1750,"keycode":83,"event":"keyup"},{"time":58.013999999999626,"ticks":1758,"keycode":39,"event":"keyup"}]);
    }


    GetLevel() {
        return new PredefinedLevelGenerator({ "Width": 320, "Height": 15, "ExitX": 264, "ExitY": 13, "Map": [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 144, 131, 145, 145], [0, 0, 0, 0, 0, 0, 0, 10, 26, 26, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 11, 27, 27, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 146, 147, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 26, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 27, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 26, 26, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 27, 27, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 131, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 132, 148, 148, 148, 148, 148, 148, 148, 148, 129, 145, 145, 145], [0, 0, 133, 149, 149, 149, 149, 149, 149, 149, 149, 129, 145, 145, 145], [0, 0, 133, 149, 149, 149, 149, 149, 149, 149, 149, 129, 145, 145, 145], [0, 0, 134, 150, 150, 150, 150, 150, 150, 150, 150, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 132, 148, 148, 148, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 134, 150, 150, 150, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 132, 148, 148, 148, 148, 148, 148, 129, 145, 145, 145], [0, 0, 0, 0, 133, 149, 149, 149, 149, 149, 149, 129, 145, 145, 145], [0, 0, 0, 0, 134, 150, 150, 180, 148, 148, 148, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 134, 150, 150, 150, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 147, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 144, 131, 145, 145], [0, 0, 0, 0, 0, 0, 0, 132, 148, 148, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 134, 150, 150, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 146, 147, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 147, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 148, 148, 148, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 150, 150, 150, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 144, 131, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 132, 148, 148, 148, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 134, 150, 150, 150, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 146, 146, 147], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 131], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 144, 131, 145], [0, 0, 0, 0, 0, 0, 0, 16, 0, 34, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 16, 0, 34, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 21, 0, 34, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 16, 0, 34, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 16, 0, 34, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 21, 0, 34, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 21, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 146, 147, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 131, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 132, 148, 148, 148, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 134, 150, 150, 150, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 147, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 144, 131, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 146, 147, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 144, 131, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 146, 147, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 147], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 131], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 144, 131, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 21, 0, 34, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 16, 0, 0, 0, 129, 145, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 147, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 147, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 132, 148, 148, 148, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 133, 149, 149, 149, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 134, 150, 150, 150, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 128, 131, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 21, 0, 34, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 0, 0, 129, 145, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 130, 147, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 22, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 129, 145]], "Data": [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]], "SpriteTemplates": [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, { "Type": 0, "Winged": false, "LastVisibleTick": -1, "IsDead": false, "Sprite": null }, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, { "Type": 2, "Winged": false, "LastVisibleTick": -1, "IsDead": false, "Sprite": null }, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, { "Type": 2, "Winged": false, "LastVisibleTick": -1, "IsDead": false, "Sprite": null }, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, { "Type": 2, "Winged": false, "LastVisibleTick": -1, "IsDead": false, "Sprite": null }, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, { "Type": 0, "Winged": false, "LastVisibleTick": -1, "IsDead": false, "Sprite": null }, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, { "Type": 1, "Winged": false, "LastVisibleTick": -1, "IsDead": false, "Sprite": null }, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, { "Type": 1, "Winged": false, "LastVisibleTick": -1, "IsDead": false, "Sprite": null }, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, { "Type": 0, "Winged": false, "LastVisibleTick": -1, "IsDead": false, "Sprite": null }, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, { "Type": 1, "Winged": false, "LastVisibleTick": -1, "IsDead": false, "Sprite": null }, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, { "Type": 1, "Winged": false, "LastVisibleTick": -1, "IsDead": false, "Sprite": null }, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]] }).CreateLevel();
    }

    Enter() {
        super.Enter();
        this.NextLevel = false;
    }

    CheckForChange(context) {
        if (this.GotoLoseState || this.NextLevel) {
            console.log(Mario.MarioCharacter.gameplayMetrics.noJumps);
            
            //this.agent.StoreActions(); // Store player actions

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

    Update(delta) {
        this.agent.Update(delta);
        super.Update(delta);
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

/** PREDEFINED TITLE STATE **/
class PredefinedTitleState extends TitleState {
    CheckForChange(context) {
        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) context.ChangeState(new PredefinedLevelState(1, 0));
    }
};

/** AGENT **/

class Agent extends NotchSprite {
    constructor(actions) {
        super();
        this.actions = actions;
        
        this.ticks = 0;
        this.time = 0;
        this.currentEvent = 0;
    }

    Update(delta) {
        this.time += delta;

        this.ticks++;
    }
};

class PlayerAgent extends Agent {
    constructor() {
        super([]);


        document.addEventListener('keydown', this.StoreEvent.bind(this));
        document.addEventListener('keyup', this.StoreEvent.bind(this));
    }

    StoreEvent(evt) {
        this.actions.push({
            'time': this.time,
            'ticks': this.ticks,
            'keycode': evt.keyCode, // TODO fix because it is deprecated?
            'event': evt.type
        });
    }

    StoreActions() {
        console.log(JSON.stringify(this.actions)); // TODO Store in JSON file or send to server ?
    }
};

class AIAgent extends Agent {
    constructor(actions) {
        super(actions);
    }

    Update(delta) {
        super.Update(delta);

        while (true) {
            const evt = this.actions[this.currentEvent]
            if (!(this.currentEvent < this.actions.length && evt.ticks <= this.ticks)) break;

            document.dispatchEvent(new KeyboardEvent(evt.event, { 'keyCode': evt.keycode }));

            this.currentEvent++;
        }
    }
};