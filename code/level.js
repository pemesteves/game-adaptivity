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

    SetJumpSection(js, jl, length, xo, hasStairs, floor) {
        this.JumpSections.push(new JumpSection(js, jl, length, xo, hasStairs, floor));

        for (let x = xo; x < xo + length; x++) {
            if (!(x < xo + js || x > xo + length - js - 1)) continue;

            for (let y = 0; y < this.Height; y++) {
                if (y >= floor) this.SetBlock(x, y, 1 + 9 * 16);
                else if (hasStairs && x < xo + js && y >= floor - (x - xo) + 1) this.SetBlock(x, y, 9);
                else if (hasStairs && x >= xo + js && y >= floor - ((xo + length) - x) + 2) this.SetBlock(x, y, 9);
            }
        }
    }

    SetJumpSections(sections) {
        for (let i = 0; i < sections.length; i++) {
            const s = sections[i];
            this.SetJumpSection(s.JS, s.JL, s.Length, s.X0, s.HasStairs, s.Floor);
        }
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