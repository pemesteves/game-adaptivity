class GameplayMetrics {
    static MinRegisterDistance = 10;

    constructor() {
        this.jumps = [];
        this.wallJumps = [];
        this.landings = [];

        this.coins = [];
        this.noCoins = -1;

        this.powerups = [];
        this.noPowerups = -1;

        this.causeOfDeath = -1;

        // TODO Implement enemy death detection
        this.enemies = [];
        this.noEnemies = -1;

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

    RegisterJump() {
        const gap = this.GetNearestGap();
        if (gap === null || gap > GameplayMetrics.MinRegisterDistance) return;

        this.jumps.push(this.GetNextGap());
    }

    RegisterWallJump() {
        this.wallJumps.push({ "X": (Mario.MarioCharacter.X - 8) / 16, "Y": (Mario.MarioCharacter.Y - 8) / 16 });
        this.RegisterJump();
    }

    RegisterLanding() {
        const gap = this.GetNearestGap();
        if (gap === null) return;

        if (this.landings.length === this.jumps.length) return;

        this.landings.push(this.GetPreviousGap());
    }

    RegisterNoCoins(no) {
        this.noCoins = no;
    }

    RegisterNoPowerups(no) {
        this.noPowerups = no;
    }

    RegisterNoEnemies(no) {
        this.noEnemies = no;
    }
    
    KilledEnemy(template) {
        const lvl = this.levelState.Level;
        if (!(lvl instanceof PredefinedLevel)) return;

        const ID = lvl.GetEnemyID(template);
        if (ID === null) {
            console.error("ERROR: Enemy doesn't exist!");
            return;
        }

        this.enemies.push(ID);
    }

    CollectedCoin(x, y) {
        const lvl = this.levelState.Level;
        if (!(lvl instanceof PredefinedLevel)) return;

        const ID = lvl.GetCoinID(x, y);
        if (ID === null) {
            console.error("ERROR: Coin doesn't exist!");
            return;
        }

        this.coins.push(ID);
    }

    CollectedPowerup(x, y) {
        const lvl = this.levelState.Level;
        if (!(lvl instanceof PredefinedLevel)) return;

        const ID = lvl.GetPowerupID(x, y);
        if (ID === null) {
            console.error("ERROR: Powerup doesn't exist!");
            return;
        }

        this.powerups.push(ID);
    }

    GetNearestGap() {
        const jumps = this.levelState.Level.JumpSections;

        if (jumps.length === 0) return null;

        const xPos = (Mario.MarioCharacter.X - 8) / 16;

        let minDist = Infinity;
        for (let i = 0; i < jumps.length; i++) {
            if (xPos < jumps[i].GetHoleStartX()) {
                const dist = jumps[i].GetHoleStartX() - xPos;
                if (dist > minDist) break;

                minDist = dist;
            } else if (xPos > jumps[i].GetHoleEndX()) {
                const dist = xPos - jumps[i].GetHoleEndX();
                if (dist > minDist) break;

                minDist = dist;
            } else {
                console.log("Inside gap: Jumping on walls");
            }
        }

        return minDist;
    }

    GetPreviousGap() {
        const jumps = this.levelState.Level.JumpSections;

        if (jumps.length === 0) return null;

        const xPos = (Mario.MarioCharacter.X - 8) / 16;

        let minDist = Infinity;
        for (let i = 0; i < jumps.length; i++) {
            if (xPos <= jumps[i].GetHoleEndX()) continue;

            const dist = xPos - jumps[i].GetHoleEndX();
            if (dist > minDist) break;

            minDist = dist;
        }

        return minDist;
    }

    GetNextGap() {
        const jumps = this.levelState.Level.JumpSections;

        if (jumps.length === 0) return null;

        const xPos = (Mario.MarioCharacter.X - 8) / 16;

        let minDist = Infinity;
        for (let i = 0; i < jumps.length; i++) {
            if (xPos >= jumps[i].GetHoleStartX()) continue;

            const dist = jumps[i].GetHoleStartX() - xPos;
            if (dist > minDist) break;

            minDist = dist;
        }

        return minDist;
    }

    RegisterEndingTime() {
        if (this.levelState == null) return;

        const t = this.levelState.GetTimeLeft();
        this.timeLeft = t < 0 ? 0 : t;
    }

    PrintMetrics() {
        return {
            "causeOfDeath": this.causeOfDeath,
            "jumps": this.jumps,
            "wallJumps": this.wallJumps,
            "landings": this.landings,
            "timeLeft": this.timeLeft,
            "noCoins": this.noCoins,
            "collectedCoins": this.coins,
            "noPowerups": this.noPowerups,
            "collectedPowerups": this.powerups,
            "noEnemies": this.noEnemies,
            "killedEnemies": this.enemies,
            "actions": this.actions,
        };
    }

    SetActions(a) {
        this.actions = Object.assign([], a);
    }
};