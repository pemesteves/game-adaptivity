
/**
	Just create the global mario object.
	Adapted from Rob Kleffner, 2011.
	Code by Pedro Esteves, 2022
**/

class Mario {
    static MarioCharacter;
    static GlobalMapState;
};

/**
    Helper to cut up the sprites.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

class EnemySpriteTemplate {
    constructor(x, y, sprite) {
        this.X = x;
        this.Y = y;
        this.SpriteTemplate = sprite;
    }
};

/**
    Represents a playable level in the game.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

class LevelType {
    static Overground = 0;
    static Underground = 1;
    static Castle = 2;
};

class Odds {
    static Straight = 0;
    static HillStraight = 1;
    static Tubes = 2;
    static Jump = 3;
    static Cannons = 4;
};

class Level {
    constructor(width, height, type) {
        this.Width = width;
        this.Height = height;
        this.ExitX = 10;
        this.ExitY = 10;
        this.Type = type;

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

        this.JumpSections = [];
        this.TubeSections = [];
        this.StraightSections = [];
        this.HillStraightSections = [];
        this.CannonSections = [];

        this.EnemySpriteTemplates = [];

        // Only used in LevelType.Castle and LevelType.Underground
        this.CeilingRnd = [];
        this.RunRnd = [];
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
        this.EnemySpriteTemplates.push(new EnemySpriteTemplate(x, y, template));
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

    SetJumpSection(section) {
        this.JumpSections.push(section);
    }

    SetJumpSections(sections) {
        this.JumpSections = sections;
    }

    SetTubeSection(section) {
        this.TubeSections.push(section);
    }

    SetTubeSections(sections) {
        this.TubeSections = sections;
    }

    SetStraightSection(section) {
        this.StraightSections.push(section);
    }

    SetStraightSections(sections) {
        this.StraightSections = sections;
    }

    SetHillStraightSection(section) {
        this.HillStraightSections.push(section);
    }

    SetHillStraightSections(sections) {
        this.HillStraightSections = sections;
    }

    SetCannonSection(section) {
        this.CannonSections.push(section);
    }

    SetCannonSections(sections) {
        this.CannonSections = sections;
    }

    SetCeilingRnd(c) {
        this.CeilingRnd.push(c);
    }

    SetCeilingRndArr(c) {
        this.CeilingRnd = c;
    }

    SetRunRnd(r) {
        this.RunRnd.push(r);
    }

    SetRunRndArr(r) {
        this.RunRnd = r;
    }

    PrintLevel() {
        return {
            "Width": this.Width,
            "Height": this.Height,
            "ExitX": this.ExitX,
            "ExitY": this.ExitY,
            "Type": this.Type,
            "EnemySpriteTemplates": this.EnemySpriteTemplates,
            "JumpSections": this.JumpSections,
            "TubeSections": this.TubeSections,
            "StraightSections": this.StraightSections,
            "HillStraightSections": this.HillStraightSections,
            "CannonSections": this.CannonSections,
            "CeilingRnd": this.CeilingRnd,
            "RunRnd": this.RunRnd
        };
    }
};

class PredefinedLevel extends Level {
    constructor(width, height, type) {
        super(width, height, type);

        this.coinID = 0;
        this.powerupID = 0;
        this.enemyID = 0;

        this.coins = [];
        this.powerups = [];
        this.enemies = [];
    }

    SetBlock(x, y, block) {
        super.SetBlock(x, y, block);

        const b = Tile.Behaviors[block & 0xff];

        if ((b & Tile.PickUpable) > 0 || ((b & Tile.Bumpable) > 0 && (b & Tile.Special) <= 0)) { // Coin
            this.coins.push({
                "ID": ++this.coinID,
                "X": x,
                "Y": y
            });
        }
        else if ((b & Tile.Special) > 0) { // Powerup
            this.powerups.push({
                "ID": ++this.powerupID,
                "X": x,
                "Y": y
            });
        }
    }

    SetSpriteTemplate(x, y, template) {
        if (this.IsOutsideBoundaries(x, y)) return;

        super.SetSpriteTemplate(x, y, template);
        this.enemies.push({
            "ID": ++this.enemyID,
            "Template": template
        });
    }

    GetCoinID(x, y) {
        for (let i = 0; i < this.coins.length; i++) {
            if (this.coins[i].X === x && this.coins[i].Y === y) return this.coins[i].ID;
        }

        return null;
    }

    GetPowerupID(x, y) {
        for (let i = 0; i < this.powerups.length; i++) {
            if (this.powerups[i].X === x && this.powerups[i].Y === y) return this.powerups[i].ID;
        }

        return null;
    }

    GetEnemyID(template) {
        for (let i = 0; i < this.enemies.length; i++) {
            if (this.enemies[i].Template === template) return this.enemies[i].ID;
        }

        return null;
    }
}

/**
    Generates the backgrounds for a level.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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
        let level = new Level(this.Width, this.Height, this.Type);
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

/**
    Renders a background portion of the level.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

/**
    Noise function to generate the world maps.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

/**
    Notch made his own sprite class for this game. Rather than hack around my own,
    I directly ported his to JavaScript and used that where needed.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

class CauseOfDeath {
    static Hole = 1;
    static Enemy = 2;
    static Time = 3;
};

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
        this.Lives = 1;
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
                this.gameplayMetrics.RegisterJump();
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
                this.gameplayMetrics.RegisterWallJump();
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

        // Fall into hole
        if (this.Y > this.World.Level.Height * 16 + 16) {
            this.gameplayMetrics.RegisterCauseOfDeath(CauseOfDeath.Hole);
            this.Die();
        }

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

                // Grounded
                if (!this.WasOnGround) this.gameplayMetrics.RegisterLanding();
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
            this.GetCoin(x, y);
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
        } else {
            this.gameplayMetrics.RegisterCauseOfDeath(CauseOfDeath.Enemy);
            this.Die();
        }
    }

    Win() {
        this.XDeathPos = this.X | 0;
        this.YDeathPos = this.Y | 0;
        this.World.Paused = true;
        this.WinTime = 1;
        Engine.Resources.PlaySound("exit");
        
        // Register Winning Time
        this.gameplayMetrics.RegisterEndingTime();
    }

    Die() {
        this.XDeathPos = this.X | 0;
        this.YDeathPos = this.Y | 0;
        this.World.Paused = true;
        this.DeathTime = 1;
        Engine.Resources.PlaySound("death");
        this.SetLarge(false, false);

        // Register Death Time
        this.gameplayMetrics.RegisterEndingTime();
    }

    GetFlower(x, y) {
        if (this.DeathTime > 0 && this.World.Paused) return;

        this.gameplayMetrics.CollectedPowerup(x, y);

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

    GetMushroom(x, y) {
        if (this.DeathTime > 0 && this.World.Paused) return;

        this.gameplayMetrics.CollectedPowerup(x, y);
        
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

    GetCoin(x, y) {
        if (x !== undefined && y !== undefined) this.gameplayMetrics.CollectedCoin(x, y);

        this.Coins++;
        if (this.Coins === 100) {
            this.Coins = 0;
            this.Get1Up();
        }
    }

    ResetMetrics() {
        this.gameplayMetrics = new GameplayMetrics();
    }
};

/**
    Renders a playable level.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

class JumpSection {
    /**
     * js: Distance between the start of the jump section and the hole
     * jl: Distance between the hole and the end of the jump section
     * length: Section length
     * x, y: Coordinates (* 16 + 8 to get the character coordinates)
     * hasStairs: Decide if the gap has stone stairs
     * floor: Distance between the level top and the hole position
     */
    constructor(js, jl, length, x0, hasStairs, floor) {
        this.JS = js;
        this.JL = jl;
        this.Length = length;
        this.X0 = x0;
        this.HasStairs = hasStairs;
        this.Floor = floor;
    }

    GetHoleStartX() {
        return this.X0 + this.JS;
    }

    GetHoleEndX() {
        return this.X0 + this.Length - this.JS - 1;
    }

    GetFloor() {
        return this.Floor;
    }
};

