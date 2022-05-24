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

        let _level = levels[levelsOrder[currentLevel]];
 /*       const l = _level.EnemySpriteTemplates.length;
        while(_level.EnemySpriteTemplates.length > l / 3){
            const random = Math.floor(Math.random() * _level.EnemySpriteTemplates.length);
            _level.EnemySpriteTemplates.splice(random, 1)[0];
        }
        */
        const lvl = new PredefinedLevelGenerator(_level).CreateLevel();
/*
        for (let i = 0; i < lvl.Map.length; i++) {
            for (let j = 0; j < lvl.Map[i].length; j++) {
                if (lvl.Map[i][j] === 16) {
                    lvl.Map[i][j] = Math.random() % 2 === 0 ? 17 : Math.random() % 2 === 0 ? 18 : Math.random() % 2 === 0 ? 21 : 22; 
                }
            }
        }
*/
        
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