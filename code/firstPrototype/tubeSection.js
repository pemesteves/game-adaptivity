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