class TubeSection {
    constructor(x0, length, floor, xTube, tubeHeight) {
        this.Length = length;
        this.Floor = floor;
        this.XTube = xTube;
        this.TubeHeight = tubeHeight;
        this.X0 = x0;

        this.XTubeRndValues = [];
        this.TubeHeightRndValues = [];
    }

    AddXTubeRndValue(v) {
        this.XTubeRndValues.push(v);
    }

    AddTubeHeightRndValue(v) {
        this.TubeHeightRndValues.push(v);
    }
};

class StraightSection {
    constructor(x0, length, floor) {
        this.X0 = x0;
        this.Length = length;
        this.Floor = floor;


        this.Decorate = null;
    }

    SetDecorate(decorate) {
        this.Decorate = decorate;
    }
};

class HillStraightSection {
    constructor(x0, length, floor) {
        this.X0 = x0;
        this.Length = length;
        this.Floor = floor;

        this.Hrnd = [];
        this.Lrnd = [];
        this.XXOrnd = [];
        this.Blocks = [];

        this.DecorateIteration = -1;


        this.Decorate = null;
    }

    SetDecorate(decorate) {
        this.Decorate = decorate;
    }

    SetHrndValue(v) {
        this.Hrnd.push(v);
    }

    SetLrndValue(v) {
        this.Lrnd.push(v);
    }

    SetXXOrndValue(v) {
        this.XXOrnd.push(v);
    }

    SetDecorateIteration(v) {
        this.DecorateIteration = v;
    }

    AddGetBlock(i, v) {
        if (this.Blocks.length <= i) {
            this.Blocks.push([]);
        }

        this.Blocks[i].push(v);
    }
};

class CannonSection {
    constructor(length, floor, x0) {
        this.Length = length;
        this.Floor = floor;
        this.X0 = x0;
    
        this.XCannon = [];
        this.CannonHeight = [];
    }

    AddXCannon(x) {
        this.XCannon.push(x);
    }

    AddCannonHeight(h) {
        this.CannonHeight.push(h);
    }
}

class DecorateSection {
    constructor(x0, x1, floor) {
        this.X0 = x0;
        this.X1 = x1;
        this.Floor = floor;

        this.GenerateCoinLine = true;

        this.SBegin = 0;
        this.SEnd = 0;
        this.EBegin = 0;
        this.EEnd = 0;
        this.Rnd1 = [];
        this.Rnd2 = [];
        this.Rnd3 = [];
        this.Rnd4 = [];
    }

    SetBegin(s, e) {
        this.SBegin = s;
        this.EBegin = e;
    }

    SetEnd(s, e) {
        this.SEnd = s;
        this.EEnd = e;
    }

    SetRandomValues(rnd1, rnd2, rnd3, rnd4) {
        this.Rnd1.push(rnd1);
        this.Rnd2.push(rnd2);
        this.Rnd3.push(rnd3);
        this.Rnd4.push(rnd4);
    }

    SetGenerateCoinLine(g) {
        this.GenerateCoinLine = g;
    }
};

