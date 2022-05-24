class GameplayMetrics {
    static MinRegisterDistance = 10;

    constructor() {
        this.causeOfDeath = -1;

        this.timeLeft = -1;

        this.levelState = null;

        this.actions = [];
    }

    SetLevelState(levelState) {
        if (levelState.GetName === undefined || levelState.GetName() !== "LevelState") {
            console.error("SetLevelState should receive an instance of LevelState");
            return;
        }

        this.levelState = levelState;
    }

    RegisterCauseOfDeath(c) {
        this.causeOfDeath = c;
    }

    RegisterJump() { }

    RegisterWallJump() { }

    RegisterLanding() { }

    RegisterNoCoins(no) { }

    RegisterNoPowerups(no) { }

    RegisterNoEnemies(no) { }
    
    KilledEnemy(template) { }

    CollectedCoin(x, y) { }

    CollectedPowerup(x, y) { }

    RegisterEndingTime() {
        if (this.levelState == null) return;

        const t = this.levelState.GetTimeLeft();
        this.timeLeft = t < 0 ? 0 : t;
    }

    PrintMetrics() {
        return {
            "causeOfDeath": this.causeOfDeath,
            "timeLeft": this.timeLeft,
            "actions": this.actions,
        };
    }

    SetActions(a) {
        this.actions = Object.assign([], a);
    }
};