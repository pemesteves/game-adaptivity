/**
    State for actually playing a pseudo-randomly generated level.
    Code by Pedro Esteves, 2022.
**/

class PredefinedLevelState extends LevelState {
    constructor(difficulty, type) {
        super(difficulty, type);
        
        this.NextLevel = false;
    }

    Enter() {
        super.Enter();
        this.NextLevel = false;
    }

    CheckForChange(context) {
        if (this.GotoLoseState || this.NextLevel) {
            console.log(Mario.MarioCharacter.gameplayMetrics.noJumps);
            context.ChangeState(new PredefinedLevelState(1, 0)); // TODO Count Number os Losses
        /*}
        else if (this.NextLevel) {
            context.ChangeState(new PredefinedLevelState(1, 0)); // TODO Next Predefined Level (Store state elsewhere) 
        }*/
        }
    }
    
    LevelWon() {
        Mario.GlobalMapState.LevelWon();
        this.NextLevel = true;
    }
};