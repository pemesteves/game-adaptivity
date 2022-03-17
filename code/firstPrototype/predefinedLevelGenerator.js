/**
    Generates a psuedo-random procedural level.
    Code by Pedro Esteves, 2022.
**/

class PredefinedLevelGenerator extends LevelGenerator {
    constructor(width, height) {
        super(width, height);
    }

    CreateLevel(type, difficulty) {
        let i = 0, length = 0, floor = 0, x = 0, y = 0, ceiling = 0, run = 0, level = null;

        this.Type = type;
        this.Difficulty = difficulty;
        this.Odds[Odds.Straight] = 20;
        this.Odds[Odds.HillStraight] = 10;
        this.Odds[Odds.Tubes] = 2 + difficulty;
        this.Odds[Odds.Jump] = 2 * difficulty;
        this.Odds[Odds.Cannon] = -10 + 5 * difficulty;

        if (this.Type !== LevelType.Overground) this.Odds[Odds.HillStraight] = 0;

        for (i = 0; i < this.Odds.length; i++) {
            if (this.Odds[i] < 0) this.Odds[i] = 0;

            this.TotalOdds += this.Odds[i];
            this.Odds[i] = this.TotalOdds - this.Odds[i];
        }

        level = new Level(this.Width, this.Height);
        length += this.BuildStraight(level, 0, level.Width, true);

        while (length < level.Width - 64) length += this.BuildZone(level, length, level.Width - length);

        floor = this.Height - 1 - (Math.random() * 4) | 0;
        level.ExitX = length + 8;
        level.ExitY = floor;

        for (x = length; x < level.Width; x++) {
            for (y = 0; y < this.Height; y++) {
                if (y >= floor) level.SetBlock(x, y, 1 + 9 * 16);
            }
        }

        if (type === LevelType.Castle || type === LevelType.Underground) {
            for (x = 0; x < level.Width; x++) {
                if (run-- <= 0 && x > 4) {
                    ceiling = (Math.random() * 4) | 0;
                    run = ((Math.random() * 4) | 0) + 4;
                }
                for (y = 0; y < level.Height; y++) {
                    if ((x > 4 && y <= ceiling) || x < 1) level.SetBlock(x, y, 1 + 9 * 16);
                }
            }
        }

        this.FixWalls(level);

        return level;
    }
};