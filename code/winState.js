/**
    State that's shown when the player wins the game!
    Adapted from Rob Kleffner, 2011.
    Code by Pedro Esteves, 2022.
**/

class WinState extends Engine.GameState {
    constructor() {
        super();
        this.waitTime = 2;
        this.drawManager = null;
        this.camera = null;
        this.font = null;
        this.kissing = null;
        this.wasKeyDown = false;
    }

    Enter() {
        this.drawManager = new Engine.DrawableManager();
        this.camera = new Engine.Camera();

        this.font = SpriteCuts.CreateBlackFont();
        this.font.Strings[0] = { String: "Thank you for saving me, Mario!", X: 36, Y: 160 };

        this.kissing = new Engine.AnimatedSprite();
        this.kissing.Image = Engine.Resources.Images["endScene"];
        this.kissing.X = 112;
        this.kissing.Y = 52;
        this.kissing.SetColumnCount(2);
        this.kissing.SetRowCount(1);
        this.kissing.AddNewSequence("loop", 0, 0, 0, 1);
        this.kissing.PlaySequence("loop", true);
        this.kissing.FramesPerSecond = 1 / 2;

        this.waitTime = 2;

        this.drawManager.Add(this.font);
        this.drawManager.Add(this.kissing);
    }

    Exit() {
        this.drawManager.Clear();
        delete this.drawManager;
        delete this.camera;
    }

    Update(delta) {
        this.drawManager.Update(delta);

        if (this.waitTime > 0) this.waitTime -= delta;
        else if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) this.wasKeyDown = true;
    }

    Draw(context) {
        this.drawManager.Draw(context, this.camera);
    }

    CheckForChange = function (context) {
        if (this.waitTime <= 0 && this.wasKeyDown && !Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) {
            context.ChangeState(new PredefinedTitleState());
        }
    }
};