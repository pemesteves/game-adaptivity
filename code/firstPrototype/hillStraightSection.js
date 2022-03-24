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