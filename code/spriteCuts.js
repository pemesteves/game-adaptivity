/**
    Helper to cut up the sprites.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

class SpriteCuts {
    /*********************
     * Font related
     ********************/
    static CreateBlackFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(0));
    }

    static CreateRedFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(8));
    }

    static CreateGreenFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(16));
    }

    static CreateBlueFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(24));
    }

    static CreateYellowFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(32));
    }

    static CreatePinkFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(40));
    }

    static CreateCyanFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(48));
    }

    static CreateWhiteFont() {
        return new Engine.SpriteFont([], Engine.Resources.Images["font"], 8, 8, this.GetCharArray(56));
    }

    static GetCharArray(y) {
        let letters = [];
        for (let i = 32; i < 127; i++) letters[i] = { X: (i - 32) * 8, Y: y };
        return letters;
    }

    /*********************
     * Spritesheet related
     ********************/
    static GetBackgroundSheet() {
        return this.GetSheet("background", 32);
    }

    static GetLevelSheet() {
        return this.GetSheet("map", 16);
    }

    static GetSheet(name, size) {
        let sheet = [];
        const width = Engine.Resources.Images[name].width / size, height = Engine.Resources.Images[name].height / size;

        for (let x = 0; x < width; x++) {
            sheet[x] = [];

            for (let y = 0; y < height; y++) sheet[x][y] = { X: x * size, Y: y * size, Width: size, Height: size };
        }
        return sheet;
    }
};