/**
    Generates a psuedo-random procedural level.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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
        let length = 0, floor = 0, ceiling = 0, run = 0, level = null;

        this.Type = type;
        this.Difficulty = difficulty;
        this.Odds[Odds.Straight] = 20;
        this.Odds[Odds.HillStraight] = 10;
        this.Odds[Odds.Tubes] = 2 + difficulty;
        this.Odds[Odds.Jump] = 2 * difficulty;
        this.Odds[Odds.Cannon] = -10 + 5 * difficulty;

        if (this.Type !== LevelType.Overground) this.Odds[Odds.HillStraight] = 0;

        for (let i = 0; i < this.Odds.length; i++) {
            if (this.Odds[i] < 0) this.Odds[i] = 0;

            this.TotalOdds += this.Odds[i];
            this.Odds[i] = this.TotalOdds - this.Odds[i];
        }

        level = new Level(this.Width, this.Height, type);
        length += this.BuildStraight(level, 0, level.Width, true);

        while (length < level.Width - 64) length += this.BuildZone(level, length, level.Width - length);

        floor = this.Height - 1 - (Math.random() * 4) | 0;
        level.ExitX = length + 8;
        level.ExitY = floor;

        for (let x = length; x < level.Width; x++) {
            for (let y = 0; y < this.Height; y++) {
                if (y >= floor) level.SetBlock(x, y, 1 + 9 * 16);
            }
        }

        if (type === LevelType.Castle || type === LevelType.Underground) {
            for (let x = 0; x < level.Width; x++) {
                if (run-- <= 0 && x > 4) {
                    ceiling = (Math.random() * 4) | 0;
                    run = ((Math.random() * 4) | 0) + 4;

                    level.SetCeilingRnd(ceiling);
                    level.SetRunRnd(run);
                }
                for (let y = 0; y < level.Height; y++) {
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

        let jumpSection = new JumpSection(js, jl, length, xo, hasStairs, floor);
        level.SetJumpSection(jumpSection);

        this.BuildJumpSection(level, jumpSection);

        return length;
    }

    BuildJumpSection(level, section) {
        for (let x = section.X0; x < section.X0 + section.Length; x++) {
            if (!(x < section.X0 + section.JS || x > section.X0 + section.Length - section.JS - 1)) continue;

            for (let y = 0; y < this.Height; y++) {
                if (y >= section.Floor)
                    level.SetBlock(x, y, 1 + 9 * 16);
                else if (section.HasStairs && x < section.X0 + section.JS && y >= section.Floor - (x - section.X0) + 1)
                    level.SetBlock(x, y, 9);
                else if (section.HasStairs && x >= section.X0 + section.JS && y >= section.Floor - ((section.X0 + section.Length) - x) + 2)
                    level.SetBlock(x, y, 9);
            }
        }
    }

    BuildCannons(level, xo, maxLength) {
        let length = ((Math.random() * 10) | 0) + 2, floor = this.Height - 1 - (Math.random() * 4) | 0,
            xCannon = xo + 1 + (Math.random() * 4) | 0;

        if (length > maxLength) length = maxLength;

        let cannonSection = new CannonSection(length, floor, xo);

        for (let x = xo; x < xo + length; x++) {
            if (x > xCannon) xCannon += 2 * (Math.random() * 4) | 0;

            if (xCannon === xo + length - 1) xCannon += 10;

            const cannonHeight = floor - ((Math.random() * 4) | 0) - 1;

            cannonSection.AddXCannon(xCannon);
            cannonSection.AddCannonHeight(cannonHeight);

            for (let y = 0; y < this.Height; y++) {
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

        level.SetCannonSection(cannonSection);

        return length;
    }

    BuildHillStraight(level, xo, maxLength) {
        let length = ((Math.random() * 10) | 0) + 10, floor = this.Height - 1 - (Math.random() * 4) | 0;

        if (length > maxLength) length = maxLength;

        let hillStraight = new HillStraightSection(xo, length, floor);

        for (let x = xo; x < xo + length; x++) {
            for (let y = 0; y < this.Height; y++) {
                if (y >= floor) level.SetBlock(x, y, 1 + 9 * 16);
            }
        }

        this.AddEnemyLine(level, xo + 1, xo + length - 1, floor - 1);

        let h = floor, l = 0, xxo = 0, occupied = [], i = 0, keepGoing = true;
        while (keepGoing) {
            h = h - 2 - (Math.random() * 3) | 0;
            hillStraight.SetHrndValue(h);

            if (h <= 0) break;

            l = ((Math.random() * 5) | 0) + 3;
            hillStraight.SetLrndValue(l);
            xxo = ((Math.random() * (length - l - 2)) | 0) + xo + 1;
            hillStraight.SetXXOrndValue(xxo);

            if (occupied[xxo - xo] || occupied[xxo - xo + l] || occupied[xxo - xo - 1] || occupied[xxo - xo + l + 1]) break;

            occupied[xxo - xo] = true;
            occupied[xxo - xo + l] = true;

            this.AddEnemyLine(level, xxo, xxo + l, h - 1);

            if (((Math.random() * 4) | 0) === 0) {
                hillStraight.SetDecorateIteration(i);
                hillStraight.SetDecorate(this.Decorate(level, xxo - 1, xxo + l + 1, h));
                keepGoing = false;
            }

            for (let x = xxo; x < xxo + l; x++) {
                for (let y = h; y < floor; y++) {
                    let xx = 5;
                    let yy = 9;

                    if (x === xxo) xx = 4;
                    if (x === xxo + l - 1) xx = 6;
                    if (y === h) yy = 8;

                    hillStraight.AddGetBlock(i, level.GetBlock(x, y));

                    if (level.GetBlock(x, y) === 0) {
                        level.SetBlock(x, y, xx + yy * 16);
                    } else {
                        if (level.GetBlock(x, y) === (4 + 8 * 16)) level.SetBlock(x, y, 4 + 11 * 16);
                        if (level.GetBlock(x, y) === (6 + 8 * 16)) level.SetBlock(x, y, 6 + 11 * 16);
                    }
                }
            }

            i++;
        }

        level.SetHillStraightSection(hillStraight);

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
            xTube = xo + 1 + (Math.random() * 4) | 0, tubeHeight = floor - ((Math.random() * 2) | 0) - 2;

        let tubeSection = new TubeSection(xo, length, floor, xTube, tubeHeight);

        if (length > maxLength) length = maxLength;

        for (let x = xo; x < xo + length; x++) {
            if (x > xTube + 1) {
                let rnd = ((Math.random() * 4) | 0)
                xTube += 3 + rnd;
                tubeSection.AddXTubeRndValue(rnd);

                rnd = ((Math.random() * 2) | 0);
                tubeHeight = floor - rnd - 2;
                tubeSection.AddTubeHeightRndValue(rnd);
            }
            if (xTube >= xo + length - 2) xTube += 10;

            if (x === xTube && ((Math.random() * 11) | 0) < this.Difficulty + 1)
                level.SetSpriteTemplate(x, tubeHeight, new SpriteTemplate(Enemy.Flower, false));

            for (let y = 0; y < this.Height; y++) {
                if (y >= floor) {
                    level.SetBlock(x, y, 1 + 9 * 16);
                } else if (y < floor && (x === xTube || x === xTube + 1) && y >= tubeHeight) {
                    let xPic = 10 + x - xTube;
                    if (y === tubeHeight) level.SetBlock(x, y, xPic);
                    else level.SetBlock(x, y, xPic + 16);
                }
            }
        }

        level.SetTubeSection(tubeSection);

        return length;
    }

    BuildStraight(level, xo, maxLength, safe) {
        let length = ((Math.random() * 10) | 0) + 2, floor = this.Height - 1 - ((Math.random() * 4) | 0);

        if (safe) length = 10 + ((Math.random() * 5) | 0);

        if (length > maxLength) length = maxLength;

        let straightSection = new StraightSection(xo, length, floor);

        for (let x = xo; x < xo + length; x++) {
            for (let y = 0; y < this.Height; y++) {
                if (y >= floor) level.SetBlock(x, y, 1 + 9 * 16);
            }
        }

        if (!safe && length > 5) straightSection.SetDecorate(this.Decorate(level, xo, xo + length, floor));

        level.SetStraightSection(straightSection);

        return length;
    }

    Decorate(level, x0, x1, floor) {
        if (floor < 1) return null;

        let decorate = new DecorateSection(x0, x1, floor);

        let s = (Math.random() * 4) | 0, e = (Math.random() * 4) | 0;

        decorate.SetBegin(s, e);

        this.AddEnemyLine(level, x0 + 1, x1 - 1, floor - 1);

        let generateCoinLine = true; // Disable to prevent coin generation
        decorate.SetGenerateCoinLine(generateCoinLine);

        // Set coin lines
        if (generateCoinLine && floor - 2 > 0 && (x1 - 1 - e) - (x0 + 1 + s) > 1) {
            for (let x = x0 + 1 + s; x < x1 - 1 - e; x++) {
                level.SetBlock(x, floor - 2, 34); // Set Coin
            }
        }

        s = (Math.random() * 4) | 0;
        e = (Math.random() * 4) | 0;

        decorate.SetEnd(s, e);

        if (floor - 4 > 0 && (x1 - 1 - e) - (x0 + 1 + s) > 2) {
            for (let x = x0 + 1 + s; x < x1 - 1 - e; x++) {
                const rnd1 = ((Math.random() * 3) | 0), rnd2 = ((Math.random() * 4) | 0),
                    rnd3 = ((Math.random() * 4) | 0), rnd4 = ((Math.random() * 4) | 0);

                decorate.SetRandomValues(rnd1, rnd2, rnd3, rnd4);

                // Set Block Content
                /**
                 * 16: Normal Block
                 * 17: Normal Block with Coin
                 * 18: Normal Block with Powerup
                 * 21: Special Block with Coin
                 * 22: Special Block with Powerup
                 */
                if (x !== x0 + 1 && x !== x1 - 2 && rnd1 === 0) {
                    level.SetBlock(x, floor - 4, rnd2 === 0 ? 22 : 21);
                } else if (rnd3 === 0) {
                    level.SetBlock(x, floor - 4, rnd4 === 0 ? 18 : 17);
                } else {
                    level.SetBlock(x, floor - 4, 16);
                }
            }
        }

        return decorate;
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

