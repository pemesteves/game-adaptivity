/**
    Renders a playable level.
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

class LevelRenderer extends Engine.Drawable {
    constructor(level, width, height) {
        super();
        this.Width = width;
        this.Height = height;
        this.Level = level;
        this.TilesY = ((height / 16) | 0) + 1;
        this.Delta = 0;
        this.Tick = 0;
        this.Bounce = 0;
        this.AnimTime = 0;

        this.Background = Mario.SpriteCuts.GetLevelSheet();
    }

    Update(delta) {
        this.AnimTime += delta;
        this.Tick = this.AnimTime | 0;
        this.Bounce += delta * 30;
        this.Delta = delta;
    }

    Draw(context, camera) {
        this.DrawStatic(context, camera);
        this.DrawDynamic(context, camera);
    }

    DrawStatic(context, camera) {
        let x = 0, y = 0, b = 0, frame = null, xTileStart = (camera.X / 16) | 0, xTileEnd = ((camera.X + this.Width) / 16) | 0;

        for (x = xTileStart; x < xTileEnd + 1; x++) {
            for (y = 0; y < this.TilesY; y++) {
                b = this.Level.GetBlock(x, y) & 0xff;
                if ((Mario.Tile.Behaviors[b] & Mario.Tile.Animated) === 0) {
                    frame = this.Background[b % 16][(b / 16) | 0];
                    context.drawImage(Engine.Resources.Images["map"], frame.X, frame.Y, frame.Width, frame.Height, ((x << 4) - camera.X) | 0, (y << 4) | 0, frame.Width, frame.Height);
                }
            }
        }
    }

    DrawDynamic(context, camera) {
        let x = 0, y = 0, b = 0, animTime = 0, yo = 0, frame = null;
        for (x = (camera.X / 16) | 0; x <= ((camera.X + this.Width) / 16) | 0; x++) {
            for (y = (camera.Y / 16) | 0; y <= ((camera.Y + this.Height) / 16) | 0; y++) {
                b = this.Level.GetBlock(x, y);

                if (((Mario.Tile.Behaviors[b & 0xff]) & Mario.Tile.Animated) > 0) {
                    animTime = ((this.Bounce / 3) | 0) % 4;
                    if ((((b % 16) / 4) | 0) === 0 && ((b / 16) | 0) === 1) {
                        animTime = ((this.Bounce / 2 + (x + y) / 8) | 0) % 20;
                        if (animTime > 3) animTime = 0;
                    }
                    if ((((b % 16) / 4) | 0) === 3 && ((b / 16) | 0) === 0) animTime = 2;
                    yo = 0;
                    if (x >= 0 && y >= 0 && x < this.Level.Width && y < this.Level.Height) yo = this.Level.Data[x][y];
                    if (yo > 0) yo = (Math.sin((yo - this.Delta) / 4 * Math.PI) * 8) | 0;
                    frame = this.Background[(((b % 16) / 4) | 0) * 4 + animTime][(b / 16) | 0];
                    context.drawImage(Engine.Resources.Images["map"], frame.X, frame.Y, frame.Width, frame.Height, (x << 4) - camera.X, (y << 4) - camera.Y - yo, frame.Width, frame.Height);
                }
            }
        }
    }

    DrawExit0(context, camera, bar) {
        let y = 0, yh = 0, frame = null;
        for (y = this.Level.ExitY - 8; y < this.Level.ExitY; y++) {
            frame = this.Background[12][y === this.Level.ExitY - 8 ? 4 : 5];
            context.drawImage(Engine.Resources.Images["map"], frame.X, frame.Y, frame.Width, frame.Height, (this.Level.ExitX << 4) - camera.X - 16, (y << 4) - camera.Y, frame.Width, frame.Height);
        }

        if (!bar) return;

        yh = this.Level.ExitY * 16 - (3 * 16) - (Math.sin(this.AnimTime) * 3 * 16) - 8;// - ((Math.sin(((this.Bounce + this.Delta) / 20) * 0.5 + 0.5) * 7 * 16) | 0) - 8;
        frame = this.Background[12][3];
        context.drawImage(Engine.Resources.Images["map"], frame.X, frame.Y, frame.Width, frame.Height, (this.Level.ExitX << 4) - camera.X - 16, yh - camera.Y, frame.Width, frame.Height);
        frame = this.Background[13][3];
        context.drawImage(Engine.Resources.Images["map"], frame.X, frame.Y, frame.Width, frame.Height, (this.Level.ExitX << 4) - camera.X, yh - camera.Y, frame.Width, frame.Height);
    }

    DrawExit1(context, camera) {
        let y = 0, frame = null;
        for (y = this.Level.ExitY - 8; y < this.Level.ExitY; y++) {
            frame = this.Background[13][y === this.Level.ExitY - 8 ? 4 : 5];
            context.drawImage(Engine.Resources.Images["map"], frame.X, frame.Y, frame.Width, frame.Height, (this.Level.ExitX << 4) - camera.X + 16, (y << 4) - camera.Y, frame.Width, frame.Height);
        }
    }
};