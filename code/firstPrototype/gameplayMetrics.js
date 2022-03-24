class GameplayMetrics {
    constructor() {
        this.noJumps = 0;

        this.levelState = null;
    }

    setLevelState(levelState) {
        if (typeof levelState !== LevelState) {
            console.error("setLevelState should receive a variable of type LevelState");
            return;
        }

        this.levelState = levelState;
    }

    registerJump() {
        this.noJumps++;
    }

    registerDeathTime() {
        if (this.levelState == null) return;

        const t = this.levelState.GetTimeLeft();
        this.timeLeft = t < 0 ? 0 : t;
    }

    printMetrics() {
        return {
            "noJumps": this.noJumps,
            "timeLeft": this.timeLeft,
        };
    }
};