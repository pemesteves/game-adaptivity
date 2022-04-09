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