/**
    Generates a pseudo-random procedural level.
    Code by Pedro Esteves, 2022.
**/

class PredefinedLevelGenerator extends LevelGenerator {
    constructor(level) {
        super(level.Width, level.Height);
        this.level = level;
    }

    CreateLevel() {
        let lvl = new PredefinedLevel(this.Width, this.Height, this.level.Type);
        this.Type = this.level.Type;
        
        for (let i = 0; i < this.level.JumpSections.length; i++) {
            const s = this.level.JumpSections[i];
            const section = new JumpSection(s.JS, s.JL, s.Length, s.X0, s.HasStairs, s.Floor);
            lvl.SetJumpSection(section);
            super.BuildJumpSection(lvl, section);
        }

        lvl.SetStraightSections(this.level.StraightSections);

        for (let i = 0; i < this.level.StraightSections.length; i++) {
            this.BuildStraight(lvl, this.level.StraightSections[i]);
        }

        lvl.SetTubeSections(this.level.TubeSections);

        for (let i = 0; i < this.level.TubeSections.length; i++) {
            this.BuildTubes(lvl, this.level.TubeSections[i]);
        }

        lvl.SetHillStraightSections(this.level.HillStraightSections);

        for (let i = 0; i < this.level.HillStraightSections.length; i++) {
            this.BuildHillStraight(lvl, this.level.HillStraightSections[i]);
        }

        lvl.SetCannonSections(this.level.CannonSections);

        for (let i = 0; i < this.level.CannonSections.length; i++) {
            this.BuildCannons(lvl, this.level.CannonSections[i]);
        }

        lvl.ExitX = this.level.ExitX;
        lvl.ExitY = this.level.ExitY;
        const length = this.level.ExitX - 8, floor = lvl.ExitY;

        for (let x = length; x < lvl.Width; x++) {
            for (let y = 0; y < this.Height; y++) {
                if (y >= floor) lvl.SetBlock(x, y, 1 + 9 * 16);
            }
        }

        const tmp = this.level.EnemySpriteTemplates;
        for (let i = 0; i < tmp.length; i++) {
            lvl.SetSpriteTemplate(tmp[i].X, tmp[i].Y, new SpriteTemplate(tmp[i].SpriteTemplate.Type, tmp[i].SpriteTemplate.Winged));
        }

        if (this.level.Type === LevelType.Castle || this.level.Type === LevelType.Underground) {
            let i = 0, run = 0, ceiling = 0;
            for (let x = 0; x < lvl.Width; x++) {
                if (run-- <= 0 && x > 4) {
                    ceiling = this.level.CeilingRnd[i];
                    run =  this.level.RunRnd[i];
                    i++;
                }
                for (let y = 0; y < lvl.Height; y++) {
                    if ((x > 4 && y <= ceiling) || x < 1) lvl.SetBlock(x, y, 1 + 9 * 16);
                }
            }
        }

        this.FixWalls(lvl);

        // Register Gameplay Metrics
        Mario.MarioCharacter.gameplayMetrics.RegisterNoEnemies(tmp.length);
        Mario.MarioCharacter.gameplayMetrics.RegisterNoCoins(lvl.coins.length);
        Mario.MarioCharacter.gameplayMetrics.RegisterNoPowerups(lvl.powerups.length);

        return lvl;
    }

