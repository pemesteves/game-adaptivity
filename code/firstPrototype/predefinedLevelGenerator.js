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

        // Set Sprite Templates
        const tmp = this.level.SpriteTemplates;
        for (let i = 0; i < tmp.length; i++) {
            const tmp_line = tmp[i];
            for (let j = 0; j < tmp_line.length; j++) {
                if (tmp_line[j] === null) continue;

                this.SetSpriteTemplate(i, j, new SpriteTemplate(tmp_line[j].Type, tmp_line[j].Winged));
            }
        }

        return lvl;
    }
};