/**
    State for actually playing a pseudo-randomly generated level.
    Code by Pedro Esteves, 2022.
**/

class PredefinedLevelState extends LevelState {
    constructor(difficulty, type) {
        super(difficulty, type);

        Mario.MarioCharacter.ResetMetrics();
        Mario.MarioCharacter.gameplayMetrics.SetLevelState(this);

        this.NextLevel = false;
        this.agent = new PlayerAgent();
    }

    GetLevel() {
        //const lvl = new LevelGenerator(320, 15).CreateLevel(0, 1);
        const lvl = new PredefinedLevelGenerator(levels[levelsOrder[currentLevel]]).CreateLevel();
        return lvl;
    }

    Enter() {
        super.Enter();
        this.NextLevel = false;
    }

    CheckForChange(context) {
        if (this.GotoLoseState || this.NextLevel) {
            Mario.MarioCharacter.gameplayMetrics.SetActions(this.agent.GetActions());
            levelData = Mario.MarioCharacter.gameplayMetrics.PrintMetrics(); // Store Metrics

            survey.nextPage();
            survey.showNavigationButtons = true;
            context.ChangeState(new LoadingState());
        }
    }

    LevelWon() {
        Mario.GlobalMapState.LevelWon();
        this.NextLevel = true;
    }

    DrawUI(context) {
        this.DrawStringShadow(context, "MARIO " + Mario.MarioCharacter.Lives, 0, 0);
        this.DrawStringShadow(context, "COIN", 14, 0);
        this.DrawStringShadow(context, " " + Mario.MarioCharacter.Coins, 14, 1);
        this.DrawStringShadow(context, "TIME", 34, 0);

        let time = this.TimeLeft | 0;
        if (time < 0) time = 0;

        this.DrawStringShadow(context, " " + time, 34, 1);
    }

    Update(delta) {
        this.agent.Update(delta);
        super.Update(delta);
    }
};