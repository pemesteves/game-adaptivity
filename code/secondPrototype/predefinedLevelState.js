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

    CountCollectables(lvl) {
        let noCoins = 0, noPowerups = 0;
        for (let i = 0; i < lvl.Map.length; i++) {
            for (let j = 0; j < lvl.Map[i].length; j++) {
                if (lvl.Map[i][j] === 17 || lvl.Map[i][j] === 21) noCoins++;
                else if (lvl.Map[i][j] === 18 || lvl.Map[i][j] === 22) noPowerups++;
            }
        }
        Mario.MarioCharacter.gameplayMetrics.RegisterNoCoins(noCoins);
        Mario.MarioCharacter.gameplayMetrics.RegisterNoPowerups(noPowerups);
    }

    CountEnemies(lvl) {
        Mario.MarioCharacter.gameplayMetrics.RegisterNoEnemies(lvl.EnemySpriteTemplates.length);
    }

    GetLevel() {
        let level = localStorage.getItem('level');
        if (level === null) {
            level = new LevelGenerator(320, 15).CreateLevel(0, 1).PrintLevel();
            localStorage.setItem('level', JSON.stringify(level));
        } else {
            level = JSON.parse(level);
        }

        const ID = localStorage.getItem('id');

        // Only odd IDs change the level (A/B testing, changing the order between subjects)
        if (ID % 2 === currentLevel) {
            Mario.MarioCharacter.gameplayMetrics.SetLevel(level);
            const lvl = new PredefinedLevelGenerator(level).CreateLevel();
            this.CountEnemies(lvl);
            this.CountCollectables(lvl);
            return lvl;
        }

        // Delete 1/3 of the enemies
        const l = level.EnemySpriteTemplates.length;
        while (level.EnemySpriteTemplates.length > l / 3) {
            const random = Math.floor(Math.random() * level.EnemySpriteTemplates.length);
            level.EnemySpriteTemplates.splice(random, 1)[0];
        }

        Mario.MarioCharacter.gameplayMetrics.SetEnemies(level.EnemySpriteTemplates);
        const lvl = new PredefinedLevelGenerator(level).CreateLevel();

        // Increase the number of coins
        let collectables = [];
        for (let i = 0; i < lvl.Map.length; i++) {
            for (let j = 0; j < lvl.Map[i].length; j++) {
                if (lvl.Map[i][j] !== 16) continue;

                if (Math.random() * 3 < 1) {
                    collectables.push(16);
                    continue;
                }

                lvl.Map[i][j] = Math.random() * 2 < 1 ? 17 : Math.random() * 2 < 1 ? 18 : Math.random() * 2 < 1 ? 21 : 22;
                collectables.push(lvl.Map[i][j]);
            }
        }

        Mario.MarioCharacter.gameplayMetrics.SetCollectables(collectables);

        this.CountEnemies(lvl);
        this.CountCollectables(lvl);
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

            survey.completeLastPage();
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