    BuildTubes(lvl, tubeSection) {
        const length = tubeSection.Length, floor = tubeSection.Floor, xo = tubeSection.X0;
        let xTube = tubeSection.XTube, tubeHeight = tubeSection.TubeHeight;

        let rndCounter = 0;
        for (let x = xo; x < xo + length; x++) {
            if (x > xTube + 1) {
                xTube += 3 + tubeSection.XTubeRndValues[rndCounter];
                tubeHeight = floor - tubeSection.TubeHeightRndValues[rndCounter] - 2;
                rndCounter++;
            }
            if (xTube >= xo + length - 2) xTube += 10;

            for (let y = 0; y < this.Height; y++) {
                if (y >= floor) {
                    lvl.SetBlock(x, y, 1 + 9 * 16);
                } else if (y < floor && (x === xTube || x === xTube + 1) && y >= tubeHeight) {
                    const xPic = 10 + x - xTube;
                    if (y === tubeHeight) lvl.SetBlock(x, y, xPic);
                    else lvl.SetBlock(x, y, xPic + 16);
                }
            }
        }
    }

    BuildStraight(lvl, straightSection) {
        const length = straightSection.Length, floor = straightSection.Floor, xo = straightSection.X0;

        for (let x = xo; x < xo + length; x++) {
            for (let y = 0; y < this.Height; y++) {
                if (y >= floor) lvl.SetBlock(x, y, 1 + 9 * 16);
            }
        }

        if (straightSection.Decorate !== null) this.Decorate(lvl, straightSection.Decorate, floor, length, xo);
    }

    BuildHillStraight(lvl, hillSection) {
        const length = hillSection.Length, floor = hillSection.Floor, xo = hillSection.X0;

        for (let x = xo; x < xo + length; x++) {
            for (let y = 0; y < this.Height; y++) {
                if (y >= floor) lvl.SetBlock(x, y, 1 + 9 * 16);
            }
        }

        let h = floor, l = 0, xxo = 0, occupied = [], i = 0, keepGoing = true;
        while (keepGoing) {
            h = hillSection.Hrnd[i];

            if (h <= 0) break;

            l = hillSection.Lrnd[i];
            xxo = hillSection.XXOrnd[i];

            if (occupied[xxo - xo] || occupied[xxo - xo + l] || occupied[xxo - xo - 1] || occupied[xxo - xo + l + 1]) break;

            occupied[xxo - xo] = true;
            occupied[xxo - xo + l] = true;

            if (i === hillSection.DecorateIteration) {
                if (hillSection.Decorate !== null) this.Decorate(lvl, hillSection.Decorate);
                keepGoing = false;
            }

            let cnt = 0;
            for (let x = xxo; x < xxo + l; x++) {
                for (let y = h; y < floor; y++) {
                    let xx = 5;
                    let yy = 9;

                    if (x === xxo) xx = 4;
                    if (x === xxo + l - 1) xx = 6;
                    if (y === h) yy = 8;

                    const v = hillSection.Blocks[i][cnt];

                    if (v === 0) {
                        lvl.SetBlock(x, y, xx + yy * 16);
                    } else {
                        if (v === (4 + 8 * 16)) lvl.SetBlock(x, y, 4 + 11 * 16);
                        if (v === (6 + 8 * 16)) lvl.SetBlock(x, y, 6 + 11 * 16);
                    }

                    cnt++;
                }
            }

            i++;
        }
    }

