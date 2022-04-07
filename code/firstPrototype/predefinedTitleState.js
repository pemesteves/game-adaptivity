/**
    Displays the title screen.
    Code by Pedro Esteves, 2022.
**/

class PredefinedTitleState extends TitleState {
    constructor() {
        super();
        
        this.instructionsFont = null;
    }

    CheckForChange(context) {
        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) context.ChangeState(new PredefinedLevelState(1, 0));
    }

    Enter() {
        super.Enter();

        this.instructionsFont = new Engine.SpriteFont([], Engine.Resources.Images["font"], 6.5, 6.5, SpriteCuts.GetCharArray(0));
        this.instructionsFont.Strings.push( 
            { String: "Arrows: Move", X: 1, Y: 5 },
            { String: "A: Move Faster/Shoot", X: 1, Y: 15 },
            { String: "S: Jump", X: 1, Y: 25 },
        );
    }

    Exit() {
        super.Exit();
        delete this.instructionsFont;
    }

    Draw(context) {
        super.Draw(context);
        
        this.instructionsFont.Draw(context, this.Camera);
    }
};