/**
    Generates a pseudo-random procedural level.
    Code by Pedro Esteves, 2022.
**/

class PredefinedLevelGenerator {
    constructor(level) {
        this.level = level;
    }

    CreateLevel() {
        let lvl = new Level(this.level.Width, this.level.Height);
        lvl.SetExit(this.level.ExitX, this.level.ExitY);
        lvl.SetMap(this.level.Map);
        lvl.SetData(this.level.Data);
        lvl.SetSpriteTemplates(this.level.SpriteTemplates);

        return lvl;
    }
};