    BuildCannons(lvl, cannonSection) {
        const length = cannonSection.Length, floor = cannonSection.Floor, xo = cannonSection.X0;

        let i = 0;
        for (let x = xo; x < xo + length; x++) {
            const xCannon = cannonSection.XCannon[i], cannonHeight = cannonSection.CannonHeight[i];

            for (let y = 0; y < this.Height; y++) {
                if (y >= floor) {
                    lvl.SetBlock(x, y, 1 + 9 * 16);
                } else if (y < floor && x === xCannon && y >= cannonHeight) {
                    if (y === cannonHeight) {
                        lvl.SetBlock(x, y, 14);
                    } else if (y === cannonHeight + 1) {
                        lvl.SetBlock(x, y, 14 + 16);
                    } else {
                        lvl.SetBlock(x, y, 14 + 2 * 16);
                    }
                }
            }

            i++;
        }
    }

    Decorate(lvl, section) {
        let s = section.SBegin, e = section.EBegin;
        const x0 = section.X0, x1 = section.X1, floor = section.Floor;

        const generateCoinLine = section.GenerateCoinLine === undefined ? true : section.GenerateCoinLine;

        if (generateCoinLine && floor - 2 > 0 && (x1 - 1 - e) - (x0 + 1 + s) > 1) {
            for (let x = x0 + 1 + s; x < x1 - 1 - e; x++) {
                lvl.SetBlock(x, floor - 2, 2 + 2 * 16);
            }
        }

        s = section.SEnd;
        e = section.EEnd;

        let i = 0;
        if (floor - 4 > 0 && (x1 - 1 - e) - (x0 + 1 + s) > 2) {
            for (let x = x0 + 1 + s; x < x1 - 1 - e; x++) {
                const rnd1 = section.Rnd1[i], rnd2 = section.Rnd2[i],
                    rnd3 = section.Rnd3[i], rnd4 = section.Rnd4[i];
                i++;

                if (x !== x0 + 1 && x !== x1 - 2 && rnd1 === 0) {
                    lvl.SetBlock(x, floor - 4, rnd2 === 0 ? 22 : 21); // 4 + 2 + 16 / 4 + 1 + 16
                } else if (rnd3 === 0) {
                    lvl.SetBlock(x, floor - 4, rnd4 === 0 ? 18 : 17); // 2 + 16 / 1 + 16
                } else {
                    lvl.SetBlock(x, floor - 4, 16);
                }
            }
        }
    }
};

/**
    Creates a specific type of sprite based on the information given.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

class SpriteTemplate {
    constructor(type, winged) {
        this.Type = type;
        this.Winged = winged;
        this.LastVisibleTick = -1;
        this.IsDead = false;
        this.Sprite = null;
    }

    SetDead() {
        this.IsDead = true;
        Mario.MarioCharacter.gameplayMetrics.KilledEnemy(this);
    }

    Spawn(world, x, y, dir) {
        if (this.IsDead) return;

        if (this.Type === Enemy.Flower) this.Sprite = new FlowerEnemy(world, x * 16 + 15, y * 16 + 24);
        else this.Sprite = new Enemy(world, x * 16 + 8, y * 16 + 15, dir, this.Type, this.Winged);

        this.Sprite.SpriteTemplate = this;
        world.AddSprite(this.Sprite);
    }
};

/**
    A generic template for an enemy in the game.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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
        this.InitX = x;
        this.InitY = y;
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

        if (xMarioD > -this.Width * 2 - 4 && xMarioD < this.Width * 2 + 4 &&
            yMarioD > -this.Height && yMarioD < Mario.MarioCharacter.Height) {
            if (!(this.Type !== Enemy.Spiky && Mario.MarioCharacter.Ya > 0 && yMarioD <= 0 && (!Mario.MarioCharacter.OnGround || !Mario.MarioCharacter.WasOnGround))) {
                Mario.MarioCharacter.GetHurt();
                return;
            }

            Mario.MarioCharacter.Stomp(this);
            if (this.Winged) {
                this.Winged = false;
                this.Ya = 0;
            } else {
                this.YPicO = 31 - (32 - 8);
                this.PicHeight = 8;

                if (this.SpriteTemplate !== null) this.SpriteTemplate.SetDead();

                this.DeadTime = 10;
                this.Winged = false;

                if (this.Type === Enemy.RedKoopa) this.World.AddSprite(new Shell(this.World, this.X, this.Y, 0));
                else if (this.Type === Enemy.GreenKoopa) this.World.AddSprite(new Shell(this.World, this.X, this.Y, 1));
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
            if (this.SpriteTemplate !== null) this.SpriteTemplate.SetDead();
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
            if (this.SpriteTemplate !== null) this.SpriteTemplate.SetDead();
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
            if (this.SpriteTemplate !== null) this.SpriteTemplate.SetDead();

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

/**
    Represents a fireball.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

/**
    Represents a little sparkle object in the game.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

/**
    Represents a simple little coin animation when popping out of the box.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

/**
    Represents a life-giving mushroom.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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
        this.InitX = x;
        this.InitY = y;
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
            Mario.MarioCharacter.GetMushroom((this.InitX - 8) / 16, (this.InitY - 8) / 16);
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

/**
	Represents a piece of a broken block.
	Adapted from Rob Kleffner, 2011.
	Code by Pedro Esteves, 2022.
*/

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

/**
	Represents a fire powerup.
	Adapted from Rob Kleffner, 2011.
	Code by Pedro Esteves, 2022.
**/

