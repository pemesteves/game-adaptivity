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
    static Coin = 11000000;
    static CoinBlock = 10010010;
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