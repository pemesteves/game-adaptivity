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
        // AIAgent([{"t":12,"k":39,"e":"keydown"},{"t":28,"k":39,"e":"keydown"},{"t":29,"k":39,"e":"keydown"},{"t":30,"k":39,"e":"keydown"},{"t":30,"k":39,"e":"keydown"},{"t":31,"k":39,"e":"keydown"},{"t":32,"k":39,"e":"keydown"},{"t":33,"k":39,"e":"keydown"},{"t":34,"k":39,"e":"keydown"},{"t":35,"k":39,"e":"keydown"},{"t":36,"k":39,"e":"keydown"},{"t":37,"k":39,"e":"keydown"},{"t":38,"k":39,"e":"keydown"},{"t":38,"k":39,"e":"keydown"},{"t":40,"k":39,"e":"keydown"},{"t":40,"k":39,"e":"keydown"},{"t":41,"k":39,"e":"keydown"},{"t":42,"k":39,"e":"keydown"},{"t":43,"k":39,"e":"keydown"},{"t":44,"k":39,"e":"keydown"},{"t":45,"k":39,"e":"keydown"},{"t":46,"k":39,"e":"keydown"},{"t":46,"k":39,"e":"keydown"},{"t":48,"k":39,"e":"keydown"},{"t":49,"k":39,"e":"keydown"},{"t":50,"k":39,"e":"keydown"},{"t":51,"k":39,"e":"keydown"},{"t":51,"k":39,"e":"keydown"},{"t":52,"k":39,"e":"keydown"},{"t":53,"k":39,"e":"keydown"},{"t":54,"k":39,"e":"keydown"},{"t":55,"k":39,"e":"keydown"},{"t":56,"k":39,"e":"keydown"},{"t":57,"k":39,"e":"keydown"},{"t":58,"k":39,"e":"keydown"},{"t":59,"k":39,"e":"keydown"},{"t":60,"k":39,"e":"keydown"},{"t":61,"k":39,"e":"keydown"},{"t":62,"k":39,"e":"keydown"},{"t":62,"k":39,"e":"keydown"},{"t":63,"k":83,"e":"keydown"},{"t":66,"k":83,"e":"keyup"},{"t":143,"k":83,"e":"keydown"},{"t":146,"k":83,"e":"keyup"},{"t":163,"k":83,"e":"keydown"},{"t":166,"k":83,"e":"keyup"},{"t":196,"k":83,"e":"keydown"},{"t":198,"k":83,"e":"keyup"},{"t":209,"k":83,"e":"keydown"},{"t":212,"k":83,"e":"keyup"},{"t":226,"k":83,"e":"keydown"},{"t":230,"k":83,"e":"keyup"},{"t":256,"k":83,"e":"keydown"},{"t":262,"k":83,"e":"keyup"},{"t":284,"k":83,"e":"keydown"},{"t":289,"k":83,"e":"keyup"},{"t":300,"k":39,"e":"keyup"},{"t":312,"k":83,"e":"keydown"},{"t":313,"k":39,"e":"keydown"},{"t":318,"k":83,"e":"keyup"},{"t":324,"k":39,"e":"keyup"},{"t":398,"k":39,"e":"keydown"},{"t":412,"k":39,"e":"keyup"},{"t":441,"k":37,"e":"keydown"},{"t":446,"k":37,"e":"keyup"}]);
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
            //context.ChangeState(new PredefinedLevelState(1, 0)); // TODO Count Number os Losses
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