class FireFlower extends NotchSprite {
    constructor(world, x, y) {
        super();
        this.Width = 4;
        this.Height = 24;

        this.World = world;
        this.X = x;
        this.Y = y;
        this.InitX = x;
        this.InitY = y;
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
            Mario.MarioCharacter.GetFlower((this.InitX - 8) / 16, (this.InitY - 8) / 16);
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

/**
    Represents a bullet bill enemy.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

class BulletBill extends NotchSprite {
    constructor(world, x, y, dir) {
        super();
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
    }

    CollideCheck() {
        if (this.Dead) return;

        let xMarioD = Mario.MarioCharacter.X - this.X, yMarioD = Mario.MarioCharacter.Y - this.Y;
        if (xMarioD > -16 && xMarioD < 16 && yMarioD > - this.Height && yMarioD < Mario.MarioCharacter.Height) {
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

/**
    Represents a flower enemy.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

/**
    Represents a shell that once belonged to a now expired koopa.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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
            if (this.SpriteTemplate !== null) this.SpriteTemplate.SetDead();

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

/**
    Displays the title screen and menu.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

/**
    State that loads all the resources for the game.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

/**
    State shown when the player loses!
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

/**
    State that's shown when the player wins the game!
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

/**
    State for moving between different playable levels.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

/**
    State for actually playing a randomly generated level.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

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

        Mario.MarioCharacter.gameplayMetrics.SetLevelState(this);
    }

    GetName() {
        return "LevelState";
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
            this.BgLayer[i] = new BackgroundRenderer(new BackgroundGenerator(w / 32 + 1, h / 32 + 1, i === 0, this.Level.Type).CreateLevel(), 320, 240, scrollSpeed);
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
            Mario.MarioCharacter.gameplayMetrics.RegisterCauseOfDeath(CauseOfDeath.Time);
            Mario.MarioCharacter.Die();
        }

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
                if (!Mario.MarioCharacter.Large) this.AddSprite(new Mushroom(this, x * 16 + 8, y * 16 + 8));
                else this.AddSprite(new FireFlower(this, x * 16 + 8, y * 16 + 8));
            } else {
                Mario.MarioCharacter.GetCoin(x, y);
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
            Mario.MarioCharacter.GetCoin(x, y);
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

    GetTimeLeft() {
        return this.TimeLeft;
    }
};

/**
    State for actually playing a pseudo-randomly generated level.
    Code by Pedro Esteves, 2022.
**/

class PredefinedLevelState extends LevelState {
    constructor(difficulty, type) {
        super(difficulty, type);

        Mario.MarioCharacter.ResetMetrics();
        Mario.MarioCharacter.gameplayMetrics.SetLevelState(this);

        this.NextLevel = false;
        this.agent = new PlayerAgent();
    }

    GetLevel() {
        //const lvl = new LevelGenerator(320, 15).CreateLevel(0, 1);
        const lvl = new PredefinedLevelGenerator(levels[levelsOrder[currentLevel]]).CreateLevel();
        return lvl;
    }

    Enter() {
        super.Enter();
        this.NextLevel = false;
    }

    CheckForChange(context) {
        if (this.GotoLoseState || this.NextLevel) {
            Mario.MarioCharacter.gameplayMetrics.SetActions(this.agent.GetActions());
            levelData = Mario.MarioCharacter.gameplayMetrics.PrintMetrics(); // Store Metrics

            survey.nextPage();
            survey.showNavigationButtons = true;
            context.ChangeState(new LoadingState());
        }
    }

    LevelWon() {
        Mario.GlobalMapState.LevelWon();
        this.NextLevel = true;
    }

    DrawUI(context) {
        this.DrawStringShadow(context, "MARIO " + Mario.MarioCharacter.Lives, 0, 0);
        this.DrawStringShadow(context, "COIN", 14, 0);
        this.DrawStringShadow(context, " " + Mario.MarioCharacter.Coins, 14, 1);
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

class GameplayMetrics {
    static MinRegisterDistance = 10;

    constructor() {
        this.jumps = [];
        this.wallJumps = [];
        this.landings = [];

        this.coins = [];
        this.noCoins = -1;

        this.powerups = [];
        this.noPowerups = -1;

        this.causeOfDeath = -1;

        // TODO Implement enemy death detection
        this.enemies = [];
        this.noEnemies = -1;

        this.timeLeft = -1;

        this.levelState = null;

        this.actions = [];
    }

    SetLevelState(levelState) {
        if (levelState.GetName === undefined || levelState.GetName() !== "LevelState") {
            console.error("SetLevelState should receive an instance of LevelState");
            return;
        }

        this.levelState = levelState;
    }

    RegisterCauseOfDeath(c) {
        this.causeOfDeath = c;
    }

    RegisterJump() {
        const gap = this.GetNearestGap();
        if (gap === null || gap > GameplayMetrics.MinRegisterDistance) return;

        this.jumps.push(this.GetNextGap());
    }

    RegisterWallJump() {
        this.wallJumps.push({ "X": (Mario.MarioCharacter.X - 8) / 16, "Y": (Mario.MarioCharacter.Y - 8) / 16 });
        this.RegisterJump();
    }

    RegisterLanding() {
        const gap = this.GetNearestGap();
        if (gap === null) return;

        if (this.landings.length === this.jumps.length) return;

        this.landings.push(this.GetPreviousGap());
    }

    RegisterNoCoins(no) {
        this.noCoins = no;
    }

    RegisterNoPowerups(no) {
        this.noPowerups = no;
    }

    RegisterNoEnemies(no) {
        this.noEnemies = no;
    }
    
    KilledEnemy(template) {
        const lvl = this.levelState.Level;
        if (!(lvl instanceof PredefinedLevel)) return;

        const ID = lvl.GetEnemyID(template);
        if (ID === null) {
            console.error("ERROR: Enemy doesn't exist!");
            return;
        }

        this.enemies.push(ID);
    }

    CollectedCoin(x, y) {
        const lvl = this.levelState.Level;
        if (!(lvl instanceof PredefinedLevel)) return;

        const ID = lvl.GetCoinID(x, y);
        if (ID === null) {
            console.error("ERROR: Coin doesn't exist!");
            return;
        }

        this.coins.push(ID);
    }

    CollectedPowerup(x, y) {
        const lvl = this.levelState.Level;
        if (!(lvl instanceof PredefinedLevel)) return;

        const ID = lvl.GetPowerupID(x, y);
        if (ID === null) {
            console.error("ERROR: Powerup doesn't exist!");
            return;
        }

        this.powerups.push(ID);
    }

    GetNearestGap() {
        const jumps = this.levelState.Level.JumpSections;

        if (jumps.length === 0) return null;

        const xPos = (Mario.MarioCharacter.X - 8) / 16;

        let minDist = Infinity;
        for (let i = 0; i < jumps.length; i++) {
            if (xPos < jumps[i].GetHoleStartX()) {
                const dist = jumps[i].GetHoleStartX() - xPos;
                if (dist > minDist) break;

                minDist = dist;
            } else if (xPos > jumps[i].GetHoleEndX()) {
                const dist = xPos - jumps[i].GetHoleEndX();
                if (dist > minDist) break;

                minDist = dist;
            } else {
                // Inside Gap
            }
        }

        return minDist;
    }

    GetPreviousGap() {
        const jumps = this.levelState.Level.JumpSections;

        if (jumps.length === 0) return null;

        const xPos = (Mario.MarioCharacter.X - 8) / 16;

        let minDist = Infinity;
        for (let i = 0; i < jumps.length; i++) {
            if (xPos <= jumps[i].GetHoleEndX()) continue;

            const dist = xPos - jumps[i].GetHoleEndX();
            if (dist > minDist) break;

            minDist = dist;
        }

        return minDist;
    }

    GetNextGap() {
        const jumps = this.levelState.Level.JumpSections;

        if (jumps.length === 0) return null;

        const xPos = (Mario.MarioCharacter.X - 8) / 16;

        let minDist = Infinity;
        for (let i = 0; i < jumps.length; i++) {
            if (xPos >= jumps[i].GetHoleStartX()) continue;

            const dist = jumps[i].GetHoleStartX() - xPos;
            if (dist > minDist) break;

            minDist = dist;
        }

        return minDist;
    }

    RegisterEndingTime() {
        if (this.levelState == null) return;

        const t = this.levelState.GetTimeLeft();
        this.timeLeft = t < 0 ? 0 : t;
    }

    PrintMetrics() {
        return {
            "causeOfDeath": this.causeOfDeath,
            "jumps": this.jumps,
            "wallJumps": this.wallJumps,
            "landings": this.landings,
            "timeLeft": this.timeLeft,
            "noCoins": this.noCoins,
            "collectedCoins": this.coins,
            "noPowerups": this.noPowerups,
            "collectedPowerups": this.powerups,
            "noEnemies": this.noEnemies,
            "killedEnemies": this.enemies,
            "actions": this.actions,
        };
    }

    SetActions(a) {
        this.actions = Object.assign([], a);
    }
};

/**
    Displays the title screen.
    Code by Pedro Esteves, 2022.
**/

class PredefinedTitleState extends TitleState {
    constructor() {
        super();
        
        this.instructionsFont = null;
    }

    CheckForChange(context) {
        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) context.ChangeState(new PredefinedLevelState(1, 0));
    }

    Enter() {
        super.Enter();

        this.instructionsFont = new Engine.SpriteFont([], Engine.Resources.Images["font"], 6.5, 6.5, SpriteCuts.GetCharArray(0));
        this.instructionsFont.Strings.push( 
            { String: "Arrows: Move", X: 1, Y: 5 },
            { String: "A: Move Faster/Shoot", X: 1, Y: 15 },
            { String: "S: Jump", X: 1, Y: 25 },
        );
    }

    Exit() {
        super.Exit();
        delete this.instructionsFont;
    }

    Draw(context) {
        super.Draw(context);
        
        this.instructionsFont.Draw(context, this.Camera);
    }
};

/**
    Represents a Mario agent.
    Code by Pedro Esteves, 2022.
**/

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

    GetActions() { }
};

/**
    Represents a Mario agent, controlled by the player. Allows to store the player actions
    Code by Pedro Esteves, 2022.
**/

class PlayerAgent extends Agent {
    constructor() {
        super([]);

        document.addEventListener('keydown', this.StoreEvent.bind(this));
        document.addEventListener('keyup', this.StoreEvent.bind(this));
    }

    StoreEvent(evt) {
        // Only store events from keys related to the gameplay
        if (evt.keyCode !== Engine.Keys.A && evt.keyCode !== Engine.Keys.S && evt.keyCode !== Engine.Keys.Left && evt.keyCode !== Engine.Keys.Right) return;

        this.actions.push({
            't': this.ticks, // Ticks
            'k': evt.keyCode, // Key Code
            'e': evt.type // Event Type
        });
    }

    GetActions() { return this.actions; }
};

/**
    Represents a Mario agent, controlled by AI. Allows to play a sequecen of player actions
    Code by Pedro Esteves, 2022.
**/

class AIAgent extends Agent {
    constructor(actions) {
        super(actions);
    }

    Update(delta) {
        super.Update(delta);

        while (true) {
            const evt = this.actions[this.currentEvent]
            if (!(this.currentEvent < this.actions.length && evt.t <= this.ticks)) break;

            document.dispatchEvent(new KeyboardEvent(evt.e, { 'keyCode': evt.k }));

            this.currentEvent++;
        }
    }
};

