/**
    State shown when the player loses!
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

class LoseState extends Engine.GameState {
    constructor() {
        super();
        this.drawManager = null;
        this.camera = null;
        this.gameOver = null;
        this.font = null;
        this.wasKeyDown = false;
    }

    Enter() {
        this.drawManager = new Engine.DrawableManager();
        this.camera = new Engine.Camera();
    
        this.gameOver = new Engine.AnimatedSprite();
        this.gameOver.Image = Engine.Resources.Images["gameOverGhost"];
        this.gameOver.SetColumnCount(9);
        this.gameOver.SetRowCount(1);
        this.gameOver.AddNewSequence("turnLoop", 0, 0, 0, 8);
        this.gameOver.PlaySequence("turnLoop", true);
        this.gameOver.FramesPerSecond = 1 / 15;
        this.gameOver.X = 112;
        this.gameOver.Y = 68;
    
        this.font = Mario.SpriteCuts.CreateBlackFont();
        this.font.Strings[0] = { String: "Game over!", X: 116, Y: 160 };
    
        this.drawManager.Add(this.font);
        this.drawManager.Add(this.gameOver);
    }

    Exit() {
        this.drawManager.Clear();
        delete this.drawManager;
        delete this.camera;
        delete this.gameOver;
        delete this.font;
    }

    Update(delta) {
        this.drawManager.Update(delta);
        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) this.wasKeyDown = true;
    }

    Draw(context) {
        this.drawManager.Draw(context, this.camera);
    }

    CheckForChange(context) {
        if (this.wasKeyDown && !Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) context.ChangeState(new TitleState());
    }
};