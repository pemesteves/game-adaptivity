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