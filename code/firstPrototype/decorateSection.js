class DecorateSection {
    constructor() {
        this.SBegin = this.SEnd = this.EBegin = this.EEnd = 0;
        this.Rnd1 = this.Rnd2 = this.Rnd3 = this.Rnd4 = [];
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
}