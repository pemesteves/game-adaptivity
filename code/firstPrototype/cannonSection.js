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