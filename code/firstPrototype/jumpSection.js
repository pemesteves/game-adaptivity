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