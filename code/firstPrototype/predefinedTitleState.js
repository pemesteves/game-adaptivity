/**
    Displays the title screen.
    Code by Pedro Esteves, 2022.
**/

class PredefinedTitleState extends TitleState {
    CheckForChange(context) {
        if (Engine.KeyboardInput.IsKeyDown(Engine.Keys.S)) context.ChangeState(new PredefinedLevelState(1, 0));
    }
}